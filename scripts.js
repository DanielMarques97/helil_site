// Script de animação simples para suavizar a rolagem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efeito fade-in nas seções quando aparecem
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0px)';
      sec.style.transition = '1s';
    }
  });
});
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(100px)';
});
