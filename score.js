let score1 = 0;
let score2 = 0;
let maxScore = 5;
let gameOver = false;

const s1 = document.getElementById("score1");
const s2 = document.getElementById("score2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetBtn = document.getElementById("reset");
const select = document.getElementById("scoreMax");

select.addEventListener("change", () => {
  maxScore = parseInt(select.value);
  resetGame();
});

btn1.addEventListener("click", () => {
  if (!gameOver) {
    score1++;
    if (score1 === maxScore) {
      gameOver = true;
      s1.style.color = "green";
      s2.style.color = "red";
    }
    s1.textContent = score1;
  }
});

btn2.addEventListener("click", () => {
  if (!gameOver) {
    score2++;
    if (score2 === maxScore) {
      gameOver = true;
      s2.style.color = "green";
      s1.style.color = "red";
    }
    s2.textContent = score2;
  }
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  score1 = 0;
  score2 = 0;
  gameOver = false;
  s1.textContent = score1;
  s2.textContent = score2;
  s1.style.color = "";
  s2.style.color = "";
}
