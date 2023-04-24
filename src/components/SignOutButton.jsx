import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import './styles/show.css'
import { useLocation } from 'react-router';

function SignOutButton() {
    const auth = getAuth();
    const location = useLocation().pathname;

    const logout = () => {
        signOut(auth)
            .then(() => {
            // Sign-out successful.
            console.log('Signed out')
            window.localStorage.removeItem('uSaLsFiAf')
            window.location.replace('/contact')
            })
            .catch((error) => {
                // An error happened.
            console.log('Error trying to sign out')
            });
        }

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