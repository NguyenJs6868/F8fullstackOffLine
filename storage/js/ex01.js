/*
lưu theo tên miền của mình

popup lưu ở seassion để mỗi lần tắt mở lại trình duyệt sẽ hiện lên mới -> không phải tắt tab và f5
tắt tab và f5 vẫn là cùng 1 phiên làm việc???

trình duyệt của app zalo face ko có storage mà có hàm hỗ trợ storage
------------
Storage ->

*/

// const email = localStorage.setItem('email', 'hoangan.web@gmail.com');

// const email = localStorage.getItem('email');
localStorage.removeItem('email');
localStorage.clear();

console.log('email');

if (typeof Storage !== "undefined" ) {
	// Hàm hỗ trợ storage
}

// Côkie
/*
tồn tại trong dường dẫn hiện tại, khác thư mục ko được thì hải làm
đường dẫn khác nhau sẻ tạo ra 2 cookier mới

expires là thời gian hết hạn
cookie lưu được nhiều thứ hay, ở web thật hỏi cho có chứ lưu lúc nào trả được, nhưng ...
local BE muốn đọc thì phải gửi header lên mới đọc được thông tin user
còn cookie BE đọc lúc nào dũng được
Đa số web lưu lại cookei lưu phiên đăng nhập có thể bị đánh cắp dùng http only, document . cookieu ko dc, do BE http only,
set cookei dùng FE set cookei BE header  set cookei để BE đọc
edit this cokei extensive j2tem
http only
secue chỉ cho http
BE làm được vì gửi sẻ cookei trả về header
Lấy data ở web bảo mật 1 lớp
--
Có thời gian sống hoặc thiết lập theo phiên (Tắt trình duyệt là bị xóa)
- Cookie sẽ tự động đính kém vao http Request nếu dùng trình duyệt
*/

// Thêm cookie mới
const expires = new Data("2023-10-18 09:3:00").toUCString();
console.log(expires)
document.cookie = `email; expires=${expires}`

// 21/10/2023
/*
1. SessionStorage, localStorage
- Dung lượng lưu trữ lơn: 4-5MB
- Không share được giữ các sub domain -> như các tên miền khác, đúng tuyệt đôi
- Có thể dùng JS đê thao tác
=> Dễ bị tấn công quá XSS -> dùng js để trả về token thì hacker có thể tấn công

2. cookie
- Bảo mật hơn -> HttpOnly -> có cờ httpOnly ko lấy được token nếu cả khi có lỗi xss cũng không ko
- DUng lượng lưu trữ thấp -> cân nhắc để dùng phù hơp
- Share giữa các sub domain -> chía sẻ các con của domain chính, khác cha ko dc
- Phân biệt theo path

Câu hỏi đặt ra: Bạn sẽ lưu token vào đâu, nên vào cookie giúp an toàn hơn vì có htto only, nếu có nhiều domain cần share nên sẽ tiện, khi đăng nhập share
giữ
ứng dụng không quá bảo mật thì lưu ở local, chú ý expire của cookie dài, dùng ko lo nên có ref, time ref vs cookie = nhau cũng không lo, như facebook lưu mật khẩu
là ở cookie, bth lưu mk ở máy chủ, nếu yêu cầu thì tăng thời gian vào expire BE. Đa số trên mạng dùng local set nhanh dễ, làm thì chọn an toàn, tùy dự án linh hoạt
đô bảo mật không cần cao, web đọc sách lưu lại lịch sử... dùng local cho nhanh, cookie tính toán nhanh vs nhơ BR sẻ http only
Muốn xây tính năng đăng nhập đâ dinh năng, đăng nhập 1 gmail dùng nhiều tên miền khác nhau nhiều sản phẩm -> xem SSO open auth,
Xây API đăng nhập qua google facebook dùng open Auth giờ dùng auth2, open auth loằng ngoằng hại não loằng ngoằng, yếu BE hơi mệt.

*/