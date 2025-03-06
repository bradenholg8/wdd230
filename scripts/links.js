const baseURL = "https://bradenholg8.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    const linksList = document.querySelector("#activity-links");

    lessons.forEach((lesson) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Lesson ${lesson.lesson}:</strong> `;

        lesson.links.forEach((link, index) => {
            let a = document.createElement("a");
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;

            listItem.appendChild(a);

            if (index < lesson.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });

        linksList.appendChild(listItem);
    });
};

getLinks();