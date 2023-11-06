console.log("1");
//let hinh1 = $('#thumb').data('first');
let hinh1 = $("#thumb").attr("data-first");
console.log("<<=== 🚀 hinh1 ===>>", hinh1);
$(document).ready(function () {
  //Mọi thứ
  //chạy sau khi page được load xong hết
  console.log("3");
  //chạy những thứ mà ko dùng đến event
  $("ul#list>li:nth-child(2)").css("color", "red");
});

console.log("2");

let html = document.querySelector("#heading").innerHTML;
//output:Jquery
let jhtml = $("#heading").html();

console.log("<<=== 🚀 jhtml ===>>", jhtml);

$("#heading").addClass("hidden");
//addClass, removeClass, toggleClass, hide, show, html, text,
//attr, click, data, append, appendTo
//Nên dùng thằng này thay cho action click
$("#switchDevices").on("click", function () {
  console.log("clicked");
  $("#nav").slideDown();
  // $("#nav").show()
});

//$("ul#list>li:nth-child(2)").addClass('is-red');
//$("ul#list>li:nth-child(2)").attr('class', 'is-red');

$("p").click(function () {
  // action goes here!!
  console.log("clicked p tag");
  $(this).slideDown();
});

//bắt sự kiện trong jquery
$("p").on("mouseover", function () {
  console.log("mouseover p");
});

let price = document.querySelector('input[name="price"]').value;
let jPrice = $('input[name="price"]').val();
console.log("<<=== 🚀 jPrice ===>>", jPrice);

$('input[name="price"]').val(500);

document.querySelector("#result").innerHTML = "new Content";
$("#result").html("<p>Noi dung khac</p>");

$("#btn2").click(function () {
  $("img").after("<i>After</i>");
});

$("ul#list li").first().addClass("is-red");

$("button").click(function () {
  $("p").toggle(1000);
});

// $("#toggleMobile").click(function() {

// }) mot cach khac cua $("#toggleMobile").on("click", function () {} nhung it tuong thich voi trinh duyet safari
