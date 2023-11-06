// Task 1
// let classification = prompt("Please enter the the final score: ");
// if (classification >= 9) {
//   document.write("<h3>Bạn được xếp loại: xuất sắc</h3>");
// } else if (classification >= 8) {
//   document.write("<h3>Bạn được xếp loại: giỏi</h3>");
// } else if (classification >= 6.5) {
//   document.write("<h3>Bạn được xếp loại: khá</h3>");
// } else if (classification >= 5.0) {
//   document.write("<h3>Bạn được xếp loại: trung bình</h3>");
// } else if(classification >= 0) {
//   document.write("<h3>Bạn được xếp loại: yếu</h3>");
// } else {
//   document.write("<h3>Bạn phải nhập đúng định dạng điểm!</h3>");
// }

// Task 2
// let electricNumber = prompt("Please enter the the number of electric: ");
// if (electricNumber < 0 || isNaN(electricNumber)) {
//   document.write(
//     "<h3>Bạn phải nhập đúng định dạng chữ điện (phải là một số và lớn hơn 0)!</h3>"
//   );
// } else {
//   electricNumber = Number(electricNumber);
//   if (electricNumber <= 100) {
//     document.write("<h3>Số tiền phải trả là: 500đ/chữ</h3>");
//   } else if (electricNumber <= 150) {
//     document.write("<h3>Số tiền phải trả là: 900đ/chữ</h3>");
//   } else if (electricNumber <= 200) {
//     document.write("<h3>Số tiền phải trả là: 1210đ/chữ</h3>");
//   } else if (electricNumber <= 300) {
//     document.write("<h3>Số tiền phải trả là: 1340đ/chữ</h3>");
//   } else {
//     document.write("<h3>Số tiền phải trả là: 1400đ/chữ</h3>");
//   }
// }

// task 3
// let numberOfMonth = prompt("Please enter the number of month: ");
// console.log(numberOfMonth);

// let resultElement = document.createElement("h3");
// if (numberOfMonth === "1" || numberOfMonth === "2" || numberOfMonth === "3") {
//   resultElement.innerText = `Tháng ${numberOfMonth} là mùa xuân`;
// } else if (
//   numberOfMonth === "4" ||
//   numberOfMonth === "5" ||
//   numberOfMonth === "6"
// ) {
//   resultElement.innerText = `Tháng ${numberOfMonth} là mùa hạ`;
// } else if (
//   numberOfMonth === "7" ||
//   numberOfMonth === "8" ||
//   numberOfMonth === "9"
// ) {
//   resultElement.innerText = `Tháng ${numberOfMonth} là mùa thu`;
// } else if (
//   numberOfMonth === "10" ||
//   numberOfMonth === "11" ||
//   numberOfMonth === "12"
// ) {
//   resultElement.innerText = `Tháng ${numberOfMonth} là mùa đông`;
// } else {
//   resultElement.innerText = `Tháng không hợp lệ`;
// }

// document.body.appendChild(resultElement);

// task 4
// function printTriangle() {
//   let numberOfStars = parseInt(prompt("Nhập số dòng hiển thị sao: "));
//   for (let i = 0; i < numberOfStars; i++) {
//     for (let j = 0; j <= i; j++) {
//       let stars = " * ";
//       document.write(stars);
//     }
//     document.write("<br>");
//   }

//   document.write("<br>" + "<br>");

//   for (let i = numberOfStars; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       let stars = " * ";
//       document.write(stars);
//     }
//     document.write("<br>");
//   }
//   document.write("<br>" + "<br>");
// }

// Task 5
// let sout, i, j;
// sout = "<table border='1' width='1000' cellspacing='0' cellpadding='3'>";
// i = j = 1;
// document.write('<h2 style="text-align: center">Bảng cửu chương</h2>')
// while (i <= 10) {
//   sout += "<tr>";
//   while (j <= 10) {
//     sout = sout + "<td>" + i + " * " + j + " = " + i * j + "</td>";
//     j++;
//   }
//   j = 1;
//   i++;
// }
// document.write(sout);

// Task 6
function virtualATM() {
  let accountBalance = 1000000;

  while (true) {
    let choice = prompt(
      "VIRTUAL ATM\n" +
        "An N: De nop tien\n" +
        "An R: De rut tien\n" +
        "An X: De xem so du\n" +
        "An E: De thoat\n" +
        "Vui long chon chuc nang:"
    );

    switch (choice.toLocaleUpperCase()) {
      case "N":
        let depositAmount = parseFloat(prompt("Nhập số tiền cần nộp:"));
        if (isNaN(depositAmount) || depositAmount <= 0) {
          alert("Số tiền phải là số lớn hơn 0. Vui lòng nhập lại!");
        } else {
          this.accountBalance += depositAmount;
          alert(
            `Bạn đã nộp ${depositAmount} Đồng. Số dư hiện tại là: ${accountBalance} Đồng.`
          );
        }
        break;

      case "R":
        let withdrawAmount = parseFloat(prompt("Nhập số tiền cần rút:"));
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
          alert("Số tiền phải là số lớn hơn 0. Vui lòng nhập lại!");
        } else if (withdrawAmount % 50000 !== 0) {
          alert("Số tiền rút phải là bội số của 50.000. Vui lòng nhập lại!");
        } else if (withdrawAmount > accountBalance) {
          alert("Số dư không đủ. Vui lòng nhập lại!");
        } else {
          accountBalance -= withdrawAmount;
          alert(
            `Bạn đã rút ${withdrawAmount} Đồng. Số dư hiện tại là: ${accountBalance} Đồng.`
          );
        }
        break;

      case "X":
        alert(`Số dư hiện tại là: ${accountBalance} Đồng.`);
        break;

      case "E":
        return; // Dừng vòng lặp và kết thúc chương trình

      default:
        alert("Chức năng không hợp lệ. Vui lòng chọn lại!");
    }
  }
}
