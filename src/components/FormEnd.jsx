import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext, useUpdateFormContext } from './AppContext';
import "./styles/show.css"

function FormEnd() {
    const navigate = useNavigate();
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext()
    const location = useLocation();
    const formValues = Object.values(formData);
    const lastData = formValues.slice(0);
    const check = formData.formComplete;
    const currentLocation = formValues.indexOf('')

    useEffect(() => {
      updateFormData('formLocation', location.pathname)
  
      if (lastData.some(item => item === '')) {
        navigate(`/contact`)
      }
      console.log(formData, 'TEST')
        
        window.addEventListener('popstate', (e) => {
            navigate(`/contact`)
          })
          
    }, [formData.formLocation])
    
  return (
    <>
    {
    check ?
    <div className='show'>
        <div>Thank you very much!</div>
        <a href="https://richicoder.com/">Come back to richicoder.com</a>
    </div> :
    <div className='show'>Please complete the form!</div>
    }
    </>
  )
}

export default FormEnd