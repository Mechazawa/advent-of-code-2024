i=require('fs').readFileSync(0,'utf8')
d='^>v<'
l=i.indexOf`\n`+1
m=[-l,1,l,-1]
f='%'
F='#'
r=g=>{
    _S=_P=-1
    while(1) {
        p = [0,1,2,3].find(x=>g.includes(d[x]))
        L = g.indexOf(d[p])
        z = g[m[p] + L]
        if(z=='.') {
            _S=L
            _P=p
        }
        if(p==_P&&_S==L&&z==f) return 1
        if (z==F) { // turn
            g[L] = d[(1 + p) % 4]
        } else if (!z || z == '\n') { // exit
            return 0
        } else { // step
            g[m[p] + L] = d[p]
            g[L] = f
        }
    }
}

console.log('Getting options')
ii=[...i]
r(ii,1)
console.log('Checking', i.length, 'possible positions')
console.log("\nResult:",ii.reduce((o,q,I)=>{
    process.stdout.write("\r" + (I+1) + '/' + i.length + ' -> ' + o)
    if(q!=f)return o
    g=[...i]
    g[I]=F
    return o+r(g,0)
},0))
