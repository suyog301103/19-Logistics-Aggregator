// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrAf4jtuX7_DuvsSjkRi-DJqrKqMKsSnk",
  authDomain: "auth-36f6f.firebaseapp.com",
  projectId: "auth-36f6f",
  storageBucket: "auth-36f6f.appspot.com",
  messagingSenderId: "181633477919",
  appId: "1:181633477919:web:1a34d7013f974d00d5942a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
