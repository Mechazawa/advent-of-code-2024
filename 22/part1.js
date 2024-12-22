const iterations = 2000;

const repeat = (fn, input, times) => {
    let output = fn(input);

    while(--times) {
        output = fn(output)
    }

    return output;
}

const prune = value => value % 16777216n;
const mix = (secret, value) => value ^ secret

function next(secret) {
    secret = prune(mix(secret, secret * 64n));
    secret = prune(mix(secret, secret / 32n));
    secret = prune(mix(secret, secret * 2048n));

    return secret;
}


const output = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')
    .map(BigInt)
    .map(value => repeat(next, value, iterations))
    .reduce((a, c) => a + c);

console.log(Number(output))