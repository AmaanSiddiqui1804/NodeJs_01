// Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter day: ', (day) => {
    rl.question('Enter month: ', (month) => {
        if((month.toLowerCase() === "march" && day >= 20) || 
            (month.toLowerCase() === "april") || 
            (month.toLowerCase() === "may") || 
            (month.toLowerCase() === "june" && day <= 20)){

            console.log("True");
        }
        else{
            console.log("False");
        }
        rl.close();
    });
});
