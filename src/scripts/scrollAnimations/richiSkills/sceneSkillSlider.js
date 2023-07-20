import { controller, scrollBar } from '../../main';

export function sceneSkillSlider(scrollMagicLib) {
    const { ScrollMagic, TimelineMax, TweenMax, Power0 } = scrollMagicLib

    // skillSlider         
    let tweenSkillSlider = new TimelineMax()
        .to("#slideContainer", 0.5, { z: -100 })		// move back in 3D space
        .to("#slideContainer", 1, { x: "-20%" })	// move in to first panel
        .fromTo("#responsive-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
        .fromTo(".responsive-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
        .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, { z: -100, delay: 1 })
        .to("#slideContainer", 1, { x: "-40%" })
        .fromTo("#spa-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
        .fromTo(".spa-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to forth panel
        .to("#slideContainer", 0.5, { z: -100, delay: 1 })
        .to("#slideContainer", 1, { x: "-60%" })
        .fromTo("#projectInit-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
        .fromTo(".init-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to fifth panel
        .to("#slideContainer", 0.5, { z: -100, delay: 1 })
        .to("#slideContainer", 1, { x: "-80%" })
        .fromTo("#others-title", { filter: 'blur(10px)', xPercent: 100 }, { filter: 'blur(0px)', xPercent: 0 })
        .fromTo(".other-tools", { filter: 'blur(10px)', xPercent: 150 }, { filter: 'blur(0px)', xPercent: 0 })
        .to("#slideContainer", 0.5, { z: 0 });

    let sceneSkillSliding = new ScrollMagic.Scene({
        triggerElement: "#shortbio2",
        duration: '300%',
        triggerHook: 0,
        offset: '100%'
    })

        .setTween(tweenSkillSlider)
        // .addIndicators({name: "skillSlider"})
        .addTo(controller)
    // Refreshing at scrollBar
    scrollBar?.addListener((status) => {
        sceneSkillSliding.refresh()
    })

}