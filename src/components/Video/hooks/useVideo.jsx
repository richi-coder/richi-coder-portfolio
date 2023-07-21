import React, { useEffect, useState } from "react";

export default function useVideo(sceneVideoPlay) {
  const [video, setVideo] = useState({
    mount: false,
    opts: {
      width: 1000,
      height: (1000 * 8.5) / 16,
      playerVars: {
        autoplay: 0,
      },
    },
  });

  console.log("MyVideo render");

  const onPlayerReady = (e) => {
    console.log('READY');
    const { target } = e;

    setVideo({
      ...video,
      mount: true,
    });

    let played = false;
    sceneVideoPlay.on("progress", function () {
      if (!played) {
        target.playVideo();
        played = true;
      }
      return;
    });
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
        setVideo({
            ...video,
            opts: {
                ...video.opts,
                width: window.innerWidth,
                height: (window.innerWidth * 9) / 16,
              }
        })
    }
  }, []);

  return [video, setVideo, { onPlayerReady }];
}
