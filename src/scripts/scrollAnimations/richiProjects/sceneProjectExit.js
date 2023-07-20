import { controller, scrollBar } from '../../main';

export function sceneProjectExit(scrollMagicLib, projectID) {
  const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib;

  // Project Card scene          
  let tweenNumber = new TimelineMax()
    .add([
      // TweenMax.fromTo(projectID, { transform: 'perspective(1000px) rotate3d(1,0,0,0deg)', ease: Power0.easeNone }, { transform: 'perspective(1000px) rotate3d(1,0,1,-45deg)', ease: Power0.easeNone }),
      TweenMax.fromTo(projectID, { autoAlpha: 1, ease: Power0.easeNone }, { autoAlpha: 0, ease: Power0.easeNone }),
      TweenMax.fromTo(projectID, { filter: 'blur(0px)', ease: Power0.easeNone }, { filter: 'blur(15px)', ease: Power0.easeNone }),
    ])

  let sceneProjectCard = new ScrollMagic.Scene({
    triggerElement: projectID,
    duration: '20%',
    triggerHook: 0,
    offset: '700%'
  })
    .setTween(tweenNumber)
    // .addIndicators({ name: `Project ${projectID}` })
    .addTo(controller)

  // Refreshing at scrollBar
  scrollBar?.addListener(() => {
    sceneProjectCard.refresh()
  })

}