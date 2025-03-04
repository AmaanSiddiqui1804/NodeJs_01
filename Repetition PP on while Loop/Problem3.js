//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.floor(Math.random() * 2); // Generates either 0 or 1
    if(flip === 1) heads++;
    else tails++;
    
    console.log(`Flip: ${flip === 1 ? "Heads" : "Tails"} | Heads: ${heads}, Tails: ${tails}`);
}
if (heads === 11) 
    console.log("\nHeads won 11 times!");

else 
    console.log("\nTails won 11 times!");