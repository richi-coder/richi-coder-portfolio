import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import './styles/show.css'

function SignOutButton() {
    const auth = getAuth();

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
        <button
        onClick={logout}
        className="bg-purple-700 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded text-2xl hover:-translate-y-[1rem] transition-all">
            Use another account
        </button>
    </div>
  )
}

export default SignOutButton