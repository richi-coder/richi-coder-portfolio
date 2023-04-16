import React from 'react'
import FormButton from './FormButton'
import { useLocation } from 'react-router'
import { useFormContext } from './AppContext';


function FormButtons() {
  const location = useLocation().pathname;
  const formData = useFormContext();
  const formDataArray = Object.values(formData);
  let checkFulfillment = true;
  if (formDataArray.some(item => item === '') === false && location === '/contact' || location === '/contact/formend') {
    console.log('IFFFFF')
    checkFulfillment = false
  }
  
  return (
    <>
    {
    checkFulfillment ?
    <div className='flex flex-row items-center justify-around py-16'>
      <FormButton direction={'backward'} />
      <FormButton direction={'forward'} />
    </div> :
    null
    }
    </>
  )
}

export default FormButtons