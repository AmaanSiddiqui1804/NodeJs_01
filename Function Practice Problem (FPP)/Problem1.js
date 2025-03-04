// 1. Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9


const args = process.argv.slice(2); // to skip first two default arguments

if (args.length !== 2) {
    console.log("Usage: node script.js <choice> <temperature>");
    console.log("Choice: 1 for °C to °F, 2 for °F to °C");
    process.exit(1);
}

let choice = parseInt(args[0]);
let temp = parseFloat(args[1]);

switch (choice) {
    case 1: // Celsius to Fahrenheit
        if (temp >= 0 && temp <= 100) {
            console.log(`${temp}°C = ${(temp * 9 / 5 + 32).toFixed(2)}°F`);
        } else {
            console.log("Temperature out of range! (Valid: 0°C - 100°C)");
        }
        break;
    case 2: // Fahrenheit to Celsius
        if (temp >= 32 && temp <= 212) {
            console.log(`${temp}°F = ${((temp - 32) * 5 / 9).toFixed(2)}°C`);
        } else {
            console.log("Temperature out of range! (Valid: 32°F - 212°F)");
        }
        break;
    default:
        console.log("Invalid choice! Enter 1 for °C to °F or 2 for °F to °C.");
}
// Run this script with:
// node Problem1.js 1 32