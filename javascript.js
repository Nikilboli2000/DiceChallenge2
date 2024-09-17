var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImageSource1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImageSource1; // images/dice1.png - images/dice6.png
document.querySelector(".img1").setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImageSource2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImageSource2; // images/dice1.png - images/dice6.png
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
