import { useLocation, useNavigate } from 'react-router-dom'
import { useFormContext, useUpdateFormContext } from './AppContext';
import { db, readUserData } from '../scripts/firebase';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc } from 'firebase/firestore';


function FormButton({direction, user}) {
    const navigate = useNavigate()
    const location = useLocation().pathname;
    const splittedLocation = location.split('');
    const currentLocation = splittedLocation[splittedLocation.length - 1]
    const locationSplitted = location.split('');
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext();
    const lastInput = Object.values(formData).length - 2;
    const isButton = location === '/contact' && direction === 'forward'
    const [buttonEnabled, setButtonEnabled] = useState(false) // Disabled
    let currentInput = locationSplitted[locationSplitted.length - 1]

    useEffect(() => {
        if (location !== '/contact' && location !== '/contact/formend' && formData[formData.formLocation] === '' || /\s/.test(formData[formData.formLocation])) {
            console.log('BUTTTOOOON')
            setButtonEnabled(true)
        } else {
            console.log('ENTRAAA PAH')
            setButtonEnabled(false)
        }
    }, [location, formData[formData.formLocation]])

    const inputNavigation = () => { // URLs moving
        if (location === `/contact/input${lastInput}`) {
            updateFormData('formComplete', true)
            navigate('/contact/formend')
            return
        }
        if (location === '/contact') {
            navigate(`/contact/input1`)
        }
        else {
        navigate(`/contact/input${Number(currentInput) + 1}`)
        }
    }
    // Backend Update
    const backendUpdate = () => {
        const {formLocation, formComplete, ...dataForm} = formData
        console.log(dataForm, 'DATA TO SAVE', formData)
        readUserData(user.uid, formData)
            .then(async(userIDToUpdate) => {
                await updateDoc(doc(db, "jobContacts", userIDToUpdate), {'formData': dataForm})
                // After updating data in the server, just navigates to next input
                inputNavigation()
            })
    }

    const frontendValidation = () => {
        if (location !== '/contact/formend') {
            // Form validation at frontend
            if (formData[formData.formLocation] === '') {
                setButtonEnabled(true)
                return
            }
            if (/\s/.test(formData[formData.formLocation])) {
                setButtonEnabled(true)
                return
            }

            // Backend fulfill
            backendUpdate()
            // return true
        }
        if (location === '/contact') {
            inputNavigation()
        }
    }
    
    

    const navigation = () => {
        // Backward click
        if (direction === 'backward') {
            if (location === '/contact/input1') {
                navigate(`/contact`)
            }
            else {
            navigate(`/contact/input${Number(currentInput) - 1}`)
            }
        }
        // Forward click
        if (direction === 'forward') {
            // Frontend validation
            frontendValidation();
        }
    }

  return (
    <>
    {
    location === '/contact' && direction === 'backward' ?
    null :
    <>
    {/* <div className='errorMessage'>{errorMessage}</div> */}
    <button
    onClick={navigation}
    className={isButton ? 'bg-blue-500 px-6 py-3 rounded-lg sm:hover:bg-blue-300' : ''}
    disabled={direction === 'backward' ? false : buttonEnabled}
    >
        {isButton ? 'Let him know!' : <i className={direction === 'forward' ? 'fa fa-chevron-right' : 'fa fa-chevron-left'}></i>}
    </button>
    </>
    }
    </> 
  )
}

export default FormButton