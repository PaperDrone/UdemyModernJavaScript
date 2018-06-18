// const sayHello = function () {
//   console.log('Hello');
// }
// sayHello();


const sayGoodBye = () => {
  console.log('BYEBYE')
}

// One line function does not need braces
const sayGoodNight = () => console.log('Good Night');

const sayHey = () => 'Hey';

// Return Object, wrap in paranthesis
const greetings = () => ({ 'msg': 'Hello World' })

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('TEDDY BEAR')

const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
sayHello('JH', "LIM")
sayGoodBye();

sayGoodNight();

console.log(sayHey());
console.log(greetings());

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// })

const nameLengths = users.map(name => name.length);

console.log(nameLengths);