i=require('fs').readFileSync(0, 'utf8');

E=(e=71)*e;d=[0];[...i.matchAll(/(\d+),(\d+)/g)].slice(0,1024).map(([,a,b])=>d[+a+b*e]=E);for(v=0;1;v++)for(i=0;i<E;i++)if(d[i]==v)if(i==E-1)throw v;else[e,-e,i%e>0&&-1,i%e<e-1&&+1].map(x=>d[x+i]??=v+1)

// debug
function p(){
    o='\n\n'
    for (i = 0; i < e * e; i++) {
        if(i%e==0)o+='\n|';
        if(d[i]==E)o+='##|';
        else o+=(""+(d[i] ?? ' ')).padStart(2)+'|'
    }
    console.log(o);
}