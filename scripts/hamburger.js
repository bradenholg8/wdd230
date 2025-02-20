const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('active');

    if (hambutton.classList.contains('active')) {
        hambutton.innerHTML = "✖";
    } else {
        hambutton.innerHTML = "☰";
    }
});
