import{g as m,c}from"./formula-HQf-IMJj.js";import{d as n}from"./dayjs.min-t3tQ4ZJg.js";import{h as f}from"./handleError-BsBqXgSR.js";async function F(e,a){const t=await m(e);return a?t.data.filter(o=>o.usage===a):t.data}async function w(e,a,t="day"){return await Promise.all(e.map(async l=>{const r={...l};return await Promise.all(a.map(async(u,i)=>{const s=await d(l,u,t);return r["usage_"+i]=s,s})),r}))}async function d(e,a,t="day"){let o=n(a).startOf(t).valueOf(),l=n(a).endOf(t).valueOf();try{let{data:r}=await c({id:e.id,start_time:o,end_time:l});return r}catch(r){f(r,"计算公式值出错")}}export{w as a,F as g};
