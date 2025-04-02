let successMsg='<i class="bi bi-check-circle-fill"></i>Successfully submitted';
let errorMsg='<i class="bi bi-exclamation-circle-fill"></i>plz fix error';
let invalidMsg='<i class="bi bi-ban"></i>invalid,check again';
let toastBox=document.getElementById("toastBox");
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast", "show", "fade");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes('success')) {
    toast.classList.add('success');
  };
  if (msg.includes('invalid')) {
  toast.classList.add('invalid');
};
  if (msg.includes('error')) {
   toast.classList.add('error');
  }; 

  setTimeout(() => {
    toast.remove();
  }, 6000);
}