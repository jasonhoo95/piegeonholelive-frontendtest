function changeAnimation(type) {
	var loginContainer = document.getElementById("loginContainer");
	var createContainer = document.getElementById("createContainer");
	var floatingContainer = document.getElementById("floatingContainer");
	var inner1 = document.getElementById("inner1");
	var inner2 = document.getElementById("inner2");

	if (type == "slideRight") {
		loginContainer.classList.add("slideRightLogin");
		loginContainer.classList.remove("slideLeftLogin");
		createContainer.classList.remove("slideLeftCreate");
		createContainer.classList.add("slideRightCreate");
		floatingContainer.classList.add("floatingBackgroundSlideRight");
		floatingContainer.classList.remove("floatingBackgroundSlideLeft");
		inner2.classList.remove("slideLeftFloating2");
		inner2.classList.add("slideRightFloating2");
		inner1.classList.remove("slideLeftFloating");
		inner1.classList.add("slideRightFloating");
	} else {
		floatingContainer.classList.add("floatingBackgroundSlideLeft");
		floatingContainer.classList.remove("floatingBackgroundSlideRight");
		inner2.classList.add("slideLeftFloating2");
		inner2.classList.remove("slideRightFloating2");
		inner1.classList.add("slideLeftFloating");
		inner1.classList.remove("slideRightFloating");

		loginContainer.classList.add("slideLeftLogin");
		loginContainer.classList.remove("slideRightLogin");
		createContainer.classList.remove("slideRightCreate");
		createContainer.classList.add("slideLeftCreate");
	}
}

function validatePasswordLength(e) {
	if (e.target.value.length < 6) {
		e.target.setCustomValidity(`Please lengthen this text to 6 characters or more (you are currently using ${e.target.value.length} characters)`);
	} else {
		e.target.setCustomValidity("");
	}
}

function validatePasswordMatch() {
	var password = document.getElementById("password");
	var confirm_password = document.getElementById("confirmPassword");
	if (password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
		confirm_password.setCustomValidity("");
	}
}

function loginSuccessful(event) {
	alert("login");
}

function signupSuccessful(event) {
	alert("register");
}
