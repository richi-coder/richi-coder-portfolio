import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useFormContext } from "./AppContext"
import Input from "./Input";
import FormButtons from "./FormButtons";
import LoginButton from "./LoginButton";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import RootContact from "./RootContact";
import FormEnd from "./FormEnd";
import { registerPageLoad } from "../scripts/ipservice";
import { checkJobContact } from "../scripts/firebase";


function AppContainer() {
    const formData = useFormContext();
    const auth = getAuth()
    const [user, setUser] = useState(null);
    const [browserUser, setBrowserUser] = useState(() => {
      try {
        const localStorageUser = window.localStorage.getItem('uSaLsFiAf');
        return localStorageUser ? JSON.parse(localStorageUser) : null
      } catch (error) {
        return error
      }
    })

    useEffect(() => {
      // localStorage User Identifier
      if (!browserUser) {
        // Fetch IP API
        registerPageLoad()
      }
      console.log(browserUser, 'BROWSER')
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = firebaseUser.uid;
          console.log('user Online!', firebaseUser)
          setUser(firebaseUser)
          // ... Put user to jobContacts after login
          // First check if the user is at jobContacts Database
          checkJobContact(browserUser, firebaseUser)
        } else {
          // User is signed out
          // ...
          setUser(firebaseUser)
          console.log('user Offline!', firebaseUser)
        }
      
        
      });    

      
    }, [])
    
  return (
    <div>
      {
        user ? 
        <BrowserRouter>
          <br />
          
          
          {/* <Link to="/contact">
            <div className="bg-blue-500">Root Link</div>
          </Link>
          <Link to="/contact/input1">
            <div className="bg-red-500">Input-1 Link</div>
          </Link>
          <Link to="/contact/input2">
            <div className="bg-yellow-500">Input-2 Link</div>
          </Link>
          <Link to="/contact/input3">
            <div className="bg-green-500">Input-3 Link</div>
          </Link>
          BrowserRouter */}
          <Routes>
            <Route path="/contact" element={<RootContact user={user} />}></Route>
            <Route
              path="/contact/input1"
              element={
                <Input
                  id={"name"}
                  inputName="Name"
                  color="bg-red-500"
                  value={formData.name}
                />
              }
            ></Route>
            <Route
              path="/contact/input2"
              element={
                <Input
                  id={"lastname"}
                  inputName="Last Name"
                  color="bg-yellow-500"
                  value={formData.lastname}
                />
              }
            ></Route>
            <Route
              path="/contact/input3"
              element={
                <Input
                  id={"venture"}
                  inputName="Venture"
                  color="bg-blue-500"
                  value={formData.venture}
                />
              }
            ></Route>
            <Route
              path="/contact/formend"
              element={
                <FormEnd
                />
              }
            ></Route>
          </Routes>
          <FormButtons />
          <SignOutButton />

        </BrowserRouter> :
        <div>
          <div className='text-2xl'>Please select an access method</div>
          <LoginButton />
        </div>
        }
        
    </div>
  )
}

export default AppContainer