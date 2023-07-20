import { controller, scrollBar } from '../main';

export function oddScene(scrollMagicLib, number) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // oddScenes
    let sceneOdd = new ScrollMagic.Scene({
        triggerElement: number,
        triggerHook: 1,
        duration: '10%',
        offset: 100
    })
        .setTween(new TimelineMax()
            .add([
                TweenMax.fromTo(number, { autoAlpha: 0, filter: 'blur(5px)', ease: Power0.easeNone }, { autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }),
            ]))
        // .addIndicators({name: `scene ${number}`})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener(() => {
        sceneOdd.refresh()
    })

}