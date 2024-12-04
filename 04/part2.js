i = require('fs').readFileSync('input.txt', 'utf8');

console.log(
    g=i.split('\n'),S=(x,y,X,Y)=>g[x+X]?.[y+Y]=='M'&g[x-X]?.[y-Y]=='S',g.flatMap((l,x)=>[...l].map((c,y)=>c=='A'&[1,-1].every(((X)=>S(x,y,X,1)|S(x,y,-X,-1))))).reduce((a,v)=>a+v,0)
)
