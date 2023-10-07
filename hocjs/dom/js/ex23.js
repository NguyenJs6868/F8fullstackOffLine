// Trigger Event -> Tự kích hoạt một event mà không cần tác động từ người dùng

/*
Trong js có 2 cách để trigger Event

1. Dùng các hàm có sẵn: Click (), submit()

-> Nhược điểm: không đầy đủ hàm với tất cả các sự kiện

2. Dùng thông qua hàm dispartchEvent()

*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
	console.log("Hello World");
});

// 1 giây sẽ click vào nút 1 lần
setInterval(function() {
	btn.click();
}, 1000)
var contentEl = document.querySelector(".content");

var downloadBtn = document.querySelector(".download");

downloadBtn.addEventListener("click", function() {
	console.log("download");
	var content = contentEl.innerText;
	var blob = new Blob([content]);
	// Tạo đối tượng URL từ Blob
	var url = URL.createObjectURL(blob);
	console.log(url);

	var a = document.createElement("a");
	a.href = url;
	a.download = "hello-fe.txt"
	a.click();
});

var quantityEl = document.querySelector(".quantity input");
var plusBtn = quantityEl.nextElementSibling;
var minusBtn = quantityEl.previousElementSibling;
var amountEl = document.querySelector(".amount");
var price = 12000;

var changeEvent = new Event("change"); // Trigger Event cùng tên change

quantityEl.addEventListener("change", function() {
	amountEl.innerText = this.value * price;
});

plusBtn.addEventListener("click", function() {
	quantityEl.value++;
	quantityEl.dispatchEvent(changeEvent);
});

minusBtn.addEventListener("click", function() {
	quantityEl.value--;
	if (quantityEl.value < 1) {
		quantityEl.value = 1;
	}
	quantityEl.dispatchEvent(changeEvent);
});


