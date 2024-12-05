g=require('fs').readFileSync(0,'utf8').split`\n`
console.log(eval(g.flatMap((l,x)=>[...l].map((c,y)=>c<'B'&[1,-1].every(X=>/MS|SM/.test(g[x+X]?.[y+1]+g[x-X]?.[y-1])))).join`+`))
