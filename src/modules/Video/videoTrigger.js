import { controller, scrollMagic } from "../../scripts/main";

export function videoTrigger() {
    const sceneVideoTrigger = new scrollMagic.Scene({
        triggerElement: '#richi-trailers',
        duration: '50%'
    })
            .addTo(controller)
            // .addIndicators({ name: 'HEY'})
    return sceneVideoTrigger;
}