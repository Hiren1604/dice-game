var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomSourceOfDiceImage1 = "images/" + randomDiceImage1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomSourceOfDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomSourceOfDiceImage2 = "images/" + randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomSourceOfDiceImage2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!"
}