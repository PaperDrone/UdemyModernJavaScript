
const id = '100';

// // EQUAL TO 
// if (id == 100) { console.log('CORRECT'); }
// else { console.log('INCORRECT'); }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// ///EQUAL TO TYPE & VALUE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// ///EQUAL TO TYPE & VALUE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`)
} else {
  console.log('NO ID');
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');