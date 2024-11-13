// Open the popup menu
function openPopup() {
  closeSignIn(); // Ensure the sign-in popup is closed
  document.getElementById('popupOverlay').style.display = 'flex'; // Show the popup menu
}

// Close the popup menu
function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none'; // Hide the popup menu
}

// Open the sign-in popup and apply the background blur
function openSignIn() {
  closePopup(); // Close the menu popup if it's open
  document.getElementById('signInPopup').style.display = 'flex'; // Show the sign-in popup (same as popup menu)
  document.body.classList.add('blur-background'); // Add the blur effect to the background
}

// Close the sign-in popup and remove the blur effect
function closeSignIn() {
  document.getElementById('signInPopup').style.display = 'none'; // Hide the sign-in popup
  document.body.classList.remove('blur-background'); // Remove the blur effect from the background
}

// Navigate to a specific page
function navigateTo(page) {
  window.location.href = page; // Redirect to the specified page
}
