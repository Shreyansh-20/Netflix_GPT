// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9B7hAegXCbgoRVWQ8zRv4kKMtHN93wNo",
  authDomain: "netflix-gpt-4b628.firebaseapp.com",
  projectId: "netflix-gpt-4b628",
  storageBucket: "netflix-gpt-4b628.firebasestorage.app",
  messagingSenderId: "338998556729",
  appId: "1:338998556729:web:e0c8c5c7730122320a35e8",
  measurementId: "G-19DSFEE6KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();