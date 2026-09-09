/* eslint no-unused-vars:off */

/* =====================
# Exercise: Basic Functions

Let's get a little more practice writing functions (we'll be using some of these
functions later on too ;-).
===================== */

/* =====================
Instructions: Write a function, age, that takes a birth year and returns an age
in years. (Let's just assume this person was born January 1 at 12:00 AM)
Example: "age(2000) should return 26"
line 21 is checking that it will give the expected output
===================== */
let age = (birthYear) => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - birthYear;
};

console.log('age success:', age(1971) === 55)

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
If function only consists of single expression, u can use arrow function without braces and return statement
===================== */

let plusOne = (num) => num + 1;

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

let timesThree = (num) => {return num * 3};

console.log('timesThree success:', timesThree(33) === 99);

/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

let add = (n1, n2) => n1 + n2;

console.log('add success:', add(4, 6) === 10);

/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */

let multiply = (n1, n2) => n1 * n2;

console.log('multiply success:', multiply(4, 6) === 24);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

let isEven = (num) => num % 2 === 0;

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

let isOdd = (num) => num % 2 !== 0;

console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);

/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

let valueAtIndex = (arr, i) => arr[i];

console.log('valueAtIndex success:', valueAtIndex([9, 8, 7, 6, 5], 2) === 7);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({name: 'Nathan', age: 27}, 'name') should return 'Nathan'"
===================== */

let valueAtKey = (obj, k) => {return obj[k]};

const obj = {name: 'Nathan', age: 27};
obj.name === obj['name'];

console.log('valueAtKey success:', valueAtKey({ 'foo': 'bar' }, 'foo') === 'bar');

/* =====================
Instructions: "Write a function that returns the index of a value in an array"
Example: "indexForValue(['Mercury', 'Venus', 'Earth', 'Mars'], 'Earth') should return 2"
===================== */

let indexForValue = (arr, value) => arr.indexOf(value);
// Go through the array 
for (let i = 0; i <arr.length; i++) {
    const item = arr[i];
    if (item === value) {
        return i;  // return the index of the value if found
    }
}

console.log('indexForValue success:', indexForValue([9, 8, 7, 6, 5], 7) === 2);

/* =====================
Instructions: "Write a function that returns the key of a value in an object"
Example: "keyForValue({name: 'Nathan', age: 27}, 'Nathan') should return 'name'"
===================== */

let keyForValue = (obj, val) => {
    for(const key in obj) {
        if (val === obj[key]) {
            return key;
        }
    }
};

console.log('keyForValue success:', keyForValue({ 'foo': 'bar', 'baz': 'qux' }, 'bar') === 'foo');
