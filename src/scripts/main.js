import { scrollFunction } from "./scrollFunction";
import Scrollbar from 'smooth-scrollbar';

// import ScrollMagic from 'scrollmagic'

// smooth-scrollbar
let scrollbar = Scrollbar.init(document.body);

// Parallax Effect with scrollMagic
// let controller = new ScrollMagic.Controller();

// let tween = new TimelineMax ()
// 		.add([
// 			TweenMax.fromTo(".firstView", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
// 			TweenMax.fromTo("body", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
// 		]);

// let scene = new ScrollMagic.Scene({triggerElement: "#view-navbar", duration: $(window).width()})
// 					.setTween(tween)
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller)

// Add classes to hide elements (case using JS)
window.addEventListener("DOMContentLoaded", () => {
  // Video: injecting a class to make it not visible
  const video = document.getElementById("video");
  video.classList.add("videoNotShown");
  // Projects: injecting a class to make them not visible
  const projects = Array.from(document.querySelectorAll(".project-component"));
  projects.forEach(project => {
    console.log(project)
    project.classList.add("notShown")
  })
})
// new scrollbar listener, instead of window.addEventListener
scrollbar.addListener(() => {
  console.log("Scrolling")
    scrollFunction("PORTFOLIO", "notShown", "showUp")
    scrollFunction("RICHI-SHOP", "notShown", "showUp")
    scrollFunction("4PICS-1WORD", "notShown", "showUp")
    scrollFunction("CALCULATOR", "notShown", "showUp")
    scrollFunction("video", "videoNotShown", "showVideo")
    //scrollFunction("projects-title", "titleNotShown", "showTitle")
  })