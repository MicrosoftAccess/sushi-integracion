// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqHdZGApf0VYvPLBfyzeGGfeyB629J7wY",
  authDomain: "fukusuke-50f45.firebaseapp.com",
  projectId: "fukusuke-50f45",
  storageBucket: "fukusuke-50f45.appspot.com",
  messagingSenderId: "237684403859",
  appId: "1:237684403859:web:a1a27f80499293de662766",
  measurementId: "G-RKYC29XQM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;