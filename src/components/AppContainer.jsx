import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFormContext, useUpdateFormContext } from "./AppContext"
import Input from "./Input";
import FormButtons from "./FormButtons";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import RootContact from "./RootContact";
import FormEnd from "./FormEnd";
import { registerPageLoad } from "../scripts/ipservice";
import { auth, checkJobContact } from "../scripts/firebase";
import Presentation from "./Presentation";
import PhoneTest from "./PhoneTest";


function AppContainer() {
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext()
    const [user, setUser] = useState(null);
    const [userPhotoRandom, setUserPhotoRandom] = useState('block')

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
          // User is signed in
          const uid = firebaseUser.uid;
          setUser(firebaseUser)
          // ... Put user to jobContacts after login

          // First check if the user is at jobContacts Database
          checkJobContact(browserUser, firebaseUser)
              .then(doc => {
                  
                  
                  // Checking data at the server
                  if (doc.formData !== false && doc.formData !== null && doc.formData !== undefined) {
                    const currentDatabaseState = Object.values(doc.formData)

                    //1 Data completed!
                    if (currentDatabaseState.every(inputItem => inputItem !== '')) {
                      console.log('USER READY')
                      updateFormData('updateServerDataAtContext', {...doc.formData, formComplete: true, isLoading: false, inputShow: 'x', 'buttonsLoading': false} )
                    } else {
                      console.log('USER NOT READY')
                      updateFormData('updateServerDataAtContext', {...doc.formData, isLoading: false, inputShow: 'x', 'buttonsLoading': false})
                    }
                  } else {
                    console.log('DATA NOT CREATED YET!')
                    setTimeout(() => {
                      updateFormData('updateServerDataAtContext', {formComplete: false, isLoading: false, inputShow: 'x', 'buttonsLoading': false})
                    }, 1000)
                  }
              })
          
          
        } else {
          // User is signed out
          // ...
          // setUser(firebaseUser)
          console.log('user Offline!')
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

    const imageLoad = (e) => setUserPhotoRandom('hidden')
    
  return (
    <div className='w-full h-full relative text-white z-10 bg-black'>
        
        <div className='h-1/3 w-full relative'>
        {
          user ? 
          <div className="user-details h-full w-full flex flex-col items-center justify-around show">
            <div className='h-3/4 aspect-square relative object-cover rounded-full' >
                <img onLoad={imageLoad} src={user.photoURL} alt={user.displayName} className='rounded-full h-5/6 absolute bottom-0 left-1/2 -translate-x-1/2' />
                <img src={'/userProfile.png'} alt={user.displayName} className={`rounded-full h-5/6 absolute bottom-0 left-1/2 -translate-x-1/2 z-10 ${userPhotoRandom}`} />
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
              path="/contact/inputA"
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
              path="/contact/inputB"
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
              path="/contact/inputC"
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
              path="/contact/inputD"
              element={
                <Input
                  message={`Your position at ${formData.company}`}
                  id={"position"}
                  inputName="Position"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.position}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputE"
              element={
                <Input
                  message={`${formData.company} website`}
                  id={"companyURL"}
                  inputName="Company URL"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.companyURL}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputF"
              element={
                <Input
                  message={`${formData.company} is located in`}
                  id={"city"}
                  inputName="City"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.city}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputG"
              element={
                <Input
                  message={`The services ${formData.company} offers`}
                  id={"services"}
                  inputName="Services"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.services}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputH"
              element={
                <Input
                  message='Which role are you seeking?'
                  id={"role"}
                  inputName="Role"
                  color="bg-gradient-to-r from-blue-500"
                  value={formData.role}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputI"
              element={
                <Input
                  message='Remote or office work?'
                  id={"workMode"}
                  inputName="Mode"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.workMode}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputJ"
              element={
                <Input
                  message={`Your email`}
                  id={"email"}
                  inputName="Email"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.email}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputK"
              element={
                <Input
                  message='Your telephone'
                  id={"telephone"}
                  inputName="Telephone"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.telephone}
                  inputType='number'
                  dataType='number'
                />
              }
            ></Route>
            <Route
              path="/contact/inputL"
              element={
                <Input
                  message='How should I contact you?'
                  id={"contactMethod"}
                  inputName="How"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.contactMethod}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputM"
              element={
                <Input
                  message='When should I contact you?'
                  id={"contactDate"}
                  inputName="When"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.contactDate}
                  inputType='text'
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputN"
              element={
                <Input
                  message={`Enter sms code sent to`}
                  id={"phoneTest"}
                  inputName="SMS Code"
                  color="bg-gradient-to-r from-purple-500"
                  value={'nuuull'}
                  inputType='number'
                  dataType='number'
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