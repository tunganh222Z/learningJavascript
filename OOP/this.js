"use strict";

//function normalFunction();
// method function attach to an object : object.method();

// declaration
function f1(params) {}

// expression
const f2 = function (params) {};

// arrow function
const f3 = () => {};

/* con trỏ this có thể đứng ở global scope
    - regular function (declaration và expression )
    - arrow function
    - trong method
*/
// nếu con trỏ this đứng một mình phạm vi global
this.name = "Global scope";
console.log(this?.name);
console.log(window);
// object method
const x = {
  name: "tung anh",
  scope: "object",
  method() {
    console.log(this);
    console.log(this?.scope);
  },
};

x.method();

// regular function : declaration && expression
function normalFunction(params) {
  console.log(this?.name);
}
normalFunction(); // => undefined vì trong strict mode this đang nằm trong phạm vi function scope

const expressionFunction = function (params) {
  console.log(this?.name);
};

//Arrow function : Arrow function không có this cụ thể mà phải sử dụng chung this có cùng scope với nó nơi nó được định nghĩa
const arrowFunctionTest = () => {
    name : " tung anh ";
  console.log(this?.name);
};
arrowFunctionTest();