import { controller, scrollBar } from '../main';

export function sceneForReviews(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // Reviews End Scene        
    let tweenReviewsEnd = new TimelineMax()
        .add([
            TweenMax.fromTo("#reviews", { yPercent: 25, autoAlpha: 0, filter: 'blur(3px)', ease: Power0.easeNone }, { yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', ease: Power0.easeNone })
        ])

    let sceneReviewsEnd = new ScrollMagic.Scene({
        triggerElement: "#reviews",
        duration: '50%',
        triggerHook: 0.8,
    })
        .setTween(tweenReviewsEnd)
        // .addIndicators({name: "Reviews end"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneReviewsEnd.refresh()
    })

}