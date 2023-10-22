/*
Trước BE là hết logic FE cơ bản, giờ FE làm hết ligic, xác tgywch để biết bạn là ai, cơ bản là có 1 chìa khóa mở cửa - đăng nhập
ủy phân quyền sau xác mình là ai rồi thì phân quyền, đăng kí khóa học quyết định có được học hay không làm gì, sửa thông tin cá nhân cũng là
ủy quyền, chỉ đc sửa của mình là ủy quyền, làm sao để BE biết được ... như số duy nhất như số căn cước cmt email để định danh trước -> phải điền thôn tin
- có 2 phương pháo cookei và session là con cokei, node js tự xây session
cokei là 1 đoạn văn bản được lưu ở phí trình duyệt đoạn vă bản ấy có thời gian sống di nubfh nuốn, cokei koco thười gian sống là sessiton skhi tắt dtrinfh duyệ đi là a mất chgir được lưu bang string dùng js  chuyển
sesutio n lưu trên máy chủ  nếu lưu trên FE thì sửa đươc, có lưu được ơ nhungwdx nơi chuyển khác như redit server lưu real time log và cache
sesito n lưu ctreen náy chủ ntn  tthfo nó tạo 1 file mới đặt trên dạng dáy số là id trung tren file và tra về clide dannj hrd coolei trùng duyệt tư tajoo thành cookei, sau có requets mới
là mặc định máy chủ đọc jđược lấy id để đọc kho lưu sesrion đọc xong thì trả về client. Vì sao gọi là sestion là làm theo phiên, ứng dụng dùng lâu sẽ dọn rác. Khi dự án lâu sẽ phình ra
- Video tôi đi codd dạo lấy vú dụ hoạt động của sssiton động thiên thai  mã định danh đang ở trong phiên đấy
- Ban đầu kiểm tra có khớp  người dụng taho cookie taho sesstion lấy data ra  gửi đi  cho clieent, tên mình được đọc từ dịch ngược sestion id, xưa dùng sesstion. Giờ lưu sessition base, ...
do hết hạn nên phải đang nhập lại do ko khớp vs sesstion trên DB
- khi tách máy chủ thì ko đồng bộ được data ...  sesition ở mỗi nơi  máy chủ khác, trước thủ công đồng bộ session vs nhau sau nặng
- Token chỉ lưu ở FE, BE check fail 1 or 2 ko đúng, nếu đúng thì khởi tạo token , dùng jwwt là 1 phongw pháp được dùng nhiều nhất, tỏn token có thông tin cơ bản, khéo bị hack, nhiều thông tin thì token dài lưu nặng, token luuwowr storage, hoặc cokei ở đâu cũng được, làm sao để giữ được phiên, thuogwf là dùng localstorage.
- Giờ muốn sửa thông tin user thì BE chỉ mới giải mã decode được thông tin /...  giả mã BEarer JWWT TOKEN, api key, open auth. BE chỉ tạo và giả mã chứ không lưu
- Ưu nhược điểm:
 Dùng đa thiết vị vì ko đồng bộ tokkeb
- JWWT bảo mật, hacker ko dc dc thì BE dịch cho,
- token và refresh,
3 trường hợp hết hạn token và refresh nói ... nhiều
token có dữ liệu ko dc xóa, lấy data được trong dưới hạn thười gian, ki thuật trước hết hạn thì đưa ào black list ko xóa, cách 1 là giảm thời gian sống 2 là kĩ thuật black list
tìm sopertokens.com revoking access with a jwt. Ai đã tưng làm qua rồi sẽ biết, ai mới thì ko biết cách bkack list.
10 năm tích cực hỏi lời dụng mặt kiến thức, ko giấu
- Viết string templatr để có thể chỉn sửa dc nội dung ...

requets có độ trễ login dùng spriner - lodding - tách hàm chuyển xử lý


sao login cps 3 loại bộ nhớ chỉ lưu trữ text


sau đăng nhập thành công gửi lên beaer lên BE để lấy thông tin về
Nên nếu làm logout thì nên gọi thêm cho BE để đưa token vào black list

vào web
https://fakeapi.platzi.com/en/rest/auth-jwt

vì sau khi login sẽ cần tải html trước sau mới add thêm event không nó sẽ bị lỗi
công đồng code Mê Ly / Linh ceo là con gái 2k

AuthENtication
- Xác thực
- Xác minh xem bạn là ai?

AuthORtication - ủy quyền
- Cho biết bạn sẽ được làm gì?


*/

// import { client } from "./clientB36.js";
// client.setUrl("https://api.escuelajs.co/api/v1");
//
// const handleLoign = async (data)  => {
// 	const { data: tokens } = await client.post("/auth/login", data);
// 	console.log(tokens);
// }
//
// handleLoign({
//   "email": "john@mail.com",
//   "password": "changeme"
// });

import { client } from "./client.js";
import { requesRefresh } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1");

const root = document.querySelector("#root");

const isLogin = () => {
  //Kiểm tra trạng thái đăng nhập
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    return true;
  }
  return false;
};

