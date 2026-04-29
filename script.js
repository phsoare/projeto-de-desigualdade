document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu-links a');
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (href === paginaAtual) {
      link.classList.add('ativo');
      link.setAttribute('aria-current', 'page');
    }
  });
});