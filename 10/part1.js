i = require('fs').readFileSync(0, 'utf8')

const width = i.search`\n`+1;
const dirs = [-1, 1, -width, width];
const walk = (pos, height = 0) => {
    if (height === 9) {
        return [pos];
    }

    let output = [];

    for (const dir of dirs) {
        const newPos = pos + dir;

        if (i[newPos] == height + 1) {
            for(const z of walk(newPos, height + 1)) {
                if (!output.includes(z)) { // Comment this for part 2
                    output.push(z);
                }
            }
        }
    }

    return output;
}

let sum = 0;
for (let j = 0; j < i.length; j++) {
    if (i[j] === '0') {
        sum += walk(j).length;
    }
}

console.log(sum);
