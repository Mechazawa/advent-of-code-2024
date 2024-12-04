i = require('fs').readFileSync('input.txt', 'utf8');

console.log(
    g=i.split`\n`,eval(g.flatMap((l,x)=>[...l].map((c,y)=>c=='A'&[1,-1].every(X=>/MS|SM/.test(g[x+X]?.[y+1]+g[x-X]?.[y-1])))).join`+`)
)
