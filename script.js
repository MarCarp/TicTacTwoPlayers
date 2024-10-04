// VARIABLES
let gameOn = false;
let playerOneName, playerTwoName;
// DOM
const popinName = document.getElementsByClassName("modal-bg")[0];
const fieldName = document.getElementById("player-name");

function updateName(player, name) {
 player = name;
}

function init() {
 popinName.classList.add("active");
}

init();