
//Taking user input
const n = parseInt(process.argv[2]);

if(n<0 || isNaN(n)){
    console.log("Invalid Input");
    process.exit();
}

console.log("Powers of 2 upto " + n + " are:");
for(let i=0; i<=n; i++){
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}