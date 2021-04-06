const hamburgerMenu = document.querySelector('.hamburgerMenu');
const menuContainer = document.querySelector('.menuContainer');
let menuState = "closed";

function hamburgerClick(event) {
  menuState = (menuState === 'closed') ? 'open' : 'closed';
  menuContainer.classList.toggle('mobileMenuOpen');
}

function handleResize(event) {
  // if window is resized, close mobile menu
  // for if user is on desktop and viewing site in a narrow window
  if (menuState === 'open') hamburgerClick();
}

hamburgerMenu.addEventListener('click', hamburgerClick);
window.addEventListener('resize', handleResize);