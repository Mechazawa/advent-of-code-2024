i = require('fs').readFileSync(0, 'utf8');

I = i.split`\n`
X = I[0].length
Y = I.length
M = []
H = '#'
E = 'E'
T = 101 // sub1
// Make map
I.map(((a, y) => a.split``.map((_, x) => M[+y * X + x] = a[x] == H ? H : a[x] == 'S' ? 0 : null)))
// floodfill
for (v = 0; v < X * Y; v++) for (V = 0; V < X * Y; V++) if (M[V] == v) [X, -X, -1, 1].map(x => M[x + V] ??= v + 1);
// find shortcuts
console.log(
    [...M].filter((d, i) =>
        d != H &&
        (i % X < X - 1) &&
        i + X < X * Y &&
        // [X * 2, 2, X + 1].flatMap(o => [X, -X, 1, -1].map(O => Math.abs(M[o + O + i] - d))).some(t=>t < T)
        [i%X<X-1&&X*2+1,X*2-1,X*3,i%X<X-2&&X+2,2-X,i%X<X-3&&3].filter(x=>x&&M[x+i]>=0).map(O => Math.abs(M[O + i] - d)+2).some(t=>t < T)
    ).length
);

// debug
function p() {
    o = ''
    for (i = 0; i < X * Y; i++) {
        if (i % X == 0) o += '\n|';
        if (M[i] == H) o += '####|';
        else o += ("" + (M[i] ?? ' ')).padStart(4) + '|'
    }
    console.log(o);
}
