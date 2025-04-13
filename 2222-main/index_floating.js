
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-up').forEach(el => {
  observer.observe(el);
});

// Efeito de flutuação suave no mascote
const mascot = document.querySelector('.mascot');
if (mascot) {
  let angle = 0;
  setInterval(() => {
    angle += 0.05;
    const y = Math.sin(angle) * 10; // flutuação vertical
    mascot.style.transform = `translateY(${y}px)`;
  }, 30);
}
