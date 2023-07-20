let { form } = document.forms
let inputs = Object.values(form)

let inpStatus = []

let maskOptions = {
  mask: '+{998}(00)000-00-00'
};

let mask = IMask(document.querySelector('#phone'), maskOptions);

function showError(parentElement, msgElement, message){
	msgElement.textContent = message
	parentElement.classList.add('error')
}

function hideError(parentElement, msgElement){
	msgElement.textContent = ""
	parentElement.classList.remove('error')
}

function inpValidate(){
	inputs.forEach((input, index) => {
		if(input.type != "checkbox" && input.type != "submit"){
			inpStatus.push(false)
			
			input.addEventListener('blur', (e) => {
				let target = e.target
				let formGroup = input.parentElement
				let errorElement = input.nextElementSibling

				if(target.value === ''){
					showError(formGroup, errorElement, "To'ldirilishi shart")
					inpStatus[index] = false
				}else{
					hideError(formGroup, errorElement)
					inpStatus[index] = true
				}
			})

			input.addEventListener("input", (e) => {
				let target = e.target
				let formGroup = input.parentElement
				let errorElement = input.nextElementSibling

				if(target.name === 'name'){
					if(target.value.length <= 2){
						showError(formGroup, errorElement, 'Ism 3ta harfdan oshishi kerak')
						inpStatus[index] = false
					}else{
						hideError(formGroup, errorElement)
						inpStatus[index] = true
					}
				}else if(target.name === 'email'){
					if(!target.value.includes("@")){
						showError(formGroup, errorElement, 'Emailda @ belgisi bo\'lishi kerak')
						inpStatus[index] = false
					}else{
						hideError(formGroup, errorElement)
						inpStatus[index] = true
					}
				}else if(target.name === 'phone'){
					if(target.value.length !== 17){
						showError(formGroup, errorElement, 'Raqam noto\'g\'ri')
						inpStatus[index] = false
					}else{
						hideError(formGroup, errorElement)
						inpStatus[index] = true
					}
				}
			})
		}
		else if(input.type == "checkbox"){
			inpStatus.push(false)

			input.addEventListener("change", () => {
				if(input.checked){
					inpStatus[index] = true
				}
				else{
					inpStatus[index] = false
				}
			})
		}
	});
}

function isEmpty(){
	inputs.forEach((input, index) => {
		if(input.type != "checkbox" && input.type != "submit"){
			let formGroup = input.parentElement
			let errorElement = input.nextElementSibling

			if(input.value == ''){
				showError(formGroup, errorElement, 'To\'ldirilishi shart')
				inpStatus[index] == false
			}
			else{
				hideError(formGroup, errorElement)
				inpStatus[index] == true
			}
		}
		else if(input.type == "checkbox"){
			inpStatus[index] == false
		}
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	let formData = new FormData(form)
	let values = Object.fromEntries(formData.entries())

	console.log(inpStatus);
	if(!inpStatus.includes(false)){
		console.log(values)
	}else{
		// alert('Something is wrong!')
		isEmpty()
	}
})

inpValidate()