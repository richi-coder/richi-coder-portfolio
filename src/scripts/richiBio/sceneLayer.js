import { controller, scrollBar } from '../main';

export function sceneLayer(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // sceneLayerBlack
    let tweenLayer = new TimelineMax()
        .add([
            TweenMax.to(".photolayer", { backgroundColor: 'rgb(10,10,10)', zIndex: 50, ease: Power0.easeNone }),
            TweenMax.to("#shortbio-title", { color: 'white', ease: Power0.easeNone }),
            TweenMax.to(".bio", { color: 'white', ease: Power0.easeNone })
        ])

    let sceneLayer = new ScrollMagic.Scene({
        triggerElement: ".portfolio",
        triggerHook: 1,
        offset: -1500
    })
        .setTween(tweenLayer)
        // .addIndicators({name: "layerBlack"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneLayer.refresh()
    })

}