document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

function updatePageVisits() {
    const visitsElement = document.querySelector('.page-visits');

    let pageVisits = localStorage.getItem('pageVisits');

    if (pageVisits) { 
        pageVisits = parseInt(pageVisits) + 1;
    } else {
        pageVisits = 1;
    }

    localStorage.setItem('pageVisits', pageVisits);

    visitsElement.textContent = `Page Visits: ${pageVisits}`;
}

updatePageVisits();
