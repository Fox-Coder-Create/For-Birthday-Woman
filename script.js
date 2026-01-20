const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const secret = document.getElementById("serbianSecret");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  music.play();
  startBtn.style.display = "none";
  letter.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  letter.classList.add("hidden");
  proposal.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
  proposal.innerHTML =
    "<h2>She Said YES 💖</h2><p>This is the beginning of our forever 🌌</p>";
  secret.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});
