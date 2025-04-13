// Exemplo de carregamento dinâmico futuro
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard carregado');
  });
  document.querySelectorAll('.emprestar').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Livro emprestado com sucesso! 📚');
      // No futuro aqui você pode fazer uma requisição pro backend
    });
  });
  function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
  window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.livro-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  });
  
  function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const icon = document.querySelector('.menu-icon');
  
    menu.classList.toggle('show');
    icon.classList.toggle('active');
  }
  