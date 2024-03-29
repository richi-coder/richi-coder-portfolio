import { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useFormContext, useUpdateFormContext } from '../context/AppContext';
import { userAnotherAccount } from '@services/firebase';

function SignOutButton() {
    const location = useLocation().pathname;
    const formData = useFormContext();
    const updateFormData = useUpdateFormContext();

    const logout = () => {
        updateFormData('isLoading', true)
        userAnotherAccount()
    }

    useEffect(() => {
        if (formData.formComplete) {
            setTimeout(() => {
                logout()
            }, 60000);
        }
    }, [formData.formComplete])
    

  return (
    <div className='show flex-grow flex flex-col items-center justify-center px-4'>
        {
        location === '/contact/' || location === '/contact/formend' || location === '/contact' || location === '/contact/formend/'  ?
        <button
        onClick={logout}
        className="bg-purple-700  text-white font-bold py-2 px-4 rounded text-2xl transition-all ladder">
            Use another account
        </button> :
        null
        }
    </div>
  )
}

export default SignOutButton