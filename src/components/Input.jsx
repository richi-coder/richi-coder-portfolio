import React, { useEffect, useState } from 'react'
import { useFormContext, useUpdateFormContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router';

function Input({ inputName, color, value, id, inputType, dataType }) {
  // Hooks
  const [inputDisabled, setInputDisabled] = useState(true)
  const formData = useFormContext();
  const inputShow = formData.inputShow;
  const updateFormData = useUpdateFormContext();
  const navigate = useNavigate()
  const location = useLocation();
  // Current input page
  const baseLocation = location.pathname.split('')
  const inputLocation = Number(baseLocation[baseLocation.length - 1]);
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
      updateFormData('updateServerDataAtContext', {'formLocation': id, 'inputShow': 'translate-x-[100vw] opacity-0'})
      // if (!checkFulfillment) {
      //   navigate('/contact')
      // }
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
       
        // Make sure not to send string numbers STRING CASE
        if (dataType === 'string') {
          if (/\d/.test(value) || !/[a-zA-Z]|^$/.test(value)) {
            return
          } else {
            console.log('no hay')
          }
          
        } 
        updateFormData(id, value)
    }
    
  return (
    <>
    {
      !check ?
    <div className={`${color} transition-transform ease-in-out duration-200 ${inputShow}`}>
        <div>{inputName}</div>
        <input onChange={onChange} className={`text-black pl-2`} type={inputType} value={value} placeholder={`Enter ${inputName}`} autoFocus disabled={inputDisabled} />
    </div> :
    <div>Go to last step please!</div>
    }
    </>
  )
}

export default Input