import { isMobile, scrollBar } from "../../scripts/main";
import VideoFallback from "./VideoFallback";
import "./video.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { videoTrigger } from "./videoTrigger";

const RichiVideo = lazy(() => import("./MyVideo.jsx"));
const sceneVideoTrigger = videoTrigger();


export default function VideoContainer() {
  const [loadVideo, setLoadVideo] = useState(false);
  console.log('videoRENDER');

  const checkPositionDesktop = (status) => {
    if (status.offset.y > 5000) {
      setLoadVideo(true)
    }
  }
  const checkPositionMobile = (e) => {
    if (window.scrollY() > 5000) {
      setLoadVideo(true)
    }
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //     console.log('checking');
    //     if (isMobile) {
    //       window.addEventListener('scroll', (e) => checkPositionMobile(e))
    //       clearInterval(interval)
    //       return
    //     } else {
    //       if (scrollBar) {
    //         console.log('got It');
    //         scrollBar.addListener(checkPositionDesktop)
    //         clearInterval(interval)
    //         return
    //       } // LACKING MOBILE
    //     }
        
     
        
        
    // }, 500);
    let videoState = true;
    sceneVideoTrigger.on('end', function() {
      
      if (videoState) {
        setLoadVideo(true)
        console.log('CHecking video trigger');
        videoState = false;
        }
      
    })
  }, []);

  

  return (
    <div
      className="videoContainer relative w-full sm:w-full mx-auto z-10 h-[70vh] -mt-1 bg-[rgb(10,10,10)]"
    >
      <div id='video' className="w-full h-full relative flex flex-col items-center justify-center">
      {
        loadVideo ? (
          <Suspense fallback={<VideoFallback />}>
            <RichiVideo />
          </Suspense>
        ) : null
      }
      </div>
    </div>
  );
}
