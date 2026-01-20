document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const letter = document.getElementById("letter");
  const proposal = document.getElementById("proposal");
  const secret = document.getElementById("serbianSecret");
  const music = document.getElementById("bgMusic");

  /* 🎵 MUSIC – fade in on first click */
  document.addEventListener("click", () => {
    if (!music || !music.paused) return;

    music.volume = 0;
    music.play().catch(() => {});

    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.01;
      music.volume = Math.min(vol, 0.12);
      if (vol >= 0.12) clearInterval(fade);
    }, 120);
  }, { once: true });

  function show(el) {
    el.classList.add("show");
  }

  function hide(el) {
    el.classList.remove("show");
  }

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    show(letter);
  });

  nextBtn.addEventListener("click", () => {
    hide(letter);
    setTimeout(() => show(proposal), 800);
  });

  yesBtn.addEventListener("click", () => {
    hide(proposal);

    setTimeout(() => {
      proposal.innerHTML =
        "<h2>She Said YES 💖</h2><p>This is the beginning of our forever 🌌</p>";
      show(proposal);
      show(secret);
    }, 800);
  });

  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  });
});
