// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfN9MU2IPszmTdJayfNvqxa1nL-mfUCns",
    authDomain: "feedback-app-bdbd7.firebaseapp.com",
    projectId: "feedback-app-bdbd7",
    storageBucket: "feedback-app-bdbd7.firebasestorage.app",
    messagingSenderId: "513325517732",
    appId: "1:513325517732:web:bbd3ec180e0c8a9eb7cf31"
  };
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
