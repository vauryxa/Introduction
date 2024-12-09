function showSection(sectionId) {
    // Get all sections (cards)
    const sections = document.querySelectorAll('.card');

    // Loop through each section
    sections.forEach(section => {
        if (section.id === sectionId) {
            // Activate the selected section with animation
            section.classList.add('active');
        } else {
            // Deactivate other sections with animation
            section.classList.remove('active');
        }
    });
}

// GitHub Button and Modal Logic
const githubButton = document.querySelector('.github-button');
const githubModal = document.getElementById('githubModal');
const backBtn = document.createElement('button'); // Create a back button for modal
backBtn.classList.add('back-btn');
backBtn.textContent = 'Back'; // Set the text of the button

// Add the back button to the GitHub modal
githubModal.appendChild(backBtn);

// Open the GitHub Modal when the button is clicked
githubButton.addEventListener('click', function() {
  githubModal.classList.add('active');
});

// Close the GitHub Modal when clicking outside of it
githubModal.addEventListener('click', function(e) {
  if (e.target === githubModal || e.target === backBtn) {
    githubModal.classList.remove('active');
  }
});

// Close the modal when the back button is clicked
backBtn.addEventListener('click', function() {
  githubModal.classList.remove('active');
});
