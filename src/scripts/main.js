import { scrollFunction } from "./scrollFunction";
import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power0 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);

// isMobile?
let isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
let numberOffset = 0;
let numberYpercent = 0;
let numberYpercentStart = 0;
let skillsFixedDuration = '';
// let skillsContainer = document.querySelector('.skillsTitleContainer');
if (isMobile) {
  mobileScrolling()
  numberOffset = -500;
  numberYpercentStart = 0;
  numberYpercent = 80;
  skillsFixedDuration = '400%';
  // skillsContainer.style.height = '100vh'
} else {
  desktopScrolling()
  numberOffset = -200;
  numberYpercentStart = -20;
  numberYpercent = 50;
  skillsFixedDuration = '100%' //0.01%
  // skillsContainer.style.height = '400vh'
}

// 1 first-scroll
function firstScroll(element) {
  window.addEventListener("animationend", (e) => {
    if (e.target.classList.contains("view-navbar")) {
      element.scroll({
        top: 200,
        left: 0,
        behavior: 'smooth'
      })
     }
   })
}



// 2 Parallax Effect with scrollMagic
let controller = new ScrollMagic.Controller();

    // Logo scene
let tweenLogo = new TimelineMax ()
		.add([
			TweenMax.fromTo(".logoContainer", 20, { yPercent: '0', ease: Power0.easeNone}, {yPercent: '50', ease: Power0.easeNone},  0),
      TweenMax.fromTo(".photolayer", { filter: 'blur(50px)', ease: Power0.easeNone}, { filter: 'blur(0px)', ease: Power0.easeNone})
		]);

let sceneLogo = new ScrollMagic.Scene({
  triggerElement: ".firstView",
  triggerHook: 0,
  duration: '100%',
  })
          
					.setTween(tweenLogo)
					// .addIndicators({name: "logoScene"}) // add indicators (requires plugin)
					.addTo(controller)
    
    // Nav Logo scene
let sceneNavlogo = new ScrollMagic.Scene({
  triggerElement: "#shortbio",
  triggerHook: 0,
  })
          
					.setClassToggle(".nav-logo", "typing-nav-logo")
					// .addIndicators({name: "nav-logo"}) // add indicators (requires plugin)
					.addTo(controller)

    // Bio Photo scene
let sceneBio = new ScrollMagic.Scene({
  triggerElement: ".firstView",
  triggerHook: 0,
},)
          .setPin("#photo")
          // .addIndicators({name: "1 (photo: 500%)"}) 
					.addTo(controller)
          
    // Skills Fixing
// let sceneSkillFixing = new ScrollMagic.Scene({
//   triggerElement: ".firstView",
//   triggerHook: 0,
// },)
//           .setPin(".skillsTitleContainer")
//           .addIndicators({name: "1 (photo: 500%)"}) 
// 					.addTo(controller)          

    // Photo animation
let tweenPhoto = new TimelineMax()
    .add([
      TweenMax.to(".photolayer", {autoAlpha: 1, ease: Power0.easeNone, reversed: false }),
      TweenMax.fromTo("#shortbio-title", {autoAlpha:0}, {autoAlpha: 1, color: 'black', ease: Power0.easeNone, reversed: false} ),
      TweenMax.to(".bio", {backgroundColor: 'white', ease: Power0.easeNone, reversed: false} ),
      // TweenMax.to("#photo", {position: 'relative', ease: Power0.easeNone})
    ])

let scenePhoto = new ScrollMagic.Scene({
  triggerElement: "#shortbio",
  triggerHook: 0,
  duration: '30%',
  offset: 100 
})
      .setTween(tweenPhoto)
      // .addIndicators({name: "photoOpacity"})
      .addTo(controller)

    // Mybio animation

    // 1
