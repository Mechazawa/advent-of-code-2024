i=require('fs').readFileSync(0,'utf8')
d='^>v<'
l=i.indexOf`\n`+1
m=[-l,1,l,-1]
f='%'
P=g=>[0,1,2,3].find(x=>g.includes(d[x]))
s=P([...i])
q=[]
r=(g,b,k=1)=>{
    _S=-1
    _P=-1
    while(1) {
        p = P(g)
        L = g.indexOf(d[p])
        z = g[m[p] + L]
        if(z=='.') {
            _S=L
            _P=p
        }else if(p==_P&&_S==L)return 1
        if (z < f) { // turn
            g[L] = d[(1 + p) % 4]
        } else if (!z || z === '\n') { // exit
            return 0
        } else { // step
            g[m[p] + L] = d[p]
            g[L] = f
            if (b&&!k) {
                G = [...i]
                G[L] = '#'
                q.push(G.join(''))
            }
        }
        k=0
    }
}

console.log('Getting options')
r([...i],1)
console.log('Filtering')
q=q.filter((v, i, a) => a.indexOf(v) === i);
console.log('Checking', q.length, 'possible positions')
console.log("\nResult:",q.reduce((o,Q,i)=>{
    process.stdout.write("\r" + i + '/' + q.length + ' -> ' + o)
    return o+r([...Q],0)
},0))