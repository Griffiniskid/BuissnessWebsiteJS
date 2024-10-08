// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add hover effect to each link with smooth transition
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    link.style.backgroundColor = '#fff';
    link.style.color = '#000';
  });

  link.addEventListener('mouseout', () => {
    link.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    link.style.backgroundColor = '';
    link.style.color = '';
  });
});
