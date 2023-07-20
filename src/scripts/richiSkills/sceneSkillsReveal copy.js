import { controller, initValues, scrollBar } from '../main';

export function sceneSkillsReveal(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // SkillsTitle Prereveal scene          
    let tweenSkillsReveal = new TimelineMax()
        .add([
            TweenMax.fromTo("#skills-title", { filter: 'blur(10px)', yPercent: 200, ease: Power0.easeNone }, { filter: 'blur(0px)', yPercent: 0, ease: Power0.easeNone }),
        ])

    let sceneSkillsreveal = new ScrollMagic.Scene({
        triggerElement: "#shortbio2",
        triggerHook: 0.9,
        duration: '80%'
    })

        .setTween(tweenSkillsReveal)
        // .addIndicators({name: "Skills SHOWUP"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneSkillsreveal.refresh()
    })

}