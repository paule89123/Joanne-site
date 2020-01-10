let nav = document.querySelector('.navMobile');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let menu = document.querySelector('.burger');

menu.addEventListener('click', activateMenu);

function activateMenu() {
	nav.classList.toggle('nav-active');
	main.classList.toggle('main-active');
	footer.classList.toggle('main-active');
	menu.classList.toggle('menu-active');
}

window.addEventListener("resize", removeActiveClasses);

function removeActiveClasses(e) {
	let width = document.body.clientWidth;
  	if (width > 600) {
		nav.classList.remove('nav-active');
		main.classList.remove('main-active');
		footer.classList.remove('main-active');
		menu.classList.remove('menu-active');
	}
}