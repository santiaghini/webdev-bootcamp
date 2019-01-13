var button = document.querySelector("button");
button.addEventListener("click",changeColor);

function changeColor(){
    document.querySelector("body").classList.toggle("purple-background");
}