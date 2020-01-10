let nav = document.querySelector('nav ul');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let menu = document.querySelector('.burger');
let opaque = document.querySelector('.menu-active-opaque');




menu.addEventListener('click', activateMenu);


function activateMenu() {
	nav.classList.toggle('nav-active');
	main.classList.toggle('main-active');
	footer.classList.toggle('main-active');
	menu.classList.toggle('menu-active');
	opaque.classList.toggle('opaque');
}
