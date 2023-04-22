import React from 'react'
import FormButton from './FormButton'
import { useLocation } from 'react-router'
import { useFormContext } from './AppContext';
import './styles/show.css'


function FormButtons({user}) {
  const location = useLocation().pathname;
  const formData = useFormContext();
  const formDataArray = Object.values(formData);
  // let checkFulfillment = true
  // if (formDataArray.some(item => item === '') === false && location === '/contact' || location === '/contact/formend') {
  //   checkFulfillment = false
  // }
  const checkFulfillment = formData.formComplete === true || location === '/contact/formend' ? false : true;
  
  return (
    <div className='show h-fit text-5xl'>
    {
    checkFulfillment ?
    <div className='flex flex-row items-center justify-around'>
      <FormButton direction={'backward'} />
      <FormButton direction={'forward'} user={user} />
    </div> :
    null
    }
    </div>
  )
}

export default FormButtons