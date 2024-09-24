// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVzzrWOk4YUFrY_VxLQhvAgDeRL9VhCg",
  authDomain: "hackathon-a999f.firebaseapp.com",
  projectId: "hackathon-a999f",
  storageBucket: "hackathon-a999f.appspot.com",
  messagingSenderId: "352235474695",
  appId: "1:352235474695:web:df2873d87e79717a34bfa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getFirestore(app);

export { auth, database };