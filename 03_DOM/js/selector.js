// SELECTOR

// document.getElementById(); // get the first element

// let val;

// val = document.getElementById('task-title');

// // Get things from the element
// console.log(val.id);
// console.log(val.className);

// // Change styling

// val.style.background = '#333';
// val.style.color = '#fff';
// val.style.padding = '5px';
// // val.style.display = 'none';

// // Chanage content
// val.textContent = 'Task List';
// val.innerText = 'My Tasks';
// val.innerHTML = '<span style="color:red">Red Task List</span>';

// console.log(val);

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5')); // Return first if more than one

// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red'; // css 3 pseudo class
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// // Only first element affected
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
})

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4'
}


console.log(items)