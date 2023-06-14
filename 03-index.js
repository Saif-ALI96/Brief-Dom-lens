"use strict";
const inputText = document.getElementById("number");
inputText.addEventListener("change",addNumber);
// ici faire appell a mes buttons dans la page html

let firstPlayer = document.querySelector(".button1");
firstPlayer.addEventListener('click', firstPlayerScore);
//span number one
let scorePalyerOne = document.getElementById("socrePalyerOne"); 

// on récupère le premier bouton du joueur 1 (le plus gauche) 
//et l'ajoute à une variable pour pouvoir y accéder facilement

let secondPlayer = document.querySelector(".button2");
secondPlayer.addEventListener("click", secondPlayerScore);
// et de même avec les deux autres boutons
//secondPlayer.addEventListener('click');
//span number tow
let scorePalyerTwo = document.getElementById("socrePalyerTwo");


//span number three pour le point totale 
let totalPoint = document.getElementById("totalPoint");
//totalPoint = document.addEventListener('click');


let resetScore = document.querySelector(".button3");
resetScore.addEventListener('click', resettotal);
function addNumber() {
    totalPoint.textContent = inputText.value;
}


let scoreP1 = 0;
let scoreP2 = 0; 

function firstPlayerScore() {
   if (scoreP1 < inputText.value ) {
    
       scorePalyerOne.innerHTML = ++scoreP1;
       //console.log("saif"); 
    }

}

function secondPlayerScore() {
    if (scoreP2 < inputText.value) {
     
        scorePalyerTwo.innerHTML = ++scoreP2;
        //console.log("saif"); 
     }
 
 }

 function resettotal() {
    scorePalyerOne.innerHTML =  scoreP1 = 0;
    scorePalyerTwo.innerHTML =  scoreP2 = 0;
    
 }
 