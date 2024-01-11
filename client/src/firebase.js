// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1ace9.firebaseapp.com",
  projectId: "mern-estate-1ace9",
  storageBucket: "mern-estate-1ace9.appspot.com",
  messagingSenderId: "928775382980",
  appId: "1:928775382980:web:2af8a6d8ee2f8a9f56e691"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);