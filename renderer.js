document.getElementById('lim').addEventListener('click', function(event) {
  const body = document.body;

  // Create heart elements
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Set a random position for each heart
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;

    // Append heart to the body
    body.appendChild(heart);

    // Remove the heart after the animation completes (2s duration)
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.card');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}
