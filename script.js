const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#passwordConfirm');
const creatAccount = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
	input.addEventListener('focus', e => {
		input.classList.add('on');
	});
	input.addEventListener('blur', event => {
		input.classList.remove('on');
	});
});

creatAccount.addEventListener('click', () => {
	validateEmail();
	validatePassword();
});

function validateEmail() {
	let validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		console.log('Valid email address!');
		return true;
	} else {
		console.log('Invalid email address!');
		return false;
	}
}
function validatePassword() {
	let validRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{10,}$/;
	if (
		password.value.match(validRegex) &&
		password.value == confirmPassword.value
	) {
		console.log('Valid Password');
		return true;
	} else {
		console.log('Invalid Password');
		return false;
	}
}
