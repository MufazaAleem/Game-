// JavaScript code
var score = 0;

// Function to update the score
function updateScore() {
  var scoreElement = document.getElementById('score');
  scoreElement.textContent = 'Score: ' + score;
}

// Function to handle button click
function handleClick() {
  score += 1;
  updateScore();
}

// Attach click event listener to the button
var button = document.getElementById('clickButton');
button.addEventListener('click', handleClick);
