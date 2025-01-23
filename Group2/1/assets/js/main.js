// alert("اولین برنامه من در جاوا اسکریپت");

// برنامه ای بنویسید دو عدد را از ورودی خوانده و جمع، ضرب، تقسیم و تفریق آن دو را محاسبه کند.

// فاز ورودی
let num1 = Number(prompt("عدد اول را وارد کن: "));
let num2 = Number(prompt("عدد دوم را وارد کن: "));

// فاز پردازش
let jam = num1 + num2;
let mul = num1 * num2;
let div = num1 / num2;
let sub = num1 - num2;

// فاز خروجی
// alert(jam);
// alert(mul);
// alert(div);
// alert(sub);

// نکته
// عملگر + در جاوا اسکریپت عمل الحاق دو چیز را انجام میدهد (چسپاندن)
//  مقدار را به عدد تبدیل میکنیم Number برای حل این مشکل باید ابتدا با متد

console.log("مجموع: ", jam);
console.log("ضرب: ", mul);
console.log("تقسیم: ", div);
console.log("تفریق: ", sub);
