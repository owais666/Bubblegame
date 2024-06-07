let timer = 60;
let score = 0;
let hit = 0;

function updateScore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}
function hitUpdate() {
  hit = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#hit").innerHTML = hit;
}

function makeBubble() {
  let clutter = "";

  for (let index = 0; index < 210; index++) {
    clutter += `<div class="bubble">${Math.floor(
      Math.random() * 10 + 1
    )}</div>`;
  }
  document.querySelector(".main").innerHTML = clutter;
}

function runTimer() {
  let time = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    } else {
      clearInterval(time);
      document.querySelector(
        ".main"
      ).innerHTML = `<h1 id="over">Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector(".main").addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.innerHTML);
  if (hit === clickedNumber) {
    updateScore();
    makeBubble();
    hitUpdate();
  } else if (!(document.querySelector(".main").textContent === "Game Over")) {
    score -= 5;
    document.querySelector("#scoreval").innerHTML = score;
  }
});

runTimer();
makeBubble();
hitUpdate();
