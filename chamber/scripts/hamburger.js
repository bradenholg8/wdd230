const menuButton = document.getElementById("menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
