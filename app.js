const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tries = 0;
let guess = 0;

const secret = Math.floor(Math.random() * 20) + 1;
