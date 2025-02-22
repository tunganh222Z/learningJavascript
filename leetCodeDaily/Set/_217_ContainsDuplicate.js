var containsDuplicate = function (nums) {
  const mySet = new Set();
  for (const num of nums) {
    if (!mySet.has(num)) {
      mySet.add(num);
    } else {
      return true;
    }
  }
  return false;
};

const nums = [1, 1, 2, 3, 4, 5];

console.log(containsDuplicate(nums));
