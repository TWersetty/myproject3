// Переключение списка
let Switching = document.querySelector('.menu__navigation__full-screen');
let Button = document.querySelector('.menu__More');
let Button2 = document.querySelector('.menu__down');
let Button3 = document.querySelector('.menu__up');
Button.onclick = function(){
    Switching.classList.toggle('full');
    Button.classList.toggle('commered');
    Button2.classList.toggle('invisibal');
    Button3.classList.toggle('visibal');
    
};

