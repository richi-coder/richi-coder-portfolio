import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from "firebase/auth";
import { app } from "../scripts/firebase";



function LoginButton() {
    const auth = getAuth(app)
    const googleLogin = () => {
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(res => {
                console.log('ENTRO')
                const user = res.user;
                console.log(user)
            })
            .catch(res => console.log('ERROR'))
    }

    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => {
            console.log('ENTRO')
            const user = res.user;
            console.log(user)
        })
        .catch(res => console.log('ERROR'))
    }

    const logout = () => {
        alert('lacking code')
    }

  return (
    <>
    <button
    onClick={googleLogin}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Google Login
    </button>
    <button
    onClick={githubLogin}
    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Github Login
    </button>
    <button
    onClick={logout}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Google Logout
    </button>
    </>
  )
}

export default LoginButton