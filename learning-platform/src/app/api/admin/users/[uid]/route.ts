import { NextRequest, NextResponse } from "next/server";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getFirebaseAdminApp } from "@/lib/firebase-admin";
import { getStrictSessionUser } from "@/lib/auth-server";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ uid: string }> },
) {
  const admin = await getStrictSessionUser();
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
    dimigo?: boolean;
    daedeok?: boolean;
    hwaseong?: boolean;
    koi?: boolean;
  };

  const update: Record<string, unknown> = { updatedAt: FieldValue.serverTimestamp() };
  if (typeof body.approved === "boolean") update.approved = body.approved;
  if (typeof body.basic === "boolean") update["permissions.basic"] = body.basic;
  if (typeof body.dimigo === "boolean") update["permissions.dimigo"] = body.dimigo;
  if (typeof body.daedeok === "boolean") update["permissions.daedeok"] = body.daedeok;
  if (typeof body.hwaseong === "boolean") update["permissions.hwaseong"] = body.hwaseong;
  if (typeof body.koi === "boolean") update["permissions.koi"] = body.koi;

  await getFirestore(app).collection("users").doc(uid).update(update);
  return NextResponse.json({ ok: true });
}
