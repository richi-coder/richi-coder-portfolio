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
import { sceneSkillsReveal } from "./richiSkills/sceneSkillsReveal";
import { sceneSkillSlider } from "./richiSkills/sceneSkillSlider";
import { sceneForVideo } from "./richiContact/sceneVideo";
import { sceneForContact } from "./richiContact/sceneContact";
import { sceneForReviews } from "./richiContact/sceneReviews";
import { sceneContactBlock } from "./richiContact/sceneBlockContact";
import { sceneForTalk } from "./richiContact/sceneTalk";
import { sceneForSocials } from "./richiContact/sceneSocials";


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
  sceneSkillSlider(scrollMagicLib)

  sceneForVideo(scrollMagicLib)
  sceneForContact(scrollMagicLib)
  sceneForReviews(scrollMagicLib)
  sceneContactBlock(scrollMagicLib)
  sceneForTalk(scrollMagicLib)
  sceneForSocials(scrollMagicLib)








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
      myAnimationScroll();
    });

    // Link scrolling DESKTOP

    navLogoLink2.addEventListener('click', () => {
      scrollBar.scrollIntoView(firstView) // Desktop
    })

    navLink.addEventListener('click', () => {
      if (!isMobile) {
        scrollBar.scrollIntoView(firstView) // Desktop
      }
    })

    bioLink.addEventListener('click', () => {
      scrollBar.scrollIntoView(bioSection, {
        alignToTop: true,
        offsetTop: -250
      })
    })
    projectsLink.addEventListener('click', () => {
      scrollBar.scrollIntoView(portfolioSection, {
        offsetTop: 150
      })
    })
    skillsLink.addEventListener('click', () => {
      scrollBar.scrollIntoView(skillsSection)
    })
    contactLink.addEventListener('click', () => {
      scrollBar.scrollIntoView(contactSection, {
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
