import React from 'react'
import { useUpdateFormContext } from './AppContext'
import { useNavigate } from 'react-router';

function Input({inputName, color, value, id}) {
  const updateFormData = useUpdateFormContext();
  const navigate = useNavigate()
    const onChange = (e) => {
        updateFormData(id, e.target.value)
    }
    
  return (
    <div className={color}>
        <div>{inputName}</div>
        <input onChange={onChange} className={`text-black`} type="text" value={value} />
    </div>
  )
}

export default Input