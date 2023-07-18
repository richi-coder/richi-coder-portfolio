import "./video.css";
import React, { Suspense, lazy, useEffect, useState } from "react";

const RichiVideo = lazy(() => import("./MyVideo.jsx"));


export default function VideoContainer() {
  const [loadVideo, setLoadVideo] = useState(false);

  const checkPosition = (status) => {
    console.log('checking status', status.offset);
    if (status.offset.y > 5000) {
      setLoadVideo(true)
    }

  }

  useEffect(() => {
    const interval = setInterval(() => {
        console.log('checking');
        if (window.scrollbar) {
          console.log('got It');
          window.scrollbar.addListener(checkPosition)
          clearInterval(interval)
          return
        } // LACKING MOBILE
        
    }, 500);

  }, []);

  return (
    <div
      id="video"
      className="videoContainer relative w-full sm:w-full mx-auto z-10 h-[70vh] flex flex-col items-center justify-center -mt-1 bg-[rgb(10,10,10)]"
    >
      {
        loadVideo ? (
          <Suspense fallback={<div>CARGANDO VIDEO!</div>}>
            <RichiVideo />
          </Suspense>
        ) : null
      }
    </div>
  );
}
