export function initializeDomLinks() {
    return {
        hamburguerButton: document.querySelector('#hamburguer-button'), // Hamburguer mobile button
        closeButton: document.querySelector('#close-button'), // Close mobile button
        mobileMenu: document.querySelector('#mobile-menu'), // Mobile menu
        navLogoLink1: document.querySelector('#nav-logo1'), // Link at first logo
        navLogoLink2: document.querySelector('#nav-logo2'), // Link at second logo
        navLink: document.querySelector('#profile-photo'), // Link at profile photo
        bioLink: document.querySelector('#biolink'),  // Desktop link to bio
        projectsLink: document.querySelector('#projectslink'),  // Desktop link to portfolio
        skillsLink: document.querySelector('#skillslink'),  // Desktop link to skills
        contactLink: document.querySelector('#contactlink'),  // Desktop link to contact
        mobileBioLink: document.querySelector('#mobile-bio-link'),  // Mobio link to bio
        mobilePortfolioLink: document.querySelector('#mobile-portfolio-link'),  // Mobio link to portfolio
        mobileSkillsLink: document.querySelector('#mobile-skills-link'),  // Mobio link to skills
        mobileContactLink: document.querySelector('#mobile-contact-link'),  // Mobio link to contact
        mobileResumeLink: document.querySelector('#mobile-resume-link'),  // Mobio link to resume
        socials: document.querySelectorAll('.fa')
    }
}