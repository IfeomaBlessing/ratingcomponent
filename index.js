
const submitButton= document.getElementById("submit");
const rateAgain= document.getElementById("rate-again");
const modalBox = document.getElementById("modal-box");
const contentContainer = document.getElementById("content");
const spanRating= document.getElementById("rating");
const rateBtns = document.querySelectorAll(".btn");





submitButton.addEventListener("click", function(){
    modalBox.style.display= "block" ;
    contentContainer.style.display= "none"
});


rateAgain.addEventListener("click", function(){
    modalBox.style.display= "none" ;
    contentContainer.style.display= "block"
});

rateBtns.forEach((rate) => {
    rate.addEventListener("click", function(){
     spanRating.innerHTML = rate.innerHTML;
})

});