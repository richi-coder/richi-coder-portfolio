import { getAuth, signOut } from 'firebase/auth';
import React from 'react'

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
    <button
    onClick={logout}
    className="bg-orange-700 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded text-2xl">
        Use another account
    </button>
  )
}

export default SignOutButton