//for each đầu vào nhận là 1 call back function
function name(params) {}
const sum = (a) => console.log(a + 1);

function main01() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  for (const num of arr) {
    console.log(num);
  }

  arr.forEach(sum);

  arr.forEach((n) => {
    console.log(n + 5);
    console.log("---------");
  });

  arr.forEach((soHienTai, viTriHienTai, mangHienTai) => {
    arr[viTriHienTai] = soHienTai * 2;
    console.log({ soHienTai, viTriHienTai, mangHienTai });
  });
}

main01();
