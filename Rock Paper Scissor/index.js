const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const computerscoreEl = document.getElementById("computerscore");
const yourscoreEl = document.getElementById("yourscore");

let yourscore = 0;
let computerscore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function playRound(playerselection, computerselection) {
  if (playerselection == computerselection) {
    return `It is a tie.`;
  } else if (
    (playerselection === "rock" && computerselection === "scissors") ||
    (playerselection === "paper" && computerselection === "rock") ||
    (playerselection === "scissors" && computerselection === "paper")
  ) {
    yourscore++;
    yourscoreEl.textContent = yourscore;
    return "You win. " + playerselection + " beats " + computerselection;
  } else {
    computerscore++;
    computerscoreEl.textContent = computerscore;
    return "You loose. " + computerselection + " beats " + playerselection;
  }
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomchoice = Math.floor(Math.random() * choices.length);
  return choices[randomchoice];
}
