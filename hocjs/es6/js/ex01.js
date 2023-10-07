// Scope
/*
Phạm vi của biến (Biến được khai báo sử dụng ở đâu?)

1. Phạm vi toàn cục (Global Scope)
2. Phạm vi cục bộ (Global Scope)
2.1 Phạm vi hàm (Global Scope)
2.2 Phạm vi khối (Global Scope)

-> Biến được khai báo trong 1 khối có block code

	if, for, while, switch

	*/


	/*
	let, const -> chỉ hoạt động trong phạm vi scope mà nó đã khai báo và các scope con mà nó đã khai báo và các scope con của nó
	-> Không được phép khai báo nhiều lần 1 biến trong 1 scope

	let -> Thay đổi được

	const -> Không thay đổi được và chỉ bắt buộc phải gán khi khai báo


	*/

	for (let i = 0; i < array.length; i++) {
	// console.log(i);
		let a = 10;
		if (i === 5) {
			let a = 20;
		}

		console.log(a);
	}
	console.log(i);

	const user = {
		name: "Name ",
		email: "@gmail",
	}
	user.name = "Name F87"

	a = 10;
	console.log(a);
	let a;
