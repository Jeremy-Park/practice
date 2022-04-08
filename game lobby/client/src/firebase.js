// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfj1w69gibMAjRYvPJoVeVflAwKc7hjKk",
  authDomain: "fir-project-81e68.firebaseapp.com",
  projectId: "fir-project-81e68",
  storageBucket: "fir-project-81e68.appspot.com",
  messagingSenderId: "573665940879",
  appId: "1:573665940879:web:3a152d7fd46c6ea3c467fa",
  measurementId: "G-PDPEYF27P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const functions = getFunctions(app);
export const auth = getAuth(app);