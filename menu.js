const nav = document.querySelector('.nav-mobile');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const menu = document.querySelector('.burger');

menu.addEventListener('click', activateMenu);

function activateMenu() {
	nav.classList.toggle('nav-active');
	main.classList.toggle('main-active');
	footer.classList.toggle('main-active');
	menu.classList.toggle('menu-active');
}

function myFunction(x) {
  if (!x.matches) {
   		nav.classList.remove('nav-active');
		main.classList.remove('main-active');
		footer.classList.remove('main-active');
		menu.classList.remove('menu-active');
	}
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)