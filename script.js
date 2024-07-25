const containerE1 = document.querySelector(".container");
const btnPlayE1 = document.querySelector(".btn_again");
const btnChckE1 = document.querySelector(".btn_check");
const hideNumE1 = document.querySelector(".hide_num");
const msgE1 = document.querySelector(".message");
const inputNumE1 = document.querySelector(".input_number");
const scoreE1 = document.querySelector(".score");
const highScoreE1 = document.querySelector(".high_score");

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log(secretNum);

btnChckE1.addEventListener("click", () => {
  const guess = Number(inputNumE1.value);

  if (guess) {
    if (guess !== secretNum) {
      if (score > 1) {
        score--;
        scoreE1.textContent = score;
        displayMessage(guess > secretNum ? "Too High" : "Too Low");
      } else {
        displayMessage("You lost");
        containerE1.style.backgroundColor = "#fff";
        scoreE1.textContent = 0;
      }
    } else {
      // success
      hideNumE1.textContent = secretNum;
      hideNumE1.style.width = "50%";
      hideNumE1.style.transition = "all 0.5s ease-in";
      containerE1.style.backgroundColor = "#e0d8d3";
      displayMessage("Congratulations!! You Won");

      if (score > highScore) {
        highScore = score;
        highScoreE1.textContent = highScore;
      }
    }
  } else {
    displayMessage("Please enter a number");
  }
});

// Display message function
const displayMessage = function (message) {
  msgE1.textContent = message;
};

// Reset game
btnPlayE1.addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNum);
  scoreE1.textContent = score;
  hideNumE1.textContent = "?";
  hideNumE1.style.width = "25%";
  hideNumE1.style.transition = "all 0.5s ease-in";
  inputNumE1.value = "";
  containerE1.style.backgroundColor = "#ddd";
  displayMessage("Start guessing...");
});
