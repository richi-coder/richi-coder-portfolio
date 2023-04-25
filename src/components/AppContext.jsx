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
    'company': ''
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
        'isLoading': true,
        'inputShow': 'translate-x-[100vw] opacity-0',
        'scheme': {
            '/contact/input1': 'name',
            '/contact/input2': 'lastname',
            '/contact/input3': 'company',
          }
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
        company (value) {
            setInputData({
                ...inputData,
                company: value
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
        },
        inputShow (value) {
            setInputData({
                ...inputData,
                inputShow: value
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