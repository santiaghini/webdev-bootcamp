var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var body = document.querySelector("body")
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbTitle = document.getElementById("RGBTitle");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    rgbTitle.textContent = pickedColor;
    console.log(colors);
    for (var index = 0; index < squares.length; index++) {
        if (colors[index]) {
            squares[index].style.backgroundColor = colors[index];
        } else {
            squares[index].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    rgbTitle.textContent = pickedColor;
    for(var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];
        squares[index].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change rgbTitle to match picked color
    rgbTitle.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
});

rgbTitle.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add clicklisteners
    squares[i].addEventListener("click", function(){
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeSquaresColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeSquaresColors(color){
    //loop squares to match given color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(n){
    // make array
    var colors = [];
    //add n random colors to array
    for(var i = 0; i < n; i++){
        //get Random color and push to array
        colors.push(randomColor());
    }
    //return array
    return colors;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}