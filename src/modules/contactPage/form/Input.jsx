import { useEffect} from 'react'
import { useFormContext, useUpdateFormContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router';
import PhoneTest from '../validation/PhoneTest';

function Input({ inputName, color, value, id, inputType, dataType, message }) {
  
  // Hooks
  const formData = useFormContext();
  const inputShow = formData.inputShow;
  const updateFormData = useUpdateFormContext();
  const navigate = useNavigate()
  const location = useLocation();
  // Current input page and animations
  const baseLocation = location.pathname.split('')
  const baseLastLocation = formData.formLocation.split('')
  const inputLocation = baseLocation[baseLocation.length - 1];
  const lastLocation = baseLastLocation[baseLastLocation.length - 1]
  // When the user tries a url input like 3 without filling 1 and 2 / CHECKING
  const formValues = Object.values(formData);
  const lastData = formValues.slice(0);
  const check = formData.formLocation === '/contact/' && inputLocation !== 'A' && inputLocation !== 'J' ?
                false :
                formData[formData.scheme[`/contact/input${String.fromCharCode(inputLocation.charCodeAt(0) - 1)}`]] === '' ?
                false :
                true;

    useEffect(() => {
      // if completed, redirects to formEnd
      if (formData.phoneTest) {
        navigate('/contact/formend')
        return
      } 
      
      // If trying to acces an input page coming from /contact or if last input is empty
      if (!check) {
        setTimeout(() => {
          navigate('/contact/')
        }, 3000);
        return
      }
      // Input entrance animations based on where the form comes frome
      if (inputLocation === 'A' && formData.formLocation === '/contact/') updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[150vw] opacity-0'})
      else if (location.pathname !== '/contact/') {
        if (inputLocation > lastLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': 'translate-x-[150vw] opacity-0'})
        }
        if (lastLocation > inputLocation) {
          updateFormData('updateServerDataAtContext', {'formLocation': location.pathname, 'inputShow': '-translate-x-[150vw] opacity-0'})
        }
      }

    }, [location, formData.formComplete])


    // onKey for 'enter' button taking the form to next input page
    const onKey = (e) => {
        if (e.key === 'Enter') {
            (document.querySelector('.fa-chevron-right')?.parentElement).click()
        }
    }
    
    // updating state when input changes, and validations included
    const onChange = (e) => {
        let { value } = e.target; 
     
        // STRING CASE
        if (dataType === 'string' && id === 'name' || id === 'position' || id === 'city') {
            // Make sure not to send string numbers nor white spaces nor symbols
            if (/\d/.test(value) || !(/[a-zA-Z\s{1}]$|^$/.test(value)) || /^\s+|\s{2,}/.test(value)) {
              return
            } 
        } 
        updateFormData('updateServerDataAtContext', {[id]: value, 'inputErrorMessage': ''}) // Updating state and setting error message to ''
    }
    
  return (
    <div className='w-full h-1/3 relative'>
    {
      check ?
        <div className={`${color} transition-transform ease-in-out duration-200 ${inputShow} flex flex-col w-11/12 sm:w-1/2 items-center justify-end mx-auto rounded-lg h-fit absolute top-full sm:top-1/2 left-1/2 -translate-y-full sm:-translate-y-1/2`}>
            { 
              location.pathname !== '/contact/inputJ' ?
              <>
                <label htmlFor={id} className='pl-2 py-1 text-3xl w-full mb-1'>{message}</label>
                <input data-cy='wizard-input' id={id} onChange={onChange} onKeyDown={onKey} className={`text-black ${id === 'telephone' ? 'pl-2' : 'pl-2'} py-1 text-4xl w-full`} type={inputType} value={value} placeholder={`Enter ${inputName}`} autoFocus />
                <div className='w-full text-center absolute bottom-0 left-1/2 translate-y-[110%] -translate-x-1/2 text-red-500 text-xl animate-pulse'>{formData.inputErrorMessage}</div>
              </> :
              <PhoneTest inputProps={{ inputName, color, value, id, inputType, dataType, message }} />
            }
            
        </div> :
        <div className='flex flex-col w-full h-3/4 items-center justify-center'>
            <div className='text-4xl text-center'>
              Please complete the form step by step!
            </div>
        </div>
    }
    </div>
  )
}

export default Input