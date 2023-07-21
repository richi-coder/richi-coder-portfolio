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
    fixedPhoto: document.querySelector(".photo"),
    fixedNav: document.querySelector(".view-navbar")
  }
}