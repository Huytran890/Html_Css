// Toán tử số học: + - * / %
let a = 4,
  b = 8;
console.log("Tổng của 2 số a và b là: ", a + b);

let c = 10,
  d = "3";
console.log("Tổng của 2 số c và d là: ", c + d);
console.log("Chia lấy dư của 2 số c và d là: ", c % d);
console.log("kiểu dữ liệu của c chia d ", typeof (c % d));
console.log("Chia lấy dư của 2 số c và d là: ", c % parseInt(d));

// 3 dấu === thì nó sẽ so sánh lẫn cả về kiểu dữ liệu và value
let number1 = 5;
let number2 = "5";
console.log("<======= Compare 2 dấu = =======>", number1 == number2);
console.log("<======= Compare 3 dấu = =======>", number1 === number2);

// Toán tử logical
let amount = 300;
let levelCustomer = "vip";

let condition =
  amount === 500 && levelCustomer === "vip"
    ? console.log("discount 10%")
    : console.log("no discount");

let condition2 = !(levelCustomer === "member")
  ? console.log("Khách hàng này không phải là member")
  : console.log("Khách hàng này là member");

let user = null;

if (!user) {
  console.error("User not found!");
} else {
  console.log("User is exist.");
}

// nối chuỗi
let html = "<ul>";
html += "<li>Hello html</li>";
html += "<li>Hello css</li>";
html += "<li>Hello script</li>";
html += "</ul>";
document.write(html);

// vòng while
// let i = 0;
// let sum = 0;
// while(i <= 10) {
//     console.log('i là: ', i);
//     sum += i;
//     console.log(sum);
//     i++;
// }
// console.log("Tổng là: ", sum);

// vòng for
let array = [1, 5, 10, 23, 45, 67, 78, 88, 100, 105, 108];
for (let i = 0; i < array.length; i++) {
  array[i] % 2 == 0
    ? console.log(array[i])
    : console.log(array[i] + " không chia hết cho 2");
}


// THêm các phần tử vào trong mảng
let userArr = [];
userArr[0] = 'Luan' // c1
userArr.push('Huy'); // c2
userArr.splice(1, 0, 'Quoc'); // c3 Thêm phần tử quốc vào vị trí 1
userArr.push('Quynh')
userArr.push('Phuong')
userArr.push('Giang')
userArr.push('Duyen')
console.log(userArr);

// Xóa phần tử vào trong mảng
// userArr.pop(); // xóa phần tử cuối
// console.log(userArr.pop());
// console.log(userArr);

userArr.shift(); // xóa phần tử đầu tiên
console.log(userArr);

// userArr.splice(1, 1); // XÓa bất kỳ (đối số 1 là vị trí, đối số 2 là bao nhiêu)
// console.log(userArr.splice(1, 1));
// console.log(userArr);

