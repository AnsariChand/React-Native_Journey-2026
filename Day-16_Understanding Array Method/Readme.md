Day 16 – Array Methods (map, filter, reduce)

📚 Core JavaScript concepts you’ll use daily in React & React Native

🎯 Today’s Goal

Understand map, filter, and reduce

Know when & why to use each

Practice with easy → medium → logic-based exercises

1️⃣ map() – Transform Each Item

👉 Use when: You want to change every element in an array and get a new array of same length.

🔹 Syntax
array.map((item) => {
  return newItem;
});

🔹 Example
let numbers = [1, 2, 3, 4];

let squares = numbers.map((num) => {
  return num * num;
});

console.log(squares); // [1, 4, 9, 16]

🔑 Key Points

Returns new array

Original array not changed

Length stays same

📝 Practice (map)

Multiply all numbers by 10

Convert ["apple", "banana"] → ["APPLE", "BANANA"]

Add 5 to every number in [10, 20, 30]

✍️ Try one now:

let nums = [5, 10, 15];
// result: [10, 15, 20]

2️⃣ filter() – Select Some Items

👉 Use when: You want to keep only elements that match a condition.

🔹 Syntax
array.filter((item) => {
  return condition; // true or false
});

🔹 Example
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

🔑 Key Points

Returns new array

Length may be smaller

Only keeps elements where condition is true

📝 Practice (filter)

Get numbers greater than 10

Filter odd numbers

From ["ram", "shyam", "raj"] keep names with length > 3

✍️ Try:

let ages = [12, 18, 20, 15];
// result: [18, 20]

3️⃣ reduce() – Combine into One Value

👉 Use when: You want to calculate a single value (sum, total, max, object, etc.)

🔹 Syntax
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);

🔹 Example (Sum)
let numbers = [10, 20, 30];

let total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total); // 60

🔑 Key Points

Returns single value

accumulator stores result

Very powerful but needs practice

📝 Practice (reduce)

Find sum of [5, 10, 15]

Multiply all numbers [2, 3, 4] → 24

Find max number from [3, 9, 2, 7]

✍️ Try:

let prices = [100, 200, 300];
// result: 600

🧠 Quick Comparison (Very Important)
Method	Returns	Use Case
map	New Array	Transform data
filter	New Array	Select data
reduce	Single Value	Calculate result

🔥 Mini Challenge (Real Logic)
let marks = [45, 60, 30, 80, 90];

// Step 1: filter marks >= 50
// Step 2: add 5 marks to each
// Step 3: find total marks


💡 This pattern is very common in React Native apps.