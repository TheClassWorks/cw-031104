alert("این اولین برنامه من است")

//برنامه ای که دو عدد را از ورودی گرفته و جمع، ضرب، تقسیم و تفریق این دو عدد را انجام دهد

// فاز ورودی
let num1;
num1 = Number(prompt("عدد اول را وارد کنید"));
let num2 = Number(prompt("عدد دوم را وارد کنید"));

//فاز پردازش
let sum = num1 + num2;
let zarb = num1 * num2;
let div = num1 / num2;
let sub = num1 - num2;

// فاز خروجی
// alert(sum);
// alert(zarb);
// alert(div);
// alert(sub);

// نکته مهم
//عمل + در جاوا اسکریپت کار الحاق (چسباندن) دو رشته به هم را انجام میدهد
// استفاده می کنیم Number برای حل آن از متد

console.log("مجموع: ", sum);
console.log("ضرب: ", zarb);
console.log("تقسیم: ", div);
console.log("تفریق: ", sub);
