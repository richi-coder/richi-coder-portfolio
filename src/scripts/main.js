import { scrollFunction } from "./scrollFunction";
import Scrollbar from 'smooth-scrollbar';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power0 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// 1 smooth-scrollbar
let scrollbar = Scrollbar.init(document.body);

// 2 Parallax Effect with scrollMagic
let controller = new ScrollMagic.Controller({
  refreshInterval: 0 
});

let tweenLogo = new TimelineMax ()
		.add([
			TweenMax.fromTo(".firstView", 20, { yPercent: '0', ease: Power0.easeNone}, {yPercent: '80', ease: Power0.easeNone},  ),
		]);

let sceneLogo = new ScrollMagic.Scene({
  triggerElement: "#video",
  triggerHook: "onEnter",
  duration: '100%',
  })
					.setTween(tweenLogo)
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller)

let tweenNumber = new TimelineMax ()
    .add([
      TweenMax.fromTo("#n-01", 1, {autoAlpha: 0, yPercent: -50, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 50, ease: Power0.easeNone},)
    ])

let sceneNumber = new ScrollMagic.Scene({
  offset: 200,
  triggerElement: ".portfolio",
  duration: '100%',
})
    .setTween(tweenNumber)
    .addTo(controller)

// 3 Add classes to hide elements (case using JS)
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

// 4 new scrollbar listener, instead of window.addEventListener
scrollbar.addListener(() => {
  console.log("Scrolling")
  sceneLogo.refresh()
  sceneNumber.refresh()
    scrollFunction("PORTFOLIO", "notShown", "showUp")
    scrollFunction("RICHI-SHOP", "notShown", "showUp")
    scrollFunction("4PICS-1WORD", "notShown", "showUp")
    scrollFunction("CALCULATOR", "notShown", "showUp")
    scrollFunction("video", "videoNotShown", "showVideo")
    scrollFunction("projects-title", "titleNotShown", "showTitle")
  })