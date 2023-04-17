// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEAyqCeN85wuSreyz7zFANUEdm-lsAQg",
  authDomain: "richi-coder.firebaseapp.com",
  projectId: "richi-coder",
  storageBucket: "richi-coder.appspot.com",
  messagingSenderId: "499101163141",
  appId: "1:499101163141:web:9ca61c8735be7e59c713ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const jobContact = async(data) => {
  const result = await addDoc(collection(db, "pageLoads"), data);
  window.localStorage.setItem('uSaLsFiAf', result.id)
}


