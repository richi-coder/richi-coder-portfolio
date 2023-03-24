import { scrollFunction } from "./scrollFunction";
import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power0 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);

// 1 smooth-scrollbar
let scrollbar = Scrollbar.init(document.body);
// Force fixing:
const fixedPhoto = document.querySelector(".photo");

// 2 Parallax Effect with scrollMagic
let controller = new ScrollMagic.Controller();

    // Logo scene
let tweenLogo = new TimelineMax ()
		.add([
			TweenMax.fromTo(".logoContainer", 20, { yPercent: '0', ease: Power0.easeNone}, {yPercent: '50', ease: Power0.easeNone},  0),
		]);

let sceneLogo = new ScrollMagic.Scene({
  triggerElement: ".firstView",
  triggerHook: 0,
  duration: '100%',
  })
					.setTween(tweenLogo)
					.addIndicators({name: "logoScene"}) // add indicators (requires plugin)
					.addTo(controller)

    // Bio Photo scene
// let tweenBio = new TimelineMax ()
// 		.add([
// 			TweenMax.fromTo(".shortbio", 10, { yPercent: '0', ease: Power0.easeNone}, {yPercent: '100', ease: Power0.easeNone},  ),
// 		]);

let sceneBio = new ScrollMagic.Scene({
  triggerElement: ".firstView",
  triggerHook: 0,
  duration: '500%',
 },)
					.setPin("#photo", {pushFollowers: false})
          .addIndicators({name: "1 (photo: 500%)"})
					.addTo(controller)

    // Number scene          
let tweenNumber = new TimelineMax ()
    .add([
      TweenMax.fromTo("#n-01", 10, {autoAlpha: 0, yPercent: -50, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 50, ease: Power0.easeNone}, 0)
    ])

let sceneNumber = new ScrollMagic.Scene({
  offset: 150,
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
scrollbar.addListener((status) => {
  const offset = status.offset;
  fixedPhoto.style.top = offset.y + 'px'
  fixedPhoto.style.left = offset.x + 'px';
  sceneLogo.refresh()
  sceneNumber.refresh()
    scrollFunction("PORTFOLIO", "notShown", "showUp")
    scrollFunction("RICHI-SHOP", "notShown", "showUp")
    scrollFunction("4PICS-1WORD", "notShown", "showUp")
    scrollFunction("CALCULATOR", "notShown", "showUp")
    scrollFunction("video", "videoNotShown", "showVideo")
    scrollFunction("projects-title", "titleNotShown", "showTitle")
  })