let tweenMybio1 = new TimelineMax()
    .add([
      TweenMax.fromTo("#bio1", {autoAlpha: 0, ease: Power0.easeNone}, {autoAlpha: 1, ease: Power0.easeNone }),
      TweenMax.fromTo("#bio1", {yPercent: 0, ease: Power0.easeNone} , {yPercent: 50, ease: Power0.easeNone} )
    ])

let sceneMybio1 = new ScrollMagic.Scene({
  triggerElement: "#shortbio",
  triggerHook: 0, 
  duration: '30%',
  offset: 500
})
      // .setClassToggle(".bio", 'fixed')
      .setTween(tweenMybio1)
      // .setPin("#bio1", {pushFollowers: true }, )
      // .addIndicators({name: "bioFixed 1"})
      .addTo(controller)

let tweenMybio2 = new TimelineMax()
    .add([
      TweenMax.fromTo("#bio2", {autoAlpha: 0, ease: Power0.easeNone}, {autoAlpha: 1, ease: Power0.easeNone }),
      TweenMax.fromTo("#bio2", {yPercent: 0, ease: Power0.easeNone} , {yPercent: 100, ease: Power0.easeNone} )
    ])

let sceneMybio2 = new ScrollMagic.Scene({
  triggerElement: "#shortbio",
  triggerHook: 0,
  duration: '30%',
  offset: 750
})
      // .setClassToggle(".bio", 'fixed')
      .setTween(tweenMybio2)
      // .setPin("#bio2", {pushFollowers: true })
      // .addIndicators({name: "bioFixed 2"})
      .addTo(controller)

      // sceneLayerBlack
let tweenLayer = new TimelineMax()
    .add([
      TweenMax.to(".photolayer", {backgroundColor: 'rgb(10,10,10)', zIndex: 50, ease: Power0.easeNone} ),
      TweenMax.to("#shortbio-title", {color: 'white', ease: Power0.easeNone} ),
      TweenMax.to(".bio", {color: 'white', backgroundColor: 'rgb(10,10,10)', ease: Power0.easeNone} )
    ])

let sceneLayer = new ScrollMagic.Scene({
  triggerElement: ".portfolio",
  triggerHook: 1,
  offset: -1500
})
      .setTween(tweenLayer)
      .addIndicators({name: "layerBlack"})
      .addTo(controller)




      // sceneMybioOff
let tweenOff = new TimelineMax()
    .add([
      TweenMax.to(".bio", {autoAlpha: 0, ease: Power0.easeNone }),
      TweenMax.to(".photolayer", 5, {autoAlpha: 0, ease: Power0.easeNone}, 0 )
    ])

let sceneMybioOff = new ScrollMagic.Scene({
  triggerElement: ".portfolio",
  triggerHook: 1,
  offset: -800 
})
      .setTween(tweenOff)
      // .addIndicators({name: "videoContainer"})
      .addTo(controller)

    // Number scene          
let tweenNumber1 = new TimelineMax ()
    .add([
      TweenMax.fromTo("#n-01", {autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone} )
    ])

let sceneNumber1 = new ScrollMagic.Scene({
  triggerElement: "#n-01",
  duration: '100%',
  triggerHook: 0,
  offset: numberOffset
})
    .setTween(tweenNumber1)
    // .addIndicators({name: "Number 01"})
    .addTo(controller)

let tweenNumber2 = new TimelineMax ()
    .add([
      TweenMax.fromTo("#n-02", 15, {autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone},0)
    ])

let sceneNumber2 = new ScrollMagic.Scene({
  triggerElement: "#n-02",
  duration: '100%',
  triggerHook: 0,
  offset: numberOffset
})
    .setTween(tweenNumber2)
    // .addIndicators({name: "Number 02"})
    .addTo(controller)

let tweenNumber3 = new TimelineMax ()
    .add([
      TweenMax.fromTo("#n-03", 15, {autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone},0)
    ])

