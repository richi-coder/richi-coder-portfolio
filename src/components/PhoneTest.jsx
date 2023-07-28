import { useState } from 'react'
import { useFormContext } from './AppContext'
import { RecaptchaVerifier, linkWithPhoneNumber } from 'firebase/auth';
import { auth, userAnotherAccount } from '../scripts/services/firebase';
import { useNavigate } from 'react-router';

function PhoneTest({inputProps}) {
  const navigate = useNavigate();
  const { inputName, color, value, id, inputType, dataType, message } = inputProps;
  const formData = useFormContext()
  // useState like at Context
  let appVerifier;
  const [phoneTestState, setPhoneTestState] = useState({
    'codeColor': 'bg-blue-600',
    'inputCodeColor': 'text-black',
    'enterCode': false,
    'recaptchaMessage': 'Let\' verify your phone!',
    'loading': false,
    'buttonMessage': 'Send code to my phone!',
    'confirmationResult': '',
    'buttonDisabled': false,
    'recaptchaResult': '',
    'codeInputDisabled': false
  })

  function updatePhoneTestState(data) {
    setPhoneTestState({
      ...phoneTestState,
      ...data
    })
  }
  
  function onChange(e) {
        // Close input to max 6 chars
        if (e.target.value.length > 6) {
          e.target.value = e.target.value.slice(0,6)
          return
        }
        // Always init block color at blue
        updatePhoneTestState({'codeColor': 'bg-blue-700'})
        // Once value.length equals 6 verifies code
        if (e.target.value.length === 6) {
          // console.log('TRYING AUTH', phoneTestState.confirmationResult);
          updatePhoneTestState({'codeInputDisabled': true, 'inputCodeColor': 'text-gray-300'})
          phoneTestState.confirmationResult.confirm(e.target.value)
                .then((result) => {
                  // User signed in successfully.
                  const user = result.user;
                  updatePhoneTestState({'codeColor': 'bg-green-600', 'inputCodeColor': 'text-gray-300', 'codeInputDisabled': true})
                  setTimeout(() => {
                    navigate('/contact/formend')
                  }, 1500);
                  return
                  // ...
                }).catch((error) => {
                  // User couldn't sign in (bad verification code?)
                  // ...
                  
                  // console.log('TEST ERROR ARRAY', Object.values(error));
                  if (Object.values(error)[0] === 'auth/code-expired') {
                    updatePhoneTestState({'codeColor': 'bg-red-900', 'inputCodeColor': 'text-black'})
                    window.location.replace('/contact/inputJ')
                    return
                  }
                  if (Object.values(error)[0] === 'auth/invalid-verification-code') {
                    updatePhoneTestState({'codeColor': 'bg-red-700', 'codeInputDisabled': false, 'inputCodeColor': 'text-black'})
                    return
                  }
                  if (Object.values(error)[0] === 'auth/account-exists-with-different-credential') {
                    updatePhoneTestState({'codeColor': 'bg-red-600'})
                    return
                  }
                });
        }
  }

  function link() {
 
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        // console.log('SUCCEEDED', response);
        
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // console.log('FAILED');
      }
      }, auth);

    appVerifier = window.recaptchaVerifier
      updatePhoneTestState({'recaptchaMessage': 'Sending code to your phone!', 'loading': true, 'buttonDisabled': true})
        // console.log('linking ...');

          // here goes linkWithPhoneNumber
          linkWithPhoneNumber(auth.currentUser, formData.telephone, appVerifier)
                .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  // console.log('MESSAGE SENT!', confirmationResult);
                  updatePhoneTestState({'enterCode': true, 'recaptchaMessage': 'Code sent!', 'confirmationResult': confirmationResult, 'buttonMessage': 'Waiting code!'})
                  // window.confirmationResult = confirmationResult;
                  // ...
                }).catch((error) => {
                  // console.log(Object.values(error), 'ERRORRRCITO');
                  // Error; SMS not sent
                  // ...
                  if (Object.values(error)[0] === "auth/too-many-requests") {
                    updatePhoneTestState({'recaptchaMessage': `You have made too many requests. Try later!`, 'loading': false, 'buttonDisabled': true, 'buttonMessage': 'Signing out!'})
                    setTimeout(() => {
                      userAnotherAccount()
                    }, 3000);
                  }
                  if (Object.values(error)[0] === 'auth/quota-exceeded') {
                    updatePhoneTestState({'recaptchaMessage': `Service not available!`, 'loading': false, 'buttonMessage': 'Try later!', 'buttonDisabled': true})

                  }
                  
                  if (Object.values(error)[0] === 'auth/invalid-phone-number') {
                    updatePhoneTestState({'recaptchaMessage': `Invalid phone number!`, 'loading': false, 'buttonMessage': 'Incorrect number!', 'recaptchaResult': Object.values(error)[0]})
                  }
                  if (Object.values(error)[0] === 'auth/invalid-app-credential') {
                    updatePhoneTestState({'recaptchaMessage': `You are doing wrong!`, 'loading': false, 'buttonMessage': 'Try well!', 'recaptchaResult': Object.values(error)[0]})
                    window.location.replace('/contact/inputJ')
                  }
                  
                  appVerifier.render().then(function(widgetId) {
                    grecaptcha.reset(widgetId);
                  });
                  
                });

  }
  
  return (
    <>
      <>
        <div className='text-xl w-full mb-1 text-center'>{phoneTestState.recaptchaMessage}</div>
        <button id='sign-in-button' disabled={phoneTestState.buttonDisabled} className={`px-4 py-2 rounded-md hover:bg-blue-600 bg-[#00407c] text-white text-2xl mb-2 ${phoneTestState.buttonDisabled ? 'hidden' : ''}`} onClick={link}>{phoneTestState.loading ? 'CARGANDO' : phoneTestState.buttonMessage}</button> 
      </> 
      {
        phoneTestState.enterCode || phoneTestState.recaptchaResult === 'auth/invalid-phone-number' ?
      <>
        {
          phoneTestState.recaptchaResult !== 'auth/invalid-phone-number' ?
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/3 show w-[150%] py-10 sm:py-4 flex flex-col items-center gap-10 rounded-xl ${phoneTestState.codeColor} z-50`}>
              <div className='pl-2 text-3xl text-center w-full animate-pulse'>{message} <br /><div className='mx-auto text-center w-full'>{formData.telephone}</div> </div>
                <div className='flex flex-col items-center w-fit bg-white h-full rounded relative'>
                    <div className='text-xl w-full mb-1 text-center text-white absolute top-0 left-1/2 -translate-y-full -translate-x-1/2'>{phoneTestState.codeColor === 'bg-red-700' ? 'Incorrect code!' : phoneTestState.codeColor === 'bg-green-600' ? 'Succeeded!' : phoneTestState.codeColor === 'bg-red-900' ? 'Code expired!' : phoneTestState.codeColor === 'bg-red-600' ? 'Unavailable number...' : 'Enter the code!'}</div>
                    <input onChange={onChange} autoFocus className={`text-center text-[2rem] w-[12rem] h-2/3 bg-transparent m-0 p-0 border-none outline-none ${phoneTestState.inputCodeColor}`} type={inputType} placeholder={`Enter ${inputName}`} disabled={phoneTestState.codeInputDisabled} />
                </div>
              </div> :
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 show w-[120%] py-10 flex flex-col items-center gap-10  rounded-xl bg-blue-800`}>
                  <div className='text-xl w-full mb-1 text-center'>Invalid telephone. Go modify it!</div>
                  <button onClick={() => navigate('/contact/')} className='px-4 py-2 rounded-md hover:bg-blue-600 bg-[#00407c] text-white text-2xl'>MODIFY TEL!</button>
              </div>
        }
      </>
       :
      null
      } 
    </>
  )
}

export default PhoneTest