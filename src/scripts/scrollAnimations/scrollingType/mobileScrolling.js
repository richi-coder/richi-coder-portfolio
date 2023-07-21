import { domLinks, domSections, isMobile } from "../../main"

export function mobileScrolling() {
    const { firstView, bioSection, portfolioSection, skillsSection, contactSection} = domSections
    const { navLink, navLogoLink1, mobileBioLink, mobilePortfolioLink, mobileMenu, mobileSkillsLink, mobileContactLink  } = domLinks
    
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