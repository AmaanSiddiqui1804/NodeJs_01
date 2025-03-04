// Extend the program to take a range of number as input and output the Prime
// Numbers in that range.

const n = parseInt(process.argv[2]);
if(n<0 || isNaN(n)){
    console.log("Invalid Input");
    process.exit();
}

if(n==0 || n ==1 ){
    console.log(n + " is not a prime number");
    process.exit();
}

console.log("Prime Numbers upto " + n + " are:");
for(let i=2; i<=n; i++){
    let isPrime = true;
    for(let j=2; j<=Math.sqrt(i); j++){
        if(i%j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i + " is a Prime Number");
    }
}