//Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is
// reached. 

const n = parseInt(process.argv[2]);
let num = n;
if(num<0 || isNaN(num)){
    console.log("Invalid Input");
    process.exit();
}
console.log(`Powers of 2 less than or equal to 2^${num} are:`);
let i=0;
let power = 1;
while(power<=256){
    console.log(`2^${i} = ${power}`);
    power = power * 2;
    i++;
}
