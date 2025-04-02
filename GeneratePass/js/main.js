const passwordBox=document.getElementById('password'),
rangeInput=document.querySelector(".range-box input"),
sliderNumber=document.querySelector(".range-box .slider-number");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const specialChar="!@#$%^&\|*()_-/+"
const allChars=upperCase+lowerCase+number+specialChar;

function createPassword() {
    let password="";
    for(let i=0;i<rangeInput.value;i++){
        let randomNumbers=Math.floor(Math.random()*allChars.length);
        password+=allChars[randomNumbers];
    }


    passwordBox.value=password
}
rangeInput.addEventListener("input",()=>{
    sliderNumber.innerText=rangeInput.value;
});
function copyPassword(){
    passwordBox.select()
    document.execCommand("copy");
}
