import React from 'react'
import LoginButton from './LoginButton'
import './styles/title.css'

function Presentation() {
  return (
    <div className='show w-full h-full flex flex-col items-center relative'>
          <div className='absolute top-0 -translate-y-full text-5xl flex flex-col items-center'>
                <p>Contact</p>
                <h1 className="p-0 m-0 contactFormLogo" style={{fontFamily: 'Orbitron'}}>
                richi<span className="text-gradient">Coder</span>
                </h1>
          </div>
          <div className='text-2xl'>Please select an access method</div>
          <LoginButton />
    </div>
  )
}

export default Presentation