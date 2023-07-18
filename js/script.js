const form = document.getElementById('form');

function isCheckboxOrRadio(type) {
	return ['checkbox', 'radio'].includes(type);
}

function submitForm(e) {
	e.preventDefault();
	let canSubmit = [];

	const fields = document.querySelectorAll('input, select');
	let userData = {};

	fields.forEach(field => {
		const { name, value, type, checked } = field;

		userData[name] = isCheckboxOrRadio(type) ? checked : value;
	});

	for(let i = 0; i < Object.values(userData).length; i++){
		if(Object.values(userData)[i].length == 0 || Object.values(userData) == false){
			canSubmit.push(false)
		}
		else{
			canSubmit.push(true)
		}
	}

	if(canSubmit.includes(false)){
		alert("Barcha sohalar to'ldirilgan bo'lishi kerak!")
	}
	else{
		console.dir(userData)
	}
}

form.addEventListener('submit', submitForm);