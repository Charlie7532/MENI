/** @format */

async function send() {
	let OBJ = {};
	OBJ.first_name = document.getElementById('contact_Form').value;
	OBJ.last_name = document.getElementById('last_name2').value;
	OBJ.email = document.getElementById('email2').value;
	OBJ.subject = document.getElementById('subject').value;
    OBJ.message =document.getElementById('message').value;

	console.log('NEW_SUBSCRIBER', OBJ);

	let url = 'https://script.google.com/macros/s/AKfycbwHnyVJ6-UAiNaC1L606_h2iWuKvYpSExst5gPOhEG-Cr5txDKxXET4DudLJGjX6Ltq/exec';
	url += `?name=${OBJ.first_name}`;
	url += `&lastname=${OBJ.last_name}`;
	url += `&email=${OBJ.email}`;
	url += `&subject=${OBJ.subject}`;
    url += `&message=${OBJ.message}`;
	const result = await fetch(url);
	console.log(result);
}

contact_Form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('==========FORM HAS BEAN SUBMITED==========');
	send();
	M.Modal.getInstance(document.getElementById('modal1')).close();
});

// subscribe_Form.addEventListener('reset', (e) => {});
