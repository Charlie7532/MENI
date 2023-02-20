/** @format */
document.addEventListener('DOMContentLoaded', function () {
	let instance_Sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' });
	// let instance = M.Carousel.init(document.querySelectorAll('.carousel'), {
	// 	fullWidth: true,
	// 	indicators: true,
	// 	duration: 500,
	// 	interval: 5000,
	// });

	var instances_Modal = M.Modal.init(document.querySelectorAll('.modal'), {
		opacity: 0.5,
		preventScrolling: true,
		dismissible: true,
	});

	var instances_Slider = M.Slider.init(document.querySelectorAll('.slider'), {
		fullWidth: true,
		indicators: true,
		duration: 3000,
		interval: 6000,
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
