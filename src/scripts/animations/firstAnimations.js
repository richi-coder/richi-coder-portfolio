import { domElements, domSections } from "../main";

export function firstAnimations() {
    const { page, body, richiLogo, coderLogo, techLogo, barLogo, viewNavbar, scrollDown, bio7, daysCoding } = domElements;
    const { firstLayer} = domSections
    setTimeout(() => {
        firstLayer.style.animation = 'none';
        firstLayer.style.zIndex = -999999;
        firstLayer.style.display = 'none';
      }, 2000);
    
      // Procedures
      if (page === 'index') {
        body.classList.add('body-animation')
        bio7.innerHTML = `${daysCoding} days`;
      } else {
        body.classList.add('body-another-page')
      }
      richiLogo.classList.add('richi-animation');
      coderLogo.classList.add('coder-animation');
      techLogo.classList.add('tech-animation');
      barLogo.classList.add('bar-animation');
      viewNavbar.classList.add('view-navbar-animation');
      scrollDown.classList.add('scrolldown-animation');
}