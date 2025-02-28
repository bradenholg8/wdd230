const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

if (mainnav && hambutton) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('active');
        hambutton.textContent = hambutton.classList.contains('active') ? "✖" : "☰";
    });

    // Ensure menu resets on screen resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            mainnav.classList.remove('show');
            hambutton.classList.remove('active');
            hambutton.textContent = "";
        }
    });
}
