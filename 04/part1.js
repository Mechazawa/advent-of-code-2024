f=[1,0,-1]
g=require('fs').readFileSync(0,'utf8').split`\n`
console.log(eval(g.flatMap((l,x)=>([...l].flatMap((_,y)=>f.flatMap(X=>f.flatMap(Y=>+[...'XMAS'].every((c,i)=>c==g[x+X*i]?.[y+Y*i])))))).join`+`));

