🟢 Day 6: Practice + Mini Test (JavaScript Basics)

You have already learned:

Variables (let, const)

Data Types (string, number, boolean)

Operators (+ - \* / % == ===)

Conditions (if / else – basic)

Now let’s practice like a test 🧠🔥

📝 PART 1: Practice Questions
Q1️⃣ Variables
let name = "Chand";
const age = 18;

// Can we change age? (Yes / No + Why)

==>> No because variable is declared with const, its value cannot be reassigned.


Q2️⃣ Data Types
let x = 10;  number 
let y = "10";  String 
let z = true;  Boolean

// Write the data type of x, y, z

Q3️⃣ Arithmetic Operator
let a = 9;
let b = 2;

console.log(a % b); // 1

Q4️⃣ Comparison
console.log(5 == "5"); // ?
console.log(5 === "5"); // ?

Q5️⃣ Even or Odd
let number = 12;

// Write code to check even or odd

🧪 PART 2: MINI TEST (No Help 👀)
Q6️⃣ Output Prediction
let score = 80;

if (score === 80) {
console.log("Excellent");
} else {
console.log("Try Again");
}

Q7️⃣ Fix the Bug ❌
const price = 100;
price = 120;

// What is the error and why?

Q8️⃣ Real Life Logic
let age = "18";

// Write a condition to allow user ONLY if age is number 18

Q9️⃣ Short Answer

👉 Why is === better than ==?

Q🔟 Bonus (Optional)
let a = 5;
let b = "5";

// Write code so output is true using ===

Logical Operators (&&, ||, !) + if/else (Deep Dive)

These operators help you combine conditions — very important for React Native apps.

1️⃣ AND Operator (&&)

👉 Both conditions must be true

Example:
let age = 18;
let hasID = true;

if (age === 18 && hasID === true) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

🧠 How it works:

true && true → ✅ true

true && false → ❌ false

2️⃣ OR Operator (||)

👉 At least one condition must be true

Example:
let isStudent = false;
let hasPass = true;

if (isStudent === true || hasPass === true) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Not Allowed");
}

🧠 How it works:

false || true → ✅ true

false || false → ❌ false

3️⃣ NOT Operator (!)

👉 Reverse the value

Example:
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please Login");
}

🧠 Meaning:

!true → false

!false → true

🔥 Combined Example (Real Life)
let age = 18;
let isLoggedIn = true;

if (age === 18 && isLoggedIn) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

📝 Exercise 1
let age = 20;
let hasLicense = true;

// Allow only if age >= 18 AND hasLicense is true

📝 Exercise 2
let isAdmin = false;
let isEditor = true;

// Allow access if user is Admin OR Editor

📝 Exercise 3
let isOnline = false;

// If user is NOT online, print "Offline"

📝 Exercise 4 (Mini Test)
let age = 17;
let hasID = true;

// Predict output
if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}