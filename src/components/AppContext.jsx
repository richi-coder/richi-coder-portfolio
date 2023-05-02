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

export const inputTypes = {
    'name': 'text', // richard ramirez min
    'company': 'text', // xxx xxxx xxxx xxxx 
    'position': 'text', // xxx xxxx xxxx xxx xx *5
    'companyURL': 'url', // xxxxxxxxxx.xxxxx
    'city': 'text', // xxx xxx xxx 3 max
    'email': 'email', // xxxx@xxxx.xxx
    'telephone': 'tel',
    'contactMethod': 'text',
    'contactDate': 'date',
    'phoneCode': 'text'
}

export let dataToFront = {
    'name': '', // A
    'company': '', // B
    'position': '', // C
    'companyURL': '', // D
    'city': '', // E
    'email': '', // F
    'telephone': '', // G
    'contactMethod': '', // H 
    'contactDate': '', // I
    'resumeDownload': {
        'downloadDate': ''
        }
};

function AppContext({children}) {
    const [inputData, setInputData] = useState({
        ...dataToFront,
        'formLocation': '/contact',
        'formComplete': false,
        'isLoading': true,
        'inputShow': 'translate-x-[100vw] opacity-0',
        'buttonsLoading': false,
        'phoneTest': false,
        'inputErrorMessage': '',
        'signOutButtonClicked': false,
        'scheme': {
            '/contact/inputA': 'name',
            '/contact/inputB': 'company',
            '/contact/inputC': 'position',
            '/contact/inputD': 'companyURL',
            '/contact/inputE': 'city',
            '/contact/inputF': 'email',
            '/contact/inputG': 'telephone',
            '/contact/inputH': 'contactMethod',
            '/contact/inputI': 'contactDate',
            '/contact/inputJ': 'phoneCode',
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
        position (value) {
            setInputData({
                ...inputData,
                position: value
            })
        },
        companyURL (value) {
            setInputData({
                ...inputData,
                companyURL: value
            })
        },
        city (value) {
            setInputData({
                ...inputData,
                city: value
            })
        },
        services (value) {
            setInputData({
                ...inputData,
                services: value
            })
        },
        role (value) {
            setInputData({
                ...inputData,
                role: value
            })
        },
        workMode (value) {
            setInputData({
                ...inputData,
                workMode: value
            })
        },
        email (value) {
            setInputData({
                ...inputData,
                email: value
            })
        },
        telephone (value) {
            setInputData({
                ...inputData,
                telephone: value
            })
        },
        contactMethod (value) {
            setInputData({
                ...inputData,
                contactMethod: value
            })
        },
        contactDate (value) {
            setInputData({
                ...inputData,
                contactDate: value
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
        buttonsLoading (value) {
            setInputData({
                ...inputData,
                buttonsLoading: value
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