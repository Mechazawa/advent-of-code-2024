i=require('fs').readFileSync('input.txt','utf8');

o=[...i.matchAll(/(?<=(^|do\(\))(.(?!don't\(\)))*)mul\((\d+),(\d+)\)/gs)].reduce((a, [,,,b,c])=>a+b*c,0)

console.log(o)