import{_ as U,r as n,a as j,F as q,w as k,o as z,m as x,c as p,d as B,e as M,i as r,j as a,f as c,X as J,J as R,g as h,I as v,T as X,U as G,v as H}from"./index-oALI6hjD.js";import{E as K}from"./button-CW4VZptJ.js";import{d as C}from"./dayjs.min-VPOC9PSa.js";import{u as Q,a as W,f as S,b as Y,d as Z,t as I}from"./meter-GWsXRyue.js";import{C as ee}from"./CustomDatePicker-BcsvcsJp.js";import{u as te}from"./area-DGez3_R7.js";/* empty css             *//* empty css                        */import{E as F}from"./index-BFWR71cx.js";import"./index-DXOgsKzf.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-GdZBC0LW.js";import"./use-form-item-CJ5jT23N.js";import"./icon-DFUaFmZd.js";import"./date-picker-DSsGajNu.js";import"./popper-8tqvLSZz.js";import"./index-Ci2yyUHC.js";import"./aria-BUADUvnR.js";import"./focus-trap-B9jhWFgs.js";import"./input-_j8YarB1.js";import"./index-BTnVmvBQ.js";import"./scrollbar-BwLVa3O8.js";import"./index-Civq4TP6.js";import"./index-CPa7yTdP.js";import"./isEqual-DERyOhzh.js";import"./_Uint8Array-Cyhry7Ym.js";/* empty css                 */import"./index-CV7ElbEQ.js";const re={class:"meter-report-container"},oe={class:"meter-report-header"},ae={__name:"index",setup(ie){const i=Q(),V=te(),E=n(null),l=n([C().startOf("year").valueOf(),C().endOf("year").valueOf()]),b={type:"xlsx",includeFooter:!0,useStyle:!0,isFooter:!0,isColgroup:!0,isAllExpand:!0,filename:"电表月统计报表",sheetName:"表计报表",modes:["current"]},_=n([]),m=n(!1),g=n(!1),N=j({transform:!0,rowField:"id",parentField:"parent_id",lazy:!0,hasChild:"hasChild",showLine:!0,loadMethod:({row:t})=>T(t)}),A=q(()=>W(l.value[0],l.value[1],"month"));async function y(){if(!m.value)try{_.value=[],m.value=!0;const t=i.treeDataForChart.map(f=>D(f)),e=await Promise.all(t);_.value=e.filter(Boolean)}catch(t){F({type:"error",title:"Error",message:t.message||"获取电表数据失败"}),console.error("Failed to fetch meter report:",t)}finally{m.value=!1}}async function D(t){try{const e=await Z({id:t.id,start_time:l.value[0],end_time:C(l.value[1]).valueOf(),interval:"month"});return I(t,e)}catch(e){return F({type:"error",title:"Error",message:e.message||"获取电表数据失败"}),console.error(`Failed to fetch data for meter ${t.meter_code}:`,e),null}}const L=n(!1);async function T(t){try{const e=t.customChildren.map(w=>D(w));return(await Promise.all(e)).filter(Boolean)}catch(e){return F({type:"error",title:"Error",message:e.message||"获取电表数据失败"}),console.error("Failed to load child nodes:",e),[]}}async function $(){try{g.value=!0;const t=E.value;for(let e=0;e<i.meterLevels.length;e++)await(t==null?void 0:t.setAllTreeExpand(!0));await(t==null?void 0:t.openExport({includeFooter:!0}))}finally{g.value=!1}}return k([()=>l.value,()=>i.treeDataForChart],()=>{y()},{deep:!0}),k([()=>L.value],()=>{y()},{deep:!0}),z(async()=>{(!i.treeDataForChart.length||i.currentSelectedType!==2)&&(i.setCurrentSelectedType(2),await i.fetchMeterList()),y()}),(t,e)=>{const f=K,o=x("vxe-column"),w=x("vxe-colgroup"),O=x("vxe-table"),P=H;return p(),B("div",re,[M("div",oe,[r(ee,{maxDays:365*2,border:"","is-month-picker":!0,round:"",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s)},null,8,["modelValue"]),r(f,{style:{"margin-left":"auto"},type:"success",loading:g.value,onClick:$},{icon:a(()=>e[1]||(e[1]=[M("i",{class:"fa fa-download"},null,-1)])),default:a(()=>[e[2]||(e[2]=c(" 导出 "))]),_:1},8,["loading"])]),J((p(),R(O,{ref_key:"tableRef",ref:E,height:"92%",border:"",align:"center",data:_.value,"tree-config":N,"export-config":b},{default:a(()=>[r(o,{type:"seq",width:"60"}),r(o,{fixed:"left","tree-node":"",field:"meter_code",title:"表计编号",width:"120"}),r(o,{width:"100","show-overflow":"tooltip",title:"所供区域"},{default:a(({row:s})=>[c(h(v(V).getAreaNameById(s.area_id)||"-"),1)]),_:1}),r(o,{width:"120","show-overflow":"tooltip",field:"installation_location",title:"安装位置"}),r(o,{field:"specification",width:"100",title:"规格"}),r(o,{width:"100",field:"startReading",title:"启读数"}),(p(!0),B(X,null,G(A.value,(s,d)=>(p(),R(w,{key:s,title:s},{default:a(()=>[r(o,{width:"100",field:`usage_${d}`,title:"用量"},{default:a(({row:u})=>[c(h(v(S)(u[`usage_${d}`])),1)]),footer:a(({row:u})=>[c(h(v(S)(u[`usage_${d}`])),1)]),_:2},1032,["field"]),r(o,{width:"100",field:`reading_${d}`,title:"读数"},{default:a(({row:u})=>[c(h(v(Y)(u[`reading_${d}`])),1)]),_:2},1032,["field"])]),_:2},1032,["title"]))),128)),r(o,{fixed:"right",field:"sum",width:"100",title:"总用量"})]),_:1},8,["data","tree-config"])),[[P,m.value]])])}}},Ae=U(ae,[["__scopeId","data-v-bc0caa8e"]]);export{Ae as default};