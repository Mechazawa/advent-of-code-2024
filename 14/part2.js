const width = 101
const height = 103
const tree = [
    "###############################",
    "#.............................#",
    "#.............................#",
    "#.............................#",
    "#.............................#",
    "#..............#..............#",
    "#.............###.............#",
    "#............#####............#",
    "#...........#######...........#",
    "#..........#########..........#",
    "#............#####............#",
    "#...........#######...........#",
    "#..........#########..........#",
    "#.........###########.........#",
    "#........#############........#",
    "#..........#########..........#",
    "#.........###########.........#",
    "#........#############........#",
    "#.......###############.......#",
    "#......#################......#",
    "#........#############........#",
    "#.......###############.......#",
    "#......#################......#",
    "#.....###################.....#",
    "#....#####################....#",
    "#.............###.............#",
    "#.............###.............#",
    "#.............###.............#",
    "#.............................#",
    "#.............................#",
    "#.............................#",
    "#.............................#",
    "###############################",
].map(row => row.split('').map(x => x === '.'));

const input = Array
    .from(require('fs')
        .readFileSync(0, 'utf-8')
        .trim()
        .matchAll(/p=(-?\d+),(-?\d+).+?(-?\d+),(-?\d+)/g))
    .map(match => match.map(Number))
    .map(([, px, py, vx, vy]) => {px, py, vx, vy});

function test(steps) {
    const treeCopy = tree.map(row => row.slice());

    input.map(({px, py, vx, vy}) => {
        px = (width * steps + px + vx * steps) % width;
        py = (height * steps + py + vy * steps) % height;
    });
}

console.log(output)
