import { controller, scrollBar } from '../../main';

export function sceneProjectEntrance(scrollMagicLib, projectID) {
  const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib;

  // Project Card scene          
  let tweenNumber = new TimelineMax()
    .add([
      TweenMax.fromTo(projectID, { transform: 'perspective(1000px) rotate3d(1,0,0,45deg)', ease: Power0.easeNone }, { transform: 'perspective(1000px) rotate3d(1,0,1,0deg)', ease: Power0.easeNone }),
      TweenMax.fromTo(projectID, { autoAlpha: 0.5, ease: Power0.easeNone }, { autoAlpha: 1, ease: Power0.easeNone }, 1),
      TweenMax.fromTo(projectID, { filter: 'blur(15px)', ease: Power0.easeNone }, { filter: 'blur(0px)', ease: Power0.easeNone }),
      TweenMax.fromTo(projectID, { yPercent: 20, ease: Power0.easeNone }, { yPercent: 0, ease: Power0.easeNone }),
      TweenMax.fromTo(`${projectID}-desktopImage`, { xPercent: 20, ease: Power0.easeNone }, { xPercent: 0, ease: Power0.easeNone }),
      TweenMax.fromTo(`${projectID}-mobileImage`, { yPercent: 30, ease: Power0.easeNone }, { yPercent: 0, ease: Power0.easeNone }),
    ])

  let sceneProjectCard = new ScrollMagic.Scene({
    triggerElement: projectID,
    duration: '70%',
    triggerHook: 0.9,
    offset: '-100%'
  })
    .setTween(tweenNumber)
    // .addIndicators({ name: `Project ${projectID}` })
    .addTo(controller)

  // Refreshing at scrollBar
  scrollBar?.addListener(() => {
    sceneProjectCard.refresh()
  })

}