const handleLogout = () => {
  localStorage.removeItem("login_token");
  render();
};

const getProfile = async () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    const { access_token: accessToken } = JSON.parse(tokens);
    if (!accessToken) {
      //Xử lý logout
      handleLogout();
    } else {
      //set token vào header của request
      client.setToken(accessToken);
      const { response, data } = await client.get("/auth/profile");
      if (!response.ok) {
        //Xử lý logout -> 401
        handleLogout();
      } else {
        const profileName = document.querySelector(".profile .name");
        profileName.innerText = data.name;
      }
    }
  }
};

const render = () => {
  if (isLogin()) {
    root.innerHTML = `<div class="container py-3">
    <h2>Chào mừng bạn đã quay trở lại</h2>
    <ul class="list-unstyled d-flex gap-3 profile">
        <li>Chào bạn: <span class="name">Loading...</span></li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
    </ul>
    </div>
    `;
    getProfile();
  } else {
    root.innerHTML = `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <h2 class="text-center">Đăng nhập</h2>
        <form action="" class="login">
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control email" placeholder="Email..." />
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control password" placeholder="Password..." />
          </div>
          <div class="d-grid">
            <button class="btn btn-primary">Đăng nhập</button>
          </div>
        </form>
        <div class="msg text-danger mt-2 text-center"></div>
      </div>
    </div>
    </div>`;
  }
};

render();

/*
Logic đăng nhập
- Lấy dữ liệu từ Form
- Send API
- Trả về Token hoặc lỗi
- Nếu thành công => Lưu vào Storage
- Render
*/

const loading = (mode = "add") => {
  const loginForm = document.querySelector(".login");
  if (loginForm) {
    const btn = loginForm.querySelector(".btn");
    if (mode === "add") {
      btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`;
      btn.disabled = true;
    } else {
      btn.innerText = "Đăng nhập";
      btn.disabled = false;
    }
  }
};

const handleLogin = async (data) => {
  const msg = document.querySelector(".msg");
  msg.innerText = ``;
  loading();
  const { data: tokens, response } = await client.post("/auth/login", data);
  if (response.ok) {
    //Cập nhật vào Storage (localStorage)
    localStorage.setItem("login_token", JSON.stringify(tokens));
    render(); //Render lại giao diện
  } else {
    msg.innerText = `Thông tin đăng nhập không hợp lệ`;
  }
  loading("remove");
};

const loginForm = document.querySelector(".login");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".email");
    const passwordEl = e.target.querySelector(".password");

    const email = emailEl.value;
    const password = passwordEl.value;

    handleLogin({ email, password });
  });
}

// const evetLogut = () => {
//
// }

const logout = document.querySelector(".profile .logout");
if (logout) {
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogout();
  });
}

/*

17/10/2023 V
vê access hết hạn giả sử tình huống
Khi mất access thì cấc api đồi cấp lại, mỗi khối ui riêng nên làm ntn mà cá api ko đồng bộ vãn chờ có access token để được gọi
nhiều khi do backend ko cho hết hạn, do phạm vi dự án to mới có. FE phụ trách
Ban đầu theo cờ đề gọi nế có token rồi thì các api sau không gọi nữa
Gọi request thăm dò
Tìm hiểu thêm video của bạn sài gòn easy frontend xử lý expire token
bth làm dựa án gọi mỗi auth autho, có trường hợp gọi nhiều thì sao.
Lưu ý mỗi tài nguyên yêu cầu Token thì mỗi lần gọi API phải gửi token lên kèm.
Nếu sửa sau token thì sẽ sao
phải yêu cầ BE viết api refresh
token là mã chuỗi key cấp lại liên tục quy luật dùng giống như khóa màn hình máy tính vs tự tắt. Nếu không xóa token cũ và ko để vs blacklisst
loại token đó ra và người khác không dùng được.

- Vì sao phải call APi logout để lưu token cũ bào backlist, để chống dùng lại token, phương pháp token base
token thay đổi liên tục sẽ thất thoát và bị lấy ít toàn nguyên.
Xóa blacklist khi token hết hạn

đảm bảo refresh dc tạo = máy chủ tránh tấn công giả mạo, đảm bảo Refresh vẩn còn hạn, tấn công CXRS
Nếu web ko có time thực, client side lúc post bài mới xảy ra chuyện, có thể là request ngầm để check logi, nếu ko dc thì đăng xuất, dùng setinterval
tìm hiểu khái nhiệ, http polling

*/

// Xửa lý lấy lại asccess Token khi hết hạn (expired) - gửi lên 1 refesjTooke  -> Trả vê acs mới
// Gỉa hành động
const resquesApi = (url) => {
  return new Promise((rerolve) => {
      setTimeout(() => {
        console.log("Requset Refresh Token");
        Math.random();
      })
  })
}

(async () => {
  const slider = await resquesApi();
  console.log('slider: ', slider);
})();

/*
  request1 -> request2 -> request3

  - Refresh Token -> Lưu Server và client
  - Access Token -> Lưu ở Client
  + Cookie -> Dễ bị tấn công CSRF
  + localStorage, sessionStr
*/