import{aQ as e,cQ as n,cO as t}from"./index.b76f096f.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const c=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),d()};return n((()=>{c()})),t((()=>{m()})),[c,m]}export{i as u};