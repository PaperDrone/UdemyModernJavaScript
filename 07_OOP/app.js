// Person constructor
// ES5 Context
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '10-25-1992');
// const john = new Person('John', 50);

console.log(brad.calculateAge());

// Uncommon usage of built in constructor

const name1 = 'Jeff';
const name2 = new String('Jeff Two'); // object type instead of string type
name2.foo = 'bar';

console.log(name2);