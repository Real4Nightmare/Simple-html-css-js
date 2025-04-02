const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createbtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "assets/1.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.execCommand("insertLineBreak");
  }
});
