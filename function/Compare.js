// ==
const a = "1";
const b = 1;
if (a == b) {
  console.log("so sanh == true");
}

if (!(a === b)) {
  console.log("false cmnr vì khác kiểu");
}

const c = "10";
const d = "11";

if (c < d) {
  console.log("so sanh 2 string");
}

const x = [];
const y = [];

if (x == y) {
  console.log("x equal y");
} else {
  console.log("false because x y is reference type");
}

if (x === y) {
  console.log("true");
} else {
  console.log("false");
}
