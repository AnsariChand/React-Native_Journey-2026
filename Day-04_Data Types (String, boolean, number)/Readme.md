📅 Day 4: Understanding Data Types in JavaScript

(String, Number, Boolean)

Since you’re learning from scratch and aiming for React Native, these 3 data types are most important. Let’s keep it simple + practical 👇

1️⃣ String (Text Data)

A string is used to store text.
It is always written inside quotes " " or ' '.

✅ Examples
let name = "Chand";
let city = 'Delhi';
let appName = "Yoga App";

❌ Wrong
let name = Chand; // ❌ no quotes

🔹 String Use Cases

User name

Email

Messages

App titles

🧠 Practice
let country = "India";
let greeting = "Good Morning";

2️⃣ Number (Numeric Data)

A number stores numbers, not text.

✅ Examples
let age = 18;
let price = 99;
let rating = 4.5;

❌ Wrong
let age = "18"; // ❌ this is a string, not number

🔹 Number Use Cases

Age

Price

Score

Count (likes, steps, calories)

🧠 Practice
let steps = 5000;
let balance = 1200.75;

3️⃣ Boolean (True / False)

A boolean has only two values:

true

false

✅ Examples
let isLoggedIn = true;
let isPaymentDone = false;

❌ Wrong
let isActive = "true"; // ❌ string, not boolean

🔹 Boolean Use Cases

Login status

Dark mode on/off

Button enabled/disabled

🧠 Practice
let isDarkMode = false;
let hasInternet = true;

🔄 Checking Data Type (Important)

Use typeof to check data type 👇

let name = "Chand";
console.log(typeof name); // string

let age = 18;
console.log(typeof age); // number

let isOnline = true;
console.log(typeof isOnline); // boolean

📝 Mini Practice Test (Try Yourself)
let title = "React Native App";
let users = 100;
let isPublished = true;


👉 Questions:

What is the data type of title?

What is the data type of users?

What is the data type of isPublished?

🎯 Why This Matters for React Native

In React Native:

Strings → Text on screen

Numbers → Calculations & styles

Booleans → Show / hide components

Example:

{isLoggedIn && <Text>Welcome User</Text>}