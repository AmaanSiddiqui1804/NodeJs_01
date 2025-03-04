//Read a Number and Display the week day (Sunday, Monday,...)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number to get its day (1-7)', (num) => {
    switch (num) {
        case '1':
            console.log("Monday");
            break;
        case '2':
            console.log("Tuesday");
            break;
        case '3':
            console.log("Wednesday");
            break;
        case '4':
            console.log("Thrursday");
            break;
        case '5':
            console.log("Friday");
            break;
        case '6':
            console.log("Saturday");
            break;
        case '7':
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Input");
    }
    rl.close();
});