import { scrollFunction } from "./scrollFunction";
import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power0, Back } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);

// Font loading ERROR 
let firstLayer = document.querySelector('.firstLayer');

document.fonts.onloadingerror = () => {
  console.log("Font loading error");
};
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    link.media = 'print';
    link.onload = 'this.media="all"'
    const head = document.head; 
    console.log(head);
    head.appendChild(link)
    let iFrame = document.querySelector('.hey')
    console.log(iFrame.classList );
    iFrame.classList.add('devicon-npm-original-wordmark text-5xl sm:text-7xl')
    console.log(iFrame);
  }
})
// Font loaded Listener
document.fonts.ready
        .then(() => {
          firstLayer.style.opacity = 0
          setTimeout(() => {
            wholeScripts()
          }, 1000); 
          setTimeout(() => {
            firstLayer.style.animation = 'none';
            firstLayer.style.zIndex = -999999; 
            firstLayer.style.display = 'none'; 
          }, 2000);
        })
        .catch(wholeScripts)

function wholeScripts() {
  // Adding class for firstView animation
  let page = document.title === 'richiCoder | Frontend Developer | Building client apps' ? 'index' : document.title;
  let body = document.querySelector('body');
  let richiLogo = document.querySelector('.richi');
  let coderLogo = document.querySelector('.coder');
  let techLogo = document.querySelector('.tech');
  let barLogo = document.querySelector('.bar');
  let viewNavbar = document.querySelector('.view-navbar');
  let scrollDown = document.querySelector('.scrolldown'); 
  let bio7 = document.querySelector('#bio7');
  let timeCoding = (new Date() - new Date(2022, 0, 28))/1000;
  let daysCoding = Math.floor(timeCoding/(3600*24))
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

  // PAGE SECTIONS
let firstView = document.querySelector('.firstView');
let bioSection = document.querySelector('#bio-title-container');
let portfolioSection = document.querySelector('#portfolioContainer');
let skillsSection = document.querySelector('#shortbio2');
let contactSection = document.querySelector('.contactContainer');


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
social.addEventListener('mouseover', () => {if(!social.classList.contains('fa-bounce')) social.classList.add('fa-bounce')})
}
)

// isMobile?
let isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
let numberOffset = 0;
let numberYpercent = 0;
let numberYpercentStart = 0;
let skillsFixedDuration = '';
let talkRight;
let contactYpercent;
let socialOffset;
let talkDuration;
let socialDuration;
let startTabletPosition;
let bioStartPosition;

if (isMobile) {
  if (page === 'index') mobileScrolling();
  numberOffset = -500;
  numberYpercentStart = 0;
  numberYpercent = 80;
  skillsFixedDuration = '400%';
  talkRight = 400
  contactYpercent = -10
  socialOffset = 0
  socialDuration = 180
  bioStartPosition = 50
    if (window.innerWidth > 650) {
      startTabletPosition = 5;
    } else if (window.innerWidth <= 650 && window.innerWidth > 500) {
      startTabletPosition = 70;
    } else if (window.innerWidth <= 500 && window.innerWidth > 400) {
      startTabletPosition = 20;
    } else if (window.innerWidth <= 400 && window.innerWidth > 300) {
      startTabletPosition = 30;
    } else {
      startTabletPosition = 40;
    }
  } else {
  if (page === 'index') desktopScrolling();
  numberOffset = -200;
  numberYpercentStart = -20;
  numberYpercent = 50;
  skillsFixedDuration = '100%' //0.01%
  talkRight = 800
  contactYpercent = -25
  socialOffset = 100
  talkDuration = '70%'
  socialDuration = '70%'
  bioStartPosition = 0
    if (window.innerWidth >= 1250) {
      startTabletPosition = 45;
    } else if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
      startTabletPosition = 80;
    } else if (window.innerWidth > 900 && window.innerWidth < 1000) {
      startTabletPosition = -40;
    } else if (window.innerWidth > 770 && window.innerWidth <= 900) {
      startTabletPosition = -20;
    } else if (window.innerHeight <= 770 && window.innerWidth > 650) { 
      startTabletPosition = 0;
    } else {
      startTabletPosition = 0;
    }
}

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

// Photo animation
let tweenPhoto = new TimelineMax()
.add([
TweenMax.to(".photolayer", {autoAlpha: 0.8, ease: Power0.easeNone, reversed: false }),
])

let scenePhoto = new ScrollMagic.Scene({
triggerElement: "#shortbio",
triggerHook: 0,
duration: '10%',
})
.setTween(tweenPhoto)
// .addIndicators({name: "photoOpacity"})
.addTo(controller)

// richiBio animation
let tweenRichibio = new TimelineMax()
.add([
TweenMax.fromTo("#shortbio-title", {autoAlpha: 0, yPercent: 50, filter: 'blur(3px)', ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone})
])

