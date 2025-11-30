i=require('fs').readFileSync(0,'utf8');

I=[...i.matchAll(/(\d+),(\d+)/g)];E=(e=71)*e;for(D=0;1;(()=>{d=[0];I.slice(0,D+1).map(([,a,b])=>d[+a+b*e]=E);for(v=0;v<E;v++)for(i=0;i<E;i++)if(d[i]==v){if(i==E-1)return;else[e,-e,i%e>0&&-1,i%e<e-1&&+1].map(x=>d[x+i]??=v+1)}throw I[D][0]})(D++));
