import React, { useEffect, useState } from 'react'
import LoginButton from './LoginButton'

function Presentation() {
  let emailCopied = document.querySelector('#emailCopied');

  function copyToClipboard() {
    navigator.clipboard.writeText('richicoder@gmail.com');
    emailCopied.classList.add('emailCopied');
  }

  useEffect(() => {
    window.addEventListener('animationend', () => {
      emailCopied.classList.remove('emailCopied');
    })
  }, [])
  
    
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-around lg:justify-center relative'>
          <div className='absolute top-0 -translate-y-[120%] sm:-translate-y-[50%] text-5xl flex flex-col items-center show select-none'>
                <p>Contact</p>
                <h1 className="p-0 m-0 contactFormLogo" style={{fontFamily: 'Orbitron'}}>
                richi<span className="text-gradient">Coder</span>
                </h1>
                <button onClick={copyToClipboard} className='text-lg text-center pt-5 md:pt-2 md:hover:scale-150 transition-transform'><p className='select-text'>richicoder@gmail.com</p></button>
          </div>
          <div className='text-2xl show w-2/3 sm:w-fit text-center select-none italic'>Please select an access method</div>
          <LoginButton />
    </div>
  )
}

export default Presentation