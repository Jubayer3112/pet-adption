// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIbWnXkIAuArPuWOqiVGGGT1swAK87UM",
  authDomain: "cat-adoption-aaaad.firebaseapp.com",
  projectId: "cat-adoption-aaaad",
  storageBucket: "cat-adoption-aaaad.appspot.com",
  messagingSenderId: "366497304563",
  appId: "1:366497304563:web:832ec6a2d3136b8a4b8c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);