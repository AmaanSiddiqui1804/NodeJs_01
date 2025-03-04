//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

const HEADS = 0;
let toss = Math.floor(Math.random() * 2); //if 0 then heads, if 1 then tails
if(toss === HEADS){
    console.log("Heads");
}
else{
    console.log("Tails");
}