import { controller, initValues, scrollBar } from '../main';

export function sceneForSocials(scrollMagicLib) {
    const { ScrollMagic, TweenMax, Back } = scrollMagicLib
    const { socialDuration, socialOffset } = initValues

    // Socials scene
    let tweenSocials = TweenMax.staggerFromTo('.fa', 3, { left: 700 }, { left: 0, ease: Back.easeOut }, 0.15)

    let sceneSocials = new ScrollMagic.Scene({
        triggerElement: '#socials',
        duration: socialDuration,
        triggerHook: 0.9,
        offset: socialOffset
    })
        .setTween(tweenSocials)
        // .addIndicators({name: 'socialsss'})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneSocials.refresh()
    })

}