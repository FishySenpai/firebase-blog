// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_waP36y5ppMLAWx3lA0whsDpZPQhtsFE",
  authDomain: "fir-blog-20192.firebaseapp.com",
  projectId: "fir-blog-20192",
  storageBucket: "fir-blog-20192.appspot.com",
  messagingSenderId: "43924930444",
  appId: "1:43924930444:web:321ee7d7d0f60985e960a9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


