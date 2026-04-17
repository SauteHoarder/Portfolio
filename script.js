// JavaScript
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const introOverlay = document.getElementById('introOverlay');
const pageWrapper = document.querySelector('.page-wrapper');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fade transition for page links
function handleNavLinkClick(event) {
  const target = event.currentTarget;
  const href = target.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  event.preventDefault();
  document.body.classList.add('page-exiting');
  navMenu.classList.remove('active');

  setTimeout(() => {
    window.location.href = href;
  }, 450);
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
});

window.addEventListener('load', () => {
  document.body.classList.add('ready');

  if (introOverlay && pageWrapper) {
    setTimeout(() => {
      introOverlay.classList.add('fade-out');
      pageWrapper.classList.add('ready');
    }, 1400);

    introOverlay.addEventListener('animationend', (event) => {
      if (event.animationName === 'overlayHide') {
        introOverlay.remove();
      }
    });
  }
});