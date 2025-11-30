i=require('fs').readFileSync(0,'utf8')

I=i.split`\n`;X=I[0].length;Y=I.length;M=[];H='#';A=Math.abs
I.map((a,y)=>a.split``.map((_,x)=>M[y*X+x]=a[x]==H?H:a[x]=='S'?0:null))
for(v=0;v<X*Y;v++)for(V=0;V<X*Y;V++)if(M[V]==v)[X,-X,-1,1].map(x=>M[x+V]??=v+1)
c=0;for(i=0;i<X*Y;i++)for(x=-2;(d=M[i])!=H&&x<3;x++)for(y=-2;y<3;y++)c+=(m=A(x)+A(y))<3&&M[((i/X|0)+y)*X+i%X+x]-d-m>99

console.log(c)
