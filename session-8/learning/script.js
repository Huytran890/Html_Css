// function
// let sum = (a , b) => a + b;

// let number1 = 3;
// let number2 = 5;
// console.log(sum(number1, number2));

// let getDiscount = function (level) {
//   switch (level) {
//     case 'vip':
//       return 10;
//     case 'gold':
//       return 7;
//     default:
//       return 5;
//   }
// };

// let discount = getDiscount("vip");
// console.log(`The discount for customer is: ${discount}`);

// cách 1
// Student là một đối tượng (OOP)
// function student(name, age, gender, address, telephone) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.address = address;
//   this.telephone = telephone;
// }
// new đối tượng theo cấu trúc trên
// let studentA = new student('Trần thé huy', 20, 'male', '18 An hải đông, Đà nẵng', '0905782563' );
// console.log(studentA);

// cách 2
let student1 = {
  name: "Trần Thế Huy",
  age: 20,
  telephone: "0905356214",
};

let student2 = {
  name: "Phạm Mỹ Duyên",
  age: 20,
};
console.log(student1);
console.log(student2);

// Sửa trường trong object
// student1.age = 21;
// console.log('<<=== student1 ===>>', student1);

// ES6: spead operator
// student1 = { ...student1, age: 21 };
// console.log("<<=== student1 ===>>", student1);

// Thêm một phần tử vào object
// ES6: spead operator
// student2 = { ...student2, address: "12 Nguyễn Văn Linh, Đà Nẵng" };
// console.log("<<=== student2 ===>>", student2);

// Cách truyền thống
// newStudent = { address: "12 Nguyễn Văn Linh, Đà Nẵng" };
// student2 = Object.assign(student1, newStudent);
// console.log("<<=== student2 ===>>", student2);

// Xóa 1 trường khỏi object
// delete student1.age;
// console.log("<<=== student1 ===>>", student1);

// let myString = "Trần Thế Huy H";
// console.log(myString.toLocaleUpperCase);

// TÌm vị trí index của từ nào đó trong chuỗi
// console.log(myString.indexOf("H"));
// console.log(myString.lastIndexOf("H"));

// Thay thế
// console.log(myString.replace("H", "q")); // Tìm ký tự H thay bằng q

// query selector thì dùng tất cả các kiểu giống với css
// let test = document.querySelector("#head").innerHTML;
// let test = document.querySelector("h1").innerHTML;
// let test = document.querySelector(".head").innerHTML;
// console.log('<<=== test ===>>', test);

// Lấy class của h1
let h1 = document.querySelector(".heading");
console.log("<<=== Class ===>>", h1.classList);
console.log("<<=== Id ===>>", h1.id);
h1.innerHTML = "<p>Hello Huy</p>";
console.log("<<=== h1.innerHTML ===>>", h1.innerHTML);

let a = document.querySelector("#link");
console.log("<<=== a.href ===>>", a.href);
console.log("<<=== typeOf a ===>>", typeof a);
// a.href = "https://tinhte.vn/";
a.style.color = "red";
a.style.fontSize = "30px";

// function với giá trị đối số mặc định
function printInformation(name, role = "user") {
  console.log("<<=== user ===>>", name + " là: " + role);
}

printInformation("huy");
