"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayBody = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Invalid Number...");
  } else if (number === guess) {
    displayMessage("✔ Correct Number");
    displayNumber(number);
    displayBody("#6495ed");
    document.querySelector(".number").style.width = "140px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Guess is Too HIGH ⬆" : "Guess is Too LOW ⬇";
      score--;
      displayScore(score);
    } else {
      displayMessage("No Lives Left");
      displayBody("#dc143c");
    }
  }
});

// document.querySelector(".again").addEventListener("click", function () {
//   window.location.href = "/";
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing :");
  displayNUmber("?");
  document.querySelector(".number").style.width = "80px";
  displayScore(score);
  document.querySelector(".guess").value = "";
  displayBody("#787878");
});
