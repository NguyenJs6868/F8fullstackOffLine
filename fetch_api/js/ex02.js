/*
	Do nhiều file để khi sửa nhanh,  file js json(thông qua bundel), file biến môi trường ENV
	Do nhiều file dùng biến ấy để khi sửa nhanh ở 1 nơi,  file js json(thông qua bundel), file biến môi trường ENV
	File Js thì thay đổi cái là nhận luôn, còn ENV là phải khởi động lại máy ảo
	sau đi làm sẽ cần cấu hình các thứ khác như ở body header
	nên tách file ra

	sau cấu hình chỉ cần thêm body jo cần heaer vì đã thêm ở kia rồi
	dự án lớn

	thêm trang đang bảo trì
	dễ thay đổi nên quản lý tập trung, bảo trì náy chủ có nguồn tập trung để sửa
	học về access token và refresh tolken sư lý ở file client luôn, xác thực phân quyền
	access token là mã đc quyền, ref là cấp lại
	facebook token hết hạn rất ngắn
	face mượt do ref cấp tốt, xử lý cấp lại token mượt khó, nếu để ra tình trang hết hạn sẽ bị đăng xuất, sau để tạo thì có BE
  10/10/2023
  phần ô input có lỗi bảo mật XSS, tìm kiếm: strip html tag regex - stripHtmlTag
  sort ở phải ở BE
  Động vào thư viện là phải đọc DOC trước
  sắp xếp theo gì và ntn, sắp xếp khi có api là ramdom
  request fliy thăm dò xem ... máy chủ? có chặn ko
  cáu trức sau dấu hỏi là query string,, hàm url search parame
  Tính năng search phảu là gửi yêu cầu lên BE, json serve có full text search
  phân trang tìm kiếm trang getbottp pagination
  BE trả về 1 là respon hoặc head tùy vào ô BE
  tạo 1 khoảng = số lượng phần tử  -> tìm range js
  14/10/2023
  vì hàm ở tỏng addevetn nên bị gọi 2 lần
  rendeerpaginate goij sau khi
  - Vấn đề page limit, giới hạn bản ghi vì nhiều lên, tham khải 1 số trang, giải thuật của mình, tìm cái mình thích
  nhiều số quá thì  1 2 3 4 5 ... 10 20 >  tính toán check nó nằm trong trường hợp nào, thì sau này cứ if else thôi,
  nếu may mắn vào cty có code FE thuần thì sửa js thuần, Sql phân trang. Tính số bản ghi, tổng số trang, of set, thuật toán phân trang, querry cơ bản
*/


import { client } from "./client.js";
import { config } from "./config.js";

const { PAGE_LIMIT } = config;


// console.log('SERVER_API', SERVER_API);

// const getPosts = async () => {
// 	const response = await fetch(`${SERVER_API}/posts`);
//
// 	const posts = await response;
//
//  console.log('posts', posts);
//
// };


const paginateNav = document.querySelector(".paginate-nav");

paginateNav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("page-number")) {
    goPage(e.target.innerText);
  }
});

const renderPaginate = (totalPages) => {
  console.log('totalPages: ',totalPages);

  const { _page } = query;
  const range = [...Array(totalPages).keys()];

  paginateNav.innerHTML =
  `
    <ul class="pagination">

      ${
        _page > 1
        ?
        `
          <li class="page-item"><a class="page-link page-next" href="#">Trước</a></li>
        `
        : ""
      }

      ${range
        .map(
          (index) =>
            `<li class="page-item ${
              _page === index + 1 ? "active" : ""
            }"><a class="page-link page-number" href="#">${index + 1}</a></li>`,
        )
        .join("")}
      <li class="page-item"><a class="page-link page-pev" href="#">Sau</a></li>
    </ul>
  `
  ;


}


const goPage = (page) => {
  query._page = +page;
  getPosts(query);
};


const render = (posts) => {
  const stripHtmlTag = (html) => html.replace(/<[^>]*>?/gm, ""); // Bảo Mật XSS chống paste code độc
	const postsEl = document.querySelector(".posts");
	postsEl.innerHTML =
  `
    <div class="row g-3">
      ${posts
        .map(
          ({ title, excerpt }) =>
          `
            <div class="col-6 col-lg-4">
              <div class="border p-3">
                <h2><a href="#" class="text-decoration-none">${stripHtmlTag(
                  title,
                )}</a></h2>
                <p>
                  ${stripHtmlTag(excerpt)}
                </p>
              </div>
            </div>
          `,
        ).join("")
      }
    </div>
  `
};

const getPosts = async (query = {}) => {
  // Chuyển objec query => query string
  const queryString = new URLSearchParams(query).toString();
	const { data: posts, response } = await client.get(`/posts?${queryString}`)

  // TÍnh tổng số trang =  Tông số bài viết . Số bài viết ở 1 trang (limit)
  // Cách gọi respon header hàm fetch có sẵn, viết key thường, tính tổng số trang luôn làm tròn lên
  const totalPost = response.headers.get("x-total-count");
  console.log('totalPost: ', totalPost);
  const totalPages = Math.ceil(totalPost / PAGE_LIMIT)

  render(posts);
  renderPaginate(totalPages);
}

const query = {
  // q: '',
  _sort: 'id',
  _order: 'desc',
  _limit: PAGE_LIMIT,
  _page: 1,
}
getPosts(query);

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;
  // getPosts({
  //   q: keyword,
  // })
  query.q = keyword;
  getPosts(query)

  keywordEl.value = "";
});

const sortByEL = document.querySelector(".sort-by");
sortByEL.addEventListener("change", (e) => {
  const order = e.target.value;
  // getPosts({
  //   _sort: "id",
  //   _order: order,
  // });

  query._sort = "id";
  query._order = order;

  getPosts(query)
});

paginateNav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("page-number")) {
    goPage(e.target.innerText);
  }

  if (e.target.classList.contains("page-next")) {
    goPage(query._page + 1);
  }

  if (e.target.classList.contains("page-prev")) {
    goPage(query._page - 1);
  }
});


// const postPosts = async () => {
// 	const { response } = await client.post(`/users`, {
// 		name: "An",
// 		email: "An.web@gmail.com",
// 	})
//  console.log('response', response);
// }

// postPosts();
