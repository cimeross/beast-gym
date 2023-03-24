const hamburger = document.getElementById("menu");
const navBar = document.querySelector(".second_header");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const form = document.querySelector("form");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const links = document.querySelectorAll(".nav a");

links.forEach((link) => {
	link.addEventListener("click", () => {
		navBar.classList.remove("active");
	});
});

hamburger.addEventListener("click", () => {
	navBar.classList.toggle("active");
});

const validateEmail = () => {
	const email = emailInput.value.trim();
	const pattern_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isValidEmail = pattern_email.test(email);
	if (!isValidEmail) {
		emailError.textContent = "Please enter a valid email address!";
		return false;
	}

	return true;
};

const validatePassword = () => {
	const password = passwordInput.value.trim();
	const pattern_password = /^(?=.*\d)(?=.*[A-Z])(.{4,50})$/;
	const isValidPassword = pattern_password.test(password);
	if (!isValidPassword) {
		passwordError.textContent = "Invalid password!";
		return false;
	}

	return true;
};

const handleFormSubmit = (e) => {
	e.preventDefault();

	if (validateEmail() && validatePassword()) {
		emailInput.value = "";
		passwordInput.value = "";
		emailError.textContent = "";
		passwordError.textContent = "";
	}
};

form.addEventListener("submit", handleFormSubmit);
