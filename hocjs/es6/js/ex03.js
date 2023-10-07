// Destucturing: Áp dụng với Array, Object
// -> Phá vỡ cấu trúc để có thể truy cập vafp các phần tử trong array, object và gán thành các biến riêng biệt

const user = {
	name: "Name ",
	email: "@gmail",
	age: 32,
	address: "Hà Nội",
	{a: 1, b: 2},
	{c: 1, d: 2},
}

// const name = user.name;
// console.log(name);

// const { name: _name, email, age = 31 } = user; // Khởi tạo age nếu ko có gì lấy 31

// console.log(_name, email, age);


const { name: _name, email, ...rest } = user;
console.log(_name, email);
console.log(rest); // rest là còn lại những cái gì

// Destuc của obj thì phải đúng key, với mảng phải đúng vị trị
const [ username, email, , address ] = user;
console.log(username, email, );

var getUser = () => {

	return [10, handle];
}

const getOption

// Có thể destructring ngay lúc truyền từ hàm vào

// Có thể destructring luôn ở con trỏ item hàm map()
// destructring ít 1-2 cấp thì được ko thì sẽ rối
const result = customrs.map(({id, name}) )

// spred oprerator -> Trải các phần tử trong object, array ra ngoài -> bỏ dấu ngoặc {} / []
// Giống làm trải 1 cấp mảng, obj nông, đưa dữ liệu nằm cùng 1 cấp
const oldObj = {
	name: "Name ",
	email: "@gmail",
}
const newObj = { ...oldObj, salary: 5000000}


// ... khi định nghĩa hàm
const getMax =

// ... ở bài này là sprest rải

// ví dụ khi gọi API
// const code = res.code || '';
// const { code = ""} = res // chỉ có undefine mới lấy rỗng vs null