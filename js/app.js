/* Menu de navegacion animacion */

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;


containerMenu.addEventListener('click', () => {

  document.querySelector('.btn-menu i').classList.toggle('fa-times');

  if (activador) {
    menu.style.left = "0";
    menu.style.transition = "0.5s";

    activador = false;
  }
  else {
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
  }
});

/* Intercalar clase active */

let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach((element) => {
  element.addEventListener('click', (event) => {

    enlaces.forEach((link) => {
      link.classList.remove('activo');

    });

    event.target.classList.add('activo');
  });
});

/* Mostrar y ocultar scroll estilos */

let arriba = window.scroll.pageYOffset;

if (arriba <= 600) {
  containerMenu.style.borderBottom = "none";

  goTop.style.right = "-100%";
} else {
  containerMenu.style.borderBottom = "3px solid #F05454";

  goTop.style.right = "0";
  goTop.style.transition = "0.5s";
}