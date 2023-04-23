import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFormContext, useUpdateFormContext } from "./AppContext"
import Input from "./Input";
import FormButtons from "./FormButtons";
import LoginButton from "./LoginButton";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import RootContact from "./RootContact";
import FormEnd from "./FormEnd";
import { registerPageLoad } from "../scripts/ipservice";
import { auth, checkJobContact } from "../scripts/firebase";
import Presentation from "./Presentation";


function AppContainer() {
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext()
    const [user, setUser] = useState(null);

    const browserUserCheck = () => {
      try {
        const localStorageUser = window.localStorage.getItem('uSaLsFiAf');
        return localStorageUser ? localStorageUser : null
      } catch (error) {
        return error
      }
    }
    const browserUser = browserUserCheck()

    useEffect(() => {
      // stateLoader
      
      console.log('Checking AUTH')
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = firebaseUser.uid;
          // console.log('user Online!', firebaseUser.uid)
          setUser(firebaseUser)
          // ... Put user to jobContacts after login

          // First check if the user is at jobContacts Database
          checkJobContact(browserUser, firebaseUser)
              .then(doc => {
                  
                  
                  // Checking data at the server
                  if (doc.formData !== false && doc.formData !== null && doc.formData !== undefined) {
                    const currentDatabaseState = Object.values(doc.formData)

                    //0 Inputs updated when reloading the page
                    console.log(doc.formData, 'REVISANDO')

                    //1 Data completed!
                    if (currentDatabaseState.every(inputItem => inputItem !== '')) {
                      console.log('USER READY')
                      updateFormData('updateServerDataAtContext', {...doc.formData, formComplete: true, isLoading: false, inputShow: 'x'} )
                    } else {
                      console.log('USER NOT READY', doc.formData)
                      updateFormData('updateServerDataAtContext', {...doc.formData, isLoading: false, inputShow: 'x'})
                    }
                  } else {
                    console.log('DATA NOT CREATED YET!')
                    setTimeout(() => {
                      updateFormData('updateServerDataAtContext', {formComplete: false, isLoading: false, inputShow: 'x'})
                    }, 1000)
                  }
              })
          
          
        } else {
          // User is signed out
          // ...
          setUser(firebaseUser)
          console.log('user Offline!', firebaseUser)
          // stateLoader
          setTimeout(() => {
            updateFormData('isLoading', false)
          }, 1000);
        }
      
        // localStorage User Identifier
      if (!browserUser && !firebaseUser) {
        // Fetch IP API
        registerPageLoad()
      }
        
      });    

      
    }, [formData.formLocation])
    
  return (
    <div className='w-full h-full relative text-white z-10 bg-black'>
        <div className='h-1/3 w-full relative'>
        {
          user ? 
          <div className="user-details h-full w-full flex flex-col items-center justify-around show">
            <div className='h-3/4 aspect-square relative'>
                <img src={user.photoURL} alt={user.displayName} className='rounded-full h-5/6 absolute bottom-0 left-1/2 -translate-x-1/2' />
            </div>
            <div className='h-1/4 flex flex-col justify-center'>
                {
                  formData.formLocation === '/contact' ?
                  <div className='text-green-500 text-md'>Hello {user.displayName}!</div> :
                  null
                }
            </div>
          </div> :
          null
        }
        </div>
      
    {
    formData.isLoading === true ?
    <div className='w-full h-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 text-white'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div> :
    <div className='h-2/3 flex flex-col'>
      {
        user ? 
        <BrowserRouter>
          <br />
          
          <Routes>
            <Route path="/contact" element={<RootContact user={user} />}></Route>
            <Route
              path="/contact/input1"
              element={
                <Input
                  message='Your name'
                  id={"name"}
                  inputName="Name"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.name}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/input2"
              element={
                <Input
                  message='Your last name'
                  id={"lastname"}
                  inputName="Last Name"
                  color="bg-gradient-to-r from-blue-500"
                  value={formData.lastname}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/input3"
              element={
                <Input
                  message='The company you work in'
                  id={"company"}
                  inputName="Company"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.company}
                  inputType='text'
                  dataType='string'
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
          <FormButtons user={user} />
          <SignOutButton />

        </BrowserRouter> :
        <Presentation />
        }
    </div>
    }
    <svg
                  viewBox="0 0 1024 1024"
                  className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                  <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                      <stop stopColor="#7775D6" />
                      <stop offset="1" stopColor="blue" />
                    </radialGradient>
                  </defs>
                </svg>
    </div>
  )
}

export default AppContainer