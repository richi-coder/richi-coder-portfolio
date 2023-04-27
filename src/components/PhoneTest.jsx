import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppContext'
import { RecaptchaVerifier, getAuth, linkWithPhoneNumber } from 'firebase/auth';
import { auth } from '../scripts/firebase';
import { useNavigate } from 'react-router';

function PhoneTest({inputProps}) {
  const navigate = useNavigate();
  const { inputName, color, value, id, inputType, dataType, message } = inputProps;
  const formData = useFormContext()
  // useState like at Context
  let appVerifier;
  const [phoneTestState, setPhoneTestState] = useState({
    'code': '',
    'enterCode': false,
    'recaptchaMessage': 'Let\' verify your phone!',
    'loading': false,
    'buttonMessage': 'Send code to my phone!',
    'confirmationResult': '',
    'buttonDisabled': false
  })

  function updatePhoneTestState(data) {
    setPhoneTestState({
      ...phoneTestState,
      ...data
    })
  }
  
  useEffect(() => {

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log('SUCCEEDED', response);
        
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log('FAILED');
      }
      }, auth);

      console.log('winddooow', window.recaptchaVerifier);

  }, [])

  
  function onChange(e) {
        // updatePhoneTestState({'code': e.target.value})
        if (e.target.value.length === 6) {
          console.log('TRYING AUTH', phoneTestState.confirmationResult);
          phoneTestState.confirmationResult.confirm(e.target.value)
                .then((result) => {
                  // User signed in successfully.
                  const user = result.user;
                  console.log('LINKKKKKK', user);
                  navigate('/contact/formend')
                  return
                  // ...
                }).catch((error) => {
                  // User couldn't sign in (bad verification code?)
                  // ...
                  console.log('ERROOR  LINKKKKKK', error);
                });
        }
  }

  function link() {
    appVerifier = window.recaptchaVerifier
      updatePhoneTestState({'recaptchaMessage': 'Sending code to your phone!', 'loading': true})
        console.log(appVerifier, 'linking');

          
          // here goes linkWithPhoneNumber
          linkWithPhoneNumber(auth.currentUser, formData.telephone, appVerifier)
                .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  console.log('MESSAGE SENT!', confirmationResult);
                  updatePhoneTestState({'enterCode': true, 'recaptchaMessage': 'Code sent!', 'confirmationResult': confirmationResult})
                  // window.confirmationResult = confirmationResult;
                  // ...
                }).catch((error) => {
                  console.log(Object.values(error), 'ERRORRRCITO');
                  // Error; SMS not sent
                  // ...
                  if (Object.values(error)[0] === "auth/too-many-requests") {
                    updatePhoneTestState({'recaptchaMessage': `You have made too many requests!`, 'loading': false, 'buttonMessage': 'Try later!', 'buttonDisabled': true})
                    return
                  }
                  if (Object.values(error)[0] === 'auth/quota-exceeded') {
                    updatePhoneTestState({'recaptchaMessage': `Only 50 SMS!`, 'loading': false, 'buttonMessage': 'Quota exceeded!', 'buttonDisabled': true})
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
        <button id='sign-in-button' disabled={phoneTestState.buttonDisabled} className={`px-4 py-2 rounded-md hover:bg-blue-600 bg-[#00407c] text-white text-2xl mb-2`} onClick={link}>{phoneTestState.loading ? 'CARGANDO' : phoneTestState.buttonMessage}</button> 
      </> 
      {
        phoneTestState.enterCode ?
      <div className='absolute top-0 left-1/2 -translate-x-1/2 show w-[150%] py-10 flex flex-col items-center gap-10 bg-blue-600 rounded-xl'>
        <div className='pl-2 text-3xl text-center w-full animate-pulse'>{message} <br />{formData.telephone} </div>
        <div className='flex flex-col items-center w-fit bg-white h-full rounded'>
            <input onChange={onChange} autoFocus className={`text-black text-center text-[2rem] w-[12rem] h-2/3 bg-transparent m-0 p-0 border-none outline-none`} type={inputType} placeholder={`Enter ${inputName}`} />
        </div>
      </div> :
      null
      } 
    </>
  )
}

export default PhoneTest