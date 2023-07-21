import React, { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import VideoFallback from "./VideoFallback";
import { videoPlay } from "./videoPlay";
import useVideo from "./hooks/useVideo";

const sceneVideoPlay = videoPlay();

export default function MyVideo() {
  const [video, setVideo, videoFunctions] = useVideo(sceneVideoPlay)
  const { mount, opts } = video;
  const { onPlayerReady } = videoFunctions
  // const [mount, setMount] = useState(false);
  // const [opts, setOpts] = useState({
  //   width: 1000,
  //   height: (1000 * 8.5) / 16,
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // });
  // console.log('MyVideo render');

  // const onPlayerReady = (e) => {
  //   const { target } = e;
  //   console.log("to play");
  //   setMount(true);
  //   let played = false;
  //     sceneVideoPlay.on('progress', function() {
  //       console.log('PLAYING READY', target);
        
  //       if (!played) {
  //         target.playVideo()
  //         played = true;
  //       }
  //       return
  //     })
  // };

  // const onPlaying = () => {
  //   console.log('PLAYING VIDEO!');
  // }


  // useEffect(() => {
  //   if (window.innerWidth < 1024) {
  //     setOpts({
  //       ...opts,
  //       width: window.innerWidth,
  //       height: (window.innerWidth * 9) / 16,
  //     });
  //   }
  // }, []);

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
