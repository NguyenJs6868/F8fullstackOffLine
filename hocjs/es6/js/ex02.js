// Arrow Function -> Hàm mũi tên

// 1. Không có tham số -> ở truyền vào và ko có đổi số ở gọi hàm truyền vào

const getMessage = msg => {
	console.log(msg);
}

getMessage("hello F8")

// 3. có nhiều tham số
// const getTotal = (a, b) => {
// 	return a + b;
// };


// 4. Arrow function có return
const getTotal = (a, b) => a + b;
console.log(getTotal(10, 20)); // Truyền vào và tự thành khai báo biến rồi

// Cách viết tắt nếu kiểu cũ là {} là block scope lại phải return
var getUser = () => ({
	name: "Name ",
	email: "@gmail",
})
console.log(getUser())


// 5 Closure sử dụng Arrow Funciton
var sum = (a) => (b) => a + b;

// Gợi ý
// function sum(a) {
// 	a = 10
// 	return function add (b) {
// 		b = 20
// 		return 10 + b
// 	}
// }

// var add = sum(10)
console.log();

const users = [
	{
		id: 1,
		name: " Nguyễn Văn A"
	},
	{
		id: 2,
		name: " Nguyễn Văn B"
	},
	{
		id: 3,
		name: " Nguyễn Văn C"
	}
];

const html = users.map((user) => {
	`
	<h2>${user.name}</h2>
	`
}).join();

document.body.innerHTML = html;

/*
Arrow Function không có tác dụng thay thế function truyền thống
Arrow Function không binding được this
Arrow Function không lấy được argument
Arrow Function không nên sử dụng để làm method của Object
Arrow Function không có hoisting
Arrow Function không được dùng để tạo Constructor
*/

const getMax = (...args) => {
	// console.log(arguments);
	console.log(args);
}

getMax(12, 20 , 30);

const User = () => {
	this.name = "Name";
}

const user = new User();