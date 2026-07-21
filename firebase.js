// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0V8VbtBSoBu2Ya2ypQiGNtk1cDpzp70U",
  authDomain: "polytechnic-hub-82685.firebaseapp.com",
  projectId: "polytechnic-hub-82685",
  storageBucket: "polytechnic-hub-82685.firebasestorage.app",
  messagingSenderId: "609741840575",
  appId: "1:609741840575:web:a93e4806e9c621fdad660a",
  measurementId: "G-59CF45K0H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Services
export { app, analytics, auth, db, storage };
