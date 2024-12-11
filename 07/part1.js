i = require('fs').readFileSync(0, 'utf8')

console.log(i.split`\n`.reduce((a, l, I) => {
    const [target, ...parts] = l.split(/:? /).map(Number)

    process.stdout.write("[ ] " + (I + 1) + '/' + i.length + '\t' + l)

    for (let i = 0; i < 2 ** parts.length; i++) {
        for (let j = 0; j < i; j++) {
            const sum = parts.reduce((a, p, k) => j & (1 << k) ? a + p : a * p);
            if (sum === target) {
                process.stdout.write("\r[√\n")
                return a + sum;
            }
        }
    }

    process.stdout.write("\r[X\n")
    return a;
}, 0))
