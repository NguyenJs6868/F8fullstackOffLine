/*
tách file js  nói lại, bth nối bằng html, add vậy sẽ lỗi hết luôn, dùng 1 file chính

require là commonn js
js es6 module
js es5
tìm hiểu commonJS module của node js và AMD

frame work qua cascm module bunder sử lý rồi

về nhà chia file được, người mới kiểu over eginering - phức tạp hóa vấn đề - chia nhỏ file quá mức
nên khi nào dùng mới import vào
export default cho hàm và class được nhưng biến ko được(funciton arraw),

// export theo name vì là có nhiều cái, 1 cái cũng phải đưa vào obj
// export theo name thì cho tất cả hàm class và biến
BE node nhiều file thiếu lên kết là hỏng

importt  gộp dòng default viết trước

Quan trọng  type="module" nếu không thi phải có .module ...
<script type="module" src="./app.js"></script>

*/

// Nối các module khác
/* 2 thao tác
1. Export
- Export Default
- Export Named

2.Import
- Import Default
- Import Named

File này sẽ import những tài nguyên (biến, )
 */

import hone from "./modules/home.js";
import getProducts from "./modules/products.js";
import { product, category } from "./modules/products.js";

import getProducts, { product, category } from "./modules/products.js";

import * as product from "./modules/products.js";


// console.log(home);
// console.log(getProducts);
// console.log(category);
console.log(product);