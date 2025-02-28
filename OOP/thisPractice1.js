"use strict";
this.name = "Global";

//BEST PRACTICE : 
/*
Nếu dùng method thì nên dùng regular function (declaration or expression function)
*/

function normalFunction() {
  console.log("normalFunction", this?.name); // => undefined đang trong scope của function
}

const x = {
  name: "x",
  method() {
    console.log("method", this?.name); // => x object.function thì this nằm trong block của method object đó
  },
};

x.otherFunction = normalFunction; // x.otherFunction được gán là normalFunction, nhưng cách gọi bằng object.function => this sẽ nằm trong object x

const anotherFunction = x.method; // thường gọi x.method() sẽ là 1 method, nhưng bây giờ đã gán method vào 1 function không có gì trigger cả
anotherFunction();

const y = {
  name: "y",
  normalMethod() {
    console.log("normalMethod", this?.name);
  },

  arrowMethod: () => {
    console.log("arrowMethod", this?.name); // đâY Là LITTERAL OBJECT Nên TRỏ đếN THis TRONG SCOPE Của THằng arROW Là GLOBAL
  },
};

const anotherFunction1 = x.arrowMethod;