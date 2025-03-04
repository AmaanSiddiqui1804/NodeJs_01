// Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
// then find their sum and the average

let numbers = [];
for(let i = 0; i < 5; i++){
    numbers.push(Math.floor(Math.random() * 90) + 10);
}

//calculating sum
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

//Calculating average
let average = sum/numbers.length;

console.log("Random 2 digit numbers: " + numbers);
console.log("Sum: " + sum);
console.log("Average: " + average);