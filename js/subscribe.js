/** @format */

async function send() {
	let OBJ = {};
	OBJ.first_name = document.getElementById('first_name').value;
	OBJ.last_name = document.getElementById('last_name').value;
	OBJ.email = document.getElementById('email').value;
	OBJ.phone = document.getElementById('Phone').value;

	console.log("NEW_SUBSCRIBER", OBJ);

	let url = 'https://script.google.com/macros/s/AKfycbwHnyVJ6-UAiNaC1L606_h2iWuKvYpSExst5gPOhEG-Cr5txDKxXET4DudLJGjX6Ltq/exec';
	url += `?name=${OBJ.first_name}`;
	url += `&lastname=${OBJ.last_name}`;
	url += `&email=${OBJ.email}`;
	url += `&phone=${OBJ.phone}`;
	const result = await fetch(url);
	console.log(result);
}

subscribe_Form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('==========FORM HAS BEAN SUBMITED==========');
	send();
	M.Modal.getInstance(document.getElementById('modal1')).close();
});

// subscribe_Form.addEventListener('reset', (e) => {});
