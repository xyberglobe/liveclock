function updateClock() {
    const now = new Date(); // Get current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Format hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds

    // Update the clock display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();