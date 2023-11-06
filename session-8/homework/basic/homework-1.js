// Task 1
// let quantity = document.querySelector(".quantity input");
// console.log("<<=== quantity ===>>", quantity);
// let valueRecieved = parseInt(quantity.value);
// console.log("<<=== value ===>>", valueRecieved);
// let errorMessage = document.querySelector("#error-message");
// let result = document.querySelector(".result");

// let increase = function () {
//   valueRecieved++;
//   quantity.value = valueRecieved;
//   errorMessage.innerHTML = "";
//   errorMessage.style.display = "none";
//   updateTotalPrice();
// };

// let decrease = function () {
//   if (valueRecieved > 0) {
//     valueRecieved--;
//     quantity.value = valueRecieved;
//     errorMessage.style.display = "none";
//     updateTotalPrice();
//   } else {
//     errorMessage.innerHTML = "Số lượng không thể âm!";
//     errorMessage.style.color = "red";
//     errorMessage.style.display = "block";
//   }
// };

// let updateTotalPrice = function () {
//   result.innerHTML = `Thành tiền là: ${500 * quantity.value}`;
// };

// quantity.addEventListener("change", updateTotalPrice());

// Task 2
// const products = [
//   { id: 1, name: "iPhone 12 Pro Max", price: 250000000, quanlity: 1 },
//   { id: 2, name: "Samsung Galaxy S21", price: 32000000, quanlity: 1 },
//   { id: 3, name: "Xiaomi Note 11", price: 18000000, quanlity: 2 },
//   { id: 4, name: "Galaxy Ford Pro", price: 47000000, quanlity: 1 },
//   { id: 5, name: "OPPO Find N2 Flip 5G", price: 19990000, quanlity: 3 },
// ];

// const table = document.querySelector(".productTable");
// table.style.border = "1px solid #333";
// table.style.borderCollapse = "collapse";

// const tableHTML = `
//   <tr>
//     <th>ID</th>
//     <th>Name</th>
//     <th>Price</th>
//     <th>Quantity</th>
//     <th>Amount</th>
//   </tr>
//   ${products
//     .map(
//       (product) => `
//       <tr>
//         <td>${product.id}</td>
//         <td>${product.name}</td>
//         <td>${product.price}</td>
//         <td>${product.quanlity}</td>
//         <td>${product.price * product.quanlity}</td>
//       </tr>`
//     )
//     .join(" ")}
// `;

// table.innerHTML = tableHTML;
// const trList = table.querySelectorAll("tr");
// const tdList = table.querySelectorAll("td");
// const thList = table.querySelectorAll("th");

// trList.forEach((tr) => {
//   tr.style.border = "1px solid #333";
// });

// tdList.forEach((td) => {
//   td.style.border = "1px solid #333";
// });

// thList.forEach((td) => {
//   td.style.border = "1px solid #333";
// });

// Task 3
// let ul = document.querySelector("#list");
// ul.classList.add("list");
// console.log("<<=== ul.id ===>>", ul.id);
// console.log("<<=== ul.classList ===>>", ul.classList);

// let li = document.querySelectorAll("#list li");
// li.forEach((li) => {
//   li.style.listStyle = "none";
// });
// let childOne = document.querySelector(".child_one").innerHTML;
// console.log("<<=== childOne ===>>", childOne);

// let src = document.querySelector(".child_two img");
// console.log("<<=== src.src ===>>", src.src);
// console.log("<<=== src.alt ===>>", src.alt);

// src.src =
//   "https://www.financialexpress.com/wp-content/uploads/2021/10/mac-pro.png";
// src.alt = "macbook pro 14";

// let childThree = document.querySelector('.child_three');
// console.log('<<=== childThree.classList ===>>', childThree.classList);


// Task 4
let userName = document.querySelector('.user-name');
let password = document.querySelector('.password');
userName.id = 'user-name';
password.id = 'password';

userName.value = 'huytran';
password.value = '123456';

console.log('<<=== userName ===>>', userName);
console.log('<<=== password ===>>', password);
