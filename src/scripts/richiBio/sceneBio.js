import { controller, scrollBar } from '../main';

export function sceneBio(scrollMagicLib) {
    const { ScrollMagic } = scrollMagicLib

    // Bio Photo scene
    let sceneBio = new ScrollMagic.Scene({
        triggerElement: ".firstView",
        triggerHook: 0,
    },)
        .setPin("#photo")
        // .addIndicators({name: "1 (photo: 500%)"}) 
        .addTo(controller)

    // // Refreshing at scrollBar
    // scrollBar?.addListener((status) => {
    //     sceneBio.refresh()
    // })

}