//Object là tập hợp của các collection of properties và methods
console.log("---- object literal ------");

const myObject = {
  lastName: "Tung",
  firstName: "Anh",
  dob: 1997,

  getFullName() {
    return this.lastName + " " + this.firstName;
  },
  getAge() {
    return 2025 - this.dob;
  },
};

// đây là format kiểu json
console.log(myObject);

console.log(myObject.getFullName());
console.log(myObject.getAge());

//
console.log("----- attach properties and function for object ------------");

const anotherObject = {};

anotherObject.dob = 1997;

anotherObject.getAge = function () {
  return 2025 - this.dob;
};

console.log(anotherObject);
console.log(anotherObject.dob);
console.log(anotherObject.getAge());
