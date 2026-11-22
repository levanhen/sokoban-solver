import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'fs'
for(let i of R('/input')){let t=F(`/input/${i}/level.txt`)+'',w=t.indexOf('\n')+1,D=[-w,w,-1,1],p=t.search(/[@+]/),h=p/w|0,o=[...t].map(c=>'$*'.includes(c)),S='',G=c=>'.*+'.includes(t[c]),g=c=>(c<h*w)*9+((c%w-1)/7|0),E=c=>t[c]>'\n'&t[c]!='#',f=c=>E(c)&!o[c],B=s=>{let r={[s]:s},q=[s];for(let v of q)for(let d of D)f(v+d)&&!(v+d in r)&&(r[v+d]=v,q.push(v+d));return[r,q]}
for(let k of new Set(o.flatMap((x,c)=>x?[g(c)]:[]))){let s=o.flatMap((x,c)=>x&&g(c)==k?[c]:[]),Q=[[s,p]],V=new Set,a=[],e,j=0,l=[...t].flatMap((x,c)=>G(c)&g(c)==k?[c]:[])
for(let v of l)for(let d of D){let u=v-d;l.includes(u)|!E(u)|!E(u-d)|g(u)!=k|(u/w|0)==h||l.push(u)}
for(let c of s)o[c]=0
for(;!e;j++){let[b,P]=Q[j],[r,q]=(b.map(c=>o[c]=1),B(P)),y=[Math.min(...q),...b]+''
V.has(y)||(V.add(y),b.every(G)?e=j:b.map(c=>D.map((d,m)=>c-d in r&&l.includes(c+d)&&!o[c+d]&&Q.push([b.map(x=>x-c?x:c+d).sort(),c,j,m]))))
for(let c of b)o[c]=0}
for(;e;e=Q[e][2])a.unshift(Q[e])
for(let c of s)o[c]=1
for(let[,c,,m]of a){let d=D[m],[r]=B(p),x='udlr'[m]
for(let v=c-d;v-p;v=r[v])x='udlr'[D.indexOf(v-r[v])]+x
S+=x,o[c]=0,o[c+d]=1,p=c}}M('/output/'+i);W(`/output/${i}/solution.txt`,S)}
