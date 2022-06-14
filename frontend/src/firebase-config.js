import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTSXe7aEM_UvDG2bsXgaVPNkUKZQV8BVM",
  authDomain: "mhs-library-5a9e5.firebaseapp.com",
  projectId: "mhs-library-5a9e5",
  storageBucket: "mhs-library-5a9e5.appspot.com",
  messagingSenderId: "448861726979",
  appId: "1:448861726979:web:a0ec65967da1a144cd6136",
  measurementId: "G-R6DNECQ32R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
