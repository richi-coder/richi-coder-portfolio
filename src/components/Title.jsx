import { useEffect, useRef } from "react"
import { scrollFunction } from "../scripts/scrollFunction";
import "./styles/title.css"

function Title() {
    const titleComponent = useRef();
    useEffect(() => {
        scrollFunction(titleComponent, "titleNotShown", "showTitle")
    }, [])
    
  return (
    <div ref={titleComponent} className='title text-white text-5xl sm:text-8xl z-50 sm:py-40 text-left ml-10 titleNotShown'>richi<span className="text-gradient">Projects</span></div>
  )
}

export default Title