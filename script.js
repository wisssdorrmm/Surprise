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
const text = `Happy Valentine’s Day, my baby 💜
There’s something about today that made me pause and really think about you, about us, and about everything you mean to me. I’ve wanted to say some of these things for a while, but I guess life, work, and all the busyness kept getting in the way. Still, none of that ever stopped me from feeling what I feel for you.
Lately, I know I’ve been caught up with work long days, constant pressure, always chasing one responsibility after another, sometimes barely having time for anything else. But even in the middle of all that, you’ve never left my thoughts. You’re one of the few people who genuinely bring calm to my mind, no matter how stressful things get.
What I feel when I think about you is hard to describe, but it’s real. You’re not just someone I talk to or spend time with. You’ve become my comfort, my peace, my happiness in ways I didn’t even expect. The way you care, the way you understand me, the way you’re simply you — it all means so much more to me than ordinary words can express.
I appreciate you in ways you might not even realize. Your kindness, your patience, your heart, your presence in my life all of it matters to me deeply. You’ve seen different sides of me, my moods, my flaws, my jokes, my craziness, and yet the connection we share has remained something special and natural.
And the truth is, I don’t see you as just anyone in my life.
I see you as someone I want to be closer to, someone I want to build something meaningful with, someone I want to share my world with in a way that goes beyond what we have now.
I want you to be the one I can proudly call my babe.
The one I can openly share my feelings with.
The one I can call anytime, not out of obligation, but because you’re truly mine and I’m truly yours.
The one I can laugh with, confide in, grow with, and care for in a real and intentional way.
This isn’t just about today or Valentine’s Day. It’s about how I genuinely feel about you and what I see when I think about us.
So I want to ask you something honestly, from my heart, without pressure or games…
Would you be my girlfriend?
Not just in name, but in a way where we choose each other, where we stand beside each other, where we build something beautiful, where I can say with certainty and pride, “Yes, she is my babe.” 💜`;

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
      <p>Thank you for saying yes, seriously. I don’t see this as something small or casual  you’re really special to me, and I’m grateful for you. I’m happy we’re taking this step together.
Now I can proudly say you’re my girl 😊

And I hope you know I’ll always treat you with care, respect, and honesty..</p>
    </div>
  </div>
  `;
}
