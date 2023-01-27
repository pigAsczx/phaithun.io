//============== ถ้าประกาศ key ซ้ำ จะเลือกใช้ ตัวสุดท้าย=====================
let font_dulip = {
    color : "red",
    color : "green",
    myFunction(){
        console.log("myFunction1");
    },
    myFunction(){
        console.log("myFunction2");
    }
};
//console.log(font_dulip.color);
//font_dulip.myFunction();

//================= กำหนดค่าให้ property แบบย่อ ==========================
let color = "red";
let size = 200;
let font = {
    color: color,
    size: size
};
//console.log(font.color);
//console.log(font.size);

//================= ประกาศเมธอดแบบย่อ ==========================
let objF = {
    myFunction: function(param){
        console.log(param);
    }
};
//objF.myFunction(20);

let objFunctionResize = {
    myFunction(param){
        console.log(param);
    }
};
//objFunctionResize.myFunction(200);

//===============================================================
let key1 = {a:1};
let key2 = {b:2};
let obj = {
    [key1] : 100,
    [key2] : 200
};

//console.log(obj[key1], obj[key2]);
//console.log(obj[key1] === obj[key2]);
