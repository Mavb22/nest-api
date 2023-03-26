import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();
admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      project_id: process.env.FIREBASE_PROJECT_ID,
    } as Partial<admin.ServiceAccount>),
    storageBucket: process.env.FIREBASE_DATABASE_URL,
});
export const storage = admin.storage();

