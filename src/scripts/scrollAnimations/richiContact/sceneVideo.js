import { controller, initValues, scrollBar } from '../../main';

export function sceneForVideo(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { videoShow } = initValues

    // Video Start Scene        
    let tweenVideo = new TimelineMax()
        .add([
            TweenMax.fromTo("#video", { filter: 'blur(5px)', autoAlpha: 0, ease: Power0.easeNone }, { filter: 'blur(0px)', autoAlpha: 1, ease: Power0.easeNone }),
            TweenMax.fromTo("#videoFallback", { filter: 'blur(5px)', autoAlpha: 0, ease: Power0.easeNone }, { filter: 'blur(0px)', autoAlpha: 1, ease: Power0.easeNone }),
            TweenMax.fromTo(".orange", { yPercent: 0, autoAlpha: 1, ease: Power0.easeNone }, { yPercent: -30, autoAlpha: 1, ease: Power0.easeNone })
        ])

    let sceneVideo = new ScrollMagic.Scene({
        triggerElement: "#video",
        duration: '40%',
        triggerHook: videoShow,
    })
        .setTween(tweenVideo)
        // .addIndicators({name: "Video SHOW"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneVideo.refresh()
    })

}