const wrapper = document.querySelector(".wrapper"),
  header = wrapper.querySelector("header");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);

  // Update the position of the div using template literals correctly
  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", () => {
  header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
  header.removeEventListener("mousemove", onDrag);
});