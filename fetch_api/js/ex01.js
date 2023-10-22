/*
Video của lực chia sẻ chi tiết về API

DB giảo có giao tiếp là BE
BE viết tài liệu cho FE làm, nếu theo chuẩn resful là dex làm, theo thì mới giao tiếp đc vs BE,
Chuẩn BE đặt api đúng viết hoa thường, gạch chân dưới ...
resouce ko được thay đổi phải được sử dụng ...
nhiều phương thức nhỏ lể hơn như lấy head, mất mạng thì sao báo ... giở request liên tục. cứ 500 là thất bại của server http method, mỗi cái có một ý nghĩa riêng
Biết BE để đỡ bị lừa, tính bang phân trang lọc, ko phải kéo hết về để lọc so đâu, ưu điểm của làm thì ntn,
Endpoint là gì ...
Xưa chuẩn soap xml chặt chẽ hơn restful, RSS - xem trên báo vn express, size map search eniner - google console serch, đưa web lên để xấy web aml, kiểm tra black link
tăng thời gian index sau mình dùng dùng thư viện  chuyển cho mình
- thời web chưa có responsive
- Đi làm phải luôn phải đặt câu hỏi tại sao nó lại hoạt động nt, sửa hồi năm 2 học 15h 1 ngày
- Cài thư viện npm install -g json-server -> tắt file serve đi vì file đó dùng dự án code , đặt ở ngoài đau cũng được, reload lại khi thêm form là do live server
- Tạo thư mục chứa data ở thư mục ngoài thư mục dự án cài lệnh json-server --watch db.json mở file của jsson ở post 300
- Đổi post của react ở file .env
- Lực hướng dẫn tạo ở word frest xampp có hết các phương thức
Thư viện Json server có đủ các phương thức, còn đi làm fake thì GET được thôi,
- BASE của anh tốt, đi làm trc frame work, cài extensive JSON Viewer - để data json hiện màu
Giờ học thuần chỉ học Học về JSON Server
Đoán là fetch ra sâu học theo axios, fetch trả về 1 promise để dùng nhàn
BOM là clocation .hrep,

CARS cost là polisi của trình duyệt là lấy dữ liêu của API khác tên miền, trùng ko sao, .. ko cho phép ta lấy, sau  này BE viết cho phép COST CARS, BE ít kinh nhiệm
là cho lấy hết, xịn là cho giới hạn, tên miền tránh gọi khác, buil máy chủ khách gọi, cào dữ liệu dự động ăn cắp
JSon server hỗ trợ hết phân trang, tìm kiếm
id học về khóa chính khóa ngoại,

nếu lấy theo id là trả về 1 obj
lấy theo các trường khác thì là lọc

*/

// APi  = Application  Programing Interface (giao diện lập trình ứng dụng)a

/*
Giao diện: HTML - CSS - JS

Dữ liệu: Back-End

Giao tiếp giữ Front end và Back-end (HTTP Protocol)

Back-end= Xây dụng API để các ứng dụng khác có thể thao tác: CRCD

- C = Create
- R = Read (phân trang, lọc ...)
- U = Update
- D = Delete

Front-end: Gọi API (Fetch API)

Thường API được xây dựng theo chuẩn RESTFul

- URL: Server API + resourcea
=> http://.fullstack.edu.vn/users

- HTTP MEthod:
+ GET -> Lấy dữ liệu
+ POST -> Thêm mới
+ PUT -> Sửa (Ghi đè)
+ PATCH -> Sửa (Không ghi đề)
+ DELETE -> Xóa

- Endpoint: Sự kết hợp giữa method + Resource
+ GET /users
+ POST  /users
+ GET /users/{id}

- HTTP Response Code
+ Success: 200
+ Credted: 201
+ Not Found: 404

- HTTP Response Message: JSON

Lấy API ở đâu?

- Tự viết (Có kiến thức Back end và DataBase)
- Sử dụng các dịch vụ mockup API
- Sử dụng các thư viện Mockup API

Trong phạm vi khóa học này -> Học về JSON Server
Làm sao để Front end gọi API từ Back-End?


 -XMLHttpRequest
 -fetch -> Mới, Trả về Promise
 -Thư viện: axios, jquery, ajax, ...

Cơ chế:
+ Client Side Rendering (CSR) (trả json)
+ Server Side Rendering (SSR)(XML -> html)


*/

// Cách dùng fetch
const serverApi = 	`http://localhost:3000`;
//
// fetch(`${serverApi}/users`).then((response) => {
// 	console.log(response);
// 	// response.json() -> Trả về dữ liệu và tự động parse JON thành object, aray
// 	// response.text() -> Trả về bản gốc của API (là 1 promise)
// 	return response.json();
//
// }).then((users) => {
// 	console.log(users);
// 	document.body.innerHTML = users.map(({ name, email}) => `
// 	<div>
// 	<h2>${name}</h2>
// 	<h2>${email}</h2>
// 	<hr>
//
// 	</div>
//
// 	`)
// });

// Dùng async await - cho nhanh

// const getUsers = async () => {
// 	const response = await fetch(`${serverApi}/users`)
// 	const users = await response.json();
// 	console.log(users);
//
// }
// getUsers();

// const getUsers = async (id) => {
// 	const response = await fetch(`${serverApi}/users/${id}`)
// 	const users = await response.json();
// 	console.log(users);
//
// }
// getUsers(1);

// 2 Trường hợp trên ko truyền GET vào vì mặc đình là GET
// tùy thuộc vào BE cho kiểu là gì
// Head là thôn tin request của respon ...
// X total count đưua x vào tra gề heaader

// Thêm mới
// const postUsers = async (data) => {
// // data = object = Dữ liệu gửi lên SERVER
// const response = await fetch(`${serverApi}/
// users`, {
// 	method: "POST",
// 	headers: {
// 		"Content-Type" : "application/json",
// 	},
// 	body: JSON.stringify(data),
// });
// console.log(response);
// }
// postUsers({
// 	name: "User 4",
// 	email: "user4@gmail.com"
// })

// UPDATE
// PUT Nếu ko gửi đủ các trường lá xoác PATCH thì ko xóa
// Nếu thông qua dùng tư viện khác  thì phải chịu khó đọc DOC

// const updatetUsers = async (id) => {
// 	const response = await fetch(`${serverApi}/
// 	users/${id}`, {
// 		method: "PATCH",
// 		headers: {
// 			"Content-Type" : "application/json", // khai báo kiểu dữ liệu, BE ko rằng buộc  xww form unlebcided
// 		},
// 		body: JSON.stringify(data),
// 	});
//
// 	console.log(response);
// 	}
//
// 	updatetUsers({
// 		name: "User 11",
// 	},
//     1,
// );


// DELETE
const deleteUsers = async (id) => {
	const response = await fetch(`${serverApi}/users/${id}`,
    {
		method: "DELETE",
	});

	console.log(response);
};

deleteUsers(1);