function helloMotherFUcker(name) {
  console.log("Hello your mom" + name);
}

console.log("type of function : " + typeof helloMotherFUcker);

helloMotherFUcker("jack");
// function can consider as a variable -> can re-assign
helloMotherFUcker = 1;
console.log(helloMotherFUcker);
// function can use as a parameter, because we consider function as a variable
function greet(name) {
  console.log(`hello ${name} ban nho`);
}

function executeSomeFunction(someFunction, p1) {
  someFunction(p1);
}
executeSomeFunction(greet, "ProVip");

const myConstFunction = function () {
  console.log("this is myConstFunction && can not be re-assign");
};

myConstFunction();

//nested function

function f() {
  function nestedFunction() {
    console.log("this is nestedFunction");
  }

  function nestedFunction2() {
    console.log("this is nestedFunction 2");
  }
  nestedFunction();
  nestedFunction2();
}

f();

// un-defined parameter
function sum(a, b) {
  console.log("a = " + a);
  console.log("b = " + b);
}
sum();

// default parameter
console.log("----- default parameter --------");

function sum2(a = 0, b = 1) {
  console.log("a = " + a);
  console.log("b = " + b);
  return a + b;
}
console.log(sum2(1, undefined));
// rest-parameter
console.log("------- rest parameter -----------");
function sum3(...values) {
  //-> values lúc này sẽ là một array
  let t = 0;
  for (const x of values) {
    t = t + x;
  }
  return t;
}
console.log(sum3(1, 2, 3, 4, 5, 6, 7, 8, 9));

//over-loading function -> trong javaScript không có overLoading function do không quy định kiểu type cho nên function1 bị re-assign lại
function function1(a) {
  console.log(a);
}

function function1(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

function1(1,2);
