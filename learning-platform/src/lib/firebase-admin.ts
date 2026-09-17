import "server-only";

import { cert, getApp, getApps, initializeApp, type App } from "firebase-admin/app";

export function isFirebaseAdminConfigured() {
  return Boolean(
    process.env.FIREBASE_ADMIN_PROJECT_ID &&
      process.env.FIREBASE_ADMIN_CLIENT_EMAIL &&
      process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  );
}

export function getFirebaseAdminApp(): App | null {
  if (!isFirebaseAdminConfigured()) return null;
  if (getApps().length) return getApp();

  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}
