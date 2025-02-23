const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function suDungFindManual(numArray) {
  let foundItem = -1;
  for (const num of numArray) {
    if (num > 3) {
      foundItem = num;
      break;
    }
  }
  return foundItem;
}

console.log(suDungFindManual(arr));

function usingFind(numArray) {
  const foundItem = numArray.find((number) => {
    return number > 3;
  });
  return foundItem;
}

console.log(usingFind(arr));

function sorting(arr) {
  const newArray = arr;
  for (let i = 0; i < newArray.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[maxIndex] < newArray[j]) {
        maxIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = newArray[maxIndex];
    arr[maxIndex] = temp;
  }
  return newArray;
}

function sortArrayManual(arr) {
  const newArray = sorting(arr);
  return newArray;
}

function suDungSort() {
  const arr = [1, 5, 7, 2, 3, 4, 8, 10, 9];

  arr.sort((a, b) => a - b); // a-b tăng dần, b-a giảm dần
  return arr;
}

console.log(suDungSort());

function usingReduce() {
  const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  const sum = arr.reduce((prevSum, number) => prevSum + number, 0);

  return sum;
}

console.log(usingReduce());
