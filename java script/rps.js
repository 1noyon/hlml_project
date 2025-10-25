let winCount = 0;
let lossCount = 0;
let drawCount = 0;

const resultBtn = document.getElementById("result-btn");
const winSpan = document.getElementById("win-count");
const lossSpan = document.getElementById("loss-count");
const drawSpan = document.getElementById("draw-count");

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    drawCount++;
    resultBtn.textContent = `Draw! Both chose ${playerChoice}`;
    resultBtn.className = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winCount++;
    resultBtn.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    resultBtn.className = "win";
  } else {
    lossCount++;
    resultBtn.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    resultBtn.className = "lose";
  }

  updateScore();
}

function updateScore() {
  winSpan.textContent = winCount;
  lossSpan.textContent = lossCount;
  drawSpan.textContent = drawCount;
}

function resetGame() {
  winCount = 0;
  lossCount = 0;
  drawCount = 0;
  updateScore();
  resultBtn.textContent = "Choose a move!";
  resultBtn.className = "";
}
