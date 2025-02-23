const arr = [1, 2, 3, 4, 5, 6];
const newArray = [];
arr.forEach((number, index) => {
  newArray[index] = arr[index] * 2;
});

const doubleArrayMapping = arr.map((number) => number * 2);
console.log(newArray);
console.log(doubleArrayMapping);

function khongDungFilter() {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const SoLeArray = [];

  arr1.forEach((number) => {
    if (number % 2 != 0) {
      SoLeArray.push(number);
    }
  });

  return SoLeArray;
}

console.log(khongDungFilter());

function suDungFilter() {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const soLeArray = arr1.filter((number) => {
    return number % 2 != 0;
  });
  return soLeArray;
}
console.log(suDungFilter());
