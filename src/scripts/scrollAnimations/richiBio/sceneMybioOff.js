import { controller, scrollBar } from '../../main';

export function sceneMybioOff(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // sceneMybioOff
    let tweenOff = new TimelineMax()
        .add([
            // TweenMax.to(".bio", {autoAlpha: 0, ease: Power0.easeNone }),
            TweenMax.to(".photolayer", 5, { autoAlpha: 1, ease: Power0.easeNone }, 0)
        ])

    let sceneMybioOff = new ScrollMagic.Scene({
        triggerElement: ".portfolio",
        triggerHook: 1,
        offset: -800
    })
        .setTween(tweenOff)
        // .addIndicators({name: "PORTFOLIO"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener(() => {
        sceneMybioOff.refresh()
    })

}