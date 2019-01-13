var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var playingToNum = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var goal = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === goal) {
           gameOver = true;
           //better to use a class
           p1Display.style.color = "green";
           alert("PLAYER ONE WINS!");
        }
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === goal) {
           gameOver = true;
           p2Display.style.color = "green";
           alert("PLAYER TWO WINS!");
        }
    }
});

resetButton.addEventListener("click", function(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});

numInput.addEventListener("change", function(){
    goal = Number(this.value);
    playingToNum.textContent = this.value;
    reset();
});

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}
