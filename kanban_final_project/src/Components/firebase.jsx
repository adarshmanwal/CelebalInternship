// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwJhxGZdZVykz8WWfDm90CEYw0RoXXRYI",
  authDomain: "celebal-kanban.firebaseapp.com",
  projectId: "celebal-kanban",
  storageBucket: "celebal-kanban.firebasestorage.app",
  messagingSenderId: "286082890106",
  appId: "1:286082890106:web:bafdb669a33f4707b0bec3",
  measurementId: "G-HRLCMQGLJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);