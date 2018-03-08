// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName;
}


// FUNCTION EXPRESSIONS

const square = function (x) {
  return x * x;
};

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function (name) {
  console.log('Hello ' + name)
})('Test');
