function caculateBMI(weight: number, height: number) {
  const BMI = weight / (height * height);

  let bodyType: string = "";

  if (BMI < 18.5) {
    bodyType = "Gầy";
  } else if (BMI < 24.9) {
    bodyType = "Bình thường";
  } else if (BMI < 29) {
    bodyType = "Thừa cân";
  } else {
    bodyType = "Béo phì";
  }  

  return {
    bmi: BMI,
    bodyType: bodyType,
  };
}

const res = caculateBMI(68, 1.69);
console.log(`- Kết quả BMI : ${res.bmi}`);
console.log(`- phân loại : ${res.bodyType}`);

