// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName;
}


// FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function (name) {
  console.log('Hello ' + name)
})('Test');


// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}