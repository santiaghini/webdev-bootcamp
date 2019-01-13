element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log("Someone pressed the button!");
    this.style.color = "orange";
})

//OR
button.addEventListener("click", changeText);

function changeText(){
    button.textContent = "Button clicked!";
}
