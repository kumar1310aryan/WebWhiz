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
        animateFeedback("incorrect");
      } else {
        displayMessage("You lost");
        containerE1.style.backgroundColor = "#e63946";
        scoreE1.textContent = 0;
      }
    } else {
      hideNumE1.textContent = secretNum;
      hideNumE1.style.width = "50%";
      hideNumE1.style.transition = "all 0.5s ease-in";
      containerE1.style.backgroundColor = "#00A905";
      displayMessage("Congratulations!! You Won");
      animateFeedback("correct");

      if (score > highScore) {
        highScore = score;
        highScoreE1.textContent = highScore;
      }
    }
  } else {
    displayMessage("Please enter a number");
  }
});

const displayMessage = function (message) {
  msgE1.textContent = message;
};

btnPlayE1.addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNum);
  scoreE1.textContent = score;
  hideNumE1.textContent = "?";
  hideNumE1.style.width = "25%";
  hideNumE1.style.transition = "all 0.5s ease-in";
  inputNumE1.value = "";
  containerE1.style.backgroundColor = "#ffffff";
  displayMessage("Start guessing...");
});

const animateFeedback = function (result) {
  if (result === "correct") {
    containerE1.style.animation = "correctAnimation 0.5s ease-in-out";
  } else if (result === "incorrect") {
    containerE1.style.animation = "incorrectAnimation 0.5s ease-in-out";
  }

  setTimeout(() => {
    containerE1.style.animation = "";
  }, 500);
};
