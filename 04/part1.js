i = require('fs').readFileSync('input.txt', 'utf8');

console.log(
    f=[1,0,-1],g=i.split`\n`,eval(g.map((l,x)=>([...l].map((_,y)=>f.map(X=>f.map(Y=>+[...'XMAS'].every((c,i)=>c==g[x+X*i]?.[y+Y*i])))))).flat(9).join`+`)
);

