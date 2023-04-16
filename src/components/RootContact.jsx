import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext } from './AppContext';

function RootContact() {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const formData = useFormContext();
    const formDataArray = Object.values(formData);
    const check = formDataArray.some(item => item === '');

    window.addEventListener('popstate', (e) => {
        navigate(`/contact`)
      })

  return (
    <>
    {
    check ? 
    <div>Please let me know how to contact you!</div> :
    <div>You already contacted me!</div> 
    }
    </>
  )
}

export default RootContact