import { BrowserRouter, Routes, Route } from "react-router-dom";
import { inputTypes, useFormContext, useUpdateFormContext } from "./AppContext"
import Input from "./Input";
import FormButtons from "./FormButtons";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import RootContact from "./RootContact";
import FormEnd from "./FormEnd";
import { registerPageLoad } from "../scripts/ipservice";
import { auth, checkJobContact, readResumeDownloadURl } from "../scripts/firebase";
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
      
      // Checking email linking
      

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
                    if (currentDatabaseState.every(inputItem => inputItem !== '') && firebaseUser.phoneNumber !== null) {
                      console.log('USER READY')
                      updateFormData('updateServerDataAtContext', {...doc.formData, formComplete: true, isLoading: false, inputShow: 'x', 'buttonsLoading': false, 'phoneTest': true} )
                    } else {
                      console.log('USER NOT READY')
                      updateFormData('updateServerDataAtContext', {...doc.formData, isLoading: false, inputShow: 'x', 'buttonsLoading': false, 'phoneTest': false})
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
            }, 500);
          
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
                  message='Your full name'
                  id={"name"}
                  inputName="full name"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.name}
                  inputType={inputTypes.name}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputB"
              element={
                <Input
                  message='The company you work in'
                  id={"company"}
                  inputName="company"
                  color="bg-gradient-to-r from-blue-500"
                  value={formData.company}
                  inputType={inputTypes.company}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputC"
              element={
                <Input
                  message={`Your position at ${formData.company}`}
                  id={"position"}
                  inputName="your position"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.position}
                  inputType={inputTypes.position}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputD"
              element={
                <Input
                  message={`${formData.company} website`}
                  id={"companyURL"}
                  inputName="the company URL"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.companyURL}
                  inputType={inputTypes.companyURL}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputE"
              element={
                <Input
                  message={`${formData.company} is located in`}
                  id={"city"}
                  inputName="a city"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.city}
                  inputType={inputTypes.city}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputF"
              element={
                <Input
                  message={`Your email at ${formData.company}`}
                  id={"email"}
                  inputName={`email@${formData.company}.com`}
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.email}
                  inputType={inputTypes.email}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputG"
              element={
                <Input
                  message='Your telephone (with prefix)'
                  id={"telephone"}
                  inputName="a valid phone number"
                  color="bg-gradient-to-r from-indigo-500"
                  value={formData.telephone}
                  inputType={inputTypes.telephone}
                  dataType='number'
                />
              }
            ></Route>
            <Route
              path="/contact/inputH"
              element={
                <Input
                  message='How should I contact you?'
                  id={"contactMethod"}
                  inputName="How"
                  color="bg-gradient-to-r from-blue-500"
                  value={formData.contactMethod}
                  inputType={inputTypes.contactMethod}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputI"
              element={
                <Input
                  message='When should I contact you?'
                  id={"contactDate"}
                  inputName="When"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.contactDate}
                  inputType={inputTypes.contactDate}
                  dataType='string'
                />
              }
            ></Route>
            <Route
              path="/contact/inputJ"
              element={
                <Input
                  message={`Enter code sent to`}
                  id={"phoneTest"}
                  inputName="Code"
                  color="bg-gradient-to-r from-indigo-500"
                  value={'nuuull'}
                  inputType={inputTypes.phoneCode}
                  dataType='number'
                />
              }
            ></Route>
            {/* <Route
              path="/contact/inputK"
              element={
                <Input
                  message='Your telephone'
                  id={"telephone"}
                  inputName="Telephone"
                  color="bg-gradient-to-r from-purple-500"
                  value={formData.telephone}
                  inputType='string'
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
                  message={`Enter code sent to`}
                  id={"phoneTest"}
                  inputName="Code"
                  color="bg-gradient-to-r from-purple-500"
                  value={'nuuull'}
                  inputType='text'
                  dataType='number'
                />
              }
            ></Route> */}
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