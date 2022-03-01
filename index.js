let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Die roll for the left die.
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Die roll for the right die.

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // Set attribute to a random die image.
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); // Set attribute to a random die image.

function declareWinner() { // Function to play the "game".
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  } 
}
declareWinner(); // Call function to change the heading to declare a victor or state a draw.