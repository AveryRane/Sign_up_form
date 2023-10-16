const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const phone = document.querySelector('#phoneNumber');
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

let accountDetails = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	password: '',
};

creatAccount.addEventListener('click', () => {
	validatefName();
	validatelName();
	validatePhone();
	validateEmail();
	validatePassword();
	console.log(accountDetails);
});

function validatefName() {
	let validRegex = /^[a-zA-Z]/;

	if (lName.value.match(validRegex)) {
		accountDetails.firstName = fName.value;
		return true;
	} else {
		alert('Not valid first name');
		return false;
	}
}

function validatelName() {
	let validRegex = /^[a-zA-Z]/;

	if (lName.value.match(validRegex)) {
		accountDetails.lastName = lName.value;
		return true;
	} else {
		alert('Not a valid last name');
		return false;
	}
}

function validatePhone() {
	let validRegex = /([A-Za-z0-9]+(\.[A-Za-z0-9]+)+)/;

	if (phone.value.match(validRegex)) {
		accountDetails.phone = phone.value;
		return true;
	} else {
		alert('Not a valid phone number');
	}
}

function validateEmail() {
	let validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		accountDetails.email = email.value;
		return true;
	} else {
		alert('Invalid email address!');
		return false;
	}
}
function validatePassword() {
	let validRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{10,}$/;
	if (
		password.value.match(validRegex) &&
		password.value == confirmPassword.value
	) {
		accountDetails.password = password.value;
		return true;
	} else {
		alert('Invalid Password');
		return false;
	}
}
