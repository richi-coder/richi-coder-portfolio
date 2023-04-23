import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext, useUpdateFormContext } from './AppContext';

function RootContact({user}) {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext();
    const formDataArray = Object.values(formData);
    const check = formData.formComplete === true ? false : true;

    window.addEventListener('popstate', (e) => {
        navigate(`/contact`)
      })

    useEffect(() => {
      updateFormData('formLocation', location)
      
        setTimeout(() => {
          if (formData.formComplete) {
          navigate('/contact/formend')
          } else return
        }, 4000);
        window.addEventListener('popstate', () => {
          window.location.replace('/contact')
        })
      
    }, [formData.formComplete])
    

  return (
    <div className='w-full text-2xl text-center py-8'>
    {
    check ? 
    <div>Please let me know how to contact you!</div> :
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