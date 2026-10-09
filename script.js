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
  const codeEls = document.querySelectorAll('.typing-code');
  if (!codeEls.length) return;

  const tokens = [
    { text: '>>> ',                        color: '#FFFFFF' },
    { text: 'print',                       color: '#FFFFFF' },
    { text: '(',                           color: '#FFFFFF' },
    { text: '"',                           color: '#FFFFFF' },
    { text: "Hello, I'm Rya \u{1F44B}",    color: '#6A9BD5' },
    { text: '"',                           color: '#FFFFFF' },
    { text: ')',                           color: '#FFFFFF' },
  ];

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

    let html = '';
    for (let j = 0; j <= i; j++) {
      html +=
        '<span style="color:' + chars[j].color + '">' +
        escapeHtml(chars[j].ch) +
        '</span>';
    }

    codeEls.forEach(function (el) {
      el.innerHTML = html;
    });

    i++;
    setTimeout(typeNext, 55 + Math.random() * 60);
  }

  setTimeout(typeNext, 300);
})();
