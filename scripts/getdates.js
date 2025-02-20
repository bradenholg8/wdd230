document.addEventListener("DOMContentLoaded", () => {
    updateYear();
    updateLastModified();
    updatePageVisits();
});

/**
 * Updates the copyright year dynamically.
 */
function updateYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Updates the "Last Modified" date in a readable format.
 */
function updateLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleDateString('en-US', options)}`;
    }
}

/**
 * Tracks and displays the number of times the page has been visited.
 */
function updatePageVisits() {
    const visitsElement = document.querySelector(".page-visits");
    if (!visitsElement) return;

    let pageVisits = Number(localStorage.getItem("pageVisits")) || 0;
    pageVisits++;

    localStorage.setItem("pageVisits", pageVisits);
    visitsElement.textContent = `Page Visits: ${pageVisits}`;

    // Optional: Add a reset button for debugging
    addResetButton();
}

/**
 * Adds a button to reset the visit counter for debugging purposes.
 */
function addResetButton() {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Counter";
    resetButton.style.marginLeft = "10px";
    resetButton.style.cursor = "pointer";
    resetButton.onclick = () => {
        localStorage.removeItem("pageVisits");
        updatePageVisits();
    };

    document.querySelector(".page-visits").appendChild(resetButton);
}
