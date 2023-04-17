import { useLocation, useNavigate } from 'react-router-dom'
import { useFormContext } from './AppContext';


function FormButton({direction}) {
    const navigate = useNavigate()
    const location = useLocation().pathname;
    const locationSplitted = location.split('');
    const formData = useFormContext();
    const lastInput = Object.values(formData).length;
    const isButton = location === '/contact' && direction === 'forward'
   

    const navigation = () => {
        // Here goes firebase updateUserData (frontend has been protected in some way, now it is necessary to protect contactForm from firebase backend)
        let currentInput = locationSplitted[locationSplitted.length - 1]
        if (direction === 'backward') {
            if (location === '/contact/input1') {
                navigate(`/contact`)
            }
            else {
            navigate(`/contact/input${Number(currentInput) - 1}`)
            }
        }
        if (direction === 'forward') {
            if (location === `/contact/input${lastInput}`) {
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
    }

  return (
    <>
    {
    location === '/contact' && direction === 'backward' ?
    null :
    <button onClick={navigation} className={isButton ? 'bg-blue-500 px-6 py-3 rounded-lg sm:hover:bg-blue-300' : ''}>
        {isButton ? 'Let him know!' : <i className={direction === 'forward' ? 'fa fa-chevron-right' : 'fa fa-chevron-left'}></i>}
    </button>
    }
    </> 
  )
}

export default FormButton