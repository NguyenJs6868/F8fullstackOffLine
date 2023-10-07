// Strict Mode
/*
Chế độ nghiêm ngặt

*/


"use strict";
// var a ;
a = 10;
console.log(a);

var getTotal = function () {
	"use strict"; // Đặt đầu file vs hàm
	// var a ;
	a = 10;
	console.log(a);
}

getTotal();

/*
Hoisting

- Cơ chế mặc định của Javascript
- Đẩy phần khai báo biến, hàm (function)

*/