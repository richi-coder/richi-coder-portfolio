import React from 'react'
import { useUpdateFormContext } from './AppContext'

function Input({inputName, color, value, id}) {
  const updateFormData = useUpdateFormContext();
    const onChange = (e) => {
        updateFormData(id, e.target.value)
    }
    
  return (
    <div className={color}>
        <div>{inputName}</div>
        <input onChange={onChange} className={`text-black`} type="text" value={value} placeholder={`Enter ${inputName}`} />
    </div>
  )
}

export default Input