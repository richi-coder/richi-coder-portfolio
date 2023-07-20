import { controller, scrollBar } from '../../main';

export function sceneSkillsPrereveal(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // SkillsTitle Prereveal scene          
    let tweenSkillsPrereveal = new TimelineMax()
        .add([
            TweenMax.to(".myphoto", { autoAlpha: 0, zIndex: -60, ease: Power0.easeNone }),
            TweenMax.to(".titleContainer", { autoAlpha: 0, zIndex: -60, ease: Power0.easeNone }),
            TweenMax.to(".photolayer", { autoAlpha: 1, zIndex: 60, ease: Power0.easeNone }),
            TweenMax.fromTo(".skillsTitleContainer", { autoAlpha: 0, ease: Power0.easeNone }, { autoAlpha: 1, zIndex: 70, ease: Power0.easeNone })
        ])

    let sceneSkillsPreReveal = new ScrollMagic.Scene({
        triggerElement: "#shortbio2",
        triggerHook: 0,
        offset: -1000,
    })

        .setTween(tweenSkillsPrereveal)
        // .addIndicators({name: "Skills Prereveal"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneSkillsPreReveal.refresh()
    })

}