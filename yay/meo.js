let secondsPassed = 0; // Initialize the counter

// Function to update the timer
function updateTimer() {
  secondsPassed++; // Increment the counter
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `It has been ${secondsPassed} seconds since you have started !`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

