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


function AppContainer() {
    const formData = useFormContext();
    const auth = getAuth()
    const [userOnline, setUserOnline] = useState(false)

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log('done', user)
          setUserOnline(true)
          // ...
        } else {
          // User is signed out
          // ...
          console.log('rejected')
          setUserOnline(false)
        }
      });    
    }, [])
    
  return (
    <div>
      {
        userOnline ? 
        <BrowserRouter>
          <br />
          <div className='bg-green-600 mb-10'>user is ONLINE</div>
          
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
            <Route path="/contact" element={<RootContact />}></Route>
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
          <div className='bg-red-600 mb-10'>Please choose a method to get in touch with richiCoder</div>
          <LoginButton />
        </div>
        }
        
    </div>
  )
}

export default AppContainer