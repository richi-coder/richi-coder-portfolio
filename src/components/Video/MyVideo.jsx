import React, { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";

export default function MyVideo() {
  const [mount, setMount] = useState(false);
  const [opts, setOpts] = useState({
    width: 1000,
    height: (1000 * 8.5) / 16,
    playerVars: {
      autoplay: 0,
    },
  })

  const onPlayerReady = (e) => {
    // e.target.play();
    console.log('to play');
  };

  useEffect(() => {
      if (window.innerWidth < 1000) {
        setOpts({
          width: window.innerWidth,
          height: window.innerWidth * 9 / 16,
          playerVars: {
            autoplay: 1,
          },
        })
      }
      setMount(true)
  }, [])
  

  return (
    <>
      {
        <YouTube
          videoId="GSRLqV3OE18"
          opts={opts}
          onReady={
            mount ? onPlayerReady : console.log("Youtube not mounted yet!")
          }
        />
      }
    </>
  );
}
