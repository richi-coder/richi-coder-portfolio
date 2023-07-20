export function scrollFunction(component, notShown, showUp) {
    const projectComponent = document.getElementById(component)
    const layerComponent = document.getElementById(`l-${component}`);
        const showingComponent = projectComponent.getBoundingClientRect()
         if (showingComponent.top < window.innerHeight*0.9) {
          projectComponent.classList.remove(notShown)
          projectComponent.classList.add(showUp)
            if(layerComponent !== null) {
                layerComponent.classList.add("blur-layer-off")
                }
         } else if (showingComponent.top > window.innerHeight) {
          projectComponent.classList.remove(showUp)
          projectComponent.classList.add(notShown)
            if(layerComponent !== null) {
                layerComponent.classList.remove("blur-layer-off")
                }
         }
}

