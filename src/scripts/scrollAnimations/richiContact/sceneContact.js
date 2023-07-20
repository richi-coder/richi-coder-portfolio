import { controller, initValues, scrollBar } from '../../main';

export function sceneForContact(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { contactTitleShow } = initValues

    // Contact scene          
    let tweenContact = new TimelineMax()
        .add([
            TweenMax.fromTo("#contact-title", { yPercent: 50, autoAlpha: 0, filter: 'blur(7px)', ease: Power0.easeNone }, { yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }, 1),
            TweenMax.fromTo("#video", { autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone }, { autoAlpha: 0, filter: 'blur(5px)', ease: Power0.easeNone }, 0.5),
        ])

    let sceneContact = new ScrollMagic.Scene({
        triggerElement: "#contact-title",
        duration: '40%',
        triggerHook: contactTitleShow,
        offset: 100
    })
        .setTween(tweenContact)
        // .addIndicators({name: "Contact Title / Video OFF"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneContact.refresh()
    })

}