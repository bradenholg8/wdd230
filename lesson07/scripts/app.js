// Select necessary elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Retrieve stored chapters from localStorage or initialize an empty array
let chaptersArray = getChapterList() || [];

// Display stored chapters when the page loads
chaptersArray.forEach(chapter => displayList(chapter));

// Event listener for adding chapters
button.addEventListener("click", () => {
    if (input.value.trim() !== "") {  
        displayList(input.value); // Append the chapter to the list
        chaptersArray.push(input.value); // Add to the array
        setChapterList(); // Store the updated array in localStorage
        input.value = ""; // Clear input field
        input.focus(); // Refocus for next input
    } else {
        alert("Please enter a Book and Chapter!");
        input.focus();
    }
});

// Function to display a list item
function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    li.append(deleteButton);
    list.append(li);

    // Delete button event listener
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Remove from array and localStorage
        input.focus();
    });
}

// Function to update localStorage with chapters array
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Function to get chapter list from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Function to delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌ symbol
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove from array
    setChapterList(); // Update localStorage
}
