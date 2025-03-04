// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 
// 2. Feet to Meter
// 3. Inch to Feet
// 4. Meter to Feet

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value to convert: ', (num) => {
    console.log("1. Feet to Inch");
    console.log("2. Feet to Meter");
    console.log("3. Inch to Feet");
    console.log("4. Meter to Feet");
    rl.question('Enter your choice: ', (choice) => {
        num = parseInt(num);
        switch (choice) {
            case '1':
                console.log("Feet to Inch: " + num * 12);
                break;
            case '2':
                console.log("Feet to Meter: " + num * 0.3048);
                break;
            case '3':
                console.log("Inch to Feet: " + num / 12);
                break;
            case '4':
                console.log("Meter to Feet: " + num / 0.3048);
                break;
            default:
                console.log("Invalid Choice");
        }
        rl.close();
    });
});