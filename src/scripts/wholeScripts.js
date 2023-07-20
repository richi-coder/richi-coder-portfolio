import { scrollBar, isMobile, domSections, domElements, domLinks } from './main.js'
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
import { linkClickAnimations } from "./linkClickAnimations";
import { myAnimationScroll } from "./scrollingType/myAnimationScroll";
import { mobileScrolling } from "./scrollingType/mobileScrolling";
import { desktopScrolling } from './scrollingType/desktopScrolling.js';


export function wholeScripts(scrollMagicLib) {
  const { page } = domElements;

  // 1. Deciding which scrolling type to follow
  if (isMobile) {
    if (page === 'index') mobileScrolling();
  }
  else {
    if (page === 'index') desktopScrolling();
  }

 // 2. FIRST ANIMATIONS  *************** //
  firstAnimations()

 // 3. UX FOR LINKS
  linkClickAnimations()

 // 4. SCROLLMAGIC  *************** //
 
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


}
