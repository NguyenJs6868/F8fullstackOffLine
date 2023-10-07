// Đợi Tạo cây DOM là các thẻ htlm
document.addEventListener("DOMContentLoaded", function () {
	var title = document.querySelector('.title')
	console.log('title', title);
});

//  Tất cả mọi thứ load xong mới ...   đợi data css nhạc load xong, làm chức năng loadding

var preloader = document.querySelector(".pre-loader");

window.addEventListener("load", function() {
	// console.log("Tải xong");

	preloader.remove();

	// var img = document.querySelector("img");
	// console.log(img.width);
});
