import { createContext, useContext, useState } from 'react'

const FormContext = createContext();
const UpdateFormContext = createContext();
export const useFormContext = () => {
    return useContext(FormContext)
}
export const useUpdateFormContext = () => {
    return useContext(UpdateFormContext)
}




function AppContext({children}) {
    const [inputData, setInputData] = useState({
        'name': '',
        'lastname': '',
        'venture': '',
        'formLocation': null
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