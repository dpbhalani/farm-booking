// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi83mB0m1MKU1Vz3QRgUG_8Vyw4cH1mas",
  authDomain: "farm-book-d8c7d.firebaseapp.com",
  projectId: "farm-book-d8c7d",
  storageBucket: "farm-book-d8c7d.appspot.com",
  messagingSenderId: "957330016310",
  appId: "1:957330016310:web:4ad857c9672acdc32bb097",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
