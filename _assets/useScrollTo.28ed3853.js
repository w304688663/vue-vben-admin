import{r as o,cz as t,f as r,cA as a}from"./index.b76f096f.js";import{r as s}from"./animation.0e442f99.js";function n({el:n,to:c,duration:l=500,callback:e}){const f=o(!1),i=(o=>o.scrollTop)(n),u=c-i;let p=0;l=t(l)?500:l;const m=function(){if(!r(f))return;p+=20;const o=(t=p,c=i,v=u,(t/=l/2)<1?v/2*t*t+c:-v/2*(--t*(t-2)-1)+c);var t,c,v;((o,t)=>{o.scrollTop=t})(n,o),p<l&&r(f)?s(m):e&&a(e)&&e()};return{start:()=>{f.value=!0,m()},stop:()=>{f.value=!1}}}export{n as u};