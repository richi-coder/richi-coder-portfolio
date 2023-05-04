import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext, useUpdateFormContext } from './AppContext';

function RootContact({user}) {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext();
    const formDataArray = Object.values(formData);
    const check = formData.phoneTest === true ? false : true;
    const [rootMessage, setRootMessage] = useState('Please let me know how to contact you!');

    window.addEventListener('popstate', (e) => {
        navigate(`/contact/`)
      })

    useEffect(() => {
      updateFormData('formLocation', location)

      // Slash corrector
      if (location === '/contact') {
        navigate('/contact/')
      }
      
      if (formData.phoneTest) {
        setTimeout(() => {
          navigate('/contact/formend')
        }, 7000);
        return
      } else if (formData.formComplete) {
        setRootMessage('Please verify your phone number! Redirecting!')
        setTimeout(() => {
            navigate('/contact/inputJ')
        }, 4000);
        return
      } 
        
        window.addEventListener('popstate', () => {
          navigate('/contact/')
        })
      
    }, [formData.formComplete])
    

  return (
    <div className='w-full h-fit text-2xl text-center sm:px-0 relative show'>
    {
        check ? 
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 sm:-translate-y-1/2'>{rootMessage}</div> :
        <>
        <div>You already contacted me</div> 
        <br />
        <div>I hope to talk to you soon!</div> 
        </> 
    }
    </div>
  )
}

export default RootContact