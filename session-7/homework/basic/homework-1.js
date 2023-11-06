// Task 1
// let userName = prompt('Please enter your user name: ');
// let password = prompt('Please enter your password: ');

// if (userName === 'aptech' && password === '38yenbai') {
//     alert('Bạn đã đăng nhập thành công.');
// } else {
//     alert('Username hoặc mật khẩu không hợp lệ!');
// }

// Task 2
// function performingDelete() {
//   let confirmation = confirm("Bạn có chắc chắn muốn xóa record này không ?");
//   if (confirmation === true) {
//     alert("Deleted!");
//   } else {
//     alert("Not Delete");
//   }
// }

// Task 3
// let numberArr = [1, 2, 3, 4, 5];
// console.log(numberArr[0]);
// numberArr.push(6);
// console.log(numberArr);

// let element = numberArr
//   .map((item) => {
//     let str = item;
//     console.log(str);
//     return str;
//   })
//   .join(" ");

// console.log("Phần tử trong mảng là: ", element);

// Task 4
const carBrands = ["Mercedes", "Ford", "Peugeot", "Audi", "BMW"];
console.log("The initial array: ", carBrands);

// carBrands[1] = 'porsche';
carBrands.splice(1, 1, "porsche");
console.log("The value changing: ", carBrands.splice(1, 1, "porsche"));
console.log("The array aftering change the second element: ", carBrands);

// const newCarBrands = [...carBrands, "Lamborghini"];
const newCarBrands = [...carBrands];
newCarBrands.push("Lamborghini");
console.log("The array aftering merge:", newCarBrands);

// const mergedCarBrands = [...carBrands, ...newCarBrands];
const mergedCarBrands = [...carBrands];
for (let i = 0; i < newCarBrands.length; i++) {
  mergedCarBrands.push(newCarBrands[i]);
}
console.log("The array aftering merge: ", mergedCarBrands);
