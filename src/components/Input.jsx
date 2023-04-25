import React, { useEffect, useRef, useState } from 'react'
import { useFormContext, useUpdateFormContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router';

function Input({ inputName, color, value, id, inputType, dataType, message }) {
  // Hooks
  const formData = useFormContext();
  const inputShow = formData.inputShow;
  const updateFormData = useUpdateFormContext();
  const navigate = useNavigate()
  const location = useLocation();
  // Current input page and animations
  const baseLocation = location.pathname.split('')
  const baseLastLocation = formData.formLocation.split('')
  const inputLocation = baseLocation[baseLocation.length - 1];
  const lastLocation = baseLastLocation[baseLastLocation.length - 1]
  // When the user tries a url input like 3 without filling 1 and 2 / CHECKING
  const formValues = Object.values(formData);
  const lastData = formValues.slice(0);
  console.log(formData.formLocation, 'REEEV');
  const check = formData.formLocation === '/contact' && inputLocation !== 'A' ?
                false :
                formData[formData.scheme[`/contact/input${String.fromCharCode(inputLocation.charCodeAt(0) - 1)}`]] === '' ?
                false :
                true;

    useEffect(() => {
      // if completed, redirects to formEnd
      if (formData.formComplete) {
        console.log('NAVIGATEEEEEEEE', formData)
        navigate('/contact/formend')
      }
      // If trying to acces an input page coming from /contact or if last input is empty
      if (!check) {
        setTimeout(() => {
          navigate('/contact')
        }, 3000);
        return
      }
      // Input entrance animations based on where the form comes frome
      if (inputLocation === 'A' && formData.formLocation === '/contact') updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[100vw] opacity-0'})
      else if (location.pathname !== '/contact') {
        if (inputLocation > lastLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[100vw] opacity-0'})
        }
        if (lastLocation > inputLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': '-translate-x-[100vw] opacity-0'})
        }
      }
      // if check (if not completed), redirects to last input to fill
      console.log('CHEEEEEECK');

      // if (!checkFulfillment) {
      //   console.log('CHEEEEEECKYYYY');
      //   navigate(`/contact/input${currentLocation}`)
      // }   REQUIRES REVISION, LIKE CHECKING IF DATA BEFORE CURRENT INPUT IS NOT EMPTY FOR REDIRECTING SO
      
      // window.addEventListener('popstate', (e) => {
      //       navigate(`/contact`)
      // })

      // Dealing with react speed
      // if (!formData.isLoading) {
      //   setTimeout(() => {
      //     setInputDisabled(false)
      //   }, 100); // React slowness
      // }
      // This last part requires putting this at the input disabled={inputDisabled}
    }, [location, formData.formComplete])


    // onKey for 'enter' button taking the form to next input page
    const onKey = (e) => {
        if (e.key === 'Enter') {
            (document.querySelector('.fa-chevron-right').parentElement).click()
        }
    }
    
    // updating state when input changes, and validations included
    const onChange = (e) => {
        let { value } = e.target; 
      // input onChange validations
        // No spaces OK
        // if (/\s/.test(value)) return
        // No digits OK
        // if (/\d/.test(value)) return
       
        // STRING CASE
        if (dataType === 'string') {
          // Make sure not to send string numbers nor white spaces nor symbols
          if (/\d/.test(value) || !/[a-zA-Z]$|^$/.test(value)) {
            return
          } else {
            console.log('no hay numeros en el string')
          }
          
        } 
        updateFormData(id, value)
    }
    
  return (
    <div className='w-full h-1/3'>
    {
      check ?
    <div className={`${color} transition-transform ease-in-out duration-200 ${inputShow} flex flex-col w-full sm:w-1/2 items-center justify-end mx-auto rounded-lg h-3/4`}>
        <div className='pl-2 text-3xl w-full'>{message}</div>
        <input onChange={onChange} onKeyDown={onKey} className={`text-black pl-2 text-5xl w-full`} type={inputType} value={value} placeholder={`Enter ${inputName}`} autoFocus />
    </div> :
    <div className='flex flex-col w-full h-3/4 items-center justify-center'>
        <div className='text-4xl'>
          Please complete the form step by step!
        </div>
    </div>
    }
    </div>
  )
}

export default Input