🟢 Day 5: Understanding Operators in JavaScript

1️⃣ Arithmetic Operators

Used to calculate values

Operator Meaning Example

- Add 5 + 2 = 7

* Subtract 5 - 2 = 3

- Multiply 5 \* 2 = 10
  / Divide 10 / 2 = 5
  % Remainder 5 % 2 = 1

✅ Examples
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a \* b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

📌 % is very useful to check even / odd numbers

let num = 4;
console.log(num % 2); // 0 → Even

2️⃣ Comparison Operators

Used to compare values → result is always true / false

Operator Meaning
== Equal (value only)
=== Equal (value + type)

🔹 == (Loose Comparison)
5 == "5" // true

👉 JavaScript converts type automatically

🔹 === (Strict Comparison) ⭐ (IMPORTANT)
5 === "5" // false
👉 Checks value + data type

📌 Best Practice:
Always use === in real projects & React Native apps.

3️⃣ Quick Type Example
let x = 5;
let y = "5";

console.log(x == y); // true
console.log(x === y); // false

🧠 EXERCISES (VERY IMPORTANT)
📝 Exercise 1: Arithmetic
let a = 8;
let b = 4;

// Try these:
console.log(a + b);
console.log(a - b);
console.log(a \* b);
console.log(a / b);
console.log(a % b);

📝 Exercise 2: Even or Odd
let number = 7;

// Write code to check even or odd using %
