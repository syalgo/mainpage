import { NextRequest, NextResponse } from "next/server";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getFirebaseAdminApp } from "@/lib/firebase-admin";
import { getSessionUser } from "@/lib/auth-server";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ uid: string }> },
) {
  const admin = await getSessionUser();
  if (!admin?.admin) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }

  const app = getFirebaseAdminApp();
  if (!app) {
    return NextResponse.json({ error: "Firebase가 연결되지 않았습니다." }, { status: 503 });
  }

  const { uid } = await context.params;
  const body = (await request.json()) as {
    approved?: boolean;
    basic?: boolean;
    specialized?: boolean;
    koi?: boolean;
  };

  const update: Record<string, unknown> = { updatedAt: FieldValue.serverTimestamp() };
  if (typeof body.approved === "boolean") update.approved = body.approved;
  if (typeof body.basic === "boolean") update["permissions.basic"] = body.basic;
  if (typeof body.specialized === "boolean") update["permissions.specialized"] = body.specialized;
  if (typeof body.koi === "boolean") update["permissions.koi"] = body.koi;

  await getFirestore(app).collection("users").doc(uid).update(update);
  return NextResponse.json({ ok: true });
}
