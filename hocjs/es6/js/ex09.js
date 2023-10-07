/*
Try catch => Xử lý các lỗi ngoại lệ
- Có exception rồi thích làm gì thì làm, thư viện đẹp là do xử dụng css đẹp đẩy lên, không làm gián đoạn web

Block Catch: chứa thông tin lỗi

Block finally Chạy cuối cùng

Try có lỗi => Catch sẽ hoạt động, ko có thì ko chạy catch
- CHương trình chỉ cần gặp 1 lỗi đầu tiên là sẽ chuyển xuống catch luôn, tạm thời hiểu ý nghĩa của catch chỉ trả về thông báo lỗi ...
muuốn sử dụng tập trung 1 chỗ gióng distpasrt default
dùng throw ném lỗi xuống catch
- khái niệm Error handling
- Tập trung vào khái kiệm đó tập trung xử lý ở 1 nơi

- Sau khi dùng async vs await thì do phải đưa vào 1 hàm ... thì hàm nào lỗi thì dùng luôn ở hàm đó
- tìm hiểu về IIFE
- Kiến thức về bất đông bộ rất qua trọng khi tương tác với máy chủ DOM thì ko có

Buổi sau học: API
- API là gì?
- Web API: Chuẩn RESTFul API -> vì sẽ có các quy tắc
+ Cấu trúc của 1 URL
+ Các http method (là gì hỗ trợ cái nào), ý nghĩa từng cái
+ Thế nào goi là Endpoint?
+ Cac quy tắc đặt status code: 200, 201, 404, 000
...
Các cách gọi API từ Client (Sử dụng Javascript)
- XMLHttp Request
- fetch => Trả về 1 promise
- Thư viện hỗ trợ: axios, node-fetch ...

Thực hành các thao tác: CRUD
- C = Create
- R = Read -> Đọc list
- U = Update -> sửa tài nguyên đang có sẵn ở client và gửi lên máy chủ, và trả về show lên UI
- D = Delete -> Xóa lên máy chủ
Và có thêm tính năng: Lọc, phân trang, tìm kiếm

Authentication => Xác thực
Authorization => Phân quyền

-> (khi tương tác với máy chủ thì là làm web rồi ko phải thuần, sẽ làm các tương tác)
Khi làm với fetch ôn lại về mô hình  Request - Response có truyền token vào header web f12- content-type


*/

console.log("Hello F8");

try {
	// getA(); // -> Gặp lỗi => Chuyển xuống catch
	// console.log(a);
	if (a < 20) {
		// Hiển thị thông báo lỗi
		throw new Error("Biến a phải từ 20 kí tự trở lên")
	}
} catch ([exception]) {
	console.log(exception.message);
} finally {
	console.log("Hoàn thành");
}

console.log("Hoàng An");

// Async Await
/*
Async Function luôn trả về 1 promise
*/

// const getUser = async () => {
// 	return "Nguyên";
// }
// console.log(getUser());
//
// getUser().then((data) => {
// 	console.log(data);
// });

// const getUser = async () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve( "Nguyên"), 1000);
// 	});
// }
//
// const showUser = async () => {
// 	try {
// 		const user = await getUser();
// 		console.log(user);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
//
// showUser();

// IIFE là cùng ngoặc () để cho hàm chạy luôn
(async () => {
	try {
		const user = await getUser();
		console.log(user);
		const propduct = await getPropduct();
	} catch (e) {
		console.log(e);
	} finally {
		console.log("Hoàn thành việc lấy dữ liệu");
	}
})();