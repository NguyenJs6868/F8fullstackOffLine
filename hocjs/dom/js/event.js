
var inputRangeList = document.querySelectorAll('input[type="range"]');


var overEvent = new Event("over")

if (inputRangeList.length) {
inputRangeList.forEach(function (input) {
	input.addEventListener("mousemove", function(e) {
		var offserX = e.offserX;
		var value = (offserX * 100) / input.clientWidth;
		value = value.toFixed(2);
		this.data = value;
		
		overEvent.offserX = offserX;
		overEvent.clientX = e.clientX;
		input.dispatchEvent(overEvent);
	})
});
}