import{_ as h,r as l,F as v,ag as y,X as D,I as x,c as M,d as w,i as A,v as E}from"./index-oALI6hjD.js";import{g as k}from"./meter-GWsXRyue.js";import{B}from"./BaseChart-CUGvWtWP.js";import{d as R}from"./dayjs.min-VPOC9PSa.js";/* empty css             *//* empty css                 */import{E as c}from"./index-CV7ElbEQ.js";import"./DebounceAndThrottle-B_grFKK4.js";import"./installCanvasRenderer-7dDAEUGk.js";import"./index-Ci2yyUHC.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-DXOgsKzf.js";import"./index-BTnVmvBQ.js";import"./icon-DFUaFmZd.js";import"./aria-BUADUvnR.js";const b={class:"dynamic-data-analysis","loading-text":"加载数据中..."},F={__name:"DynamicDataAnalysis",props:{id:{type:[String,Number],default:null},dateRange:{type:Array,default:()=>[]}},setup(d){let s=l(!1),u=l(null),a=d,i=l([]);const p=v(()=>({title:"",xAxisData:i.value.map(e=>e.time),series:[{name:"流量",type:"line",data:i.value.map(e=>e.value),showExtremum:!0}],showMarkLine:!0,iszoom:!0,isMerge:!1})),f=async(e,r,o)=>{s.value=!0;try{let t=await k({id:e,start_time:r,end_time:o});if(t.code!==200){c.error(t.message||"动态数据分析失败"),console.error(t);return}i.value=t.meter_readings.map((n,m)=>{const _=m===0?n.value:t.meter_readings[m-1].value;return{value:g(_,n.value).toFixed(2),time:R(n.time).format("MM-DD HH:mm")}}).slice(1)}catch(t){console.error(t),c.error("服务器异常，动态数据分析失败")}finally{s.value=!1}},g=(e,r)=>e==null?0:r-e;return y(()=>{a.dateRange.length===2&&a.id&&f(a.id,a.dateRange[0],a.dateRange[1])}),(e,r)=>{const o=E;return D((M(),w("div",b,[A(B,{ref_key:"chart",ref:u,height:"32rem",width:"100%",options:p.value},null,8,["options"])])),[[o,x(s)]])}}},P=h(F,[["__scopeId","data-v-2b53da6c"]]);export{P as default};