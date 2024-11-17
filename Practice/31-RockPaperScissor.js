// Let's play Rock Paper Scissors! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    }

    if (
        (p1 === "rock" && p2 === "scissor") ||
        (p1 === "scissor" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};

console.log(rps("paper", "paper")); // Output: Draw!
console.log(rps("rock", "scissor")); // Output: Player 1 won!
console.log(rps("scissor", "rock")); // Output: Player 2 won!
console.log(rps("paper", "rock")); // Output: Player 1 won!
console.log(rps("rock", "paper")); // Output: Player 2 won!