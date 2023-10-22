// BOM browser object Model

/*
	Giống đăng nhập qua google
	tắt tab nào đó, xây tính năng tự tắt tab, phù hợp làm tool vs trình duyệt
	tác động đến url website, cấu trúc 1 url ntn
	Web single page app dùng DOM hiển thị ra
	phần location khác quan trọng
	history
	giả url ko thay, mà UI dùng DOM đê
	giống router của farame work -> có windown history push state
	nhờ BE
	hash url
	vs react  dựa vào comman node, máy chủ thật cso cái đó, khải niệm con fig wen serve
	rewrui URL eNginx, apache -> tìm hiểu về dev off
	config eninx khó hơ to create NGiNx
	f5 ko giư giả url
	check drive url
 cần rõ:
	 xử lý url, push state - dự án code thuần, router ko mạnh vs frame work - window.open làm in ấn, đăn nhập qua MXH, đẹp thì code cái modal

	*/


//  1. Window.open() -> Mở cửa sổ mới
const btn = document.querySelector(".btn");
let website;

btn.addEventListener("click", function() {
// 		window.open(
// 			"http://gooogle.com",
// 			"",
// 			"width: 300px, height: 300px, top: 100px, lèt: 100px"
// 		);

	website.window.open( "http://gooogle.com");
});

const close = document.querySelector(".close");
btn.addEventListener("click", function() {

});

// 2. window.location

const reloadBTn = document.querySelector(".reload");
btn.addEventListener("click", function() {
		window.location.reload();
});

// 3. windown history push state
const productName = document.querySelector(".produc-name a");
productName.addEventListener();
productName.addEventListener("click", function() {

});