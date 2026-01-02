// let age = 18;
// age = 19;
// console.log(age);
// let name = "Chand"
// let age = 18;

// 1. var (old way)

// var city = "Delhi"
// city = "Haryana"
// city = "Mumbai"

// No Blocked Scope
// can Cause bugs
// Not Used in modern React/ reactnative

// if (true) {
//     var x = 10;
// }
// console.log(x);

// 2. let (Modern & Recommended)
// let score = 50;
// score = 100;
// console.log(score)
// let y;
// if (true) {
//      y = 20;
// }
// console.log(y)

// 3. const (Most Used in react Native)

// const country = "India"; //Declare the value//
// country = "USA"; 

// But Object & arrays can Change

// const user = { name: "Chand"};
// user.name = "Ansari";

// use Const by Default
// Use let when value will Change
// Never use var

//  Practice Exercise (Do This)
// Exercise 1

// let age = 17;
// // age= 20;
// // age= 25;
// // age= 30;
// if (age === 18){
//     console.log("I am Mature")
// }
// else{console.log('Not Mature')}
// console.log(age);

// Exercise 2
// let age = 17;
// if (age >= 18){
//     console.log("You Can Vote")
// }
// else{
//     console.log("You Can not Vote")
// }

// const appName = "Yoga App";
// console.log(appName);

// let appName = "Awesome";
// const appName2 = "Yoga App"
// console.log(appName  + appName2)
// let a;
// let b;

// Exercise 3 

// if (false){
//     var c = 2;
//      a = 10;
//      b = 20;
// }
// console.log(a);
// console.log(b);

// React Native

// const App = () => {
//     let count = 0;
//     const title = "My First App";
//     console.log(count)
// };

// Q1

// let x = 10;
// let y = 20;
// // x = 20;
// // x = 30;
// console.log(x);
// console.log(y);
// console.log(x + y)

// Q2
// const y = 5;
// console.log(y);
// output = 5

// Q3
// const z = 100;
// z = 200;
// console.log(z);
// // Output = Assignment to constant Variable

// // Q4
// if (true){
//     let a = 10;
// }
// console.log(a);
// // Output = a is not define

// if (true){
//     let a = 10;
//     console.log(a);
// }

// Q5