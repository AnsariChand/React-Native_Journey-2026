🔹 WEEK 2 (Logic)
Day 8 – Understanding if / else
🧠 What is if / else?

if / else is used to make decisions in JavaScript.

👉 Example in real life:

If you have money → buy food

Else → don’t buy food

🔹 Basic Syntax
if (condition) {
  // code runs if condition is true
} else {
  // code runs if condition is false
}   


🔹 Example 1: Simple Condition
let age = 20;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}


✔ If age is 18 or more → You can vote
❌ Otherwise → You cannot vote

🔹 Example 2: Login Check
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please login");
}

🔹 Example 3: Number Check
let number = 5;

if (number > 0) {
  console.log("Positive number");
} else {
  console.log("Negative number or zero");
}

🔹 if / else if / else

Used when multiple conditions exist.

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}


📝 PRACTICE EXERCISES (VERY IMPORTANT)
✅ Exercise 1
let age = 16;


👉 Print "Adult" if age ≥ 18, else "Not Adult"

✅ Exercise 2
let number = -10;


👉 Check if number is Positive or Negative

✅ Exercise 3
let password = "1234";


👉 If password is "1234" print "Access Granted"
Else print "Access Denied"

✅ Exercise 4
let isRaining = false;


👉 If true → print "Take umbrella"
Else → print "No umbrella needed"

✅ Exercise 5 (Logic Builder 💪)
let time = 22;


👉

If time < 12 → "Good Morning"

If time < 18 → "Good Evening"

Else → "Good Night"

🔥 Why if / else is VERY IMPORTANT for React Native?

You will use it for:

Login / Logout

Showing buttons

Form validation

API responses

App navigation logic