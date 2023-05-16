import React from 'react'
import FormButton from './FormButton'
import { useLocation } from 'react-router'
import { useFormContext } from './AppContext';


function FormButtons({user}) {
  // Hooks
  const location = useLocation().pathname;
  const formData = useFormContext();
  const formDataArray = Object.values(formData);
  // Checking if form is completed or if located at formend to hide buttons in there
  const checkFulfillment = formData.phoneTest || location === '/contact/formend' ? false : true;
  // Checking if trying to acces a phohibited page
  const baseLocation = location.split('')
  const inputLocation = baseLocation[baseLocation.length - 2];
  const check = location !== '/contact/' && formData.formLocation === '/contact/' && inputLocation !== 'A' ?
                false : true;

  return (
    <>
    {
      !formData.buttonsLoading ?
            <>
            {check ?
              <div className={`text-5xl transition-all ${location === '/contact/' ? 'show' : 'showButton'} flex-grow relative w-full`}>
                {
                checkFulfillment ?
                <div className='flex flex-row items-center gap-7 justify-center sm:justify-around w-full sm:w-1/2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 sm:-translate-y-0'>
                  <FormButton direction={'backward'} />
                  <FormButton direction={'forward'} user={user} />
                </div> :
                null
                }
            </div> :
            null
            }
            </> :
            <div className='w-full flex flex-col items-center'>
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
    }
    </>
  )
}

export default FormButtons