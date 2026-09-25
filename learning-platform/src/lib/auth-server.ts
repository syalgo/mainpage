import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getFirebaseAdminApp } from "@/lib/firebase-admin";

export type CoursePermission = "basic" | "specialized" | "koi";

export type PlatformUser = {
  uid: string;
  email: string;
  name: string;
  approved: boolean;
  admin: boolean;
  permissions: Record<CoursePermission, boolean>;
};

function normalizeUser(uid: string, email: string, data: Record<string, unknown> = {}): PlatformUser {
  const permissions = (data.permissions ?? {}) as Record<string, unknown>;
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const isBootstrapAdmin = Boolean(adminEmail && email.toLowerCase() === adminEmail);

  return {
    uid,
    email,
    name: typeof data.name === "string" && data.name ? data.name : email.split("@")[0],
    approved: Boolean(data.approved) || isBootstrapAdmin,
    admin: Boolean(data.admin) || isBootstrapAdmin,
    permissions: {
      basic: Boolean(permissions.basic) || isBootstrapAdmin,
      specialized: Boolean(permissions.specialized) || isBootstrapAdmin,
      koi: Boolean(permissions.koi) || isBootstrapAdmin,
    },
  };
}

const getSessionUserCached = cache(async (checkRevoked: boolean): Promise<PlatformUser | null> => {
  const app = getFirebaseAdminApp();
  if (!app) return null;

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decoded = await getAuth(app).verifySessionCookie(sessionCookie, checkRevoked);
    const email = decoded.email ?? "";
    const snapshot = await getFirestore(app).collection("users").doc(decoded.uid).get();
    return normalizeUser(decoded.uid, email, snapshot.exists ? snapshot.data() : {});
  } catch {
    return null;
  }
});

export async function getSessionUser(): Promise<PlatformUser | null> {
  return getSessionUserCached(false);
}

export async function getStrictSessionUser(): Promise<PlatformUser | null> {
  return getSessionUserCached(true);
}

export async function listPlatformUsers(): Promise<PlatformUser[]> {
  const app = getFirebaseAdminApp();
  if (!app) return [];

  const snapshot = await getFirestore(app).collection("users").get();
  return snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return normalizeUser(doc.id, typeof data.email === "string" ? data.email : "", data);
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));
}
