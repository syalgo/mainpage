import { NextRequest, NextResponse } from "next/server";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getStrictSessionUser } from "@/lib/auth-server";
import { getFirebaseAdminApp } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

type InterviewProgress = {
  notes: Record<string, string>;
  completed: number[];
  checklist: number[];
};
type Changes = {
  notes?: Record<string, string>;
  completed?: Record<string, boolean>;
  checklist?: Record<string, boolean>;
};

const emptyProgress: InterviewProgress = { notes: {}, completed: [], checklist: [] };
const noStore = { "Cache-Control": "private, no-store" };
const validQuestionId = (id: string) => /^(?:[1-9]|[1-5][0-9]|60)$/.test(id);
const validChecklistId = (id: string) => /^(?:[0-9]|1[01])$/.test(id);

function normalizeProgress(value: Record<string, unknown> | undefined): InterviewProgress {
  if (!value) return { ...emptyProgress };
  const notes: Record<string, string> = {};
  if (value.notes && typeof value.notes === "object" && !Array.isArray(value.notes)) {
    for (const [id, note] of Object.entries(value.notes)) {
      if (validQuestionId(id) && typeof note === "string") notes[id] = note;
    }
  }
  const completed = Array.isArray(value.completed)
    ? value.completed.filter((id): id is number => Number.isInteger(id) && id >= 1 && id <= 60)
    : [];
  const checklist = Array.isArray(value.checklist)
    ? value.checklist.filter((id): id is number => Number.isInteger(id) && id >= 0 && id < 12)
    : [];
  return { notes, completed: [...new Set(completed)], checklist: [...new Set(checklist)] };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function parseChanges(value: unknown): Changes | null {
  if (!isRecord(value)) return null;
  if (Object.keys(value).some((key) => !["notes", "completed", "checklist"].includes(key))) return null;

  const changes: Changes = {};
  if ("notes" in value) {
    if (!isRecord(value.notes)) return null;
    const entries = Object.entries(value.notes);
    if (entries.length > 60 || entries.some(([id, note]) =>
      !validQuestionId(id) || typeof note !== "string" || note.length > 3000
    )) return null;
    changes.notes = Object.fromEntries(entries) as Record<string, string>;
  }
  if ("completed" in value) {
    if (!isRecord(value.completed)) return null;
    const entries = Object.entries(value.completed);
    if (entries.length > 60 || entries.some(([id, checked]) =>
      !validQuestionId(id) || typeof checked !== "boolean"
    )) return null;
    changes.completed = Object.fromEntries(entries) as Record<string, boolean>;
  }
  if ("checklist" in value) {
    if (!isRecord(value.checklist)) return null;
    const entries = Object.entries(value.checklist);
    if (entries.length > 12 || entries.some(([id, checked]) =>
      !validChecklistId(id) || typeof checked !== "boolean"
    )) return null;
    changes.checklist = Object.fromEntries(entries) as Record<string, boolean>;
  }
  if (!("notes" in changes || "completed" in changes || "checklist" in changes)) return null;
  return changes;
}

async function getAuthorizedAccount() {
  const user = await getStrictSessionUser();
  if (!user) return { error: NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401, headers: noStore }) };
  if (!user.approved || (!user.admin && !user.permissions.daedeok)) {
    return { error: NextResponse.json({ error: "대덕소마고 과정 이용 권한이 없습니다." }, { status: 403, headers: noStore }) };
  }
  const app = getFirebaseAdminApp();
  if (!app) return { error: NextResponse.json({ error: "Firebase 서버 연결이 필요합니다." }, { status: 503, headers: noStore }) };
  return {
    ref: getFirestore(app).collection("users").doc(user.uid).collection("studyProgress").doc("daedeokInterview"),
    db: getFirestore(app),
  };
}

export async function GET() {
  const auth = await getAuthorizedAccount();
  if (auth.error) return auth.error;
  if (!auth.ref) return NextResponse.json({ error: "접근할 수 없습니다." }, { status: 500, headers: noStore });

  try {
    const snapshot = await auth.ref.get();
    return NextResponse.json(
      { progress: normalizeProgress(snapshot.exists ? snapshot.data() : undefined) },
      { headers: noStore },
    );
  } catch {
    return NextResponse.json({ error: "저장된 답변을 불러올 수 없습니다." }, { status: 500, headers: noStore });
  }
}

export async function PATCH(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "허용되지 않은 요청입니다." }, { status: 403, headers: noStore });
  }

  const auth = await getAuthorizedAccount();
  if (auth.error) return auth.error;
  if (!auth.ref || !auth.db) return NextResponse.json({ error: "접근할 수 없습니다." }, { status: 500, headers: noStore });

  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > 750_000) {
      return NextResponse.json({ error: "저장할 내용이 너무 깁니다." }, { status: 413, headers: noStore });
    }

    const changes = parseChanges(JSON.parse(raw) as unknown);
    if (!changes) {
      return NextResponse.json({ error: "올바른 답변 데이터가 아닙니다." }, { status: 400, headers: noStore });
    }

    await auth.db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(auth.ref!);
      const current = normalizeProgress(snapshot.exists ? snapshot.data() : undefined);
      const notes = { ...current.notes, ...changes.notes };
      const completed = new Set(current.completed);
      const checklist = new Set(current.checklist);

      for (const [id, value] of Object.entries(changes.completed ?? {})) {
        if (value) completed.add(Number(id));
        else completed.delete(Number(id));
      }
      for (const [id, value] of Object.entries(changes.checklist ?? {})) {
        if (value) checklist.add(Number(id));
        else checklist.delete(Number(id));
      }

      transaction.set(auth.ref!, {
        notes,
        completed: [...completed].sort((a, b) => a - b),
        checklist: [...checklist].sort((a, b) => a - b),
        updatedAt: FieldValue.serverTimestamp(),
      });
    });
    return NextResponse.json({ ok: true }, { headers: noStore });
  } catch {
    return NextResponse.json({ error: "답변을 저장하지 못했습니다. 다시 시도해 주세요." }, { status: 500, headers: noStore });
  }
}
