var $=Object.defineProperty;var u=(e,a)=>()=>(e&&(a=e(e=0)),a);var j=(e,a)=>{for(var l in a)$(e,l,{get:a[l],enumerable:!0})};var i,g=u(()=>{i={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",gray:"\x1B[90m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"}});var y={};j(y,{default:()=>v});var v,b=u(()=>{g();v={deleted:i.red,var:i.red,err:i.red,kwd:i.red,num:i.yellow,class:i.yellow,cmnt:i.gray,insert:i.green,str:i.green,bool:i.cyan,type:i.blue,oper:i.blue,section:i.magenta,func:i.magenta}});var f={num:{type:"num",match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g},str:{type:"str",match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g},strDouble:{type:"str",match:/"((?!")[^\r\n\\]|\\[^])*"?/g}};var o={};async function x(e,a,l){var h;try{let n,s,t={},d,r=[],c=0,m=typeof a=="string"?await((h=o[a])!=null?h:o[a]=import(`./languages/${a}.js`)):a,p=[...typeof a=="string"?m.default:a.sub];for(;c<e.length;){for(t.index=null,n=p.length;n-- >0;){if(s=p[n].expand?f[p[n].expand]:p[n],r[n]===void 0||r[n].match.index<c){if(s.match.lastIndex=c,d=s.match.exec(e),d===null){p.splice(n,1),r.splice(n,1);continue}r[n]={match:d,lastIndex:s.match.lastIndex}}r[n].match[0]&&(r[n].match.index<=t.index||t.index===null)&&(t={part:s,index:r[n].match.index,match:r[n].match[0],end:r[n].lastIndex})}if(t.index===null)break;l(e.slice(c,t.index),m.type),c=t.end,t.part.sub?await x(t.match,typeof t.part.sub=="string"?t.part.sub:typeof t.part.sub=="function"?t.part.sub(t.match):t.part,l):l(t.match,t.part.type)}l(e.slice(c,e.length),m.type)}catch{l(e)}}var w=Promise.resolve().then(()=>(b(),y)),A=async(e,a)=>{let l="",h=(await w).default;return await x(e,a,(n,s)=>{var t;return l+=s?`${(t=h[s])!=null?t:""}${n}\x1B[0m`:n}),l},C=async(e,a)=>console.log(await A(e,a)),H=async e=>w=import(`./themes/${e}.js`);export{A as highlightText,C as printHighlight,H as setTheme};
