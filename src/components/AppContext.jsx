import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState } from 'react'
import { auth } from '../scripts/firebase';

const FormContext = createContext();
const UpdateFormContext = createContext();
export const useFormContext = () => {
    return useContext(FormContext)
}
export const useUpdateFormContext = () => {
    return useContext(UpdateFormContext)
}

let dataToFront = {
    'name': '',
    'lastname': '',
    'venture': '',
};

    
    // onAuthStateChanged(auth, (firebaseUser) => {
    //     if(firebaseUser) {
    //         console.log('logueado')
    //         // Consult database
    //     } else {
    //         console.log('no log')
    //         // Just return plain object
    //     }
    //     console.log('dataTOfront', dataToFront)
    // })


function AppContext({children}) {
    const [inputData, setInputData] = useState({
        ...dataToFront,
        'formLocation': '/contact',
        'formComplete': false,
        'isLoading': true
    })

    const app = {
        name (value) {
            setInputData({
                ...inputData,
                name: value
            })
        },
        lastname (value) {
            setInputData({
                ...inputData,
                lastname: value
            })
        },
        venture (value) {
            setInputData({
                ...inputData,
                venture: value
            })
        },
        formLocation (value) {
            setInputData({
                ...inputData,
                formLocation: value
            })
        },
        formComplete (value) {
            setInputData({
                ...inputData,
                formComplete: value
            })
        },
        updateServerDataAtContext (data) {
            setInputData({
                ...inputData,
                ...data
            })
        },
        isLoading (value) {
            setInputData({
                ...inputData,
                isLoading: value
            })
        }
    }

    const updateInputData = (input, value) => {
        app[input](value)
    }



  return (
    <FormContext.Provider value={inputData}>
        <UpdateFormContext.Provider value={updateInputData}>
        {children}
        </UpdateFormContext.Provider>
    </FormContext.Provider>
  )
}

export default AppContext