import React from 'react'
import FormButton from './FormButton'
import { useLocation } from 'react-router'
import { useFormContext } from './AppContext';
import './styles/show.css'


function FormButtons({user}) {
  const location = useLocation().pathname;
  const formData = useFormContext();
  const formDataArray = Object.values(formData);
  const checkFulfillment = formData.formComplete === true || location === '/contact/formend' ? false : true;

  return (
    <div className='h-fit text-5xl transition-all show'>
    {
    checkFulfillment ?
    <div className='flex flex-row items-center justify-around w-1/2 mx-auto'>
      <FormButton direction={'backward'} />
      <FormButton direction={'forward'} user={user} />
    </div> :
    null
    }
    </div>
  )
}

export default FormButtons