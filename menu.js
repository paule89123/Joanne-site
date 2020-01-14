// MENU

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




// MODAL

const thumbnailPhoto1 = document.querySelector('#thumbnail1');
const thumbnailPhoto2 = document.querySelector('#thumbnail2');
const thumbnailPhoto3 = document.querySelector('#thumbnail3');
const thumbnailPhoto4 = document.querySelector('#thumbnail4');
const modalPhoto1 = document.querySelector('#modal-photo-1');
const modalPhoto2 = document.querySelector('#modal-photo-2');
const modalPhoto3 = document.querySelector('#modal-photo-3');
const modalPhoto4 = document.querySelector('#modal-photo-4');
const modalBackground = document.querySelector('.modal-background');
const body = document.querySelector('body');
const closeIcon = document.querySelector('#close-icon-div');
const leftArrow = document.querySelector('#left-arrow-div');
const rightArrow = document.querySelector('#right-arrow-div');
const shadow = document.querySelector('#shadow');
const notificationBox = document.querySelector('.notification-box');
let index = 0;
const duplicateCirclesSet1 = document.querySelector('.duplicate-circles-set-1');
const duplicateCirclesSet2 = document.querySelector('.duplicate-circles-set-2');
const duplicateCirclesSet3 = document.querySelector('.duplicate-circles-set-3');
const duplicateCirclesSet4 = document.querySelector('.duplicate-circles-set-4');



thumbnailPhoto1.addEventListener("click", () => {displayModal(1);});
thumbnailPhoto2.addEventListener("click", () => {displayModal(2);});
thumbnailPhoto3.addEventListener("click", () => {displayModal(3);});
thumbnailPhoto4.addEventListener("click", () => {displayModal(4);});

modalBackground.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);

leftArrow.addEventListener("click", () => {changePhoto(-1, 0);});
rightArrow.addEventListener("click", () => {changePhoto(1, 0);});

document.onkeydown = function(event) {
  if (event.keyCode == 37) {
    changePhoto(-1, index);
  }
  if (event.keyCode == 39) {
    changePhoto(1, index);
  }
  if (event.keyCode == 27) {
    closeModal();
  }
}


function displayModal(n) {
	modalBackground.classList.toggle('modal-background-active');

	body.style.overflow = "hidden";
	shadow.style.opacity = "1";
	closeIcon.style.opacity = "1";
	leftArrow.style.opacity = "1";
	rightArrow.style.opacity = "1";
	notificationBox.style.display = "inline";

	if (n === 1) {
		modalPhoto1.style.opacity = "1";
		modalPhoto1.style.zIndex = "4";
		duplicateCirclesSet1.style.opacity = "1";
		index = 1;
	}
	if (n === 2) {
		modalPhoto2.style.opacity = "1";
		modalPhoto2.style.zIndex = "4";
		duplicateCirclesSet2.style.opacity = "1";
		index = 2;
	}
	if (n === 3) {
		modalPhoto3.style.opacity = "1";
		modalPhoto3.style.zIndex = "4";
		duplicateCirclesSet3.style.opacity = "1";
		index = 3;
	}
	if (n === 4) {
		modalPhoto4.style.opacity = "1";
		modalPhoto4.style.zIndex = "4";
		duplicateCirclesSet4.style.opacity = "1";
		index = 4;
	}

	modalPhoto1.style.transition = "opacity 0.5s ease";
	modalPhoto2.style.transition = "opacity 0.5s ease";
	modalPhoto3.style.transition = "opacity 0.5s ease";
	modalPhoto4.style.transition = "opacity 0.5s ease";
	shadow.style.transition = "opacity 0.5s ease";
}

function closeModal() {
	modalBackground.classList.remove('modal-background-active');
	body.style.overflow = "visible";
	notificationBox.style.display = "none";

	modalPhoto1.style.transition = "none";
	modalPhoto2.style.transition = "none";
	modalPhoto3.style.transition = "none";
	modalPhoto4.style.transition = "none";

	modalPhoto1.style.opacity = "0";
	modalPhoto2.style.opacity = "0";
	modalPhoto3.style.opacity = "0";
	modalPhoto4.style.opacity = "0";
	modalPhoto1.style.zIndex = "-1";
	modalPhoto2.style.zIndex = "-1";
	modalPhoto3.style.zIndex = "-1";
	modalPhoto4.style.zIndex = "-1";

	shadow.style.opacity = "0";
	closeIcon.style.opacity = "0";
	leftArrow.style.opacity = "0";
	rightArrow.style.opacity = "0";

	duplicateCirclesSet1.style.opacity = "0";
	duplicateCirclesSet2.style.opacity = "0";
	duplicateCirclesSet3.style.opacity = "0";
	duplicateCirclesSet4.style.opacity = "0";

	shadow.style.transition = "none";
	closeIcon.style.transition = "none";
	leftArrow.style.transition = "none";
	rightArrow.style.transition = "none";

	duplicateCirclesSet1.style.transition = "none";
	duplicateCirclesSet2.style.transition = "none";
	duplicateCirclesSet3.style.transition = "none";
	duplicateCirclesSet4.style.transition = "none";
}

