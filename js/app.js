/** @format */
let test=0;

document.addEventListener('DOMContentLoaded', function () {
	M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' });
	// let instance = M.Carousel.init(document.querySelectorAll('.carousel'), {
	// 	fullWidth: true,
	// 	indicators: true,
	// 	duration: 500,
	// 	interval: 5000,
	// });

	M.Modal.init(document.querySelectorAll('.modal'), {
		opacity: 0.5,
		preventScrolling: true,
		dismissible: true,
	});

	M.Slider.init(document.querySelectorAll('.slider'), {
		fullWidth: true,
		indicators: true,
		duration: 2500,
		interval: 5000,
	});
});

// $(document).ready(function () {
// 	$('input#input_text, textarea#textarea2').characterCounter();
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
