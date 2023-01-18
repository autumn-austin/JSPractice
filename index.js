// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// while(!gameOver){
//     //player 1 move
//     //player 2 move
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("Congrats you got the secret!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Okay you win...")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:")
//     }
//     else {
//         guess = prompt("Too low! Enter a new guess:")
//     }
// }

// if (guess === 'q') {
//     console.log('Leaving Game')
// }
// else {
//     console.log(`You got it! It took you ${attempts} guesses!`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of 'hello world') {
//     console.log(char)
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }

// // for (let person in testScores) {
// //     console.log(`${person} scored ${testScores[person]}`);
// // }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }

// console.log(total / scores.length)