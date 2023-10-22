/*
Hàm so khớp
Cuộc đời làm lập trình ko thoát được học 1 lần cả đời vẫn thế,
khớp đầu và cuối
theo bảng chữ cái abc
độ dài viết ngay sau biểu thức nhỏ, đầu là cho cả chuỗi
Phân tích logic của regex mới khó.
tìm hiểu validatin tpv4 address this regex, capturing group
Dấu \ sẽ hiểu là kí tự / -> là dấu của biếu thức chính quy
sẽ được hiểu là có check kí tự kiểu như thế trong chuỗi
Đối sánh chuỗi
Học tốt làm được sản phẩm dùng trên mạng - sẽ cuốn

Regular Expression (Regex) = Biểu thức chisnh quy
- Sử dụng để xử lý chuối nâng cao
- Các kí hiệu theo 1 ràang buộc nhất định
- Từ trái sang phải, độ dài ăn theo cái gần nhất, và có độ dài riêng của nó
-

Cấu trúc: /regex/modifier
- regex: Các kí hiệu
- modifier: Cấu hình cho biểu thức (phụ thuộc cho các ngôn ngữ lập trình khác nhau)

Website Test Regex: regex101

- String -> Chuỗi cố định
- Khớp đầu chuỗi: ^
- Khớp cuối chuỗi: $
- Khớp theo kí tự đại diện: (Kiểu min max trong khoảng)
+ [a-z] -> Chữ thường
+ [A-Z] -> Chữ hoa
+ [0-9] -> Số
+ charlit

Các biểu thức trong 1 cặp ngoặc vuông sẽ kết hợp theo điều kiện hoặc

- Khớp độ dài: Mặc định độ dài các biểu thức là 1
+ {value} -> Độ dài cố định
+ {min, max}
+ {min,}

- Kí tự viết tắt của độ dài
+ ->
* ->
? ->

*/

// Test là 1 phương thức của pattern không phải 1 chuỗi
// Để ý là 1 chuỗi để kiểm tra giống indexof vs include
// Vào trang regex 101.com
const pattern = /^[a-z_][a-z_0-9-]{6,}$/;
// const str = "hoangan.web@gmail.com"
const str = "_hoanganit"
const check = pattern.test(str);
console.log(check);
// Yêu cầu: Bắt đầu bằng chữ hoặc dấu gạch dưới