import { controller, initValues, scrollBar } from '../../main';

export function sceneContactBlock(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { contactYpercent } = initValues

    // Contact block (talk and socials)
    let tweenBlockContact = new TimelineMax()
        .add([
            TweenMax.fromTo("#contact-block", { yPercent: contactYpercent, ease: Power0.easeNone }, { yPercent: 0, ease: Power0.easeNone }),
        ])

    let sceneBlockContact = new ScrollMagic.Scene({
        triggerElement: "#contact-block",
        duration: '50%',
        triggerHook: 1,
    })
        .setTween(tweenBlockContact)
        // .addIndicators({name: "contactBLOCK"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneBlockContact.refresh()
    })

}