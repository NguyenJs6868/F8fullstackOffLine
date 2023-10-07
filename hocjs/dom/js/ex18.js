// var inputEl = document.querySelector(".name");
// inputEl.addEventListener("keyup", function () {
// 	console.log(this.value);
// })

// Xác định
var handBeforeUnload = function(event) {
	event.returnValue = "F8"
};

// inputEl.addEventListener('keyup', function() {
//
// 	if (this.value !== this.defaulttvalue) {
// 		window.addEventListener("beforeunload", function (e) {
// 			console.log('e', e);
// 			e.returnValue = "F8";
// 		}) ;
// 	} else {
//
// 	}
//
//
// })


// Bài 2 Login
var form = document.querySelector("form");

var inputEmail = document.querySelector(".email");

var inputPassword = document.querySelector(".password");

var checkBox = document.querySelector(".checkbox");

// console.log('form:', form);

// form.addEventListener('change', function(e) {
// 	console.log('change', e);
// })

// inputEmail.addEventListener('keyup', function() {
//
// 	if (this.value !== this.defaulttvalue) {
//
// 	} else {
//
// 	}
//
//
// });

var loginForm = document.querySelector(".login-form");
console.log(loginForm.elements);
console.log(Object.keys(loginForm.elements));

loginForm.addEventListener("input", function(e) {
	// e.preventDefault();
	if(e.target.type === "checkbox" || e.target.type === "radio") {
		if (e.target.defaultChecked !== e.target.checked) {
			window.addEventListener("beforunload", handBeforeUnload);
		} else {
			window.removeEventListener("beforunload", handBeforeUnload);
		}
	} else {
		if (e.target.defaultValue !== e.target.value) {
			window.addEventListener("beforunload", handBeforeUnload);
		} else {
			window.removeEventListener("beforunload", handBeforeUnload);
		}
	}

	console.log("Submit");
	// Code
 // this.submit(); chạy form
})


