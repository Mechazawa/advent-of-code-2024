const iterations = 2000;
const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(x => x)
    .map(BigInt)

const price = secret => Number(secret % 10n);
const prune = value => value % 16777216n;
const mix = (secret, value) => value ^ secret

function next(secret) {
    secret = prune(mix(secret, secret * 64n));
    secret = prune(mix(secret, secret / 32n));
    secret = prune(mix(secret, secret * 2048n));

    return secret;
}

const buckets = new Map();

function insert(sequence, value, secret) {
    const key = sequence.join(',')

    if (!buckets.has(key)) {
        buckets.set(key, new Map)
    }

    const bucket = buckets.get(key);

    if (!bucket.has(secret)) {
        bucket.set(secret, value);
    }
}


function permute(secret) {
    const original = secret;
    const sequence = [];
    let prev = price(secret);

    for (let i = 0; i < iterations; i++) {
        secret = next(secret)
        const curr = price(secret)

        sequence.push(curr - prev);

        if (sequence.length === 5) {
            sequence.shift();
            insert(sequence, curr, original);
        }

        prev = curr;
    }
}

for (const row of input) {
    permute(row)
}

const sorted = Array.from(buckets.entries())
    .map(([key, bucket]) => ([
        key,
        Array.from(bucket.values()).reduce((o, c) => o + c),
    ]))
    .sort((a, b) => b[1] - a[1]);

console.log("Top 10 sequences")
const top10 = [];

for (let i = 0; i < 10; i++) {
    const [sequence, value] = sorted[i];
    top10.push({sequence, value});
}

console.table(top10)