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
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
    </button>
  )
}

export default SignOutButton