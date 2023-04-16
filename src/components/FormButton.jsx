import { useLocation, useNavigate } from 'react-router-dom'
import { useFormContext } from './AppContext';


function FormButton({direction}) {
    const navigate = useNavigate()
    const location = useLocation().pathname;
    const locationSplitted = location.split('');
    const formData = useFormContext();
    const lastInput = Object.values(formData).length;
   

    const navigation = () => {
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
    <button onClick={navigation}>
        {location === '/contact' && direction === 'forward' ? 'START' : <i className={direction === 'forward' ? 'fa fa-chevron-right' : 'fa fa-chevron-left'}></i>}
    </button>
    }
    </> 
  )
}

export default FormButton