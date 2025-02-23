//
//  x = false | !x = true | !!x = false
// !! convert sang kiểu boolean

function andOperator() {
  const x = 1 && 0 && [];
  console.log(x);
  // x = 0 do && lấy ra giá trị false đầu tiên
  // nếu tất cả true thì sẽ trả về toán hạng cuôi cùng
}

function orOperator() {
  const x = 0 || 1 || 2;
  // tất cả false sẽ trả về false cuối cùng
  // tất cả true sẽ trả về true đầu tiên
}

// // useful case
// if (userInput) {
//     name = userInput;
// } else {
//     name = "N/A"
// }
// // short case :
// const name = userInput || "N/A"; // const name = userInput ? userInput : "N/A";

// // precedence operator : && || thì && được ưu tiên trước
// // Nullish operator ?? -> nếu codition là null hoặc undefined. các trường hợp empty NaN vẫn true
// const x = "condition" ?? "nullish";  // nếu falsy thì sẽ trả về default

// optional chaining ?.

function optionalChaining() {
  const thao = {
    name: "Thao",
    age: 19,
    address: {
      street: "Tran Duy Hung",
    },
  };
  // property?. để tránh bị nullish nếu null sẽ trả về undefined
  console.log(thao.address.street);
  console.log(thao.age);
  console.log(thao.address?.name);
}

//spread syntax  ... : rest parameter

function sum(...values) {
  return values.reduce((prevSum, a) => prevSum + a, 0);
}

function spreadSyntax() {
  const a = [3, 2, 1, 4];
  console.log(Math.max(a)); // NaN
  console.log(Math.max(...a)); // NaN
}

const arr = [1, 2, 3, 4, 5];
const adding67 = [...arr, 6, 7];

// spread for object dùng trong case cụ thể

const tungAnh = {
  name: "tungAnh",
  age: 18,
  address: "Xa La",
};

const van = { ...tungAnh, name: "van" };
console.log(tungAnh);
console.log(van);

//Destructuring assignment
const tungEm = {
  name: "tung Em",
  age: 10,
  address: "Xala hadong",
};

//cách thông thường
const ten = tungEm.name;
const tuoi = tungEm.age;
console.log(ten + tuoi);

// destructuring assignment
const { age, abc } = tungEm;
console.log( age + abc);

console.log("------");


const{name, ...otherInfo} = tungEm;
console.log(name);
console.log(otherInfo);


const arr1 = [1,2,3,4,5,6];

const[a,b] = arr1; // a = arr[0]; b = arr[1]

//with rest syntax
const[firstIndex, ...theRest] = arr1; // the rest sẽ là phần còn lại của mảng arr1
