// محاسبه محیط و مساحت مستطیل

let tool, arz, masahat, mohit;

// فاز ورودی
tool = Number(prompt("طول را وارد کنید: "));
arz = Number(prompt("عرض را وارد کنید: "));

// فاز پردازش
masahat = tool * arz;
mohit = (tool + arz) * 2;

// فاز خروجی
console.log("مساحت: ", masahat);
console.log("محیط: ", mohit);
