/** @format */
let test = 0;

document.addEventListener('DOMContentLoaded', function () {
	M.Parallax.init(document.querySelectorAll('.parallax'));
	M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' });
	M.Modal.init(document.querySelectorAll('.modal'), {
		opacity: 0.5,
		preventScrolling: true,
		dismissible: true,
	});
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

var scrollTrigger = 10;

window.onscroll = function () {
	var className = 'meni';
	// We add pageYOffset for compatibility with IE.
	if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
		document.getElementById('header_top').classList.add(className);
	} else {
		document.getElementById('header_top').classList.remove(className);
	}
};
