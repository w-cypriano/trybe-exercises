const butoon =document.querySelector("#btn");
let resultado =document.querySelector("#resultado")
let clickCount =0;

butoon.addEventListener("click", () => {
   
    clickCount = clickCount +1;
    resultado.value =clickCount;
    
});