var u={num:{match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g,type:"num"},str:{match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g,type:"str"},strDouble:{match:/"((?!")[^\r\n\\]|\\[^])*"?/g,type:"str"}};var d={},m=(e="")=>{var a,n,t,s;return(s=(n=(a=e.replaceAll("&","&#38;")).replaceAll)==null?void 0:(t=n.call(a,"<","&lt;")).replaceAll)==null?void 0:s.call(t,">","&gt;")},o=(e,a)=>a?`<span class="shj-syn-${a}">${e}</span>`:e;async function f(e,a,n){var x;let t,s,i={},r,l=[],h=0,p=typeof a=="string"?await((x=d[a])!=null?x:d[a]=import(`./languages/${a}.js`)):a,c=[...typeof a=="string"?p.default:a.sub];for(;h<e.length;){for(i.index=null,t=c.length;t-- >0;){if(s=c[t].expand?u[c[t].expand]:c[t],l[t]===void 0||l[t].match.index<h){if(s.match.lastIndex=h,r=s.match.exec(e),r===null){c.splice(t,1),l.splice(t,1);continue}l[t]={match:r,lastIndex:s.match.lastIndex}}l[t].match[0]&&(l[t].match.index<=i.index||i.index===null)&&(i={part:s,index:l[t].match.index,match:l[t].match[0],end:l[t].lastIndex})}if(i.index===null)break;n(e.slice(h,i.index),p.type),h=i.end,i.part.sub?await f(i.match,typeof i.part.sub=="string"?i.part.sub:i.part,n):n(i.match,i.part.type)}n(e.slice(h,e.length),p.type)}async function y(e,a,n=!0){let t=n?`<div><div class="shj-numbers">${"<div></div>".repeat(e.split(`
`).length)}</div><div>`:"";return await f(e,a,(s,i)=>t+=o(m(s),i)),n&&(t+="</div></div>"),t}async function g(e,a=(t=>(t=e.className.match(/shj-lang-([\w-]+)/))==null?void 0:t[1])(),n){let s=e.textContent;n!=null||(n=`${e.tagName=="CODE"?"in":s.split(`
`).length<2?"one":"multi"}line`),e.dataset.lang=a,e.className=`${[...e.classList].filter(i=>!i.startsWith("shj-")||i.startsWith("shj-mode-")).join(" ")} shj-lang-${a} shj-${n}`,e.innerHTML=await y(s,a,n=="multiline")}var v=async()=>document.querySelectorAll('[class*="shj-lang-"]').forEach(e=>g(e));export{v as highlightAll,g as highlightElement,y as highlightText,f as tokenize};
