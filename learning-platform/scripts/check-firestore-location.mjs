import { cert, initializeApp } from "firebase-admin/app";

const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!projectId || !clientEmail || !privateKey) {
  console.log("FIRESTORE_LOCATION_CHECK=SKIPPED_MISSING_ENV");
  process.exit(0);
}

try {
  const app = initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });

  const token = await app.options.credential.getAccessToken();
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)`,
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    },
  );

  if (!response.ok) {
    console.log(`FIRESTORE_LOCATION_CHECK=HTTP_${response.status}`);
    process.exit(0);
  }

  const data = await response.json();
  console.log(`FIRESTORE_LOCATION=${data.locationId ?? "UNKNOWN"}`);
} catch (error) {
  console.log(
    `FIRESTORE_LOCATION_CHECK=ERROR_${error instanceof Error ? error.name : "UNKNOWN"}`,
  );
}
