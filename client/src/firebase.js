// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "where-next-4e148.firebaseapp.com",
    projectId: "where-next-4e148",
    storageBucket: "where-next-4e148.appspot.com",
    messagingSenderId: "956444814656",
    appId: "1:956444814656:web:67376f5033b3fb7a195ea5"
};

export const app = initializeApp(firebaseConfig);