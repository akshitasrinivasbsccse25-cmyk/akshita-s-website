const moods = {
  happy: {
    title: "You're feeling Happy! 😄",
    message: "Keep smiling — your energy is contagious! 🌞",
    color: "linear-gradient(135deg, #ffcc70, #ff7a00)"
  },
  sad: {
    title: "Feeling a little down? 😔",
    message: "It’s okay to rest. Brighter days are on their way. 💫",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
  },
  angry: {
    title: "Angry huh? 😠",
    message: "Take a deep breath. Let peace take over. 🌿",
    color: "linear-gradient(135deg, #ff5858, #f09819)"
  },
  calm: {
    title: "You're feeling Calm 🌸",
    message: "Breathe in… breathe out. Stay present and grounded. 🍃",
    color: "linear-gradient(135deg, #b7f8db, #50a7c2)"
  },
  tired: {
    title: "Feeling tired? 😴",
    message: "Rest your soul. Tomorrow’s a new chance to shine. 🌙",
    color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
  }
};

const buttons = document.querySelectorAll('.mood');
const moodTitle = document.getElementById('mood-title');
const moodMessage = document.getElementById('mood-message');
const messageBox = document.getElementById('message-box');
const resetBtn = document.getElementById('reset-btn');

function clearActive() {
  buttons.forEach(b => b.classList.remove('active'));
}

function showMood(moodKey) {
  const mood = moods[moodKey];
  if (!mood) return;

  // Set content
  moodTitle.textContent = mood.title;
  moodMessage.textContent = mood.message;

  // Apply page background
  document.body.style.background = mood.color;

  // Visual message box
  messageBox.classList.remove('visible');
  // small timeout so animation restarts
  setTimeout(() => {
    messageBox.classList.add('visible');
  }, 80);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const moodKey = btn.getAttribute('data-mood');
    clearActive();
    btn.classList.add('active');
    showMood(moodKey);
  });
});

// Reset to default state
resetBtn.addEventListener('click', () => {
  clearActive();
  moodTitle.textContent = '';
  moodMessage.textContent = '';
  messageBox.classList.remove('visible');
  // revert background to original gradient
  document.body.style.background = "linear-gradient(135deg, #1e1f2f, #3c3f68)";
});


