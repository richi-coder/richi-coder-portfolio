import { controller, scrollMagic } from "../../scripts/main";

export function videoTrigger() {
    const sceneVideoTrigger = new scrollMagic.Scene({
        triggerElement: '#RICHI-TRAILERS',
        duration: '50%'
    })
            .addTo(controller)
            .addIndicators({ name: 'HEY'})
            console.log(sceneVideoTrigger);
    return sceneVideoTrigger;
}