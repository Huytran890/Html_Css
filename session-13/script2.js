// Task 1
// let number1 = prompt("Please enter the number 1");
// let number2 = prompt("Please enter the number 2");

// console.log("<<=== adding ===>>", parseInt(number1) + parseInt(number2));
// console.log("<<=== minus ===>>", parseInt(number1) - parseInt(number2));
// console.log("<<=== multiply ===>>", parseInt(number1) * parseInt(number2));
// console.log("<<=== divide ===>>", parseInt(number1) / parseInt(number2));

// Task 2
// let number1;
// let number2;

// let adding = () => {
//   number1 = $("#number1").val();
//   number2 = $("#number2").val();
//   console.log("<<=== number1 ===>>", number1);
//   console.log("<<=== number2 ===>>", number2);
//   if (!isNaN(parseInt(number1)) && !isNaN(parseInt(number2))) {
//     let sum = parseInt(number1) + parseInt(number2);
//     $("#result").html(`<p>Sum is: ${sum}</p>`);
//   } else {
//     $("#result").html(`<p>Please enter valid numbers.</p>`);
//   }
// };

// let minusing = () => {
//   number1 = $("#number1").val();
//   number2 = $("#number2").val();
//   if (!isNaN(parseInt(number1)) && !isNaN(parseInt(number2))) {
//     let minus = parseInt(number1) - parseInt(number2);
//     $("#result").html(`<p>Minus is: ${minus}</p>`);
//   } else {
//     $("#result").html(`<p>Please enter valid numbers.</p>`);
//   }
// };

// let multipling = () => {
//   number1 = $("#number1").val();
//   number2 = $("#number2").val();
//   if (!isNaN(parseInt(number1)) && !isNaN(parseInt(number2))) {
//     let multiply = parseInt(number1) * parseInt(number2);
//     $("#result").html(`<p>Multiply is: ${multiply}</p>`);
//   } else {
//     $("#result").html(`<p>Please enter valid numbers.</p>`);
//   }
// };

// let dividing = () => {
//   number1 = $("#number1").val();
//   number2 = $("#number2").val();
//   if (!isNaN(parseInt(number1)) && !isNaN(parseInt(number2))) {
//     let divide = parseInt(number1) / parseInt(number2);
//     $("#result").html(`<p>Multiply is: ${divide}</p>`);
//   } else {
//     $("#result").html(`<p>Please enter valid numbers.</p>`);
//   }
// };

// Task 3
// let calculation = (el) => {
//   let number1 = $("#number1").val();
//   let number2 = $("#number2").val();
//   console.log("<<=== number1 ===>>", number1);
//   console.log("<<=== number2 ===>>", number2);
//   console.log("<<=== el ===>>", el);
//   let type = $(el).attr("id");
//   console.log("<<=== type ===>>", type);
//   let result;
//   switch (type) {
//     case "add":
//       result = parseInt(number1) + parseInt(number2);
//       break;
//     case "minus":
//       result = parseInt(number1) - parseInt(number2);
//       break;
//     case "multiply":
//       result = parseInt(number1) * parseInt(number2);
//       break;
//     case "divide":
//       result = parseInt(number1) / parseInt(number2);
//       break;
//   }
//   $("#result").html(`<p>${type} is: ${result}</p>`);
// };

// Task 4
class Student {
  constructor(id, name, gender, dateofBirth, height, weight, nationality) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dateofBirth = dateofBirth;
    this.height = height;
    this.weight = weight;
    this.nationality = nationality;
  }
}

let studentA = new Student(
  "123",
  "Trần Thế Huy",
  "Nam",
  "16-11-2002",
  "1m75",
  "55kg",
  "Australian"
);
let studentB = new Student(
  "456",
  "Phạm Mỹ Duyên",
  "Nữ",
  "31-08-2002",
  "1m6",
  "50kg",
  "Việt Nam"
);

console.log("<<=== studentA ===>>", studentA);
console.log("<<=== studentB ===>>", studentB);

// function ready sẽ chạy sau cùng sau khi trang load xong, và được dùng để chạy những gì ko dùng đến event
console.log("<<=== 1 ===>>");
$(document).ready(function () {
  console.log("<<=== 3 ===>>");
});
console.log("<<=== 2 ===>>");
