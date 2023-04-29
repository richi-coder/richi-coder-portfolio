import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext, useUpdateFormContext } from './AppContext';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

function FormEnd() {
    const navigate = useNavigate();
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext()
    const location = useLocation();
    const formValues = Object.values(formData);
    const lastData = formValues.slice(0);
    const check = formData.formComplete;
    const currentLocation = formValues.indexOf('')

    useEffect(() => {
      // testing email verif
      // const actionCodeSettings = {
      //   // URL you want to redirect back to. The domain (www.example.com) for this
      //   // URL must be in the authorized domains list in the Firebase Console.
      //   url: 'https://localhost:3000/contact/formend',
      //   // This must be true.
      //   handleCodeInApp: true,
      //   iOS: {
      //     bundleId: 'com.example.ios'
      //   },
      //   android: {
      //     packageName: 'com.example.android',
      //     installApp: true,
      //     minimumVersion: '12'
      //   },
      //   // dynamicLinkDomain: 'richicoder.com'
      // };
      // const auth = getAuth();
      // const email = 'richicoder@gmail.com'
      // sendSignInLinkToEmail(auth, email, actionCodeSettings)
      //   .then(() => {
      //     // The link was successfully sent. Inform the user.
      //     // Save the email locally so you don't need to ask the user for it again
      //     // if they open the link on the same device.
      //     window.localStorage.setItem('emailForSignIn', email);
      //     // ...
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log(errorCode, errorMessage, 'EMAIL VERIF');
      //     // ...
      //   });

      // ****************----

      updateFormData('formLocation', location.pathname)
  
      // if (lastData.some(item => item === '')) {
      //   setTimeout(() => {
      //     navigate(`/contact`)
      //   }, 3000);
      //   return
      // }
      // DIFFERENT IF CHECKING PHONENUMBER AT USER
        
        window.addEventListener('popstate', (e) => {
            navigate(`/contact`)
          })
          
    }, [formData.formLocation])
    
  return (
    <div className='w-full text-5xl show text-center py-8'>
    {
    check ?
    <div className='show'>
        <div>Thank you very much!</div>
        <a href="/">Come back to richicoder.com</a>
    </div> :
    <div className='show'>Please complete the form!</div>
    }
    </div>
  )
}

export default FormEnd