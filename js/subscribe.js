/** @format */

async function send() {
	let OBJ = {};
	OBJ.first_name = document.getElementById('first_name');
	OBJ.letlas_name = document.getElementById('last_name');
	OBJ.email = document.getElementById('email');
	OBJ.phone = document.getElementById('Phone');

	let url = '';
	url += `?name=${OBJ.first_name}`;
	url += `&lastname=${OBJ.first_name}`;
	url += `&lastname=${OBJ.email}`;
	url += `&lastname=${OBJ.phone}`;
	const result = await fetch(url);
}

subscribe_Form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('==========FORM HAS BEAN SUBMITED==========');
});

// subscribe_Form.addEventListener('reset', (e) => {});
