// Task 1
// let userInfor = {
//   name: "Trần Thế Huy",
//   age: 20,
//   phone: "0905952368",
//   address: "12 Nguyễn Duy Hiệu, Đà Nẵng",
// };
// let addToStorage = () => {
//   localStorage.setItem("user", JSON.stringify(userInfor));
// };

// let removeFromStorage = () => {
//   localStorage.removeItem("user");
// };

// Task 2

let addToCart = () => {
  if(typeof Storage !== 'undefined') {
    let product = { id: 1, name: "iPhone 4", price: 200, quantity: 1 };

  } else {
    console.log("<<=== The local storage doesn't ===>>");
  }
  products.push(newProduct);
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
};
