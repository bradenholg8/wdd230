document.addEventListener("DOMContentLoaded", () => {
    updateYear();
    updateLastModified();
    updatePageVisits();
});

function updateYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function updateLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleDateString('en-US', options)}`;
    }
}

function updatePageVisits() {
    const visitsElement = document.querySelector(".page-visits");
    if (!visitsElement) return;

    let pageVisits = Number(localStorage.getItem("pageVisits")) || 0;
    pageVisits++;

    localStorage.setItem("pageVisits", pageVisits);
    visitsElement.textContent = `Page Visits: ${pageVisits}`;

    addResetButton();
}

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
