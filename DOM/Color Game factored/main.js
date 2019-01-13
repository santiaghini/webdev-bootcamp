var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbTitle = document.getElementById("RGBTitle");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //Mode Btns event listeners
    setupModeBtns();

    //Squares event listeners
    setupSquares();

    reset();
}

function setupModeBtns() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add clicklisteners to squares
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
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change rgbTitle to match picked color
    rgbTitle.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     rgbTitle.textContent = pickedColor;
//     console.log(colors);
//     for (var index = 0; index < squares.length; index++) {
//         if (colors[index]) {
//             squares[index].style.backgroundColor = colors[index];
//         } else {
//             squares[index].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     rgbTitle.textContent = pickedColor;
//     for(var index = 0; index < squares.length; index++) {
//         squares[index].style.backgroundColor = colors[index];
//         squares[index].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});

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