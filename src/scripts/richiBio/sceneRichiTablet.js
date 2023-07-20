import { controller, initValues, scrollBar } from '../main';

export function sceneRichiTablet(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { startTabletPosition } = initValues

    // tabletAnimation
    let tweenRichiTablet = new TimelineMax()
        .add([
            TweenMax.fromTo("#richi-tablet", { xPercent: -250, yPercent: startTabletPosition, rotate: 15, scale: 2, ease: Power0.easeNone }, { xPercent: 150, yPercent: -50, rotate: -30, scale: 0.1, ease: Power0.easeNone })
        ])

    let sceneRichiTablet = new ScrollMagic.Scene({
        triggerElement: "#richi-tablet",
        triggerHook: 1,
        duration: '200%',
    })
        .setTween(tweenRichiTablet)
        // .addIndicators({name: "richiTablet"}) 
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneRichiTablet.refresh()
    })

}