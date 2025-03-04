// Write a program that takes a command-line argument n and prints the nth harmonic number. 
// Harmonic Number is of the form 1/1 + 1/2 + 1/3 + 1/4 + ... + 1/n. 

//Taking user input
const n = parseInt(process.argv[2]);
if(n<0 || isNaN(n)){
    console.log("Invalid Input");
    process.exit();
}

let harmonicNumber = 0;
console.log("Harmonic Number upto " + n + " are:");

for(let i=1; i<=n; i++){
     harmonicNumber = (harmonicNumber + 1/i);
}
//Output
console.log(`${n}th Harmonic number = ${harmonicNumber}`);
