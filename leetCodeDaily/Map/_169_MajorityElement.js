var majorityElement = function (nums) {
  const appearStandard = nums.length / 2;
  const myMap = new Map();

  for (const num of nums) {
    if (!myMap.has(num)) {
      myMap.set(num, 1);
    } else {
      myMap.set(num, myMap.get(num) + 1);
    }
  }
  let result = 0;
  let maxSoLanXuatHien = 0;

  for (const key of myMap.keys()) {
    let soLanXuatHien = 0;
    if (myMap.get(key) > appearStandard) {
      soLanXuatHien = myMap.get(key);
    }
    if (soLanXuatHien > maxSoLanXuatHien) {
      maxSoLanXuatHien = soLanXuatHien;
      result = key;
    }
  }
  return result;
};
[1, 1, 2, 4, 2, 2, 5, 6, 7, 8, 9, 9, 9, 10];

var majorityElement = function (nums) { //6ms
  let appearStandard = nums.length / 2;
  const array = [];
  let soLanXuatHien = 0;
  let maxSoLanXuatHien = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (array[nums[i]] == void 0) {
      array[nums[i]] = 0;
    }
    array[nums[i]] = array[nums[i]] + 1;
    soLanXuatHien = array[nums[i]];
    if (soLanXuatHien > maxSoLanXuatHien && soLanXuatHien > appearStandard) {
      maxSoLanXuatHien = soLanXuatHien;
      result = nums[i];
    }
  }
  return result;
};
const nums = [3, 2, 3];
console.log(majorityElement(nums));

function majorityElement(nums) { //1ms
    let count = 0, candidate = null;

    for (let num of nums) {
        if (count === 0){
            candidate = num;
        } 
        count = count + (num === candidate) ? 1 : -1;
    }
    return candidate;
}