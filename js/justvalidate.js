const validate = new JustValidate('#form');

validate.addField('#name', [
	{
		rule: 'required',
		errorMessage: "To'ldirish shart"
	},
	{
		rule: 'minLength',
		value: 3,
		errorMessage: "Eng kamida 3ta simvol"
	}
])
.addField('#email', [
	{
		rule: 'email',
		errorMessage: 'Email xato kiritildi'
	}
])