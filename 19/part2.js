i=require('fs').readFileSync(0,'utf8');

I=i.split`\n`.filter(a=>a);R=I[0].split`, `;D={};r=(s,t)=>D[t+s]??=s==t?1:t.startsWith(s)?R.reduce((A,c)=>A+r(s+c,t),0):0
throw I.reduce((a,t)=>a+r('',t),0)
