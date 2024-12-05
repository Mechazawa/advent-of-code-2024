console.log(
    [...require('fs').readFileSync(0,'utf8').matchAll(/mul\((\d+),(\d+)\)/g)].reduce((o,[,a,b])=>o+a*b,0)
)
