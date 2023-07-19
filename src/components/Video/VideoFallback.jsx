import '../styles/firstLayer.css' 

export default function VideoFallback() {
  return (
    <span className="firstLayer w-[1000px] aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></span>
  )
}
