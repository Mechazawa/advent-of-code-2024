i=require('fs').readFileSync(0,'utf8').trim();

const cache = {};

function cached(fn) {
    return (e, r) => {
        const key = `${e},${r}`;

        if (cache[key]) {
            return cache[key];
        } else {
            return cache[key] = fn(e, r);
        }
    }
}


const blink = cached((engraving, remaining) => {
    if (remaining === 0) {
        return 1;
    }

    const str = String(engraving)

    if (engraving === 0) {
        return blink(1, remaining - 1)
    } else if (str.length % 2 === 0) {
        const left = str.slice(0, str.length / 2)
        const right = str.slice(str.length / 2)

        return blink(Number(left), remaining - 1) + blink(Number(right), remaining - 1)
    } else {
        return blink(engraving * 2024, remaining - 1)
    }
})

console.log('part 1', i.split(' ').reduce((a, v) => a + blink(Number(v), 25), 0));
console.log('part 2', i.split(' ').reduce((a, v) => a + blink(Number(v), 75), 0));
