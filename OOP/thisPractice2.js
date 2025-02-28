"use strict";
//Không cần biết method đó được định nghĩa ở đâu, con trỏ this luôn trỏ vào method gọi nó

this.name = "Global";

const x = {
  name: "x",
  method() {
    console.log("method", this?.name);
  },
};

const y = {
  name: "y",
};

y.method = x.method;

x.method();
y.method();

function globalFunction() {
  const normalFunction1 = function () {
    console.log(this?.name);
  };

  const arrowFunction = () => {
    console.log("arrow function", this?.name);
  };

  normalFunction1();

  arrowFunction();
}

globalFunction();

const z = {
  name: "z scope",

  method() {
    
    console.log("method", this?.name);

    const normalFunction = function (params) {
      console.log("normalFunction", this?.name);
    };

    const arrowFunction = () => {
        console.log("arrowFunction", this?.name);
    }

    normalFunction();
    arrowFunction();
  },
};

z.method();