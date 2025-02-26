const button = document.querySelector('.menu__More');
const block = document.querySelector('.menu__navigation');
const menu = document.querySelector('.menu');
button.textContent = 'Показать все';
button.addEventListener('click', function () {
  block.classList.toggle('full_menu__navigation');
  menu.classList.toggle('full_menu');
  button.classList.toggle('menu__More_fliped');
  if (block.classList.contains('full_menu__navigation')) {
    button.textContent = 'Скрыть';
  } else {
    button.textContent = 'Показать все';
  }
});
