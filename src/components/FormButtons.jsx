import React from 'react'
import FormButton from './FormButton'
import { useLocation } from 'react-router'
import { useFormContext } from './AppContext';


function FormButtons({user}) {
  const location = useLocation().pathname;
  const formData = useFormContext();
  const formDataArray = Object.values(formData);
  const checkFulfillment = formData.formComplete === true || location === '/contact/formend' ? false : true;
  const baseLocation = location.split('')
  const inputLocation = baseLocation[baseLocation.length - 1];
  console.log('foooo', formData.formLocation, inputLocation);
  const check = location !== '/contact' && formData.formLocation === '/contact' && inputLocation !== 'A' ?
                false : true;
                console.log(check,'VERIF');

  return (
    <>
    
    {check ?
      <div className='text-5xl transition-all show flex-grow relative'>
        {
        checkFulfillment ?
        <div className='flex flex-row items-center gap-7 justify-center sm:justify-around w-1/2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <FormButton direction={'backward'} />
          <FormButton direction={'forward'} user={user} />
        </div> :
        null
        }
    </div> :
    null
    }
    </>
  )
}

export default FormButtons