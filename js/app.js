/** @format */

document.addEventListener('DOMContentLoaded', function () {
    
	M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' });
	M.Carousel.init(document.querySelectorAll('.carousel'), {
		fullWidth: true,
		indicators: true,
        duration:1,
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
