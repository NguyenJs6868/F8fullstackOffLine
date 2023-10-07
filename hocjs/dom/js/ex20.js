//  Event scroll thay đổi thành cuộn trình duyệt

//  1. Lấy ra tọa dộ x, y

var currenY = 0;
window.addEventListener("scroll", function () {
	var x = this.window.scrollX;
	var y = this.window.scrollY;
	console.log("x, y", x, y);

	// if (y > currenY) {
	// 	console.log('Keo xuong');
	// 	document.body.style = `background: red`
	// } else {
	// 	document.body.style = `background: initial`
	// }
})

// Bài tập: Xử lý 2 yêu cầu sau:
/*
- Nếu thanh cuộn xuống -> Đổi màu body thành đỏ
- Nếu thanh cuộn lên -> Đổi màu body về mày mặc định
*/

// window.scroll(0, 200);

// Xây dựng tính năng back to top

var topBtn = document.querySelector(".top");
window.addEventListener("scroll", function () {
	var x = this.window.scrollX;
	var y = this.window.scrollY;
	console.log("x, y", x, y);

	if (y > 50) {
		topBtn.classList.add("show")
	} else {
		topBtn.classList.remove("show")
	}
});

topBtn.addEventListener("click", function () {
	window.scroll(0, 0);
});
// console.log(document.body.clientHeight); // Lấy ra chiều cao của trình duyệt

