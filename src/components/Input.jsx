import React, { useEffect, useRef } from 'react'
import { useFormContext, useUpdateFormContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router';

function Input({ inputName, color, value, id, inputType }) {
  // Hooks
  const formData = useFormContext();
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
      updateFormData('formLocation', id)
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
    }, [location, formData.formComplete])
    

    const onChange = (e) => {
        const { value } = e.target; 
      // input onChange validations
        // No spaces OK
        // if (/\s/.test(value)) return
        // No digits OK
        // if (/\d/.test(value)) return
        
        updateFormData(id, value)
    }
    
  return (
    <>
    {
      !check ?
    <div className={color}>
        <div>{inputName}</div>
        <input onChange={onChange} className={`text-black pl-2`} type={inputType} value={value} placeholder={`Enter ${inputName}`} autoFocus />
    </div> :
    <div>Go to last step please!</div>
    }
    </>
  )
}

export default Input