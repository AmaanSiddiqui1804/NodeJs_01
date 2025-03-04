//Read a single digit number and write the number in word

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a single digit number (0-9)', (input) => {
    if (input == 0) {
        console.log("Zero");
    } else if (input == 1) {
        console.log("One");
    } else if (input == 2) {
        console.log("Two");
    } else if (input == 3) {
        console.log("Three");
    } else if (input == 4) {
        console.log("Four");
    } else if (input == 5) {
        console.log("Five");
    } else if (input == 6) {
        console.log("Six");
    } else if (input == 7) {
        console.log("Seven");
    } else if (input == 8) {
        console.log("Eight");
    } else if (input == 9) {
        console.log("Nine");
    } else {
        console.log("Invalid Input");
    }

    rl.close();
})