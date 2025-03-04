//Write a program that computes a factorial of a number taken as input.

const n = parseInt(process.argv[2]);
if(n<0 || isNaN(n)){
    console.log("Invalid Input");
    process.exit();
}
let factorial = 1;
for(let i=1; i<=n; i++){
    factorial *=i;
}
console.log(`Factorial of ${n} is ${factorial}`); 