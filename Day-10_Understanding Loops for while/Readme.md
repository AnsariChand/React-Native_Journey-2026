Day 10 – Understanding Loops (for, while) 🔁

(Beginner-friendly | Zero coding background assumed)



Symbol
Words
Example Use
=
equals
1 + 1 = 2
≠
not equal to
1 + 1 ≠ 3



>
greater than
5 > 2
<
less than
7 < 9



≥
greater than or equal to
marbles ≥ 1
≤
less than or equal to
dogs ≤ 3


🔹 What is a Loop?

Loop ka matlab hota hai ek kaam ko baar-baar repeat karna, jab tak condition true ho.

Real life example:
👉 Alarm tab tak bajta rahega jab tak aap usse band nahi kar dete
👉 Attendance list me har student ka naam check karna

Programming me loop use hota hai jab:

Repeated kaam ho

Same logic multiple times chahiye

Time & code bachana ho

🔸 1. for Loop

Jab pehle se pata ho kitni baar loop chalana hai

Syntax (simple samjho):
for (start; condition; increment) {
    // code jo repeat hoga
}

Example 1: 1 se 5 tak print karo
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

🧠 Samjho:

let i = 1 → shuruaat

i <= 5 → jab tak true

i++ → har baar 1 badhao

📝 Practice – for loop
Exercise 1

👉 1 se 10 tak numbers print karo

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

Exercise 2

👉 2 ka table print karo (2, 4, 6, 8, 10)

for (let i = 1; i <= 5; i++) {
    console.log(2 * i);
}

Exercise 3

👉 10 se 1 tak reverse print karo

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

🔸 2. while Loop

Jab pehle exact count na pata ho, sirf condition pata ho

Syntax:
while (condition) {
    // code
}

Example 1: 1 se 5 tak print
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

⚠️ Important:
i++ bhool gaye → infinite loop (kabhi band nahi hoga)

📝 Practice – while loop
Exercise 4

👉 1 se 10 tak print karo

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

Exercise 5

👉 Sirf even numbers (2, 4, 6, 8, 10)

let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}


🔁 for vs while (Easy Comparison)
for loop	while loop
Count pehle se pata	Count clear nahi
Short & clean	Condition based
Mostly used	Special cases
🎯 Mini Test (Try Yourself)

❓ Q1: 5 se 15 tak odd numbers print karo
❓ Q2: "Hello" 5 baar print karo
❓ Q3: while loop se 10 se 1 tak print karo