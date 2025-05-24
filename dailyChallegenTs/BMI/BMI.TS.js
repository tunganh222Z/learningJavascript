function caculateBMI(weight, height) {
    var BMI = weight / (height * height);
    var bodyType = "";
    if (BMI < 18.5) {
        bodyType = "Gầy";
    }
    else if (BMI < 24.9) {
        bodyType = "Bình thường";
    }
    else if (BMI < 29) {
        bodyType = "Thừa cân";
    }
    else {
        bodyType = "Béo phì";
    }
    return {
        bmi: BMI,
        bodyType: bodyType,
    };
}
var res = caculateBMI(68, 1.69);
console.log("- K\u1EBFt qu\u1EA3 BMI : ".concat(res.bmi));
console.log("- ph\u00E2n lo\u1EA1i : ".concat(res.bodyType));
