const width = 101
const height = 103
const steps = 100

const input = require('fs').readFileSync(0, 'utf-8').trim();
const output = Array
    .from(input.matchAll(/p=(-?\d+),(-?\d+).+?(-?\d+),(-?\d+)/g))
    .map(match => match.map(Number))
    .map(([, px, py, vx, vy]) => {
        px = (width * steps + px + vx * steps) % width;
        py = (height * steps + py + vy * steps) % height;

        const h2 = (height - 1) / 2;
        const w2 = (width - 1) / 2;

        if (px < w2 && py < h2) return 0;
        if (px > w2 && py < h2) return 1;
        if (px < w2 && py > h2) return 2;
        if (px > w2 && py > h2) return 3;
    })
    .reduce((a, b) => (a[b]++, a), [0, 0, 0, 0])
    .reduce((a, b) => a * b)

console.log(output)

