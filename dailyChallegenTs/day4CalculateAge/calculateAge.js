function calculateAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    if (yearOfBirth > currentYear) {
        console.log("Năm sinh không hợp lệ");
        return;
    }
    var age = currentYear - yearOfBirth;
    console.log("Tu\u1ED5i c\u1EE7a b\u1EA1n l\u00E0: ".concat(age));
}
calculateAge(1997);
