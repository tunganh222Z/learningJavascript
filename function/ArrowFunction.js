//Function declaration
function sayHello(name) {
  console.log(`say hello ${name}`);
}

function sayGoodbye(name) {
  console.log(`say goodbye ${name}`);
}

console.log(typeof sayGoodbye);

const saySomething = sayHello;

saySomething("tung anh");

//function is a type and act like a variable
sayGoodbye = "123";
console.log(sayGoodbye);
// anonymous function with function expression
const sayXam = function (params) {
  console.log("say xam xi");
};
sayXam();

//Arrow function is like a short version of anonymous function
const sayXamXi = (name) => {
  console.log(`arrow function sayXamXi ${name}`);
};

const sayXamXi2 = (name) => console.log(`arrow function sayXamXi ${name}`);
const sum = (a,b) => a+b;
sayXamXi("Van");

//literal object nếu return {} sẽ bị lỗi phải thêm ()
const getStudent = (n, a) => 
    ({
        name : n,
        age: a
    })