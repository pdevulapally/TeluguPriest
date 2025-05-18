
// Om Ganesha Namah 🕉️
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYyQCC5azFue8QtmSopalcIsuyy_IGIVA",
  authDomain: "telugupandit-e6e0d.firebaseapp.com",
  projectId: "telugupandit-e6e0d",
  storageBucket: "telugupandit-e6e0d.firebasestorage.app",
  messagingSenderId: "744213705847",
  appId: "1:744213705847:web:ca91216cb52d065a67c272",
  measurementId: "G-VX3PL3WPWY"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
