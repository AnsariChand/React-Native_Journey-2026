🔹 What is an Arrow Function?

Arrow function JavaScript ka short & modern way hai function likhne ka.
Ye ES6 (2015) me introduce hua tha.

👉 Normal Function

function add(a, b) {
  return a + b;
}


👉 Arrow Function

const add = (a, b) => {
  return a + b;
};


👉 Super Short Version

const add = (a, b) => a + b;

🔹 Why Use Arrow Functions?

✅ Code short & clean
✅ Easy to read
✅ React / React Native me bahut zyada use hota hai
✅ this ka behavior simple hota hai

🔹 Basic Syntax
const functionName = (parameters) => {
  // code
};

🔹 Examples (Step-by-Step)
1️⃣ No Parameter
const sayHello = () => {
  console.log("Hello JavaScript");
};

sayHello();