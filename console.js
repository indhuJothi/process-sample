console.log("Hello world");
console.log('Hello %s', 'world');
console.error(new Error('Whoops, something bad happened')); // will print error stack
var name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);

console.log('My %s has %d years', 'cat', 2)
// console.clear(); It wipe all the logged data

const x = 'A'
const y = 'B'
const z = 'C'
console.count(
  'The value of x is ' + x + 
  ' and has been checked how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked how many times?'
)

const oranges = ['orange', 'orange']
const apples = ['just one apple only']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})
console.countReset('orange'); // It reset the string orange count to 0 here
oranges.forEach(fruit => {
  console.count(fruit)      // so here again it print from 1 and 2
})