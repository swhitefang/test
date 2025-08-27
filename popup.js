// Popup script for Akamai Debug Headers extension
document.addEventListener('DOMContentLoaded', async () => {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const statusElement = document.getElementById('status');
  
  // Get current state from background script
  const response = await chrome.runtime.sendMessage({ action: 'getState' });
  updateUI(response.enabled);
  
  // Handle toggle click
  toggleSwitch.addEventListener('click', async () => {
    const response = await chrome.runtime.sendMessage({ action: 'toggle' });
    updateUI(response.enabled);
  });
  
  function updateUI(enabled) {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusElement = document.getElementById('status');
    
    if (enabled) {
      toggleSwitch.classList.add('enabled');
      statusElement.textContent = 'Debug Headers: ENABLED';
      statusElement.className = 'status enabled';
    } else {
      toggleSwitch.classList.remove('enabled');
      statusElement.textContent = 'Debug Headers: DISABLED';
      statusElement.className = 'status disabled';
    }
  }
});
