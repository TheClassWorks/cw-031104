// محاسبه محیط و مساحت مستطیل

// فاز ورودی
let tool = Number(prompt("طول را وارد کنید: "));
let arz = Number(prompt("عرض را وارد کنید: "));

// فاز پردازش
let masahat = tool * arz;
let mohit = (tool + arz) * 2;

// فاز خروجی
// alert("مساحت: " + masahat);
// alert("محیط: " + mohit);
console.log("مساحت: " + masahat);
console.log("محیط: " + mohit);
