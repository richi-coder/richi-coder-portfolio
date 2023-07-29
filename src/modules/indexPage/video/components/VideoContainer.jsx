import VideoFallback from "./VideoFallback";
import "../styles/video.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { videoTrigger } from "../scripts/videoTrigger";

const RichiVideo = lazy(() => import("./MyVideo.jsx"));
const sceneVideoTrigger = videoTrigger();


export default function VideoContainer() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {

    let videoState = true;

    sceneVideoTrigger.on('end', function() {
      if (videoState) {
        setLoadVideo(true)
        videoState = false;
        }
    })
    
  }, []);

  

  return (
    <div
      className="videoContainer w-full h-fit mx-auto z-10 relative -mt-1 bg-[rgb(10,10,10)] flex flex-col items-center justify-center">
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