let sceneRichiBio = new ScrollMagic.Scene({
triggerElement: "#shortbio-title",
triggerHook: 1,
duration: '20%',
offset: 100
})
.setTween(tweenRichibio)
// .addIndicators({name: "richiBio"})
.addTo(controller)

// tabletAnimation

let tweenRichiTablet = new TimelineMax()
.add([
TweenMax.fromTo("#richi-tablet", {xPercent: -250, yPercent: startTabletPosition, rotate: 15, scale: 2 , ease: Power0.easeNone}, {xPercent: 150, yPercent: -30, rotate: -30, scale: 0.1, ease: Power0.easeNone})
]) 

let sceneRichiTablet = new ScrollMagic.Scene({
triggerElement: "#richi-tablet",
triggerHook: 1,
duration: '200%',
})
.setTween(tweenRichiTablet)
// .addIndicators({name: "richiTablet"}) 
.addTo(controller)

// richiProjects animation
let tweenRichiprojects = new TimelineMax()
.add([
TweenMax.fromTo("#projects-title", {autoAlpha: 0, yPercent: 50, filter: 'blur(3px)', ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone})
])

let sceneRichiprojects = new ScrollMagic.Scene({
triggerElement: "#projects-title",
triggerHook: 1,
duration: '20%',
offset: 100
})
.setTween(tweenRichiprojects)
// .addIndicators({name: "richiProjects"})
.addTo(controller)

// Mybio animations

let sceneMybio1;
let sceneMybio3;
let sceneMybio5;
let sceneMybio7;
let sceneMybio9;
let sceneMybio11;
let sceneMybio13;

let sceneMybio2;
let sceneMybio4;
let sceneMybio6;
let sceneMybio8;
let sceneMybio10;
let sceneMybio12;
let sceneMybio14;

// oddScenes
function oddScene(sceneOdd, number){
sceneOdd = new ScrollMagic.Scene({
triggerElement: number,
triggerHook: 1, 
duration: '10%',
offset: 100
})
.setTween(new TimelineMax()
  .add([
    TweenMax.fromTo(number, {autoAlpha: 0, filter: 'blur(5px)', ease: Power0.easeNone}, {autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }),
]))
// .addIndicators({name: `scene ${number}`})
.addTo(controller)
return sceneOdd
}
sceneMybio1 = oddScene(sceneMybio1,'#bio1')
sceneMybio3 = oddScene(sceneMybio3,'#bio3')
sceneMybio5 = oddScene(sceneMybio5,'#bio5')
sceneMybio7 = oddScene(sceneMybio7,'#bio7')
sceneMybio9 = oddScene(sceneMybio9,'#bio9')
sceneMybio11 = oddScene(sceneMybio11,'#bio11')
sceneMybio13 = oddScene(sceneMybio13,'#bio13')

// evenScenes
function evenScene(sceneEven, number) {
sceneEven = new ScrollMagic.Scene({
triggerElement: number,
triggerHook: 1,
duration: '10%',
offset: 180
})
.setTween(new TimelineMax()
.add([
TweenMax.fromTo(number, {autoAlpha: 0, yPercent: bioStartPosition, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: 100, ease: Power0.easeNone })
]))
// .addIndicators({name: `scene ${number}`})
.addTo(controller)
return sceneEven
}

sceneMybio2 = evenScene(sceneMybio2, '#bio2')
sceneMybio4 = evenScene(sceneMybio4, '#bio4')
sceneMybio6 = evenScene(sceneMybio6, '#bio6')
sceneMybio8 = evenScene(sceneMybio8, '#bio8')
sceneMybio10 = evenScene(sceneMybio10, '#bio10')
sceneMybio12 = evenScene(sceneMybio12, '#bio12')
sceneMybio14 = evenScene(sceneMybio14, '#bio14')

// sceneLayerBlack
let tweenLayer = new TimelineMax()
.add([
TweenMax.to(".photolayer", {backgroundColor: 'rgb(10,10,10)', zIndex: 50, ease: Power0.easeNone} ),
TweenMax.to("#shortbio-title", {color: 'white', ease: Power0.easeNone} ),
TweenMax.to(".bio", {color: 'white', ease: Power0.easeNone} )
])

let sceneLayer = new ScrollMagic.Scene({
triggerElement: ".portfolio",
triggerHook: 1,
offset: -1500
})
.setTween(tweenLayer)
// .addIndicators({name: "layerBlack"})
.addTo(controller)

// sceneMybioOff
let tweenOff = new TimelineMax()
.add([
// TweenMax.to(".bio", {autoAlpha: 0, ease: Power0.easeNone }),
TweenMax.to(".photolayer", 5, {autoAlpha: 1, ease: Power0.easeNone}, 0 )
])

