export function landScapeModal() {
    let firstAspect = window.innerWidth / window.innerHeight;

    window.addEventListener('orientationchange', () => {
        if (firstAspect > 1) {
            window.location.assign('/')
        }
    })
    return
}