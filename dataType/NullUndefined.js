// undefined
let x;
console.log(x); //-> un-defined

function sum(a, b) {
  c = a + b;
  // không có return
}

console.log(sum(1, 2)); //-> un-defined

function print(a, b) {
  console.log(a);
  console.log(b);
}

print(); //-> undefined do a b chua dc defined

const myObj = {
  name: "Jack",
};

console.log(myObj.age);

// null cần phải khai báo explicity, is primitive value

// check null or undefined
function checkNullUndefined(x) {
  if (!x) {
    console.log("x is null / undefined");
  } else {
    console.log("x is ok");
  }
}

const y = undefined;
checkNullUndefined(y); // => false khi "" '' null NaN undefined
console.log("---------");

function checkType(x) {
  if (x === undefined) {
    console.log("undefined cmnr");
  } else if (Number.isNaN(x)) {
    console.log("NaN cmnr");
  } else if (x === "") {
    console.log("empty cmnnr");
  } else if (x === null) {
    console.log("null cmnr");
  } else {
    console.log("x is ok");
  }
}

const z = undefined;
const a = null;
const b = "";
const e = "";
const f = NaN;
checkType(z);
checkType(a);
checkType(b);
checkType(e);
checkType(f);
// thằng undefined là 1 object global nên khi
const undefined = "xxx";
// nếu gọi hàm 1 lần nữa thì undefined sẽ là xx nên chúng ta không nên x === undefined mà call x == void 0