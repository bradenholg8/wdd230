document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeBannerButton = document.getElementById("closeBanner");

    const today = new Date().getDay();
    
    if (today >= 1 && today <= 3) {
        banner.style.display = "flex";
    } else {
        banner.style.display = "none";
    }

    closeBannerButton.addEventListener("click", () => {
        banner.style.display = "none";
    });
});
