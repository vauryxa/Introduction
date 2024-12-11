// Function to switch sections (cards)
function showSection(sectionId) {
  const sections = document.querySelectorAll('.card');
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// GitHub Button Functionality
const githubButton = document.querySelector('.github-button');
githubButton.addEventListener('click', () => {
  window.open('https://github.com/AstroWave69', '_blank');
});

// NGL Button Functionality
const nglButton = document.querySelector('.ngl-button');
nglButton.addEventListener('click', () => {
  window.open('https://ngl.link/astrowave.69', '_blank');
});

// Heart Rain Trigger
const limElement = document.querySelector('p a'); // Assuming "ily lim" is a link
limElement.addEventListener('click', (event) => {
  // Prevent default only for this specific link
  event.preventDefault();

  // Create a temporary heart rain effect
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.overflow = 'hidden';
  container.style.pointerEvents = 'none';
  document.body.appendChild(container);

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`; // Hearts fall slower
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000); // Hearts last longer before being removed
  }

  // Start the heart rain for a longer duration and higher frequency
  const interval = setInterval(createHeart, 100); // More hearts by reducing interval
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => container.remove(), 2000); // Give time for remaining hearts to fade
  }, 5000); // Keep raining hearts for 5 seconds
});
