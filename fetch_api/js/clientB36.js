// Khi làm dự án thật nếu đưa fetch vào code sẽ rồi, sau thay đổi token nào thì phải thay hết ở các hàm fetch, dự án thật, máy chỉ bị lỗi vào bảo trì hoặc ko hoặt động, nếu ko gọi dc api sẽ trăng trang, nếu mã lỗi là 500 sẽ chuyển hướng web đang bảo trì
// Trường hợp 3 js ko cho dùng hàm fetch thi sao, kêt cả thư viện cũng phải tách file cấu hình
// Dành không gian cho logic chứ không phải cho gọi hàm

// Build Http Client

import { config } from "./config.js";
const { SERVER_API  } = config;

export const client = {

    serverAPI: SERVER_API,
    token: null,

    setUrl: function (url) {
        this.serverAPI = url;
    },

    setToken: function (token) {
        this.token = token;
    },


	send: async function (url, method = "GET", body = null) { // Để hàm truyền thống mới được ...  nghe lại vì sao
        // url = SERVER_API + url;
        url = `${this.serverAPI}${url}`;
        const headers = {
            "Content-Tyle": "application.json",
        };
        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        const options  = {
			method,
			headers
		};

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        const data = await response.json();

        return { response, data }

	},

    get: function (url) {
        return this.send(url)
    },

    post: function (url, body) {
        return this.send(url, "POST", body)
    },

    put: function (url, body) {
        return this.send(url, "PUT", body)
    },

    patch: function (url, body) {
        return this.send(url, "PATCH", body)
    },

    delete: function (url) {
        return this.send(url, "DELETE")
    },


};