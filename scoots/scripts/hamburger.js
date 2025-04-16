document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('navMenu');
  
    menuButton.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', isOpen);
    });
  });
  