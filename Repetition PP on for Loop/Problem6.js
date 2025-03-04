// Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

const n = parseInt(process.argv[2]);
let num = n;
if(num<0 || isNaN(num)){
    console.log("Invalid Input");
    process.exit();
}
console.log(`Prime Factors of ${num} are:`);
const factors = [];

if(num%2 ==0){
    factors.push(2);
    while (num % 2 == 0) {
        num = Math.floor(num / 2);
    }
}
for(let i=3; i*i<=num; i+=2){
    if(num%i ==0) {
        factors.push(i);

        while(num%i == 0){
            num = Math.floor(num/i);
        }
    }
}
if(num>2){
    factors.push(num);
}
console.log(factors.join(", ")); 