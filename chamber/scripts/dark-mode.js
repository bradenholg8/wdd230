const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save preference
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save preference
    }
});

