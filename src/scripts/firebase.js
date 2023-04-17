// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
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

export const pageLoad = async(data) => {
  const pageLoadResult = await addDoc(collection(db, "pageLoads"), data);
  window.localStorage.setItem('uSaLsFiAf', JSON.stringify(pageLoadResult.id))
  const updatePageLoadInfo = await updateDoc(doc(db, "pageLoads", pageLoadResult.id), {
    id: pageLoadResult.id
  })
}

export const checkJobContact = async(browserUser, firebaseUser) => {
  const docRef = doc(db, "jobContacts", browserUser);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    readPageLoadandUpdateJobContact(browserUser, firebaseUser)
  }
}

const readPageLoadandUpdateJobContact = async(browserUser, firebaseUser) => {
  const docRef = doc(db, "pageLoads", browserUser)
  const docSnap = await getDoc(docRef);
  const updatedData = {
    ...docSnap.data(),
    'firebaseUser': {
      accessToken: firebaseUser.accessToken,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,
      isAnonymous: firebaseUser.isAnonymous,
      phoneNumber: firebaseUser.phoneNumber,
      photoURL: firebaseUser.photoURL,
      providerData: firebaseUser.providerData,
      uid: firebaseUser.uid
    }
  }
  const jobContactResult = await setDoc(doc(db, "jobContacts", docSnap.data().id), updatedData)
  console.log('User Updated at jobContacts')
}

const updateUserData = async(uid) => {
  const updateJobContactData = await updateDoc(doc(db, "jobContacts", uid), {
    id: pageLoadResult.id
  })
}