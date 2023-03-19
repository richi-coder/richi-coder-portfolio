export function scrollFunction(component, notShown, showUp) {
    const projectComponent = document.getElementById(component)
    
        const showingComponent = projectComponent.getBoundingClientRect()
         if (showingComponent.top < window.innerHeight*0.7) {
          projectComponent.classList.remove(notShown)
          projectComponent.classList.add(showUp)
         } else if (showingComponent.top > window.innerHeight) {
          projectComponent.classList.remove(showUp)
          projectComponent.classList.add(notShown)
         }
}

