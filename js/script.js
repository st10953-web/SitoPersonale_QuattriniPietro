// Scroll attivo nav links
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#f0ede6' : '';
  });
}, { passive: true });

// Dropdown click
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  const label = dropdown.querySelector('.nav-dropdown-label');

  label.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    // chiudi tutti
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    // apri quello cliccato se era chiuso
    if (!isOpen) dropdown.classList.add('open');
  });
});

// Click fuori chiude tutto
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
});
