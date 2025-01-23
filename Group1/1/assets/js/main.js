// alert("سلام دنیا !!");

// let esm = prompt("نام خود را وارد کنید؟");

// console.log(typeof esm);

// let a;
// a = 5; //مقصد سمت چپ است
// console.log(typeof(a));

// alert(esm);

// string رشته - ترکیب حرف، عدد و کاراکتر
//number عدد

// فاز ورودی
let num1 =Number(prompt("عدد اول را وارد کنید")) ;
let num2 = Number(prompt("عدد دوم را وارد کنید"));

//فاز پردازش
let sum = num1 + num2;
let mul = num1 * num2;
let div = num1 / num2;
let sub = num1 - num2;


//نکته
//عملگر + کار الحاق دو رشته به هم را انجام می دهد
// است string از نوع prompt جنس

//فاز خروجی
console.log("مجموع", sum);
console.log("ضرب ", mul);
console.log("تقسیم", div);
console.log("تفریق", sub);
