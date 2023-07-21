import { controller, scrollMagic } from "../../scripts/main";

export function videoPlay() {
    const sceneVideoPlay = new scrollMagic.Scene({
        triggerElement: '#video',
        triggerHook: 0.6,
        duration: '50%'
    })
            .addTo(controller)
            .addIndicators({ name: 'Video plays when passing here!'})
            console.log(sceneVideoPlay);
    return sceneVideoPlay;
}