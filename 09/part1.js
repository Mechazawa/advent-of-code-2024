i = require('fs').readFileSync(0, 'utf8')

const disk = [];
let id = 0;

for (const [_, a, b=0] of i.matchAll(/(\d)(\d?)/g)) {
    for (let i = 0; i < a; i++) {
        disk.push(id);
    }
    for (let i = 0; i < b; i++) {
        disk.push(null);
    }
    id++;
}

while(disk.includes(null)) {
    disk[disk.indexOf(null)] = disk.pop();
}

console.log(disk.reduce((a, c, i) => a + c*i, 0));
