import { domLinks } from "../main"

export function linkClickAnimations() {
    const { hamburguerButton,
        closeButton,
        mobileMenu, 
        navLogoLink1, 
        navLogoLink2, 
        navLink, 
        bioLink, 
        projectsLink, 
        skillsLink,
        contactLink,
        mobileBioLink,
        mobilePortfolioLink,
        mobileSkillsLink, 
        mobileContactLink,
        mobileResumeLink,
        socials
       } = domLinks
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

  Array.from(socials).forEach(social => {
    social.addEventListener('mouseover', () => { if (!social.classList.contains('fa-bounce')) social.classList.add('fa-bounce') })
  }
  )
}