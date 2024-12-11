i = require('fs').readFileSync(0, 'utf8')

let disk = [];
let id = 0;

for (const [_, a, b=0] of i.matchAll(/(\d)(\d?)/g)) {
    disk.push([a,b,id++].map(Number));
}


for (let i = disk.length - 1; i > 0; i--) {
    if (disk[i][0] === 0) {
        continue;
    }

    let idx = disk.slice(0, i-1).findIndex(v => v[1] >= disk[i][0])

    if (idx < 0) {
        continue;
    }

    const newEntry = [disk[i][0], disk[idx][1] - disk[i][0], disk[i][2]]

    disk[idx][1] = 0
    disk[i-1][1] += disk[i][0] + disk[i][1]

    disk[i] = [0,0,0]

    disk = [...disk.slice(0, idx+1), newEntry, ...disk.slice(idx+1)]
}


let pos = 0;
console.log(6287317016845);
console.log(disk.reduce((a, c) => {
    for (let i = 0; i < c[0]; i++) {
        a += pos * c[2];
        pos++;
    }

    pos += c[1];

    return a;
}, 0));
