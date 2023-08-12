import { isMobile, domElements } from './main.js'
import { sceneLogo } from "./scrollAnimations/firstView/sceneLogo.js";
import { sceneNavlogo } from "./scrollAnimations/firstView/sceneNavlogo.js";
import { sceneBio } from "./scrollAnimations/richiBio/sceneBio.js";
import { scenePhoto } from "./scrollAnimations/richiBio/scenePhoto.js";
import { sceneRichiBio } from "./scrollAnimations/richiBio/sceneRichiBio.js";
import { sceneRichiTablet } from "./scrollAnimations/richiBio/sceneRichiTablet.js";
import { oddScene } from "./scrollAnimations/richiBio/oddScene.js";
import { evenScene } from "./scrollAnimations/richiBio/evenScene.js";
import { sceneLayer } from "./scrollAnimations/richiBio/sceneLayer.js";
import { sceneMybioOff } from "./scrollAnimations/richiBio/sceneMybioOff.js";
import { sceneRichiProjects } from "./scrollAnimations/richiProjects/sceneRichiProjects.js";
import { sceneProjectNumber } from "./scrollAnimations/richiProjects/sceneProjectNumber.js";
import { firstAnimations } from "./animations/firstAnimations.js";
import { sceneSkillsPrereveal } from "./scrollAnimations/richiSkills/sceneSkillsPrereveal.js";
import { sceneSkillsReveal } from "./scrollAnimations/richiSkills/sceneSkillsReveal.js";
import { sceneSkillSlider } from "./scrollAnimations/richiSkills/sceneSkillSlider.js";
import { sceneForVideo } from "./scrollAnimations/richiContact/sceneVideo.js";
import { sceneForContact } from "./scrollAnimations/richiContact/sceneContact.js";
import { sceneForReviews } from "./scrollAnimations/richiContact/sceneReviews.js";
import { sceneContactBlock } from "./scrollAnimations/richiContact/sceneBlockContact.js";
import { sceneForTalk } from "./scrollAnimations/richiContact/sceneTalk.js";
import { sceneForSocials } from "./scrollAnimations/richiContact/sceneSocials.js";
import { linkClickAnimations } from "./animations/linkClickAnimations.js";
import { mobileScrolling } from "./scrollAnimations/scrollingType/mobileScrolling.js";
import { desktopScrolling } from './scrollAnimations/scrollingType/desktopScrolling.js';
import { sceneProjectEntrance } from './scrollAnimations/richiProjects/sceneProjectEntrance.js';
import { sceneProjectExit } from './scrollAnimations/richiProjects/sceneProjectExit.js';


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
 
  // firstView

  sceneLogo(scrollMagicLib)

  sceneNavlogo(scrollMagicLib)

  // richiBio

  sceneBio(scrollMagicLib)

  scenePhoto(scrollMagicLib)

  sceneRichiBio(scrollMagicLib)

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

  // richiProjects
  // sceneRichiTablet(scrollMagicLib)

  sceneRichiProjects(scrollMagicLib)

  sceneProjectNumber(scrollMagicLib, '#n-01')
  sceneProjectNumber(scrollMagicLib, '#n-02')
  sceneProjectNumber(scrollMagicLib, '#n-03')
  sceneProjectNumber(scrollMagicLib, '#n-04')
  sceneProjectNumber(scrollMagicLib, '#n-05')

  // sceneProject(scrollMagicLib, '#3D-GALLERY')
  sceneProjectEntrance(scrollMagicLib, '#gallery')
  sceneProjectExit(scrollMagicLib, '#gallery-container')
  sceneProjectEntrance(scrollMagicLib, '#richi-calc')
  sceneProjectExit(scrollMagicLib, '#richi-calc-container')
  sceneProjectEntrance(scrollMagicLib, '#richi-shop')
  sceneProjectExit(scrollMagicLib, '#richi-shop-container')
  sceneProjectEntrance(scrollMagicLib, '#pics-game')
  sceneProjectExit(scrollMagicLib, '#pics-game-container')
  sceneProjectEntrance(scrollMagicLib, '#richi-trailers')
  sceneProjectExit(scrollMagicLib, '#richi-trailers-container')

  // richiSkills

  sceneSkillsPrereveal(scrollMagicLib)
  sceneSkillsReveal(scrollMagicLib)
  sceneSkillSlider(scrollMagicLib)

  // richiContact

  sceneForVideo(scrollMagicLib)
  sceneForContact(scrollMagicLib)
  // sceneForReviews(scrollMagicLib)
  sceneContactBlock(scrollMagicLib)
  sceneForTalk(scrollMagicLib)
  sceneForSocials(scrollMagicLib)

}
