import { domElements, domLinks, domSections, scrollBar } from "../../main";
import { myAnimationScroll } from "./myAnimationScroll";

export function desktopScrolling() {
    const { fixedNav, fixedPhoto } = domElements
    const { firstLayer } = domSections
    const { 
        navLogoLink2, 
        navLink, 
        bioLink, 
        projectsLink, 
        skillsLink,
        contactLink,
       } = domLinks
    
    scrollBar.addListener((status) => {
      const offset = status.offset;
      firstLayer.style.top = offset.y + 'px'
      fixedPhoto.style.top = offset.y + 'px';
      fixedPhoto.style.left = offset.x + 'px';
      fixedNav.style.top = offset.y + 'px';
      // myAnimationScroll();
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