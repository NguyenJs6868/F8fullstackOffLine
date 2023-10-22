/*
	tháng phải đứng trước ngày, năm để sau trước cũng được
    Hàm set time
    mặc định sẽ là giờ máy tính, múi giờ đông dương

*/

// Date: Object xử lý thời gian
const dataStr = "3023-10-21 09:00:00";

// Chuyển thành date object
const date = new Date(dataStr);
// console.log(date, typeof date);
console.log(date, date.getDay());


//  Hàm set month


// Đồng hồ
function converNum(params) {
    if (Number(params) < 10) {
        return `0${params}`
    } else {
        return params;
    }
}

const handleClock = () => {
    const today = new Date();
    const clockEL = document.querySelectorAll(".clock span");
    const hours = today.getHours();
    const minus = today.getMinutes();
    const second = today.getSeconds();
    clockEL[0].innerText = hours;
    clockEL[1].innerText = minus;
    clockEL[2].innerText = second;
}

setInterval(handleClock , 1000);

// Đếm ngược
const counDownTime = () => {
    const today = new Date();
    const clockEL = document.querySelectorAll(".clock2 span");
    const hours = today.getHours();
    const minus = today.getMinutes();
    const second = today.getSeconds();

    const hoursCountDown = 24 - hours - 1;
    const minusCountDown = 60 - minus - 1;
    const secondCountDown = 60 - second - 1;

    clockEL[0].innerText = converNum(hoursCountDown);
    clockEL[1].innerText = converNum(minusCountDown);
    clockEL[2].innerText = converNum(secondCountDown);
}

setInterval(counDownTime , 1000);