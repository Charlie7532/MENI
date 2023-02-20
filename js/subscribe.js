/** @format */
let OBJ = {};
OBJ.first_name = document.getElementById('first_name').value;
OBJ.letlas_name = document.getElementById('last_name').value;
OBJ.email = document.getElementById('email').value;
OBJ.phone = document.getElementById('Phone').value;


async function send() {	
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

	M.Modal.getInstance(document.getElementById('modal1')).close();
});

// subscribe_Form.addEventListener('reset', (e) => {});
