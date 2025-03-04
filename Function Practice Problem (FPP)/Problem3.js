//3. Take a number from user and check if the number is a Prime then show
// that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking for user input
rl.question("Enter a number: ", (input) => {
    let number = parseInt(input);

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
        let palindrome = getPalindrome(number);
        console.log(`Palindrome of ${number} is ${palindrome}.`);
        if (isPrime(palindrome)) {
            console.log(`${palindrome} is also a prime number.`);
        } else {
            console.log(`${palindrome} is NOT a prime number.`);
        }
    } else {
        console.log(`${number} is NOT a prime number.`);
    }

    rl.close(); 
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}