// var, let, const
// var bad
// let is for variables you reassign
// use const whenever possible
// const can change what is inside the array but not to a whole new array

// strings numbers bool null undefined symbol

const name = 'john';
const age = 30;
const yes = true;
const decimalnumber = 3.5
const x = null;
const y = undefined;
let z;

// concatenation
const sentence = `My name is ${name} and i am ${age} years old`;
console.log(sentence);


// array thing
const todos = [
    {
        id: 1,
        text: 'hi i text'
    },
    {
        id: 2,
        text: 'werwdgewgwe'
    }
];

console.log(todos);

console.log(todos[1]);


// bunch of properties in object
const johnny = {
    firstName: 'johnny',
    lastName: 'park',
    age: 29
}

console.log(johnny);

// take out variable
const {  firstName  } = johnny;
console.log(firstName);

// == is  as long as the value is same
// === also matches data types

// start with const
// function name
// what it takes, and can = to assign defaults
// =>
// stuff and no return
const addFive = (num1 = 1) => (num1 + 5);
console.log(addFive());
console.log(addFive(5));
console.log(addFive(10));