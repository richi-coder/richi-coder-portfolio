import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext } from './AppContext';

function RootContact({user}) {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const formData = useFormContext();
    const formDataArray = Object.values(formData);
    const check = formDataArray.some(item => item === '');

    window.addEventListener('popstate', (e) => {
        navigate(`/contact`)
      })

  return (
    <div className='w-full text-2xl'>
    {
    check ? 
    <>
    <div className="user-details flex flex-row items-center">
          <div className='text-green-500 text-5xl mb-2'>Hello {user.displayName}!</div>
          <img src={user.photoURL} alt={user.displayName} className='rounded-full aspect-square w-[100px]' />
          </div>
          <div>Please let me know how to contact you!</div>
          </>
     :
    <div>You already contacted me!</div> 
    }
    </div>
  )
}

export default RootContact