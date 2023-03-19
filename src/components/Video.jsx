import { useEffect, useRef } from "react"
import { scrollFunction } from "../scripts/scrollFunction";
import "./styles/video.css"

function Video() {
    const videoComponent = useRef();
    useEffect(() => {
        scrollFunction(videoComponent, "videoNotShown", "showVideo")
    }, [])
    
  return (
    <div ref={videoComponent} className="videoNotShown relative bg-gray-700 aspect-video w-full sm:w-3/4 mx-auto my-40 z-50"></div>
  )
}

export default Video