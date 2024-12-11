i = require('fs').readFileSync(0, 'utf8')

console.log(i.split`\n`.reduce((a, l, I) => {
    const [target, ...parts] = l.split(/:? /).map(Number)

    process.stdout.write("[ ] " + (I + 1) + '\t' + l)

    for (let i = 0; i < 4 ** parts.length; i++) {
        const sum = parts.reduce((a, p, k) => i & 1 << k * 2 ? a + p : i & 1 << k * 2 + 1 ? a * p : +('' + a + p), 0);
        if (sum === target) {
            process.stdout.write("\r[√\n")
            return a + sum;
        }
    }

    process.stdout.write("\r[X\n")
    return a;
}, 0))
