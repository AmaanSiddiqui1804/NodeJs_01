// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter year: ', (year) => {
    if(year.length === 4){
        if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
            console.log("Leap Year");
        }
        else{
            console.log("Not a Leap Year");
        }
    }
    else{
        console.log("Invalid year");
    }
    rl.close();
});
    