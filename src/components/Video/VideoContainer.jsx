import VideoFallback from "./VideoFallback";
import "./video.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { videoTrigger } from "./videoTrigger";
import Shade from "./Shade";

const RichiVideo = lazy(() => import("./MyVideo.jsx"));
const sceneVideoTrigger = videoTrigger();


export default function VideoContainer() {
  const [loadVideo, setLoadVideo] = useState(false);
  console.log('videoRENDER');

  useEffect(() => {

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
      className="videoContainer w-full h-fit mx-auto z-10 relative -mt-1 bg-[rgb(10,10,10)] flex flex-col items-center justify-center">
      {/* <Shade /> */}
      <div id='video' className="w-full lg:w-[1024px] aspect-video relative">
      {
        loadVideo ? (
          <Suspense fallback={<VideoFallback />}>
            <RichiVideo />
          </Suspense>
        ) : <VideoFallback />
      }
      </div>
    </div>
  );
}
