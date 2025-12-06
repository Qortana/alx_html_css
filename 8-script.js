const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Animate hamburger icon
  hamburger.classList.toggle('open');
});
