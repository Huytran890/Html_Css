// Task 1
// const carsArr = ["Toyota", "Honda", "Kia", "BMW", "Audi", "Mitsubishi"];

// document.write("<h3>Danh sách xe hơi</h3>");
// document.write("<ul>");
// console.log("<ul>");
// for (let i = 0; i < carsArr.length; i++) {
//   document.write(`<li>${carsArr[i]}</li>`);
//   console.log(`<li>${carsArr[i]}</li>`);
// }
// document.write("</ul>");
// console.log("</ul>");

// Task 2
const products = [
  { name: "Áo bull Size M", quantity: 2, price: 160000 },
  { name: "Áo khoác gió NorthFace Size L", quantity: 1, price: 600000 },
  { name: "Quần Jean Nam Size 30", quantity: 1, price: 350000 },
];

let total = 0;

document.write("<h3>Đơn hàng</h3>");
document.write(
  '<table style="border: 1px solid black; border-collapse: collapse;">'
);
document.write(
  '<tr style="background-color: #f2f2f2;"><th style="padding: 8px; border: 1px solid black;">Sản phẩm</th><th style="padding: 8px; border: 1px solid black;">Số lượng</th><th style="padding: 8px; border: 1px solid black;">Đơn giá</th><th style="padding: 8px; border: 1px solid black;">Thành tiền</th></tr>'
);

// Lặp qua danh sách sản phẩm
for (let i = 0; i < products.length; i++) {
  const { name, quantity, price } = products[i];
  const subtotal = quantity * price;
  total += subtotal;

  // In từng dòng sản phẩm vào bảng
  document.write(
    `<tr><td style="padding: 8px; border: 1px solid black;">${name}</td><td style="padding: 8px; border: 1px solid black;">${quantity}</td><td style="padding: 8px; border: 1px solid black;">${price}</td><td style="padding: 8px; border: 1px solid black;">${subtotal}</td></tr>`
  );
}

// In giá trị tổng tiền vào cuối bill
document.write(
  `<tr><td colspan="3" style="text-align: right; padding: 8px; border: 1px solid black; text-align: center">Tổng tiền</td><td style="padding: 8px; border: 1px solid black;">${total}</td></tr>`
);

document.write("</table>");
