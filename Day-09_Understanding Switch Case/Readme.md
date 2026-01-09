Day 9 – JavaScript switch case (Beginner Friendly) 🚀

You’re doing great, Chand 👍
After if / else, switch case is the next logic tool you must learn.

🔹 What is switch case?

switch is used when you compare ONE value with MANY possible options.

👉 Instead of writing many if / else if, we use switch.

🔹 Basic Syntax
switch (value) {
  case option1:
    // code
    break;

  case option2:
    // code
    break;

  default:
    // code
}

🔑 Important Rules

switch checks value
case checks possible matches
break stops execution
default runs if no case matches

🔹 Simple Example (Very Easy)
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

🔹 Why break is IMPORTANT ❌
Without break
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple");
  case "banana":
    console.log("Banana");
}

🛑 Output:

Apple
Banana


👉 Because no break, it keeps running next cases.


🔹 Correct Way ✅
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;

  case "banana":
    console.log("Banana");
    break;

  default:
    console.log("No fruit");
}

🔹 When to use switch vs if else
Situation	Use
Many conditions on same value	switch
Different conditions (> < &&)	if else


🧠 PRACTICE EXERCISES (Very Important)
📝 Exercise 1 (Easy)
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  case "yellow":
    console.log("Wait");
    break;

  default:
    console.log("Invalid color");
}