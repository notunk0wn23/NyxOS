// Update time and date
function updateDateTime() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  const now = new Date();

  // Format time (HH:MM)
  timeElement.textContent = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // Format date (Day, Month DD)
  dateElement.textContent = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

// Toggle quick settings
const dateAndTime = document.querySelector('.dateAndTime');
const quickSettings = document.getElementById('quickSettings');

dateAndTime.addEventListener('click', () => {
  quickSettings.classList.toggle('hidden');
});

// Close quick settings when clicking outside
document.addEventListener('click', (event) => {
  if (
    !quickSettings.contains(event.target) &&
    !dateAndTime.contains(event.target)
  ) {
    quickSettings.classList.add('hidden');
  }
});

// Initial update and start interval
updateDateTime();
setInterval(updateDateTime, 1000);

// Toggle start menu
const startMenuBtn = document.getElementById('startMenuBtn');
const startMenu = document.getElementById('startMenu');

if (startMenuBtn && startMenu) {
  startMenuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    startMenu.classList.toggle('hidden');
    console.log('Start menu toggled'); // Add this for debugging
  });
} else {
  console.error('Start menu button or start menu not found');
}