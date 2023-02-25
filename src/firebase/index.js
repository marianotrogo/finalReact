// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6idFW7fIHg2BLGJpuCX_BFJT20XnaqQ",
  authDomain: "tiendagame-5219a.firebaseapp.com",
  projectId: "tiendagame-5219a",
  storageBucket: "tiendagame-5219a.appspot.com",
  messagingSenderId: "1016482876811",
  appId: "1:1016482876811:web:015ff976f916930665b38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)