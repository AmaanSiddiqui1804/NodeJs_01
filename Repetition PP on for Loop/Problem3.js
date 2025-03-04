//Write a program that takes a input and determines if the number is a prime.

const num = parseInt(process.argv[2]);
if(num<0 || isNaN(num)){
    console.log("Invalid Input");
    process.exit();
}

if(num==0 || num ==1 ){
    console.log(num + " is not a prime number");
    process.exit();
}

console.log("Prime Numbers upto " + num + " are:");
let isPrime = true;
for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num + " is a Prime Number");
}
else{
    console.log(num + " is not a Prime Number");
}
