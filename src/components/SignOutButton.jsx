import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router';

function SignOutButton() {
    const auth = getAuth();
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth)
            .then(() => {
            // Sign-out successful.
            console.log('Signed out')
            navigate('/contact')
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