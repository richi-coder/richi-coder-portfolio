export function initializeDomElements() {
  return {
    page: document.title === 'richiCoder | Frontend Developer | Building client apps' ? 'index' : document.title,
    body: document.querySelector('body'),
    richiLogo: document.querySelector('.richi'),
    coderLogo: document.querySelector('.coder'),
    techLogo: document.querySelector('.tech'),
    barLogo: document.querySelector('.bar'),
    viewNavbar: document.querySelector('.view-navbar'),
    scrollDown: document.querySelector('.scrolldown'),
    bio7: document.querySelector('#bio7'),
    timeCoding: (new Date() - new Date(2022, 0, 28)) / 1000,
    daysCoding: Math.floor(((new Date() - new Date(2022, 0, 28)) / 1000) / (3600 * 24))
  }
}