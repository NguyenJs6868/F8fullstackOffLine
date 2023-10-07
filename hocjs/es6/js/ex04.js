/*  Object Literal - Đối tượng nguyên bản khởi tạo bằng cặp ngoặc {{}} , khởi tạo = từ khóa new, dùng từ khóa class
Nguyên tắt đặt tên class !!
Mẹo học: ko nên đặt theo ví dụ của anh để có trải nghiệm ko phải là sự chép lại của anh
Thuộc tính là không có dấu ngoặc
Thuộc tính đang là tĩnh nên có thể truyền tham số từ constructor vào
Kế thừa class dùng từ khóa extends
js ko có tính bao đóng, ex13 có dấu #, tự sự lý, mặc đinh ko sắn, ko hẳn là chặn truy cập chỉ báo là undefinex
Tìm hiểu 4 tính chất của oop
Tên hàm và biến trùng nhau là lỗi
super ở class cha có tham số thì con có truyền

- Khi làm việc vs kế thừa có là ghi đề - over write
js thì dùng funcition ghi đè dc, ng ngữ khác thì dùng class mới đè được

- Có 3 loại funciton: 1 declaration 2 arow, 3 ẩn danh
- HTMLElement là mặc đinh của js

Function Contrustor
*/
class User {
	// Nội dung class: Thuộc tính và phương thức

	// Phương thức khởi tạo
	constructor(name, email) {
		// Định nghĩa các thuộc tính và thiết lập các giá trị khởi tạo (Initial Value)

		// Phương thức này sẽ thực thi đầu tiên khi đối tượng được khơi tạo
		this.name = name; // Thuộc tính Name
		this.email = email;
	}

	// Định nghĩa các phương thức
	getName() {
		return this.name;
	}

	getGmail() {
		return this.name;
	}

	setMessage(msg) {
		this.msg = msg;
	}

}

// var user =  new User();
// console.log(user.getName()); // Truy cập vào Thuộc tính

// Kế thừa class
class Authentication extends User {
	// Toàn quyền sử dụng các phương thức và thuộc tính của class kế (thừa cha)
	getInfor() {
		return `
			- Name: ${this.getName()}
			- Gmail: ${this.getGmail()}
		`
	}
}


const auth = new Authentication("Name", "gmail@.com");
console.log(auth.getEmail());
console.log(auth.isLogin());

auth.setMessage("Hello F8");
console.log(auth.msg);


// Class Expresstion
const A = class {
	constructor() {
		this.name = "Name";
	}
}

const a = new A;
console.log(a);