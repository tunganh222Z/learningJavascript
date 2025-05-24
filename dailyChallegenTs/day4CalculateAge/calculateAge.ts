function calculateAge(yearOfBirth : number) {
      const currentYear: number = new Date().getFullYear();

      if (yearOfBirth > currentYear) {
            console.log("Năm sinh không hợp lệ");
            return;
      }
      const age = currentYear - yearOfBirth;
      console.log(`Tuổi của bạn là: ${age}`);
}

calculateAge(1997);