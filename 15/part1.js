const directions = 'v>^<';
let [
    map,
    moves,
] = require('fs').readFileSync(0, 'utf8').trim().split('\n\n');

const box = 'O';
const player = '@';
const wall = '#';
const empty = '.';

map = map.split('\n').map(x => x.split(''));
moves = moves.split('').filter(x => directions.includes(x));

function display() {
    console.log(map.map(x => x.join('')).join('\n'));
}

function act(x, y, dx, dy) {
    if (map[y + dy][x + dx] === wall) {
        return;
    }

    if (map[y + dy][x + dx] === box) {
        act(x + dx, y + dy, dx, dy);
    }

    if (map[y + dy][x + dx] === empty) {
        map[y + dy][x + dx] = map[y][x];
        map[y][x] = empty;
    }
}

while (moves.length) {
    const move = moves.shift();

    const y = map.findIndex(x => x.includes(player));
    const x = map[y].indexOf(player);

    const [dx, dy] = [
        move === '>' ? 1 : move === '<' ? -1 : 0,
        move === 'v' ? 1 : move === '^' ? -1 : 0,
    ];

    act(x, y, dx, dy);
}

display();
const output = map
    .reduce((acc, row, y) => acc + row.reduce((acc, cell, x) => acc + (cell === box ? y*100+x: 0), 0),0);

console.log(output);
