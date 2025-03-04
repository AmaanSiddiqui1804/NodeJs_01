// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMagicNumber() {
  let low = 1, high = 100;

  console.log("Think of a number between 1 to 100.");

  function askQuestion() {
    if (low > high) {
      console.log("Something went wrong!");
      rl.close();
      return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log(`Your magic number is ${mid}!`);
        rl.close();
      } else {
        rl.question(`Is your number greater than ${mid}? (yes/no): `, (greater) => {
          if (greater.toLowerCase() === "yes") {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
          askQuestion();
        });
      }
    });
  }

  askQuestion();
}

findMagicNumber();
