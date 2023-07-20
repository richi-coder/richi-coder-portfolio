import { controller, initValues, scrollBar } from '../../main';

export function evenScene(scrollMagicLib, number) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { bioStartPosition} = initValues

    let sceneEven = new ScrollMagic.Scene({
        triggerElement: number,
        triggerHook: 1,
        duration: '10%',
        offset: 180
      })
        .setTween(new TimelineMax()
            .add([
                TweenMax.fromTo(number, { autoAlpha: 0, yPercent: bioStartPosition, ease: Power0.easeNone }, { autoAlpha: 1, yPercent: 100, ease: Power0.easeNone })
            ]))
        // .addIndicators({name: `scene ${number}`})
        .addTo(controller)
      return sceneEven

    // Refreshing at scrollBar
    scrollBar?.addListener(() => {
        sceneEven.refresh()
    })

}