var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  icon.classList.toggle("bi-sun-fill");
  icon.classList.toggle("bi-moon-fill");
};