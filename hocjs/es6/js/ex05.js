/*
 ? phương thức tĩnh và thuộc tính tĩnh là gì? - từ khóa static ở trước, đặc điểm của nó khá gì thuộc tính bình thường
	phương thức nào cũng kế thừa được thôi dùng từ khóa extend
*/

/* Static Method, Property
	Không bị phụ thuộc bởi đối tượng, không bị thay đổi khi khởi tạo lại đối tượng
	Không bị thay đổi khi khởi tạo lại đối tượng

	khi khai báo thì không có từ khóa this ở trước
	static không phụ thuộc vào đối tượng, khi khởi tạo lại vẫn không bị thay thế

	this là clas hiện tại
	non static là state hiện tại

	Array.isArray()
	Math.PI()

	Tìm hiểu về setter và getter - cửa vào và cưa ra -> tập trung vào 1 nơi
	Học lập trình phải đặt câu hỏi tại sa nhiều

	getter -> giúp hàm đỡ phải gọi ()
	gettet phải có truyền vào
	vì dùng nó như 1 thuộc tính tùy tính huống

	tìm hiểu thêm private property - trong js ko cần quan tâm đâu, năm ngoái là es13, 2023 es14

	static dùng cho cái ít thay đổi, ko lo vì code js ít dùng

	ngày code 15 tiếng lên tay tốt
*/

class User {
	constructor() {
		this.name = "Name";
		this.emai = "Email";
	}

	// Phương thức non-static
	getName() {
		return "F8"
	}

	// thuộc tính static
	static message = "Chào mừng bạn quay lại với F8"

	// Phương thức static
	static getEmail() {
		// new class là trả về đối tượng
		// console.log(this);
		// Class getName

		return "contact@fullstack.edu.vn"
	}

}
console.log(User.message);
console.log(User.getEmail());

// const usser = new User() {
//
// }

//** */

class Person {
	constructor() {
		this.name = "Hoàng An";
		this.email = "email@gmail.com";

	}
 get	getName () { // getter -> giúp hàm đỡ phải gọi ()
		return this.name;
	}

	set setEmail(value) {// phải có tham số
		this.email = value;a
	}
}

const person = new Person();
console.log(Person.getName);

person.setEmail = "contact@fullstack.edu.vn";

console.log(person);

// array.length