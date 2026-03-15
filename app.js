const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tries = 0;

const secret = Math.floor(Math.random() * 20) + 1;

console.log('I am thinking of a number between 1 and 20.');

function askGuess() {
    r1.question('Enter your guess: ', function (input) {
        const guess = Number(input);
        tries = tries + 1;

        if (guess === secret) {
            console.log('Correct! You got it in ' + tries + '!');
            r1.close();
        } else if (guess > secret) {
            console.log('Lower! Try again!');
            askGuess();
        } else {
            console.log('Higher! Try again!');
            askGuess();
        }
    });
}

askGuess();
