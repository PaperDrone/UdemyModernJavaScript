// // Log to console
// console.log('Hello World');

// console.log(123);

// console.log(true);

// console.table({ a: 3, b: 5 });

// console.error("OMG");

// console.clear();

// console.warn('This is a warning');

// console.time('Hello');

// console.timeEnd('Hello');

// var , let , const

// Const cannot be reassigned if there it is primitive type
// but the properties is changeable for reference type
const person = {
  name: 'John',
  age: 5
};

person.name = 'Smith';

console.log(person);

const numbers = [2, 4, 6, 8, 10];
numbers.push(12);
console.log(numbers);