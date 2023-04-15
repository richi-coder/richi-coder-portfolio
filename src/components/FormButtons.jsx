import React from 'react'
import FormButton from './FormButton'


function FormButtons() {
  
  return (
    <div className='flex flex-row items-center justify-around py-16'>
      <FormButton direction={'backward'} />
      <FormButton direction={'forward'} />
    </div>
  )
}

export default FormButtons