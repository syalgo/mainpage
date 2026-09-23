import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getFirebaseAdminApp } from "@/lib/firebase-admin";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 5;

function hasValidOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return origin === new URL(request.url).origin;
}

export async function GET() {
  const app = getFirebaseAdminApp();
  if (!app) {
    return NextResponse.json({ authenticated: false }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) {
    return NextResponse.json({ authenticated: false }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  try {
    // 헤더 표시 여부만 확인하므로 Firestore 조회와 revocation 원격 확인은 하지 않습니다.
    await getAuth(app).verifySessionCookie(sessionCookie, false);
    return NextResponse.json({ authenticated: true }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch {
    return NextResponse.json({ authenticated: false }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  }
}

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "허용되지 않은 요청입니다." }, { status: 403 });
  }

  const app = getFirebaseAdminApp();
  if (!app) {
    return NextResponse.json({ error: "Firebase 서버 설정이 아직 연결되지 않았습니다." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { idToken?: string; name?: string };
    if (!body.idToken) {
      return NextResponse.json({ error: "인증 토큰이 없습니다." }, { status: 400 });
    }

    const auth = getAuth(app);
    const decoded = await auth.verifyIdToken(body.idToken);
    const now = Math.floor(Date.now() / 1000);
    if (!decoded.auth_time || now - decoded.auth_time > 5 * 60) {
      return NextResponse.json({ error: "다시 로그인해 주세요." }, { status: 401 });
    }

    const email = (decoded.email ?? "").toLowerCase();
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const bootstrapAdmin = Boolean(adminEmail && email === adminEmail);
    const db = getFirestore(app);
    const ref = db.collection("users").doc(decoded.uid);
    const existing = await ref.get();

    if (!existing.exists) {
      await ref.set({
        email,
        name: body.name?.trim() || decoded.name || email.split("@")[0],
        approved: bootstrapAdmin,
        admin: bootstrapAdmin,
        permissions: {
          basic: bootstrapAdmin,
          specialized: bootstrapAdmin,
          koi: bootstrapAdmin,
        },
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      const update: Record<string, unknown> = {
        email,
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (body.name?.trim()) update.name = body.name.trim();
      if (bootstrapAdmin) {
        update.admin = true;
        update.approved = true;
        update.permissions = { basic: true, specialized: true, koi: true };
      }
      await ref.set(update, { merge: true });
    }

    const sessionCookie = await auth.createSessionCookie(body.idToken, {
      expiresIn: SESSION_MAX_AGE_SECONDS * 1000,
    });

    const cookieStore = await cookies();
    cookieStore.set("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });

    return NextResponse.json({ ok: true, admin: bootstrapAdmin });
  } catch {
    return NextResponse.json({ error: "로그인 세션을 만들 수 없습니다." }, { status: 401 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "허용되지 않은 요청입니다." }, { status: 403 });
  }

  const cookieStore = await cookies();
  cookieStore.set("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ ok: true });
}
