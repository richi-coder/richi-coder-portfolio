import { controller, initValues, scrollBar } from '../../main';

export function sceneProjectNumber(scrollMagicLib, projectNumber) {
  const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib;
  const { numberYpercent, numberOffset, numberYpercentStart } = initValues;

  // Number scene          
  let tweenNumber = new TimelineMax()
    .add([
      TweenMax.fromTo(projectNumber, { autoAlpha: 0, yPercent: numberYpercentStart, ease: Power0.easeNone }, { autoAlpha: 1, yPercent: numberYpercent, ease: Power0.easeNone })
    ])

  let sceneProjectNumber = new ScrollMagic.Scene({
    triggerElement: projectNumber,
    duration: '100%',
    triggerHook: 0,
    offset: numberOffset
  })
    .setTween(tweenNumber)
    // .addIndicators({ name: `Number ${projectNumber}` })
    .addTo(controller)

  // Refreshing at scrollBar
  scrollBar?.addListener(() => {
    sceneProjectNumber.refresh()
  })

}