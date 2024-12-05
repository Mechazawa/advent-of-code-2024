i=require('fs').readFileSync(0,'utf8').split`\n\n`
r=i[0].replaceAll(/(..)\|(..)/g,'$2.+$1').replace(/\n/g,'|')
console.log(eval(i[1].split`\n`.filter(x=>!x.match(r)&&x).map(x=>x.split(',')[x.match(/,/g).length/2]).join`+`))
