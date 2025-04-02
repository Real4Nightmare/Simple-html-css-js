let eyeIcon = document.querySelector('.bi-eye-slash-fill');
let passwordInput = document.querySelector('.form-control[type="password"]');

eyeIcon.onclick = function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  }
};