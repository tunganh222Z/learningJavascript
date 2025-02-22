//Function is a type, it can act like a variable
//callbacks = call back functions = function use as argument to call back later
const tinhTong = (a, b) => a + b;
const tinhHieu = (a, b) => a - b;
const tinhTich = (a, b) => a * b;
const tinhThuong = (a, b) => a / b;

const phepToan2SoHang = (phepTinhFunc, a, b) => {
  const kq = phepTinhFunc(a, b);
  return kq;
};

console.log(phepToan2SoHang(tinhTong, 2, 3));
console.log(phepToan2SoHang(tinhHieu, 2, 3));
console.log(phepToan2SoHang(tinhTich, 2, 3));
console.log(phepToan2SoHang(tinhThuong, 2, 3));

const log = (a) => console.log(a);
console.log(phepToan2SoHang(log, 1)); // sẽ trả về console.log("1") và undefined vì return undefined

//Asynchronous | a function call later : là một function sau này cần thực hiện chứ k phải thực hiện liền 1 lúc