let sceneNumber3 = new ScrollMagic.Scene({
  triggerElement: "#n-03",
  duration: '100%',
  triggerHook: 0,
  offset: numberOffset
})
    .setTween(tweenNumber3)
    // .addIndicators({name: "Number 03"})
    .addTo(controller)

// let tweenNumber4 = new TimelineMax ()
//     .add([
//       TweenMax.fromTo("#n-04", 15, {autoAlpha: 0, yPercent: -20, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercernt, ease: Power0.easeNone},0)
//     ])

// let sceneNumber4 = new ScrollMagic.Scene({
//   triggerElement: "#n-04",
//   duration: '100%',
//   triggerHook: 0,
//   offset: numberOffset
// })
//     .setTween(tweenNumber4)
//     // .addIndicators({name: "Number 04"})
//     .addTo(controller)

    // Project Details scene          
// let tweenProjectDetails = new TimelineMax ()
//     .add([
//       TweenMax.fromTo(".project-details", 15, {autoAlpha: 0, yPercent: -50, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 0, ease: Power0.easeNone},0)
//     ])

// let sceneProjectDetails = new ScrollMagic.Scene({
//   triggerElement: ".project-component",
//   duration: '100%',
//   triggerHook: 0,
// })
//     .setTween(tweenProjectDetails)
//     // .addIndicators({name: "Project Details"})
//     .addTo(controller)

//     // SkillsTitle scene          
// let tweenSkillsTitle = new TimelineMax ()
//     .add([
//       TweenMax.fromTo(".skillsTitleContainer", { yPercent: -10, filter: 'blur(5px)', ease: Power0.easeNone}, { yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone}),
//       // TweenMax.to("#photo", {position: 'relative', ease: Power0.easeNone}) 
//     ])

// let sceneSkillsTitle = new ScrollMagic.Scene({
//   triggerElement: ".skillsTitleContainer",
//   duration: '100%',
//   triggerHook: 1,
// })
    
//     // .setTween(tweenSkillsTitle)
//     .setClassToggle('.skillsTitleContainer', 'fixed')
//     .addIndicators({name: "SkillsTitleeeeee"})
//     .on("start", () => { 
//       sceneBio.destroy()
//       sceneBio = null
//     })
//     .addTo(controller)

    // SkillsTitle Prereveal scene          
let tweenSkillsPrereveal = new TimelineMax ()
    .add([
      TweenMax.to(".myphoto", {autoAlpha: 0,  zIndex: -60, ease: Power0.easeNone}),
      TweenMax.to(".titleContainer", {autoAlpha: 0,  zIndex: -60, ease: Power0.easeNone}),
      TweenMax.to(".photolayer", {autoAlpha: 1,  zIndex: 60, ease: Power0.easeNone}),
      TweenMax.to(".skillsTitleContainer", {autoAlpha: 1,  zIndex: 70, ease: Power0.easeNone})
    ])

let sceneSkillsPrereveal = new ScrollMagic.Scene({
  triggerElement: "#shortbio2",
  triggerHook: 0,
  offset: -1000,
})
    
    .setTween(tweenSkillsPrereveal)
    // .addIndicators({name: "Skills Prereveal"})
    .addTo(controller)

    // SkillsTitle Prereveal scene          
let tweenSkillsReveal = new TimelineMax ()
    .add([
      TweenMax.fromTo("#skills-title", {filter: 'blur(5px)', yPercent: 40, ease: Power0.easeNone}, {filter: 'blur(0)', yPercent: 0, ease: Power0.easeNone}),
    ])

let sceneSkillsReveal = new ScrollMagic.Scene({
  triggerElement: "#shortbio2",
  triggerHook: 0.8,
  duration: '80%'
})
    
    .setTween(tweenSkillsReveal)
    // .addIndicators({name: "Skills SHOWUP"})
    .addTo(controller)

    //TweenMax.fromTo(".skillsTitleContainer", {autoAlpha: 0, ease: Power0.easeNone}, {autoAlpha: 1, zIndex: 100, ease: Power0.easeNone}),

        // skillSlider         
