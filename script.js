const userSection = document.getElementById('user-section');
const simSection = document.getElementById('sim-section');
const startBtn = document.getElementById('start-btn');
const recycleBtn = document.getElementById('recycle-btn');
const resetBtn = document.getElementById('reset-btn');
const usernameInput = document.getElementById('username');
const displayUsername = document.getElementById('display-username');
const recycleCount = document.getElementById('recycle-count');
const results = document.getElementById('results');
const totalPoints = document.getElementById('total-points');

let points = 0;

function updatePoints(newPoints) {
  points += newPoints;
  totalPoints.textContent = `Total Points: ${points}`;
}

startBtn.onclick = () => {
  const username = usernameInput.value.trim();
  if(username.length === 0) {
    alert('Please enter your name.');
    return;
  }
  userSection.style.display = 'none';
  simSection.style.display = 'block';
  displayUsername.textContent = username;
  points = 0;
  updatePoints(0);
  results.textContent = '';
};

recycleBtn.onclick = () => {
  const count = parseInt(recycleCount.value, 10);
  if(isNaN(count) || count < 1) {
    alert('Please enter a valid number of items.');
    return;
  }
  const earned = count * 10; // 10 points per item, for example
  updatePoints(earned);
  results.textContent = `You recycled ${count} items and earned ${earned} points!`;
};

resetBtn.onclick = () => {
  simSection.style.display = 'none';
  userSection.style.display = 'block';
  usernameInput.value = '';
  points = 0;
  updatePoints(0);
  results.textContent = '';
};