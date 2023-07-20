import { controller, scrollBar } from '../../main';

export function scenePhoto(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // Photo animation
    let tweenPhoto = new TimelineMax()
        .add([
            TweenMax.to(".photolayer", { autoAlpha: 0.8, ease: Power0.easeNone, reversed: false }),
        ])

    let scenePhoto = new ScrollMagic.Scene({
        triggerElement: "#shortbio",
        triggerHook: 0,
        duration: '10%',
    })
        .setTween(tweenPhoto)
        // .addIndicators({name: "photoOpacity"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        scenePhoto.refresh()
    })

}