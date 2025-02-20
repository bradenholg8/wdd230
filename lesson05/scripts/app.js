document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("favchap");
    const button = document.querySelector("button");
    const list = document.getElementById("list");

    let chaptersArray = JSON.parse(localStorage.getItem("bomChapters")) || [];

    function displayList() {
        list.innerHTML = "";
        chaptersArray.forEach((chapter, index) => {
            const li = document.createElement("li");
            li.textContent = chapter;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.addEventListener("click", function () {
                chaptersArray.splice(index, 1);
                localStorage.setItem("bomChapters", JSON.stringify(chaptersArray));
                displayList();
            });

            li.appendChild(deleteButton);
            list.appendChild(li);
        });
    }

    button.addEventListener("click", function () {
        const chapter = input.value.trim();

        if (chapter === "") {
            alert("Please enter a Book and Chapter.");
            return;
        }

        if (!chaptersArray.includes(chapter)) {
            chaptersArray.push(chapter);
            localStorage.setItem("bomChapters", JSON.stringify(chaptersArray));
            displayList();
            input.value = "";
            input.focus();
        } else {
            alert("Chapter already added!");
        }
    });

    displayList();
});
