i = require('fs').readFileSync('input.txt', 'utf8');

console.log(
    f=[1,0,-1],g=i.split("\n"),g.map((l,x)=>([...l].map((_,y)=>f.map(X=>f.map(Y=>[...'XMAS'].reduce((o,c,i)=>o&c==g[x+X*i]?.[y+Y*i],1)))))).flat(9).reduce((o,x)=>x+o,0)
);

