// محاسبه محیط و مساحت

//فاز ورودی
let tool = Number(prompt("طول را وارد کنید"));
let arz = Number(prompt("عرض را وارد کنید"));

//فاز پردازش
let masahat = tool * arz;
let mohit = (tool + arz) * 2;

//فاز خروجی
console.log("مساحت: ", masahat);
console.log("محیط: ", mohit);

alert("محیط"+ mohit);
alert("مساحت"+ masahat);
