const humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      close = menu.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('activ');
})
close.addEventListener('click', () => {
    menu.classList.remove('activ');
})

const menuItems = menu.querySelectorAll('.menu__link');

menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('activ');
    })
})
 

const counters = document.querySelectorAll('.use__scills-counter'),
      lins = document.querySelectorAll('.use__scills-line span');
      counters.forEach((item, i) => {
        lins[i].style.width = item.innerHTML;
      })