let tweenSkillSlider = new TimelineMax ()
      .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-20%"})	// move in to first panel
      .fromTo("#responsive-title", 2, {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0}, 0)
      .fromTo(".responsive-tools", {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0})
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-40%"})
			.to("#slideContainer", 0.5, {z: 0})
			// animate to forth panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-60%"})
			.to("#slideContainer", 0.5, {z: 0})
      // animate to fifth panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-80%"})
			.to("#slideContainer", 0.5, {z: 0});

let sceneSkillSlider = new ScrollMagic.Scene({
  triggerElement: "#shortbio2",
  duration: '300%',
  triggerHook: 0,
  offset: '100%' 
})
    
    .setTween(tweenSkillSlider)
    // .addIndicators({name: "skillSlider"})
    .addTo(controller)

    // Contact scene          
let tweenContact = new TimelineMax ()
    .add([
      TweenMax.fromTo(".contactContainer", {yPercent: -45, filter: 'blur(5px)', ease: Power0.easeNone}, {yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone}),
    ])

let sceneContact = new ScrollMagic.Scene({
  triggerElement: ".videoContainer",
  duration: '100%',
  triggerHook: 0,
})
    .setTween(tweenContact)
    // .on("update", () => {
    //   sceneSkillsFixed.destroy()
    //   sceneSkillsFixed = null
    // })
    // .addIndicators({name: "Contact"})
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
function desktopScrolling() {
  let scrollbar = Scrollbar.init(document.body);
  // Force fixing:
const fixedPhoto = document.querySelector(".photo");
const fixedNav = document.querySelector(".view-navbar");
// const fixedSkills = document.querySelector(".skillsTitleContainer");
// const fixedBio1 = document.querySelector("#bio1")
// const fixedBio2 = document.querySelector("#bio2")
  scrollbar.addListener((status) => {
    const offset = status.offset;
    // if (sceneBio !== null) {
      fixedPhoto.style.top = offset.y + 'px';
      fixedPhoto.style.left = offset.x + 'px';
    // } else {
    //   fixedPhoto.style.top = 0;
    //   fixedPhoto.style.left = 0;
    // }
    fixedNav.style.top = offset.y + 'px';
    // fixedNav.style.left = offset.x + 'px';
      // fixedSkills.style.top = offset.y + 'px'; 
      // fixedSkills.style.left = offset.x + 'px';
    // fixedBio1.style.top = offset.y + 'px'
    // fixedBio1.style.left = offset.x + 'px';
    // fixedBio2.style.top = offset.y + 'px'
    // fixedBio2 .style.left = offset.x + 'px';
    sceneLogo.refresh()
    sceneNavlogo.refresh()
    scenePhoto.refresh()
    sceneMybio1.refresh()
    sceneMybio2.refresh()
    sceneLayer.refresh()
    sceneMybioOff.refresh()
    sceneNumber1.refresh()
    sceneNumber2.refresh()
    sceneNumber3.refresh()
    // sceneNumber4.refresh()
    // sceneSkillsTitle.refresh()
      // sceneSkillsFixed.refresh()
    sceneSkillsPrereveal.refresh()
    sceneSkillsReveal.refresh()
    sceneSkillSlider.refresh()
    sceneContact.refresh()
    // sceneProjectDetails.refresh()
    myAnimationScroll();
  })
}


function mobileScrolling() {
  //firstScroll(window)
  window.addEventListener("scroll", () => {
    myAnimationScroll()
  })
}


function myAnimationScroll() {
    scrollFunction("4PICS-1WORD", "notShown", "showUp")
    scrollFunction("RICHI-SHOP", "notShown", "showUp")
    scrollFunction("CALCULATOR", "notShown", "showUp")
    scrollFunction("video", "videoNotShown", "showVideo")
    scrollFunction("projects-title", "titleNotShown", "showTitle")
}