// set local storage item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');

// // set session storage item
// // sessionStorage.setItem('name', 'beth');

// // remove from storage
// localStorage.removeItem('name');

// // get from storage
// // const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();


document.querySelector('form').addEventListener('submit',
  function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      1
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    localStorage.setItem('task', task);
    alert('Task saved');


    e.preventDefault();
  });

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(e => {
  console.log(e);
});