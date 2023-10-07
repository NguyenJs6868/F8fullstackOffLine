var slider = document.querySelector(".slider");
// var msg = document.querySelector(".msg");
//
// // 1.change -> Khi thay đổi
// slider.addEventListener("change", function() {
// 	console.log('change:', this.value);
// })
//
// // 2.input -> Bấm chuột xuống, kéo
// var finishEvent = new Event("finish")
//
// slider.addEventListener("input", function() {
// 	console.log('input:', this.value);
//
// 	if (+this.value === 100) {
// 		msg.innerText = `Hello F8`;
// 		slider.dispatchEvent(finishEvent);
// 		// Phản hồi sự kiện
// 	} else {
// 		// msg.innerText = ""
// 	}
// })
//
// slider.addEventListener("finish", function() {
// 	console.log('addEventListener finish');
// })

slider.addEventListener("over", function(e) {
	console.log('addEventListener over e', e);
})


// document.querySelector('.slider').addEventListener("over", function() {
// 	console.log(this.data);
// })