import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useFormContext } from './AppContext';
import { userAnotherAccount } from '../scripts/firebase';

function SignOutButton() {
    const auth = getAuth();
    const location = useLocation().pathname;
    const formData = useFormContext();

    const logout = () => {
        userAnotherAccount()
        }

    useEffect(() => {
        // if (formData.formComplete) {
        //     setTimeout(() => {
        //         logout()
        //     }, 15000);
        // }
    }, [formData.formComplete])
    

  return (
    <div className='show flex-grow flex flex-col items-center justify-center'>
        {
        location === '/contact' || location === '/contact/formend' ?
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