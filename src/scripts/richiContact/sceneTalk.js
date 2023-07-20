import { controller, initValues, scrollBar } from '../main';

export function sceneForTalk(scrollMagicLib) {
    const { ScrollMagic, TweenMax, Back } = scrollMagicLib
    const { talkDuration, talkRight } = initValues

    // Talk scene
    let tweenTalk = TweenMax.staggerFromTo('.talk', 3, { right: talkRight }, { right: 0, ease: Back.easeOut }, 0.3)

    let sceneTalk = new ScrollMagic.Scene({
        triggerElement: '.talk',
        duration: talkDuration,
        triggerHook: 1,
        offset: 100
    })
        .setTween(tweenTalk)
        // .addIndicators({name: 'TALK'})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneTalk.refresh()
    })

}