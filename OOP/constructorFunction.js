"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getFullName = function (params) {
    return this.name + "pro";
  };
}

const o1 = new Person("Tung Anh", 20);

const o2 = new Person("Van", 18);

o2.getOlder = function () {
  this.age++;
};

console.log(o1.name);

console.log(o1.getFullName());
