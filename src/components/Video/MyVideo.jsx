import React, { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import VideoFallback from "./VideoFallback";

export default function MyVideo() {
  const [mount, setMount] = useState(false);
  const [opts, setOpts] = useState({
    width: 1000,
    height: (1000 * 8.5) / 16,
    playerVars: {
      autoplay: 0,
    },
  });
  console.log('MyVideo render');

  const onPlayerReady = (e) => {
    // e.target.play();
    console.log("to play");
    setMount(true);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setOpts({
        width: window.innerWidth,
        height: (window.innerWidth * 9) / 16,
        playerVars: {
          autoplay: 1,
        },
      });
    }
  }, []);

  return (
    <>
      <YouTube 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        videoId="GSRLqV3OE18" 
        opts={opts} 
        onReady={onPlayerReady} />
      {mount ? null : <VideoFallback />}
    </>
  );
}
