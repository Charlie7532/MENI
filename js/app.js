/** @format */

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems, { edge: 'right' });

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
