"use strict";
 
// appeler mes buttons 
const buttonAttack = document.getElementById("atk");
buttonAttack.addEventListener("click", theAttackNormal);

const buttonAttackSpecial = document.getElementById("atkspl");
buttonAttackSpecial.addEventListener("click",theAttackSpecial);

const buttonHeal = document.getElementById("heal");
buttonHeal.addEventListener("click", healing);

const buttonRun = document.getElementById("run");
buttonRun.addEventListener("click",reset);

let lifeOfPlyer = 100;
let lifeOfMonster = 100;

// appeler son span
let lifeOfCare = document.getElementById("yourLife");
//attackOfCare.addEventListener("click",reset)

let lifeOfCareMonster = document.getElementById("hisLife");
//lifeOfCareMonster.addEventListener("click",reset)


//creer une function pour generer le chiffre (nombre)
function generateLifeOfYouAndTheMonster(min,max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}

function theAttackNormal() {

lifeOfMonster -= generateLifeOfYouAndTheMonster(3,10);
lifeOfCareMonster.innerHTML = lifeOfMonster;

lifeOfPlyer -= generateLifeOfYouAndTheMonster(5,10);
lifeOfCare.innerHTML = lifeOfPlyer;
}

function theAttackSpecial() {
lifeOfMonster -= generateLifeOfYouAndTheMonster(5,10);
lifeOfCareMonster.innerHTML = lifeOfMonster;

lifeOfPlyer -= generateLifeOfYouAndTheMonster(3,10);
lifeOfCare.innerHTML = lifeOfPlyer;
}

function healing(){
lifeOfPlyer += 10;
lifeOfCare.innerHTML = lifeOfPlyer;  
console.log(lifeOfPlyer);
}

function reset(){
    lifeOfPlyer = 100;
    lifeOfMonster= 100;
    lifeOfCare.innerHTML = lifeOfPlyer;
    lifeOfCareMonster.innerHTML = lifeOfMonster;
    console.log(lifeOfPlyer);
}
