//2. Write a function to check if the two numbers are Palindromes

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Taking user input
rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome.`);
        console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome.`);
        rl.close(); // Close the input stream
    });
});

// Function to check if a number is a palindrome
function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}
