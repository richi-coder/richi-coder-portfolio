import { controller, initValues, scrollBar } from '../../main';

export function sceneRichiProjects(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib
    const { startTabletPosition } = initValues

    // richiProjects animation
    let tweenRichiprojects = new TimelineMax()
        .add([
            TweenMax.fromTo("#projects-title", { autoAlpha: 0, yPercent: 50, filter: 'blur(7px)', ease: Power0.easeNone }, { autoAlpha: 1, yPercent: 0, filter: 'blur(0px)', ease: Power0.easeNone })
        ])

    let sceneRichiprojects = new ScrollMagic.Scene({
        triggerElement: "#projects-title",
        triggerHook: 1,
        duration: '20%',
        offset: 100
    })
        .setTween(tweenRichiprojects)
        // .addIndicators({name: "richiProjects"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneRichiprojects.refresh()
    })

}