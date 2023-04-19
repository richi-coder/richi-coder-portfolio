import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFormContext, useUpdateFormContext } from './AppContext';

function FormEnd() {
    const navigate = useNavigate();
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext()
    const location = useLocation();
    const formValues = Object.values(formData);
    const lastData = formValues.slice(0);
    const [check, setCheck] = useState(() => {
      return formData.formComplete ? false : true
    });
    const currentLocation = formValues.indexOf('')

    useEffect(() => {
      // setCheck(false)
      // if (formData.formLocation === '/contact/formend') {
      //   return
      // }
      // updateFormData('formLocation', location.pathname)
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