function changePhoto(x, n) {
	modalPhoto1.style.zIndex = "4";
	modalPhoto2.style.zIndex = "4";
	modalPhoto3.style.zIndex = "4";
	modalPhoto4.style.zIndex = "4";

	if (n>0) {
		index = n;
	}

	index += x;

	if (index < 1) {
		index = 4;
	}

	if (index > 4) {
		index = 1;
	}

	if (index === 1) {
		modalPhoto1.style.opacity = "1";
		modalPhoto2.style.opacity = "0";
		modalPhoto3.style.opacity = "0";
		modalPhoto4.style.opacity = "0";

		duplicateCirclesSet1.style.opacity = "1";
		duplicateCirclesSet2.style.opacity = "0";
		duplicateCirclesSet3.style.opacity = "0";
		duplicateCirclesSet4.style.opacity = "0";

		modalPhoto1.style.zIndex = "3";

		modalPhoto1.style.transition = "none";
		modalPhoto2.style.transition = "opacity 0.5s ease";
		modalPhoto3.style.transition = "opacity 0.5s ease";
		modalPhoto4.style.transition = "opacity 0.5s ease";
	}

	if (index === 2) {
		modalPhoto1.style.opacity = "0";
		modalPhoto2.style.opacity = "1";
		modalPhoto3.style.opacity = "0";
		modalPhoto4.style.opacity = "0";

		duplicateCirclesSet1.style.opacity = "0";
		duplicateCirclesSet2.style.opacity = "1";
		duplicateCirclesSet3.style.opacity = "0";
		duplicateCirclesSet4.style.opacity = "0";

		modalPhoto2.style.zIndex = "3";

		modalPhoto1.style.transition = "opacity 0.5s ease";
		modalPhoto2.style.transition = "none";
		modalPhoto3.style.transition = "opacity 0.5s ease";
		modalPhoto4.style.transition = "opacity 0.5s ease";
	}

	if (index === 3) {
		modalPhoto1.style.opacity = "0";
		modalPhoto2.style.opacity = "0";
		modalPhoto3.style.opacity = "1";
		modalPhoto4.style.opacity = "0";

		duplicateCirclesSet1.style.opacity = "0";
		duplicateCirclesSet2.style.opacity = "0";
		duplicateCirclesSet3.style.opacity = "1";
		duplicateCirclesSet4.style.opacity = "0";

		modalPhoto3.style.zIndex = "3";

		modalPhoto1.style.transition = "opacity 0.5s ease";
		modalPhoto2.style.transition = "opacity 0.5s ease";
		modalPhoto3.style.transition = "none";
		modalPhoto4.style.transition = "opacity 0.5s ease";
	}

	if (index === 4) {
		modalPhoto1.style.opacity = "0";
		modalPhoto2.style.opacity = "0";
		modalPhoto3.style.opacity = "0";
		modalPhoto4.style.opacity = "1";

		duplicateCirclesSet1.style.opacity = "0";
		duplicateCirclesSet2.style.opacity = "0";
		duplicateCirclesSet3.style.opacity = "0";
		duplicateCirclesSet4.style.opacity = "1";

		modalPhoto4.style.zIndex = "3";

		modalPhoto1.style.transition = "opacity 0.5s ease";
		modalPhoto2.style.transition = "opacity 0.5s ease";
		modalPhoto3.style.transition = "opacity 0.5s ease";
		modalPhoto4.style.transition = "none";
	}
}


document.querySelectorAll('.circle1').forEach(item => {
  item.addEventListener('click', event => {
    changePhoto(0, 1);
  })
})

document.querySelectorAll('.circle2').forEach(item => {
  item.addEventListener('click', event => {
    changePhoto(0, 2);
  })
})

document.querySelectorAll('.circle3').forEach(item => {
  item.addEventListener('click', event => {
    changePhoto(0, 3);
  })
})

document.querySelectorAll('.circle4').forEach(item => {
  item.addEventListener('click', event => {
    changePhoto(0, 4);
  })
})








/*!
 * swiped-events.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== 'function') {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(startEl.getAttribute('data-swipe-threshold') || '20', 10);    // default 10px
        var swipeTimeout = parseInt(startEl.getAttribute('data-swipe-timeout') || '500', 10);      // default 1000ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else {
            if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (yDiff > 0) {
                    eventType = 'swiped-up';
                }
                else {
                    eventType = 'swiped-down';
                }
            }
        }

        if (eventType !== '') {

            // fire event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));

            // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

}(window, document));




document.addEventListener('swiped-left', function(e) {
    changePhoto(-1); // the element that was swiped
});
swiped-right
document.addEventListener('swiped-right', function(e) {
    changePhoto(1); // the element that was swiped
});

