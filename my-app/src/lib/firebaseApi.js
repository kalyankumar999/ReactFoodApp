// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtqg7efPAnlsTN99hMcxmbVcq0xCsfuv0",
  authDomain: "food-ordering-app-25df0.firebaseapp.com",
  projectId: "food-ordering-app-25df0",
  storageBucket: "food-ordering-app-25df0.appspot.com",
  messagingSenderId: "768102642835",
  appId: "1:768102642835:web:ae1f7684af3715f9dcc966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)