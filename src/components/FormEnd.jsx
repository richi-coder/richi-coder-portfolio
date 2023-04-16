import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext } from './AppContext';

function FormEnd() {
    const navigate = useNavigate();
    const formData = useFormContext();
    const location = useLocation();
    const formValues = Object.values(formData);
    const lastData = formValues.slice(0);
    const check = lastData.some(item => item === '');
    const currentLocation = formValues.indexOf('')

    useEffect(() => {
        if (check) {
            setTimeout(() => {
                navigate(`/contact/input${currentLocation + 1}`)
            }, 2000);
        }
        window.addEventListener('popstate', (e) => {
            navigate(`/contact`)
          })
    }, [location])
    
  return (
    <>
    {
    !check ?
    <div>
        <div>Thank you very much!</div>
        <a href="https://richicoder.com/">Come back to richicoder.com</a>
    </div> :
    <div>Please complete the form!</div>
    }
    </>
  )
}

export default FormEnd