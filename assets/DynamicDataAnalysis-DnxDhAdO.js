import{_ as M,r as i,F as _,T as h,Y as w,c as k,d as B,k as E,v as b}from"./index-DWtISIBF.js";import{g as y}from"./meter-BWYCtTLu.js";import{B as R}from"./BaseChart-BeO_gFFx.js";import{d as v}from"./dayjs.min-t3tQ4ZJg.js";/* empty css             *//* empty css                 */import{E as D}from"./index-CZh1RU_w.js";import"./installCanvasRenderer-COQy7h5q.js";import"./DebounceAndThrottle-B_grFKK4.js";import"./index-CVAPKPs0.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-CuP5NVML.js";import"./index-DibVzrKz.js";import"./icon-Cc3ZZocH.js";import"./aria-BUADUvnR.js";const j={__name:"DynamicDataAnalysis",props:{id:{type:[String,Number],default:null},dateRange:{type:Array,default:()=>[]}},setup(m,{expose:p}){p();let n=i(!1),r=i(null),t=m,s=i([]);const o=_(()=>({title:"",xAxisData:s.value.map(e=>e.time),series:[{name:"流量",type:"line",data:s.value.map(e=>e.value),showExtremum:!0}],showMarkLine:!0,iszoom:!0,isMerge:!1})),d=async(e,l,x)=>{n.value=!0;try{let a=await y({id:e,start_time:l,end_time:x});if(a.code!==200){D.error(a.message||"动态数据分析失败"),console.error(a);return}s.value=a.meter_readings.map((c,f)=>{const A=f===0?c.value:a.meter_readings[f-1].value;return{value:u(A,c.value).toFixed(2),time:v(c.time).format("MM-DD HH:mm")}}).slice(1)}catch(a){console.error(a),D.error("服务器异常，动态数据分析失败")}finally{n.value=!1}},u=(e,l)=>e==null?0:l-e;h(()=>{t.dateRange.length===2&&t.id&&d(t.id,t.dateRange[0],t.dateRange[1])});const g={get loading(){return n},set loading(e){n=e},get chart(){return r},set chart(e){r=e},get props(){return t},set props(e){t=e},get meterData(){return s},set meterData(e){s=e},chartOption:o,fetchMeterData:d,calculateUsage:u,get getMeterDetailApi(){return y},BaseChart:R,watchEffect:h,ref:i,computed:_,get dayjs(){return v}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}},C={class:"dynamic-data-analysis","loading-text":"加载数据中..."};function L(m,p,n,r,t,s){const o=b;return w((k(),B("div",C,[E(r.BaseChart,{ref:"chart",height:"32rem",width:"100%",options:r.chartOption},null,8,["options"])])),[[o,r.loading]])}const J=M(j,[["render",L],["__scopeId","data-v-2af6fa48"],["__file","D:/临时存放/green-carbon-1.0/src/views/WarningCenter/WaterLeakageAnalysis/components/DynamicDataAnalysis.vue"]]);export{J as default};