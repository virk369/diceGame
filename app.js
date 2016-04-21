// app.js
// Author: Tarundeep Singh
// Date: April , 21st 2016
// This is the javascript file for the game

document.getElementById("btn").addEventListener("click", diceGame);

function diceGame(){
    console.log("Game started");
    
    // math function to generate random numbers
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    
    // variables get the documents by hteir ids
    var dice1 = document.getElementById("dice1").src = "images/" + d1 + ".png";
    var dice2 = document.getElementById("dice2").src = "images/" + d2 + ".png";
    
    // displaying the numbers
    var number1 = document.getElementById("number1");
	number1.innerHTML = d1;
    
    var number2 = document.getElementById("number2");
	number2.innerHTML = d2;
    
    console.log("Game ended");
    
};

