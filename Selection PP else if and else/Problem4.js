// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter three numbers: num1 num2 num3: ', (input) => {
    // Spliting the input string into an array of numbers
    let [a, b, c] = input.split(' ').map(Number); 
    
    let op1 = a + b * c; 
    let op2 = a % b + c;
    let op3 = c + a / b; 
    let op4 = a * b + c; 

    // Finding the maximum value
    let maxOp = Math.max(op1, op2, op3, op4);
    let minOp = Math.min(op1, op2, op3, op4);
    
    //Console output maximum operation result
    if (maxOp === op1) {
        console.log("Maximum: a + b * c = " + op1);
    } else if (maxOp === op2) {
        console.log("Maximum: a % b + c = " + op2);
    } else if (maxOp === op3) {
        console.log("Maximum: c + a / b = " + op3);
    } else if (maxOp === op4) {
        console.log("Maximum: a * b + c = " + op4);
    }

    // Console output minimum operation result
    if (minOp === op1) {
        console.log("Minimum: a + b * c = " + op1);
    } else if (minOp === op2) {
        console.log("Minimum: a % b + c = " + op2);
    } else if (minOp === op3) {
        console.log("Minimum: c + a / b = " + op3);
    } else if (minOp === op4) {
        console.log("Minimum: a * b + c = " + op4);
    }
    
    rl.close();
});
