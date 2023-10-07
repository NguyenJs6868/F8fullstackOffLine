/*
Bất đồng bộ là gì là chạy tất cả cùng 1 lúc,
gọi hàm do phụ thuộc vào tài nguyên khác nên hàm bị delay
js vẫn có hàm đồng bộ  alert(), hàm prop() vì xấu quá nên ít dùng
bất đồng bộ sẽ nhanh hơn, đồng bộ -> gặp bài toàn có độ trễ kết quả vấn bị sai

Bất đồng bộ phụ thuộc vs yếu tố bên ngoài máy chủ yếu mạng, file nặng
Các kiểu chống bât đồng bộ các phiên bản sẽ được cải tiến
các module bunder vẫn chuyển về ES5 để chạy được

babel giúp chuyển từ js bản mới thành về cũ

nếu đã dùng promise rồi nếu yếu sẽ vị promise hell
Dùng để xly các tác vụ bất đồng bộ là 1 obj

*/

// Xử lý bất đồng bộ
/*
a()
b()
c()

*/

const getA = () => {
	console.log("getA");
}

const getB = () => {
	console.log("getB");
}

const getC = () => {
	console.log("getC");
}

getA();
getB();
getC();

alert("Hello")
console.log("Học laajo trình không khó");

// Ví dụ:
// Down load ảnh => Khi nào ảnh download xong  => Hiển thị thông báo

// 3 Cách xử lý nất đồng bộ

const downloadImage = () => {
	setTimeout( () => {
		console.log("Download xong");
	}, 1000)
};

const showMessage = (type) => {
	console.log("Download thành công", type);
}

// downloadImage(showMessage);
// truyền hàm vào 1 hàm ko có tham số nếu có tham số phải bọc vào 1 hàm có tham số
// Cách này sẽ tạo ra call back hell

// downloadImage(() => {
// 	showMessage("Thành công")
// });

// Promise
/*
Object để xử lý các tác vụ bất đồng bộ
- Khi làm việc sẽ cần quan tâm tới cá trạng thái, tương ứng mỗi trạng thái sẽ có các xử lý khác nhau
- Khi gọi hàm đã có dữ liệu rồi nhưng  chưa .then
catch chạy reject ()
then chạy resolve ()
chỉ  chạy 1 trong 2
- thành công rồi ko thất bại, nếu thất bại rồi thì thôi -> chạy rồi thì thôi
Chỉ tồn tại resolve hoặc reject
- Chỉ chạy 1 then, 1 catch
ko gọi them catch thì là pending -> khi gọi thì sẽ là fullfilled hoặc reject

trước có phàm fetch, xửa có XML http request
fetch tự động promise, do học từ đầu nên tự build

- Tìm hiểu thêm
// Promise Hell
// Promise Chaining .then() .then
// Promise.all() nhiều promise

Promise State
- pendding -> Chờ xử lý
- fufilled -> Xử lý thành công = finally
- reject -> Xư lý thất bại
*/

downloadImage(() => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = {
				url: "https://google",
				size: 30,
				// - Nếu resolve được gọi trước -> không chạy reject trước và ngược lại

			}
		}, 2000)
	});
});


console.log(promise);

// Promise Hell
// Promise Chaining
// Promise.all()