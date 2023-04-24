import React, { useEffect, useState } from 'react'
import { useFormContext, useUpdateFormContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router';

function Input({ inputName, color, value, id, inputType, dataType, message }) {
  // Hooks
  const [inputDisabled, setInputDisabled] = useState(true)
  const formData = useFormContext();
  const inputShow = formData.inputShow;
  const updateFormData = useUpdateFormContext();
  const navigate = useNavigate()
  const location = useLocation();
  // Current input page
  const baseLocation = location.pathname.split('')
  const baseLastLocation = formData.formLocation.split('')
  const inputLocation = Number(baseLocation[baseLocation.length - 1]);
  const lastLocation = Number(baseLastLocation[baseLastLocation.length - 1])
  // When the user tries a url input like 3 without filling 1 and 2 / CHECKING
  const formValues = Object.values(formData);
  const lastData = formValues.slice(0,inputLocation-1);
  const check = lastData.some(item => item === '');
  // Where to redirect after pretending the last
  const currentLocation = formValues.indexOf('')
  // Form fulfillment
  let checkFulfillment = true;
  if (formValues.some(item => item === '') === false && location.pathname === '/contact' || location.pathname === '/contact/formend') {
    checkFulfillment = false
  }


    useEffect(() => {
      console.log('NAVIGATEEEEEEEE', formData)
      if (formData.formComplete) {
        console.log('NAVIGATEEEEEEEE', formData)
        navigate('/contact/formend')
      }
      console.log(inputLocation, lastLocation, 'NUMBEEERR');
      // CHECKING HERE
      if (inputLocation === 1 && formData.formLocation === '/contact') updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[100vw] opacity-0'})
      if (location.pathname !== '/contact') {
        if (inputLocation > lastLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[100vw] opacity-0'})
        }
        if (lastLocation > inputLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': '-translate-x-[100vw] opacity-0'})
        }
      }

      if (check) {
        navigate(`/contact/input${currentLocation + 1}`)
      }
      window.addEventListener('popstate', (e) => {
        if (location === '/contact') {
            navigate(`/contact`)
        } 
      })
      if (!formData.isLoading) {
        setTimeout(() => {
          setInputDisabled(false)
        }, 100); // React slowness
      }
    }, [location, formData.formComplete])
    

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
      !check ?
    <div className={`${color} transition-transform ease-in-out duration-200 ${inputShow} flex flex-col w-full sm:w-1/2 items-center justify-center mx-auto rounded-lg`}>
        <div className='pl-2 text-3xl w-full'>{message}</div>
        <input onChange={onChange} className={`text-black pl-2 text-5xl w-full`} type={inputType} value={value} placeholder={`Enter ${inputName}`} autoFocus disabled={inputDisabled} />
    </div> :
    <div>Go to last step please!</div>
    }
    </div>
  )
}

export default Input