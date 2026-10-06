// ============================================================
// Mobile navigation toggle
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 700) {
          navLinks.classList.remove('open');
          toggleButton.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ============================================================
  // Dynamic year in footer
  // ============================================================
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});