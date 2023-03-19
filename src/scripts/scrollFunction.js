export function scrollFunction(component, notShown, showUp) {
    window.addEventListener("scroll", () => {
        const showingComponent = component.current.getBoundingClientRect()
         if (showingComponent.top < window.innerHeight*0.7) {
          component.current.classList.remove(notShown)
          component.current.classList.add(showUp)
         } else if (showingComponent.top > window.innerHeight) {
          component.current.classList.remove(showUp)
          component.current.classList.add(notShown)
         }
      })
}

