const arr = [1, 1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8];
const temp = [
  [1, 2],
  [2, 3],
  [4, 5],
  [4, 1],
];
const myMap = new Map(temp);
console.log(myMap);
// put = set
myMap.set(1, 5);
myMap.get(1); // get key
console.log(myMap);
console.log(myMap.get(1));

const countNum = function (arr) {
  const myMap = new Map();

  for (const num of arr) {
    if (!myMap.has(num)) {
      myMap.set(num, 1);
    } else {
      const lastValue = myMap.get(num);
      myMap.set(num, lastValue + 1);
    }
  }
  return myMap;
};

console.log(countNum(arr));
