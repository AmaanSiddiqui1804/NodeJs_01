// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

let numbers = [];
for(let i = 0; i < 5; i++){
    numbers.push(Math.floor(Math.random() * 1000) + 100);
}
console.log("Random 3 digit numbers: " + numbers);

let min = numbers[0];
let max = numbers[numbers.length - 1];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < min){
        min = numbers[i];
    }
    if(numbers[i] > max){
        max = numbers[i];
    }
}

console.log("Minimum number: " + min + "\nMaximum number: " + max);