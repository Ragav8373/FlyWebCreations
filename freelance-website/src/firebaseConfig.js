// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyDeUJG6DTKOz0oK9TmXg8kjnGTTBZbiefE",
  authDomain: "rkfreelance-78db1.firebaseapp.com",
  projectId: "rkfreelance-78db1",
  storageBucket: "rkfreelance-78db1.appspot.com",
  messagingSenderId: "692272996428",
  appId: "1:692272996428:web:a80ed777c40b50a08ad4e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Named export for auth
export const auth = getAuth(app);
