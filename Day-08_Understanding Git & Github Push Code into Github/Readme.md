🗓️ Day 08 – Understanding Git & GitHub
🚀 Push your first code to GitHub (Beginner Friendly)

🔹 What is Git?

Git ek version control system hai jo aapke code ka record rakhta hai.

🔑 Simple words:

Code me kya change hua

Kab change hua

Kisne change kiya

👉 Socho jaise time machine for code ⏳

🔹 What is GitHub?

GitHub ek online platform hai jahan:

Aap apna code store karte ho

Dusro ke sath share karte ho

Companies yahi se developers hire karti hain

👉 Git = tool
👉 GitHub = online home for your code 🏠

🔁 Git vs GitHub (Easy Table)
Git	GitHub
Local (computer me)	Online (internet par)
Code history rakhta hai	Code host karta hai
Offline kaam karta hai	Account required

🛠️ Step-by-Step: First Code Push to GitHub
✅ Step 1: Git Install Check

Terminal / CMD open karo:

git --version


Agar version aa jaye → Git installed ✅

✅ Step 2: New Folder Banao
mkdir my-first-git-project
cd my-first-git-project

✅ Step 3: Git Initialize Karo
git init


📌 Isse folder Git project ban jata hai

✅ Step 4: Ek File Banao
index.js


index.js ke andar likho:
console.log("Hello GitHub 🚀");

✅ Step 5: File ko Git me Add Karo
git add .

✅ Step 6: Commit Karo
git commit -m "First commit"
👉 Commit = snapshot of your code 📸

✅ Step 7: GitHub par Repository Banao

GitHub login karo

New Repository click karo

Name: my-first-git-project

Public select karo

Create repository

✅ Step 8: Local Code ko GitHub se Connect Karo
git branch -M main
git remote add origin https://github.com/USERNAME/my-first-git-project.git


⚠️ USERNAME ko apne GitHub username se replace karo

✅ Step 9: Code Push Karo 🚀
git push -u origin main


🎉 Congratulations!
Aapka first code GitHub par live ho gaya 🔥

🧠 Important Git Commands (Yaad Rakho)
Command	Use
git init	Git start
git status	File status
git add .	File add
git commit -m	Save snapshot
git push	Upload to GitHub
