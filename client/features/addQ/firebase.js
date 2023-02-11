// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// require proces
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7N-A9S6LI4jZE9DIqHemMF11ISeY_dgQ",
  authDomain: "medexpertsio-a0906.firebaseapp.com",
  projectId: "medexpertsio-a0906",
  storageBucket: "medexpertsio-a0906.appspot.com",
  messagingSenderId: "970371423179",
  appId: "1:970371423179:web:e5321a068eb1ec5fdbf44e",
  measurementId: "G-EMH2T6VRSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
