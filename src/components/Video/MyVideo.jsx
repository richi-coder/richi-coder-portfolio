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

  const onPlayerReady = (e) => {
    // e.target.play();
    console.log("to play");
    setMount(true);
  };

  useEffect(() => {
    if (window.innerWidth < 1000) {
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
      <YouTube videoId="GSRLqV3OE18" opts={opts} onReady={onPlayerReady} />
      {mount ? null : <VideoFallback />}
    </>
  );
}
