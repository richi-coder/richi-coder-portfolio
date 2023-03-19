import { scrollFunction } from "./scrollFunction";

window.addEventListener("scroll", () => {
    scrollFunction("richi-shop", "notShown", "showUp")
    scrollFunction("4pics-1word", "notShown", "showUp")
    scrollFunction("calculator", "notShown", "showUp")
    scrollFunction("video", "videoNotShown", "showVideo")
    scrollFunction("projects-title", "titleNotShown", "showTitle")
  })