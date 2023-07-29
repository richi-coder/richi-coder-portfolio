import { useEffect, useState } from "react";
import { isMobile, scrollBar } from "@scripts/main";

export default function useVideo(sceneVideoPlay) {
  const [video, setVideo] = useState({
    mount: false,
    opts: {
      rel: 0,
      width: 1000,
      height: (1000 * 8.5) / 16,
      playerVars: {
        autoplay: 0,
      },
    },
  });


  const onPlayerReady = (e) => {
    const { target } = e;
    target.playVideo();
    target.pauseVideo();

    let played = false;
    sceneVideoPlay.on("progress", function () {
      if (!played) {
        setVideo({
          ...video,
          mount: true,
        });
        target.playVideo();
        played = true;
      }
    });
  };

  const onPlayerEnd = (e) => {
    const { target } = e;
    target.stopVideo();
    if (isMobile) {
      document.querySelector('#video').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
    scrollBar.scrollIntoView(document.querySelector('.contactContainer'))
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setVideo({
        ...video,
        opts: {
          ...video.opts,
          width: window.innerWidth,
          height: (window.innerWidth * 9) / 16,
        },
      });
    }
  }, []);

  return [video, setVideo, { onPlayerReady, onPlayerEnd }];
}
