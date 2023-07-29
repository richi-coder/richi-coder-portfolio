// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
import { dataToFront } from "@modules/contact/AppContext";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_KEY,
  authDomain: "richi-coder.firebaseapp.com",
  projectId: "richi-coder",
  storageBucket: "richi-coder.appspot.com",
  messagingSenderId: "499101163141",
  appId: "1:499101163141:web:9ca61c8735be7e59c713ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();

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
  let result;
  if (querySnapshot.docs.length > 0) {
    // console.log("Document data:");
    const pageLoadID = querySnapshot.docs[0].data();
    window.localStorage.removeItem('uSaLsFiAf')
    result = pageLoadID
  } else {
    // docSnap.data() will be undefined in this case
    // console.log("No such document!");
    readPageLoadandUpdateJobContact(browserUser, firebaseUser)
    result = {'formLocation': false}
    
  }
  return result
}

const readPageLoadandUpdateJobContact = async(browserUser, firebaseUser) => {
  const docRef = doc(db, "pageLoads", browserUser)
  const docSnap = await getDoc(docRef);
  
  const updatedData = {
    'firebaseUser': {
      accessToken: firebaseUser.accessToken,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,
      isAnonymous: firebaseUser.isAnonymous,
      phoneNumber: firebaseUser.phoneNumber,
      photoURL: firebaseUser.photoURL,
      providerData: firebaseUser.providerData,
      uid: firebaseUser.uid,
      registrationTime: Date()
    },
    ...docSnap.data(),
    'formData': dataToFront
  }
  // console.log(docSnap.data().id, updatedData);
  const jobContactResult = await setDoc(doc(db, "jobContacts", docSnap.data().id), updatedData)
  window.localStorage.removeItem('uSaLsFiAf')
  // console.log('User created at jobContacts') 
}

export const readUserData = async(uid, formData) => {
  const q = query(collection(db, "jobContacts"), where('firebaseUser.uid', '==', uid));
  const querySnapshot = await getDocs(q);
  const docID = querySnapshot.docs[0].id
  return docID
}

export const checkFormCompleted = async (docID) => {
  const docRef = doc(db, "jobContacts", docID)
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}



// SIGN OUT

export const userAnotherAccount = () => {
  signOut(auth)
  .then(() => {
  // Sign-out successful.
  window.localStorage.removeItem('uSaLsFiAf')
  window.location.replace('/contact')
  })
  .catch((error) => {
      console.log('Error while signin out...');
  });
}


// Read download URL

export const readResumeDownloadURl = async() => {
  const resumeRef = ref(storage, 'richiCoderResume_Official.pdf')
  const url = await getDownloadURL(resumeRef)
        
  return url
}