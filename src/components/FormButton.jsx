import { useLocation, useNavigate } from 'react-router-dom'


function FormButton({direction}) {
    const navigate = useNavigate()
    const location = useLocation().pathname;
    const locationSplitted = location.split('');
    let currentInput;

    const navigation = () => {
        if (direction === 'backward') navigate(-1)
        if (direction === 'forward') {
            currentInput = locationSplitted[locationSplitted.length - 1]
            if (location === '/contact') {
                navigate(`contact/input1`)
            }
            else {
            navigate(`contact/input${Number(currentInput) + 1}`)
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