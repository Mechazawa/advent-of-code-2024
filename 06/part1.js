i=require('fs').readFileSync(0,'utf8')

d='^>v<',l=i.search`\n`+1,m=[-l,1,l,-1],f='%',r=g=>(p=[0,1,2,3].find(x=>g.includes(d[x])),L=g.indexOf(d[p]),z=g[m[p]+L],g[L]=d[(1+p)%4],z<f?r(g):!z||z=='\n'?g.reduce((a,x)=>a+(x==f),1):(g[L]=f,g[m[p]+L]=d[p],r(g)))
console.log(r([...i]))