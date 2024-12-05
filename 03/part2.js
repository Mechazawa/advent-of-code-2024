console.log([...require('fs').readFileSync(0,'utf8').matchAll(/(?<=(^|do\(\))(.(?!don't\(\)))*)mul\((\d+),(\d+)\)/gs)].reduce((a,[,,,b,c])=>a+b*c,0))
