import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence (optional)
enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Firebase persistence error:', err);
});

export { db };

// Add these Firestore rules in your Firebase Console:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /job_applications/{document=**} {
      allow read: if request.auth != null;
      allow write: if true; // Allow public write for job applications
    }
  }
}
*/
