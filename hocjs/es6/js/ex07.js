/* Ghi chú Promise Hell
Promise trả về 1 resolve, ....then trả về ... chaining(mắt xích)
*/

// Promise
// const getA = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("get A")
// 		}, 1000);
// 	});
// };
//
// const getB = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("get B")
// 		}, 1500);
// 	});
// };
//
//
// const getC = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("get C")
// 		}, 5000);
// 	});
// };

// Gọi hàm lần lượt getA => getB => getC

// const getAPI  = async () => {
// 		await getA();
// 		await getB();
// 		await getC();
// };
// getAPI();

// Chaning: a().b().c() - Viết theo dạng chuỗi ntn dễ bảo trì hơn, tùy bài toán khi đi làm sẽ có dùng, phải hiểu để dùng đúng, học vẹt - làm trường này đúng khác thì sai

// getA()
// 	.then((response) => {
// 		console.log(response);
// 		return getB();
// 	})
// 	.then((response) => {
// 		console.log(response);
// 		return getC();
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})

//=> Promise Chaming - Phải hiểu promis để build xử lý bài toán xử lý phải hiểu bài toán ntn
//  Cách viết ngắn của es6 => nếu bọc {} thì sẽ ở trong block scope text:

const getRequest = () => {
	return new Promise((resolve) => {
		const data = { name: "F8", teacher: "Hoàng An"};

		const response = {

			text: () =>
				new Promise((resolve) => {
					resolve(JSON.stringify(data));
				}),


			json: () =>
				new Promise((resolve) => {
					resolve(data);
				})

		}

		setTimeout(() => {
			resolve(response);
		}, 1000);

	});
};


getRequest()
	.then((response) => {
		// lựa chọn kiểu dữ liệu trả về
		/*
		Nếu return response.text() => Trả về Json
		Nếu return response.Json() => Trả về text
			*/
		return response.text();
	})
	.then((data) => {
		console.log(data);
	})