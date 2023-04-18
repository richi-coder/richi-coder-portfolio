// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
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

let firebaseID;

export const pageLoad = async(data) => {
  const pageLoadResult = await addDoc(collection(db, "pageLoads"), data);
  window.localStorage.setItem('uSaLsFiAf', pageLoadResult.id)
  const updatePageLoadInfo = await updateDoc(doc(db, "pageLoads", pageLoadResult.id), {
    id: pageLoadResult.id
  })
}

export const checkJobContact = async(browserUser, firebaseUser) => {
  const q = query(collection(db, "jobContacts"), where('firebaseUser.uid', '==', firebaseUser.uid));
  const querySnapshot = await getDocs(q);

  // Saving UID into memory, requires OOP encapsulation, this method for now
  firebaseID = browserUser;

  if (querySnapshot.docs.length > 0) {
    console.log("Document data:", querySnapshot.docs[0].data());
    const padeLoadID = querySnapshot.docs[0].data().id;
    window.localStorage.removeItem('uSaLsFiAf')
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!", querySnapshot.docs);
    readPageLoadandUpdateJobContact(browserUser, firebaseUser)
  }
  return querySnapshot.docs[0].data()
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
    },
  }
  const jobContactResult = await setDoc(doc(db, "jobContacts", docSnap.data().id), updatedData)
  window.localStorage.removeItem('uSaLsFiAf')
  console.log('User created at jobContacts')
}

export const readUserData = async(uid, formData) => {
  const q = query(collection(db, "jobContacts"), where('firebaseUser.uid', '==', uid));
  const querySnapshot = await getDocs(q);
  const docID = querySnapshot.docs[0].id
  return docID
}