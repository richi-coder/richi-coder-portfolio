import YouTube from "react-youtube";
import VideoFallback from "./VideoFallback";
import useVideo from "../hooks/useVideo";
import { videoPlay } from "../scripts/videoPlay";

const sceneVideoPlay = videoPlay();

export default function MyVideo() {
  const [video, setVideo, videoFunctions] = useVideo(sceneVideoPlay)
  
  const { mount, opts } = video;
  const { onPlayerReady, onPlayerEnd } = videoFunctions

  return (
    <>
      <YouTube 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        videoId="GSRLqV3OE18" 
        opts={opts} 
        onEnd={onPlayerEnd}
        onReady={onPlayerReady} />
      {mount ? null : <VideoFallback />}
    </>
  );
}