let sceneMybioOff = new ScrollMagic.Scene({
triggerElement: ".portfolio",
triggerHook: 1,
offset: -800 
})
.setTween(tweenOff)
// .addIndicators({name: "PORTFOLIO"})
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

let tweenNumber4 = new TimelineMax ()
.add([
TweenMax.fromTo("#n-04", 15, {autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone},0)
])

let sceneNumber4 = new ScrollMagic.Scene({
triggerElement: "#n-04",
duration: '100%',
triggerHook: 0,
offset: numberOffset
})
.setTween(tweenNumber4)
// .addIndicators({name: "Number 03"})
.addTo(controller)

let tweenNumber5 = new TimelineMax ()
.add([
TweenMax.fromTo("#n-05", 15, {autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone}, {autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone},0)
])

let sceneNumber5 = new ScrollMagic.Scene({
triggerElement: "#n-05",
duration: '100%',
triggerHook: 0,
offset: numberOffset
})
.setTween(tweenNumber5)
// .addIndicators({name: "Number 03"})
.addTo(controller) 

// SkillsTitle Prereveal scene          
let tweenSkillsPrereveal = new TimelineMax ()
.add([
TweenMax.to(".myphoto", {autoAlpha: 0,  zIndex: -60, ease: Power0.easeNone}),
TweenMax.to(".titleContainer", {autoAlpha: 0,  zIndex: -60, ease: Power0.easeNone}),
TweenMax.to(".photolayer", {autoAlpha: 1,  zIndex: 60, ease: Power0.easeNone}),
TweenMax.fromTo(".skillsTitleContainer", {autoAlpha: 0, ease: Power0.easeNone}, {autoAlpha: 1,  zIndex: 70, ease: Power0.easeNone})
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
TweenMax.fromTo("#skills-title", {filter: 'blur(10px)', yPercent: 200, ease: Power0.easeNone}, {filter: 'blur(0px)', yPercent: 0, ease: Power0.easeNone}),
])

let sceneSkillsReveal = new ScrollMagic.Scene({
triggerElement: "#shortbio2",
triggerHook: 0.9,
duration: '80%'
})

.setTween(tweenSkillsReveal)
// .addIndicators({name: "Skills SHOWUP"})
.addTo(controller)

// skillSlider         
let tweenSkillSlider = new TimelineMax ()
.to("#slideContainer", 0.5, {z: -100})		// move back in 3D space
.to("#slideContainer", 1,   {x: "-20%"})	// move in to first panel
.fromTo("#responsive-title", {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0})
.fromTo(".responsive-tools", {filter: 'blur(10px)', xPercent: 150}, {filter: 'blur(0px)', xPercent: 0})
.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
// animate to third panel
.to("#slideContainer", 0.5, {z: -100, delay: 1})
.to("#slideContainer", 1,   {x: "-40%"})
.fromTo("#spa-title", {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0})
.fromTo(".spa-tools", {filter: 'blur(10px)', xPercent: 150}, {filter: 'blur(0px)', xPercent: 0})
.to("#slideContainer", 0.5, {z: 0})
// animate to forth panel
.to("#slideContainer", 0.5, {z: -100, delay: 1})
.to("#slideContainer", 1,   {x: "-60%"})
.fromTo("#projectInit-title", {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0})
.fromTo(".init-tools", {filter: 'blur(10px)', xPercent: 150}, {filter: 'blur(0px)', xPercent: 0})
.to("#slideContainer", 0.5, {z: 0})
// animate to fifth panel
.to("#slideContainer", 0.5, {z: -100, delay: 1})
.to("#slideContainer", 1,   {x: "-80%"})
.fromTo("#others-title", {filter: 'blur(10px)', xPercent: 100}, {filter: 'blur(0px)', xPercent: 0})
.fromTo(".other-tools", {filter: 'blur(10px)', xPercent: 150}, {filter: 'blur(0px)', xPercent: 0})
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

// Video scene          
let tweenVideo = new TimelineMax ()
.add([
TweenMax.fromTo(".orange", {yPercent: 0, authoAlpha: 1}, {yPercent: -30, autoAlpha: 0, ease: Power0.easeNone})
])

let sceneVideo = new ScrollMagic.Scene({
triggerElement: "#video",
duration: '50%',
triggerHook: 1,
})
.setTween(tweenVideo)
// .addIndicators({name: "Video OFF"})
.addTo(controller)

// Video Start Scene        
let tweenReviews = new TimelineMax ()
.add([
TweenMax.fromTo("#video", {filter: 'blur(5px)', ease: Power0.easeNone}, {filter: 'blur(0px)', ease: Power0.easeNone})
])

