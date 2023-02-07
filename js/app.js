/** @format */

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems, { edge: 'right' });
	M.Carousel.init(document.querySelectorAll('.carousel'), {
		fullWidth: true,
		indicators: true,
        duration:200,
	});

	// setTimeout(showSlides, 3000);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
