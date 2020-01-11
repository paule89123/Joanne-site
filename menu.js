let nav = document.querySelector('.navMobile');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let menu = document.querySelector('.burger');
// let hr1 = document.querySelector('#hr1');
// let hr2 = document.querySelector('#hr2');
// let whiteBox = document.querySelector('.white-box');



menu.addEventListener('click', activateMenu);

function activateMenu() {
	nav.classList.toggle('nav-active');
	main.classList.toggle('main-active');
	footer.classList.toggle('main-active');
	menu.classList.toggle('menu-active');
	// hr1.classList.toggle('hr-active');
	// hr2.classList.toggle('hr-active');
	// whiteBox.classList.toggle('white-box-active');
}

function myFunction(x) {
  if (!x.matches) {
   		nav.classList.remove('nav-active');
		main.classList.remove('main-active');
		footer.classList.remove('main-active');
		menu.classList.remove('menu-active');
		// hr1.classList.remove('hr-active');
		// hr2.classList.remove('hr-active');
		// whiteBox.classList.remove('white-box-active');
	}
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)