let sceneReviews = new ScrollMagic.Scene({
triggerElement: "#video",
duration: '50%',
triggerHook: 1,
})
.setTween(tweenReviews)
// .addIndicators({name: "Video OFF"})
.addTo(controller)


// Contact scene          
let tweenContact = new TimelineMax ()
.add([
TweenMax.fromTo("#contact-title", {yPercent: 50, autoAlpha: 0, filter: 'blur(3px)', ease: Power0.easeNone}, {yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone}, 1),
TweenMax.fromTo("#video", {autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone}, {autoAlpha: 0, filter: 'blur(5px)', ease: Power0.easeNone}, 0.5),
])

let sceneContact = new ScrollMagic.Scene({
triggerElement: "#contact-title",
duration: '40%',
triggerHook: 1,
offset: 100
})
.setTween(tweenContact)
// .addIndicators({name: "Contact"})
.addTo(controller)

// Reviews End Scene        
let tweenReviewsEnd = new TimelineMax ()
.add([
TweenMax.fromTo("#reviews", {yPercent: 25, opacity: 0, filter: 'blur(3px)', ease: Power0.easeNone}, {yPercent: 0, opacity: 1, filter: 'blur(0px)', ease: Power0.easeNone})
])

let sceneReviewsEnd = new ScrollMagic.Scene({
triggerElement: "#reviews",
duration: '50%',
triggerHook: 0.8,
})
.setTween(tweenReviewsEnd)
// .addIndicators({name: "Reviews end"})
.addTo(controller)

// // Map scene          
// let tweenMap = new TimelineMax ()
// .add([
// TweenMax.fromTo("#reviews", {yPercent: -20, filter: 'blur(3px)', ease: Power0.easeNone}, {yPercent: 15, filter: 'blur(0px)', ease: Power0.easeNone}),
// ])

// let sceneMap = new ScrollMagic.Scene({
// triggerElement: "#reviews",
// duration: '100%',
// triggerHook: 1,
// })
// .setTween(tweenMap)
// // .addIndicators({name: "worldMap"})
// .addTo(controller)

// Map scene          
let tweenBlockContact = new TimelineMax ()
.add([
TweenMax.fromTo("#contact-block", {yPercent: contactYpercent, ease: Power0.easeNone}, {yPercent: 0, ease: Power0.easeNone}),
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
let tweenTalk = TweenMax.staggerFromTo('.talk', 3, {right: talkRight}, {right: 0, ease: Back.easeOut}, 0.3)

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
let tweenSocials = TweenMax.staggerFromTo('.fa', 3, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15)

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
// Video: injecting a class to make it not visible
// console.log('DOM loaded...')
// const video = document.getElementById("video");
// video.classList.add("videoNotShown");
// Projects: injecting a class to make them not visible
const projects = Array.from(document.querySelectorAll(".project-component"));
projects.forEach(project => {
project.classList.add("notShown")
})
})


// 4 new scrollbar listener, instead of window.addEventListener
function desktopScrolling() {
let scrollbar = Scrollbar.init(document.body, {
renderByPixels: true
});
// Exposing scrollbar 
window.scrollbar = scrollbar;
// Force fixing:
const fixedPhoto = document.querySelector(".photo");
const fixedNav = document.querySelector(".view-navbar");
scrollbar.addListener((status) => {
const offset = status.offset;
firstLayer.style.top = offset.y + 'px'
fixedPhoto.style.top = offset.y + 'px';
fixedPhoto.style.left = offset.x + 'px';
fixedNav.style.top = offset.y + 'px';
sceneLogo.refresh()
sceneNavlogo.refresh()
scenePhoto.refresh()
sceneRichiBio.refresh()
sceneRichiprojects.refresh()
sceneMybio1.refresh()
sceneMybio3.refresh()
sceneMybio5.refresh()
sceneMybio7.refresh()
sceneMybio9.refresh()
sceneMybio11.refresh()
sceneMybio13.refresh()
sceneMybio2.refresh()
sceneMybio4.refresh()
sceneMybio6.refresh()
sceneMybio8.refresh()
sceneMybio10.refresh()
sceneMybio12.refresh()
sceneMybio14.refresh()
sceneLayer.refresh()
sceneRichiTablet.refresh()
sceneMybioOff.refresh()
sceneNumber1.refresh()
sceneNumber2.refresh()
sceneNumber3.refresh()
sceneNumber4.refresh()
sceneNumber5.refresh()
sceneSkillsPrereveal.refresh()
sceneSkillsReveal.refresh()
sceneSkillSlider.refresh()
sceneVideo.refresh()
// sceneReviews.refresh()
sceneReviewsEnd.refresh()
sceneContact.refresh()
// sceneMap.refresh()
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
// scrollFunction("video", "videoNotShown", "showVideo")
// scrollFunction("projects-title", "titleNotShown", "showTitle")
} 


}
