import React from 'react'
import LoginButton from './LoginButton'

function Presentation() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-around lg:justify-center relative'>
          <div className='absolute top-0 -translate-y-[200%] sm:-translate-y-full text-5xl flex flex-col items-center show'>
                <p>Contact</p>
                <h1 className="p-0 m-0 contactFormLogo" style={{fontFamily: 'Orbitron'}}>
                richi<span className="text-gradient">Coder</span>
                </h1>
          </div>
          <div className='text-2xl show w-2/3 sm:w-fit text-center'>Please select an access method</div>
          <LoginButton />
    </div>
  )
}

export default Presentation