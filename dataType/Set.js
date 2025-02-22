//set is collection of unique values

const arr = [1, 1, 1, 1, 1, 2, 2, 2, 3];
console.log(arr);
const mySet = new Set(arr);
console.log(mySet);

mySet.add(5);
mySet.add("sau");
console.log(mySet);
mySet.delete("sau");
console.log(mySet);
console.log(mySet.has("sau"));
console.log(mySet.size);
