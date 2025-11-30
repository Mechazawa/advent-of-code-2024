const input = require('fs').readFileSync(0, 'utf-8');

function minimizeSum(O, X, Y) {
    let minSum = Infinity;
    let bestX = 0, bestY = 0;

    let x = 0;
    while (true) {
        if ((O - (x * X)) % Y === 0) {
            let y = (O - (x * X)) / Y;
            if (y >= 0) {
                let currentSum = x*3 + y;
                if (currentSum < minSum) {
                    minSum = currentSum;
                    bestX = x;
                    bestY = y;
                }
            }
        }

        if (O - (x * X) < 0) {
            break;
        }
        x++;
    }

    return minSum;
}



console.log([...input.matchAll(/^.+X\+(\d+),\s*Y\+(\d+)$\n^.+X\+(\d+),\s*Y\+(\d+)$\n.+X=(\d+),\s*Y=(\d+)/gm)].reduce((a, match) => {
    const [, X1, Y1, X2, Y2, XO, YO] = match.map(Number);

    console.log({X1, Y1, X2, Y2, XO, YO});

    const resultX = minimizeSum(XO, X1, X2);
    const resultY = minimizeSum(YO, Y1, Y2);

    if (resultY === Infinity || resultX === Infinity) {
        return a;
    }

    return a + Math.max(resultX, resultY);
}, 0))
