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


async function send2() {
	let OBJ = {};
	OBJ.first_name = document.getElementById('first_name2').value;
	OBJ.last_name = document.getElementById('last_name2').value;
	OBJ.email = document.getElementById('email2').value;
	OBJ.subject = document.getElementById('subject').value;
    OBJ.message =document.getElementById('message').value;

	console.log('NEW_SUBSCRIBER', OBJ);

	let url = 'https://script.google.com/macros/s/AKfycbx5Tne1FcGqYjPYXblW1XA6vPXXKMXom2buA6OLIP-wX-roFIVeAq-3f9ncfrB2_4V3/exec';
	url += `?name=${OBJ.first_name}`;
	url += `&lastname=${OBJ.last_name}`;
	url += `&email=${OBJ.email}`;
	url += `&subject=${OBJ.subject}`;
    url += `&message=${OBJ.message}`;
	const result = await fetch(url);
	console.log(result);
}



subscribe_Form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('==========SUBSCRIBE FORM HAS BEAN SUBMITED==========');
	send();
	M.Modal.getInstance(document.getElementById('modal1')).close();
});

contact_Form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('==========CONTACT FORM HAS BEAN SUBMITED==========');
	send2();
	M.Modal.getInstance(document.getElementById('modal2')).close();
});

// subscribe_Form.addEventListener('reset', (e) => {});
