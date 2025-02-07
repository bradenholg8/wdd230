// Get the toggle switch element and apply dark mode toggle functionality
const toggleSwitch = document.getElementById('darkModeToggle');

// Check if dark mode is enabled in localStorage or defaults to false
if(localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

// Add event listener for toggle switch
toggleSwitch.addEventListener('change', () => {
  if(toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});
