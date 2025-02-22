const hello = "helloWord";
const hello2 = "hello";
console.log("hello");
console.log(hello2);

const myname = "tung anh";
const age = 20;
const str = `bo may la ${myname} va tao ${age} tuoi`;

console.log(str);

const multiLineStr = `Hello
world`;
const multiLineStr2 = `Hello\nworld`;
console.log(multiLineStr2);

console.log(multiLineStr);

// number <=> string
let a = 2 + "2"; // convert từ kiểu number sang string
let b = 2 - "2"; // nhưng từ - * / thì convert sang kiểu number -> gây ra confuse nên typeScript sẽ không có kiểu này
let c = 2 * "2";
let d = 2 / "2";

const z = "2" + "2" * "2";
console.log("z la : " + z);


console.log(a);
console.log(b);
console.log(c);
console.log(d);
