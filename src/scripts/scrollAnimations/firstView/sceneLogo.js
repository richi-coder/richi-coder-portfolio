import { controller, scrollBar } from '../../main';

export function sceneLogo(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // Logo scene
    let tweenLogo = new TimelineMax()
        .add([
            TweenMax.fromTo(".logoContainer", 20, { yPercent: '0', ease: Power0.easeNone }, { yPercent: '50', ease: Power0.easeNone }, 0),
            TweenMax.fromTo(".photolayer", { filter: 'blur(50px)', ease: Power0.easeNone }, { filter: 'blur(0px)', ease: Power0.easeNone })
        ]);

    let sceneLogo = new ScrollMagic.Scene({
        triggerElement: ".firstView",
        triggerHook: 0,
        duration: '100%',
    })
        .setTween(tweenLogo)
        // .addIndicators({name: "logoScene"}) // add indicators (requires plugin)
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneLogo.refresh()
    })

}