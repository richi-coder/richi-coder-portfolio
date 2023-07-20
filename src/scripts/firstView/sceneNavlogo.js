import { controller, scrollBar } from '../main';

export function sceneNavlogo(scrollMagicLib) {
    const { ScrollMagic } = scrollMagicLib
    
    // Nav Logo scene
    let sceneNavlogo = new ScrollMagic.Scene({
        triggerElement: "#shortbio",
        triggerHook: 0,
    })
        .setClassToggle(".nav-logo", "typing-nav-logo")
        // .addIndicators({name: "nav-logo"})
        .addTo(controller)

    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneNavlogo.refresh()
    })

}