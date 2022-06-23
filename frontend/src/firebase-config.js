import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const {
  REACT_APP_FIREBASE_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   REACT_APP_FIREBASE_PROJECT_ID,
  //   REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   REACT_APP_FIREBASE_APP_ID,
  //   REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "mhs-library-5a9e5",
  storageBucket: "mhs-library-5a9e5.appspot.com",
  messagingSenderId: "448861726979",
  appId: "1:448861726979:web:a0ec65967da1a144cd6136",
  measurementId: "G-R6DNECQ32R",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
