// Event bubbling & delegation
// Bubbling is from child element to parent & delegation is the opposite

// EVENT BUBBLING
let childElement = document.querySelector('.card-title');
// clicked on the child element will also trigger the parent listener
childElement.addEventListener('click', function () {
  console.log('card title');
});

let parentElement = document.querySelector('.card-content');
parentElement.addEventListener('click', function () {
  console.log('card content');
});


// EVENT DELEGATION

document.body.addEventListener('click', deleteItem);



function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  //Better way
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}