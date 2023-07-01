import { useEffect } from "react";

function EmailButton({ classStyle }) {
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
    <button onClick={copyToClipboard} className={`${classStyle} md:hover:scale-125 transition-transform`}><p className='select-text'>richicoder@gmail.com</p></button>
  )
}

export default EmailButton