// 4-How do you check if an array contains a specific value in JavaScript?
let array = ["apple", "banana", "orange"];
let value = "banana";

if (array.includes(value)) {
  console.log("The array contains the value " + value);
} else {
  console.log("The array does not contain the value " + value);
}

// 5-How do you find the index of a specific element in an array in JavaScript?
let String = ["a", "b", "c", "d"];
let result = String.indexOf("a");
console.log(result);

// 6-How do you sort an array in JavaScript?

let sort = [6, 5, 9, 1, 7, 4];
let sortResult = sort.sort();
console.log(sortResult);

// 7-How do you reverse the order of elements in an array in JavaScript?

// 8-How do you merge two arrays in JavaScript?
// 9-How do you iterate over an array in JavaScript?
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 10-How do you find the sum of all elements in an array in JavaScript?
let numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
