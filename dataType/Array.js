const arr = [1, 2, 3, 4, "nam", "sau"];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[100]);

//add value cho index 100
arr[100] = 100;
console.log(arr);
console.log(arr[100]);

//! property
arr.name = "Danh Sach";
console.log(arr);
console.log(arr.length);

arr["initTime"] = "2000";
console.log(arr);
console.log(arr.length);
//another way to create Array
const a = [1, 2, 3];
const b = new Array(1, 2, 3);

//! const array
const constArr = [1, 2, "ba", "bon"];
constArr[1] = "mot"; //? ok
console.log(constArr[1]);

// arr = []; //! Error
//Wrapper object
console.log(Array.isArray(a));

//for of loop
console.log("-------- for i ---------");

const loopArray = [4, 5, 6, 7, "nam"];
loopArray.name = "danhSach name";
loopArray["innit time"] = "2000";
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i] + " " + typeof loopArray[i]);
}
console.log(loopArray);
// for of == for each
console.log("----------- for of -------------");
for (const element of loopArray) {
  console.log(element + " " + typeof element);
}

//for-in loop
console.log("----------- for in -------------");
/*
for-in khác biệt lớn nhất so với for-of là khi duyệt for-in sẽ duyệt qua cả property
for-in chỉ làm việc với object
*/
for (const key in loopArray) {
  console.log(key);

  console.log(loopArray[key]);
}
console.log("-------------- for in with object ---------------");

const obj = { name: "ten", age: 15 };
for (const key in obj) {
  console.log(key + " " + obj[key]);
}

console.log("------------- for each -------------");
// trong js dùng trong call back function
console.log("------------- stack -------------");
//Stack cũng giống như khi implement trong java LIFO
const stackArray = [];
stackArray.push(1);
stackArray.push(2);
stackArray.push(3);
stackArray.push(4);
console.log("stack " + stackArray);

while (stackArray.length > 0) {
  const removeElement = stackArray.pop();
  console.log("pop element : " + removeElement);
  console.log(stackArray);
}
// Queue thay vì dùng pop là stack thì chúng ta dùng shift để được FILO
console.log("--------- Queue --------");
const queueArray = [];
queueArray.push(1);
queueArray.push(2);
queueArray.push(3);
queueArray.push(4);
console.log(queueArray);
while (queueArray.length > 0) {
  const shiftElement = queueArray.shift();
  console.log("shift element : " + shiftElement);
  console.log(queueArray);
}

//splice
console.log("---------------- splice ---------------");
const spliceArray = [1, 2, 3, 7];
spliceArray.splice(1, 2, 4, 5, "sau"); // -> xóa phần từ từ index 1, deletecounts là số lượng phần tử bị xóa là 2
// parameter 1 là index bắt đầu xóa
//parameter 2 là số lượng phần tử xóa
// từ parameter 3 trở đi là các phần tử chèn vào sau khi xóa tại index parameter 1
console.log(spliceArray);

//slice == subString
console.log("--------- slice --------------");
const sliceArray = [4, 5, 6, "bay"];
console.log(sliceArray.slice(1, 4)); // prameter 1 index start, prameter 2 : index end -> lấy từ index start đến index end -1;

// concat
const array1 = [4, 5, 6];
const array2 = [7, 8, 9];
const mergeArray = array1.concat(array2);
console.log(mergeArray);
