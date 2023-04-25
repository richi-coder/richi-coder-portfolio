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
    'company': '',
    'position': '',
    'companyURL': '',
    'city': '',
    'services': '',
    'role': '',
    'workMode': '',
    'email': '',
    'telephone': '',
    'contactMethod': '',
    'contactDate': '',
};

function AppContext({children}) {
    const [inputData, setInputData] = useState({
        ...dataToFront,
        'formLocation': '/contact',
        'formComplete': false,
        'isLoading': true,
        'inputShow': 'translate-x-[100vw] opacity-0',
        'scheme': {
            '/contact/inputA': 'name',
            '/contact/inputB': 'lastname',
            '/contact/inputC': 'company',
            '/contact/inputD': 'position',
            '/contact/inputE': 'companyURL',
            '/contact/inputF': 'city',
            '/contact/inputG': 'services',
            '/contact/inputH': 'role',
            '/contact/inputI': 'workMode',
            '/contact/inputJ': 'email',
            '/contact/inputK': 'telephone',
            '/contact/inputL': 'contactMethod',
            '/contact/inputM': 'contactDate',
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