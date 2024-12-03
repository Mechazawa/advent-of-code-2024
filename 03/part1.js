i=require('fs').readFileSync('input.txt','utf8');

o=[...i.matchAll(/mul\((\d+),(\d+)\)/g)].reduce((a, [,b,c])=>a+b*c,0)

console.log(o)
