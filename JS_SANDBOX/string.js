const firstName = 'William';
const lastName = 'Johnson';
const str = 'John Smith on his way to Miami, United States';
const tags = 'web design, web development';


let val;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('John', "Cloud");

// includes()
val = str.includes('Smith')


console.log(val);