import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQjsGgxqpC2Z_OxN__LtWQrDkjS0VhEVs",
  authDomain: "house-marketplace-app-1b911.firebaseapp.com",
  projectId: "house-marketplace-app-1b911",
  storageBucket: "house-marketplace-app-1b911.appspot.com",
  messagingSenderId: "186703712085",
  appId: "1:186703712085:web:81cd3750cac82c39b6e9dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
