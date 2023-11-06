// <<====== Session Storage ======>>
// Nó sẽ mất khi chúng ta đóng tab hoặc trình duyệt (phiên làm việc)

// if (typeof Storage !== "undefined") {
//   console.log("Local Storage was supported.");
//   // add the key and value into session storage
//   sessionStorage.setItem("name", "huy tran");
//   sessionStorage.setItem("age", "18");

//   // remove the key from local storage
//   sessionStorage.session("name");

//   // clear session storage
//   sessionStorage.clear();
// }

// <<====== Local Storage ======>>
// Nó chỉ mất khi mà mình xóa nó đi chứ đóng trình duyệt và tab không ảnh hưởng
if (typeof Storage !== "undefined") {
  console.log("Session Storage was supported.");

  // add the key and value into local storage
  localStorage.setItem("name", "huy tran");
  let name = localStorage.getItem("name");
  console.log("<<=== name ===>>", name);
  document.querySelector(".result").innerHTML = `<p>My name is ${name}<p>`;

  // remove the key from local storage
  //   localStorage.removeItem("name");
  // clear local storage
  // localStorage.clear();
}
