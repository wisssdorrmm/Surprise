// MUSIC CONTROL
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Pause Music 🎵";
  } else {
    music.pause();
    musicBtn.textContent = "Play Music 🎵";
  }
};

// LETTER TYPING
const text = `From the day I met you, everything felt different.

You bring calm to my chaos.
You bring light to my days.
You make ordinary moments feel special.

This website is simple.
But my feelings for you are not.

So today, I just want to ask...`;

let i = 0;
const letter = document.getElementById("letterText");

function type() {
  if (i < text.length) {
    letter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 35);
  }
}
type();

// IMAGE MODAL
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.getElementById("close");

images.forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

close.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";

// NO BUTTON MOVE
const noBtn = document.getElementById("noBtn");
noBtn.onmouseover = () => {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 100 + "px";
};

// YES
function yes() {
  document.body.innerHTML = `
  <div style="height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;background:#f3f0ff;">
    <div>
      <h1 style="color:#5E3BEE;">She Said Yes 💜</h1>
      <p>This might be the best moment of my life.</p>
    </div>
  </div>
  `;
}
