import { scrollFunction } from "./scrollFunction";
import { scrollBar, controller, isMobile, initSections, domElements, initValues } from './main.js'
import { sceneLogo } from "./firstView/sceneLogo";
import { sceneNavlogo } from "./firstView/sceneNavlogo";
import { sceneBio } from "./richiBio/sceneBio";
import { scenePhoto } from "./richiBio/scenePhoto";
import { sceneRichiBio } from "./richiBio/sceneRichiBio";
import { sceneRichiTablet } from "./richiBio/sceneRichiTablet";
import { oddScene } from "./richiBio/oddScene";
import { evenScene } from "./richiBio/evenScene";
import { sceneLayer } from "./richiBio/sceneLayer";
import { sceneMybioOff } from "./richiBio/sceneMybioOff";
import { sceneRichiProjects } from "./richiProjects/sceneRichiProjects";
import { sceneProject } from "./richiProjects/sceneProject";
import { firstAnimations } from "./firstAnimations";
import { sceneSkillsPrereveal } from "./richiSkills/sceneSkillsPrereveal";
import { sceneSkillsReveal } from "./richiSkills/sceneSkillsReveal copy";


export function wholeScripts(scrollMagicLib, firstLayer) {
  const { ScrollMagic, TimelineMax, TweenMax, Power0, Back } = scrollMagicLib;
  const { page } = domElements;
  const { firstView, bioSection, portfolioSection, skillsSection, contactSection } = initSections
  const { videoShow, contactTitleShow, contactYpercent, talkRight, talkDuration, socialDuration, socialOffset,  } = initValues
  
 
  firstAnimations(firstLayer)

  // LINKS
  let hamburguerButton = document.querySelector('#hamburguer-button'); // Hamburguer mobile button
  let closeButton = document.querySelector('#close-button'); // Close mobile button
  let mobileMenu = document.querySelector('#mobile-menu'); // Mobile menu
  let navLogoLink1 = document.querySelector('#nav-logo1'); // Link at first logo
  let navLogoLink2 = document.querySelector('#nav-logo2'); // Link at second logo
  let navLink = document.querySelector('#profile-photo'); // Link at profile photo
  let bioLink = document.querySelector('#biolink');  // Desktop link to bio
  let projectsLink = document.querySelector('#projectslink');  // Desktop link to portfolio
  let skillsLink = document.querySelector('#skillslink');  // Desktop link to skills
  let contactLink = document.querySelector('#contactlink');  // Desktop link to contact
  let mobileBioLink = document.querySelector('#mobile-bio-link');  // Mobio link to bio
  let mobilePortfolioLink = document.querySelector('#mobile-portfolio-link');  // Mobio link to portfolio
  let mobileSkillsLink = document.querySelector('#mobile-skills-link');  // Mobio link to skills
  let mobileContactLink = document.querySelector('#mobile-contact-link');  // Mobio link to contact
  let mobileResumeLink = document.querySelector('#mobile-resume-link');  // Mobio link to resume
  let socials = document.querySelectorAll('.fa')
  Array.from(socials).forEach(social => {
    social.addEventListener('mouseover', () => { if (!social.classList.contains('fa-bounce')) social.classList.add('fa-bounce') })
  }
  )

  // Hamburguer Menu
  hamburguerButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('-translate-y-full')) {
      mobileMenu.classList.remove('-translate-y-full')
      mobileMenu.classList.remove('scale-50')
      mobileMenu.classList.remove('opacity-0')
      mobileBioLink.classList.remove('-translate-y-96')
      mobilePortfolioLink.classList.remove('-translate-y-96')
      mobileSkillsLink.classList.remove('-translate-y-96')
      mobileContactLink.classList.remove('-translate-y-96')
      mobileResumeLink.classList.remove('-translate-y-96')
    } else {
      mobileMenu.classList.add('-translate-y-full')
      mobileMenu.classList.add('scale-50')
      mobileMenu.classList.add('opacity-0')
      mobileBioLink.classList.add('-translate-y-96')
      mobilePortfolioLink.classList.add('-translate-y-96')
      mobileSkillsLink.classList.add('-translate-y-96')
      mobileContactLink.classList.add('-translate-y-96')
      mobileResumeLink.classList.add('-translate-y-96')
    }
  })

  closeButton.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('-translate-y-full')) {
      mobileMenu.classList.add('-translate-y-full')
      mobileMenu.classList.add('scale-50')
      mobileMenu.classList.add('opacity-0')
      mobileBioLink.classList.add('-translate-y-96')
      mobilePortfolioLink.classList.add('-translate-y-96')
      mobileSkillsLink.classList.add('-translate-y-96')
      mobileContactLink.classList.add('-translate-y-96')
      mobileResumeLink.classList.add('-translate-y-96')
    } else {
      mobileMenu.classList.remove('-translate-y-full')
      mobileMenu.classList.remove('scale-50')
      mobileMenu.classList.remove('opacity-0')
      mobileBioLink.classList.remove('-translate-y-96')
      mobilePortfolioLink.classList.remove('-translate-y-96')
      mobileSkillsLink.classList.remove('-translate-y-96')
      mobileContactLink.classList.remove('-translate-y-96')
      mobileResumeLink.classList.remove('-translate-y-96')
    }
  })

  if (isMobile) {
    if (page === 'index') mobileScrolling();
  }
  else {
    if (page === 'index') desktopScrolling();
  }



  // SCROLLMAGIC  //////////////************** */
 
  sceneLogo(scrollMagicLib)

  sceneNavlogo(scrollMagicLib)

  sceneBio(scrollMagicLib)

  scenePhoto(scrollMagicLib)

  sceneRichiBio(scrollMagicLib)

  sceneRichiTablet(scrollMagicLib)

  sceneRichiProjects(scrollMagicLib)

  oddScene(scrollMagicLib, '#bio1')
  oddScene(scrollMagicLib, '#bio3')
  oddScene(scrollMagicLib, '#bio5')
  oddScene(scrollMagicLib, '#bio7')
  oddScene(scrollMagicLib, '#bio9')
  oddScene(scrollMagicLib, '#bio11')
  oddScene(scrollMagicLib, '#bio13')

  evenScene(scrollMagicLib, '#bio2')
  evenScene(scrollMagicLib, '#bio4')
  evenScene(scrollMagicLib, '#bio6')
  evenScene(scrollMagicLib, '#bio8')
  evenScene(scrollMagicLib, '#bio10')
  evenScene(scrollMagicLib, '#bio12')
  evenScene(scrollMagicLib, '#bio14')

  sceneLayer(scrollMagicLib)

  sceneMybioOff(scrollMagicLib)

  sceneProject(scrollMagicLib, '#n-01')
  sceneProject(scrollMagicLib, '#n-02')
  sceneProject(scrollMagicLib, '#n-03')
  sceneProject(scrollMagicLib, '#n-04')
  sceneProject(scrollMagicLib, '#n-05')

  sceneSkillsPrereveal(scrollMagicLib)
  sceneSkillsReveal(scrollMagicLib)

  // skillSlider         
  let tweenSkillSlider = new TimelineMax()
    .to("#slideContainer", 0.5, { z: -100 })		// move back in 3D space
    .to("#slideContainer", 1, { x: "-20%" })	// move in to first panel
    .fromTo("#responsive-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
    .fromTo(".responsive-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
    .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
    // animate to third panel
    .to("#slideContainer", 0.5, { z: -100, delay: 1 })
    .to("#slideContainer", 1, { x: "-40%" })
    .fromTo("#spa-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
    .fromTo(".spa-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
    .to("#slideContainer", 0.5, { z: 0 })
    // animate to forth panel
    .to("#slideContainer", 0.5, { z: -100, delay: 1 })
    .to("#slideContainer", 1, { x: "-60%" })
    .fromTo("#projectInit-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
    .fromTo(".init-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
    .to("#slideContainer", 0.5, { z: 0 })
    // animate to fifth panel
    .to("#slideContainer", 0.5, { z: -100, delay: 1 })
    .to("#slideContainer", 1, { x: "-80%" })
    .fromTo("#others-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
    .fromTo(".other-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
    .to("#slideContainer", 0.5, { z: 0 });

  let sceneSkillSlider = new ScrollMagic.Scene({
    triggerElement: "#shortbio2",
    duration: '300%',
    triggerHook: 0,
    offset: '100%'
  })

    .setTween(tweenSkillSlider)
    // .addIndicators({name: "skillSlider"})
    .addTo(controller)

  // Video Start Scene        
  let tweenVideo = new TimelineMax()
  .add([
    TweenMax.fromTo("#video", { filter: 'blur(5px)', autoAlpha: 0, ease: Power0.easeNone }, { filter: 'blur(0px)', autoAlpha: 1, ease: Power0.easeNone }),
    TweenMax.fromTo("#videoFallback", { filter: 'blur(5px)', autoAlpha: 0, ease: Power0.easeNone }, { filter: 'blur(0px)', autoAlpha: 1, ease: Power0.easeNone }),
    TweenMax.fromTo(".orange", { yPercent: 0, autoAlpha: 1, ease: Power0.easeNone }, { yPercent: -30, autoAlpha: 1, ease: Power0.easeNone })
  ])

let sceneVideo = new ScrollMagic.Scene({
  triggerElement: "#video",
  duration: '40%',
  triggerHook: videoShow,
})
  .setTween(tweenVideo)
  // .addIndicators({name: "Video SHOW"})
  .addTo(controller)

  // Contact scene          
  let tweenContact = new TimelineMax()
    .add([
      TweenMax.fromTo("#contact-title", { yPercent: 50, autoAlpha: 0, filter: 'blur(3px)', ease: Power0.easeNone }, { yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }, 1),
      TweenMax.fromTo("#video", { autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }, { autoAlpha: 0, filter: 'blur(5px)', ease: Power0.easeNone }, 0.5),
    ])

  let sceneContact = new ScrollMagic.Scene({
    triggerElement: "#contact-title",
    duration: '40%',
    triggerHook: contactTitleShow,
    offset: 100
  })
    .setTween(tweenContact)
    .addIndicators({name: "Contact Title / Video OFF"})
    .addTo(controller)

  // Reviews End Scene        
  let tweenReviewsEnd = new TimelineMax()
    .add([
      TweenMax.fromTo("#reviews", { yPercent: 25, autoAlpha: 0, filter: 'blur(3px)', ease: Power0.easeNone }, { yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone })
    ])

  let sceneReviewsEnd = new ScrollMagic.Scene({
    triggerElement: "#reviews",
    duration: '50%',
    triggerHook: 0.8,
  })
    .setTween(tweenReviewsEnd)
    // .addIndicators({name: "Reviews end"})
    .addTo(controller)

  // Map scene          
  let tweenBlockContact = new TimelineMax()
    .add([
      TweenMax.fromTo("#contact-block", { yPercent: contactYpercent, ease: Power0.easeNone }, { yPercent: 0, ease: Power0.easeNone }),
    ])

  let sceneBlockContact = new ScrollMagic.Scene({
    triggerElement: "#contact-block",
    duration: '50%',
    triggerHook: 1,
  })
    .setTween(tweenBlockContact)
    // .addIndicators({name: "contactBLOCK"})
    .addTo(controller)

  // Talk scene
  let tweenTalk = TweenMax.staggerFromTo('.talk', 3, { right: talkRight }, { right: 0, ease: Back.easeOut }, 0.3)

  let sceneTalk = new ScrollMagic.Scene({
    triggerElement: '.talk',
    duration: talkDuration,
    triggerHook: 1,
    offset: 100
  })
    .setTween(tweenTalk)
    // .addIndicators({name: 'TALK'})
    .addTo(controller)

  // Socials scene
  let tweenSocials = TweenMax.staggerFromTo('.fa', 3, { left: 700 }, { left: 0, ease: Back.easeOut }, 0.15)

  let sceneSocials = new ScrollMagic.Scene({
    triggerElement: '#socials',
    duration: socialDuration,
    triggerHook: 0.9,
    offset: socialOffset
  })
    .setTween(tweenSocials)
    // .addIndicators({name: 'socialsss'})
    .addTo(controller)

  // 3 Add classes to hide elements (case using JS)
  window.addEventListener("DOMContentLoaded", () => {
    const projects = Array.from(document.querySelectorAll(".project-component"));
    projects.forEach(project => {
      project.classList.add("notShown")
    })
  })


  // 4 new scrollbar listener, instead of window.addEventListener
  function desktopScrolling() {
    // const scrollbar = scrollBar.init(document.body, {
    //   renderByPixels: true
    // });
    // Exposing scrollbar 
    // window.scrollbar = scrollbar;
    // Force fixing:
    const fixedPhoto = document.querySelector(".photo");
    const fixedNav = document.querySelector(".view-navbar");
    scrollBar.addListener((status) => {
      const offset = status.offset;
      firstLayer.style.top = offset.y + 'px'
      fixedPhoto.style.top = offset.y + 'px';
      fixedPhoto.style.left = offset.x + 'px';
      fixedNav.style.top = offset.y + 'px';
      // sceneMybioOff.refresh()
      // sceneNumber1.refresh()
      // sceneNumber2.refresh()
      // sceneNumber3.refresh()
      // sceneNumber4.refresh()
      // sceneNumber5.refresh()
      // sceneSkillsPrereveal.refresh()
      // sceneSkillsReveal.refresh()
      sceneSkillSlider.refresh()
      sceneVideo.refresh()
      sceneReviewsEnd.refresh()
      sceneContact.refresh()
      sceneBlockContact.refresh()
      sceneTalk.refresh()
      sceneSocials.refresh()
      myAnimationScroll();
    });

    // Link scrolling DESKTOP

    navLogoLink2.addEventListener('click', () => {
      scrollbar.scrollIntoView(firstView) // Desktop
    })

    navLink.addEventListener('click', () => {
      if (!isMobile) {
        scrollbar.scrollIntoView(firstView) // Desktop
      }
    })

    bioLink.addEventListener('click', () => {
      scrollbar.scrollIntoView(bioSection, {
        alignToTop: true,
        offsetTop: -250
      })
    })
    projectsLink.addEventListener('click', () => {
      scrollbar.scrollIntoView(portfolioSection, {
        offsetTop: 150
      })
    })
    skillsLink.addEventListener('click', () => {
      scrollbar.scrollIntoView(skillsSection)
    })
    contactLink.addEventListener('click', () => {
      scrollbar.scrollIntoView(contactSection, {
        alignToTop: false
      })
    })
  }

  function mobileScrolling() {
    //firstScroll(window)
    window.addEventListener("scroll", () => {
      myAnimationScroll()
    })
    // Link scrolling MOBILE
    navLink.addEventListener('click', () => {
      if (isMobile) {
        firstView.scrollIntoView() // Mobile
      }
    })
    navLogoLink1.addEventListener('click', () => {
      firstView.scrollIntoView() // Mobile
    })
    mobileBioLink.addEventListener('click', (e) => {
      mobileMenu.classList.add('-translate-y-full')
      bioSection.scrollIntoView()
    })
    mobilePortfolioLink.addEventListener('click', (e) => {
      mobileMenu.classList.add('-translate-y-full')
      portfolioSection.scrollIntoView({
        block: 'start'
      })
    })
    mobileSkillsLink.addEventListener('click', (e) => {
      mobileMenu.classList.add('-translate-y-full')
      skillsSection.scrollIntoView({
        block: 'start'
      })
    })
    mobileContactLink.addEventListener('click', (e) => {
      mobileMenu.classList.add('-translate-y-full')
      contactSection.scrollIntoView({
        behavior: 'instant'
      })
    })
  }

  function myAnimationScroll() {
    scrollFunction('3D-GALLERY', "notShown", "showUp")
    scrollFunction('RICHI-CALC', "notShown", "showUp")
    scrollFunction('RICHI-SHOP', "notShown", "showUp")
    scrollFunction('4PICS-1WORD', "notShown", "showUp")
    scrollFunction('RICHI-TRAILERS', "notShown", "showUp")
  }


}
