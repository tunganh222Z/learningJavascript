// trong java có 4 kiểu dữ liệu về số int long float dobule
// js chỉ có 1 kiểu number <-> tương ứng với kiểu double. Không phân ra int long float gì cả

// integer - float
const a = 1;
console.log("a: " + a);
const b = Number("1"); // Number nó giống kiểu Integer.prase
console.log("b= " + b);
console.log(typeof b);
//integer range -(2^53 -1)  to (2^53 -1)
const MY_MAX = 2 ** 53 - 1;
console.log("MY_MAX = " + MY_MAX);
console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);

const x1 = 0.1;
const x2 = 0.2;
const sum = x1 + x2;
console.log("sum = " + sum);
Number.isSafeInteger();
// Some special values
const INF = 1 / 0;
console.log(INF);
const MAX = 2 ** 53 - 1;
let x = MAX;
while (x != Infinity) {
  x = x * 2;
}

const input = "10c";
const y = Number(input);
console.log(y + " : " + typeof y);
console.log(y + " : " + Number.isNaN(y));
console.log(y + " : " + isNaN(y));
console.log("\n");
console.log(input + " : " + typeof input);
console.log(input + " : " + isNaN(input));
console.log(input + " : " + Number.isNaN(input));

console.log((NaN = NaN));
console.log((Infinity = Infinity));
Number.parseInt;
Number.parseFloat;

// convert sang Object
let myNumberObj = new Number(1);
console.log("et");
console.log(Math.max());
