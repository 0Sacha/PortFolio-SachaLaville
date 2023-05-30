const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
});