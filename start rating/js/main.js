const stars=document.querySelectorAll('.star');
const ratingValue=document.getElementById('ratingValue');

let selectedRating=0;

stars.forEach((star,index)=>{
    star.addEventListener('mouseover',()=>{
        highlightStars(index);
    });

star.addEventListener('mouseout',()=>{
    clearHighlights();
    highlightStars(selectedRating-1);
    });
star.addEventListener('click',()=>{
    selectedRating=index+1;
    ratingValue.textContent=`Rating:${selectedRating}`;
    highlightStars(index);
    });
});

function highlightStars(index){
    stars.forEach((star,i)=>{
        if(i<=index){
            star.classList.add('filled');
        }else{
            star.classList.remove('filled');
        }
    })
}
function clearHighlights(){
    stars.forEach((star)=>{
        if(!selectedRating||star.dataset.value){
            star.classList.remove('filled');
        }
    });
}