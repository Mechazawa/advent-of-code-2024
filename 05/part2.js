const tap = (x, fn) => {
    fn(x);
    return x;
}

i = require('fs').readFileSync(0, 'utf8').split`\n\n`
r = i[0].replaceAll(/(..)\|(..)/g, '$2.+$1').replace(/\n/g, '|')
P = A => A.reduce((a, v, i) => a.concat(P([...A.slice(0, i), ...A.slice(i + 1)]).map(val => [v, ...val])), []);
console.log(eval(i[1].split`\n`.filter(x => x.match(r)).map(x => {
    z = tap(x, console.log).split`,`;
    tap(P(z).filter(p => !p.join(',').match(r))[0], F => console.log('S', F.join(',')))[Math.floor(z.length / 2)] || 0
}).join`+`))
