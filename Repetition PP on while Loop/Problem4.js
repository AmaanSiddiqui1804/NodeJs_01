//4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made.

let money = 100, wins = 0, bets = 0;

while (money > 0 && money < 200) {
    bets++;
    if (Math.random() < 0.5) {
        money++; // Win: Increase money
        wins++;
    } else {
        money--; // Lose: Decrease money
    }
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets: ${bets}, Total Wins: ${wins}`);
if (money === 200) {
    console.log("Goal reached!");
} else {
    console.log("Broke!");
}

