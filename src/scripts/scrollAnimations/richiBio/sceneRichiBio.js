import { controller, scrollBar } from '../../main';

export function sceneRichiBio(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // richiBio animation
    let tweenRichibio = new TimelineMax()
        .add([
            TweenMax.fromTo("#shortbio-title", { autoAlpha: 0, yPercent: 50, filter: 'blur(7px)', ease: Power0.easeNone }, { autoAlpha: 1, yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone })
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

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneRichiBio.refresh()
    })

}