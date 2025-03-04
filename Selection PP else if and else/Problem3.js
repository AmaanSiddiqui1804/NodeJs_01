//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter any number(1, 10, 100, 1000...): ', (num) => {
    num = parseInt(num);
    if (num == 1) {
        console.log("Unit");
    } else if (num == 10) {
        console.log("Ten");
    } else if (num == 100) {
        console.log("Hundred");
    } else if (num == 1000) {
        console.log("Thousand");
    } else if (num == 10000) {
        console.log("Ten Thousand");
    } else if (num == 100000) {
        console.log("Lakh");
    } else if (num == 1000000) {
        console.log("Ten Lakh");
    } else if (num == 10000000) {
        console.log("Crore");
    } else if (num == 100000000) {
        console.log("Ten Crore");
    } else {
        console.log("Invalid Number");
    }
    rl.close();
});