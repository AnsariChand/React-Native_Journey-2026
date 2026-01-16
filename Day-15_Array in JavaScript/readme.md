Day 15 – Understanding Arrays (JavaScript) 🔥

(Beginner-friendly, step by step)

You’re doing great 👍 Today we’ll understand Arrays from zero level with examples + exercises + practice.

🔹 What is an Array?

👉 An array is a variable that can store multiple values in one place.

❌ Without Array
let name1 = "Amit";
let name2 = "Rahul";
let name3 = "Suresh";

✅ With Array
let names = ["Amit", "Rahul", "Suresh"];

🔹 Why Arrays?

Store multiple values

Easy to manage data

Very important for React Native & Apps

🔹 Creating an Array
let numbers = [10, 20, 30, 40];
let fruits = ["Apple", "Banana", "Mango"];
let mixed = [10, "Hello", true];

🔹 Array Index (Most Important)

👉 Array index starts from 0

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango


🔹 Change Array Value
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange", "Mango"]


🔹 Array Length
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3

🔹 Important Array Methods (Basic)
1️⃣ push() → add at end
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1,2,3,4]

2️⃣ pop() → remove last
arr.pop();
console.log(arr); // [1,2,3]

3️⃣ unshift() → add at start
arr.unshift(0);
console.log(arr); // [0,1,2,3]

4️⃣ shift() → remove from start
arr.shift();
console.log(arr); // [1,2,3]

🔹 Loop with Array (Very Important)
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}