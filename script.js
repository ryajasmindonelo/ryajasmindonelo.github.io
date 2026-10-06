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

// ============================================================
// Typing animation for the Python-style greeting
// ============================================================
(function () {
  const codeEl = document.getElementById('typing-code');
  if (!codeEl) return;

  // Python REPL colors
  const tokens = [
    { text: '>>> ',                        color: '#9CA3AF' }, // prompt — light gray
    { text: 'print',                       color: '#9CA3AF' }, // keyword — the blue from your image
    { text: '(',                           color: '#9CA3AF' }, // paren — light gray
    { text: '"',                           color: '#9CA3AF' }, // quote — light gray
    { text: "Hello, I'm Rya \u{1F44B}",    color: '#6A9BD5' }, // string — same blue
    { text: '"',                           color: '#9CA3AF' }, // quote — light gray
    { text: ')',                           color: '#9CA3AF' }, // paren — light gray
  ];

  // Flatten into an array of single characters (handles emoji correctly)
  const chars = [];
  tokens.forEach(function (t) {
    for (const ch of t.text) chars.push({ ch: ch, color: t.color });
  });

  const escapeHtml = function (s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  let i = 0;

  function typeNext() {
    if (i >= chars.length) return;

    // Rebuild the visible HTML up to the current character
    let html = '';
    for (let j = 0; j <= i; j++) {
      html +=
        '<span style="color:' + chars[j].color + '">' +
        escapeHtml(chars[j].ch) +
        '</span>';
    }
    codeEl.innerHTML = html;

    i++;
    setTimeout(typeNext, 55 + Math.random() * 60);
  }

  // Small delay so the page settles first
  setTimeout(typeNext, 300);
})();
