import{_ as J,r as m,a as V,F as b,w as C,o as k,j as D,c as _,d as A,e as B,k as a,l as c,f as g,X,J as L,g as h,T as G,U as H,v as K}from"./index-DU5BV6sj.js";import{E as Q}from"./button-C3fNXQ0E.js";import{d as v}from"./dayjs.min-BzhD8rH5.js";import{u as N,a as T,b as O,t as P,f as W,d as Y}from"./meter-CawyXifQ.js";import{C as Z}from"./CustomDatePicker-DwR5Ke4u.js";import{u as j}from"./area-CYcRQDxZ.js";/* empty css             *//* empty css                        */import{E}from"./index-BjNTkPPk.js";import"./index-BCql8Cu-.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-HfsxB2KS.js";import"./use-form-item-Bwue1zaK.js";import"./icon-Lrcg122U.js";import"./date-picker-3aSnRp6y.js";import"./popper-DmsXjoSL.js";import"./index-imETKNmt.js";import"./aria-BUADUvnR.js";import"./focus-trap-BFH-jL9N.js";import"./input-Cag95VNY.js";import"./index-DsemQHVw.js";import"./scrollbar-5YYltO8z.js";import"./index-BcLR6-Z9.js";import"./index-BRz9a87F.js";import"./isEqual-Df5tNRy_.js";import"./_Uint8Array-ntTh0Oyk.js";/* empty css                 */import"./index-BmwD9m8C.js";const I={__name:"index",setup(U,{expose:s}){s();const n=N(),t=j(),w=m(null),u=m([v().startOf("month").valueOf(),v().endOf("month").valueOf()]),y={type:"xlsx",includeFooter:!0,useStyle:!0,isFooter:!0,isColgroup:!0,isAllExpand:!0,filename:"电表日统计报表",sheetName:"表计报表",modes:["current"]},o=m([]),f=m(!1),p=m(!1),x=V({transform:!0,rowField:"id",parentField:"parent_id",lazy:!0,hasChild:"hasChild",showLine:!0,loadMethod:({row:e})=>M(e)}),d=b(()=>T(u.value[0],u.value[1]));async function i(){if(!f.value)try{o.value=[],f.value=!0;const e=n.treeDataForChart.map(S=>l(S)),r=await Promise.all(e);o.value=r.filter(Boolean)}catch(e){E({type:"error",title:"Error",message:e.message||"获取电表数据失败"}),console.error("Failed to fetch meter report:",e)}finally{f.value=!1}}async function l(e){try{const r=await O({id:e.id,start_time:u.value[0],end_time:v(u.value[1]).add(1,"day").valueOf(),interval:"day"});return P(e,r)}catch(r){return E({type:"error",title:"Error",message:r.message||"获取电表数据失败"}),console.error(`Failed to fetch data for meter ${e.meter_code}:`,r),null}}const F=m(!1);async function M(e){try{const r=e.customChildren.map(z=>l(z));return(await Promise.all(r)).filter(Boolean)}catch(r){return E({type:"error",title:"Error",message:r.message||"获取电表数据失败"}),console.error("Failed to load child nodes:",r),[]}}async function q(){try{p.value=!0;const e=w.value;for(let r=0;r<n.meterLevels.length;r++)await(e==null?void 0:e.setAllTreeExpand(!0));await(e==null?void 0:e.openExport({includeFooter:!0}))}finally{p.value=!1}}C([()=>u.value,()=>n.treeDataForChart],()=>{i()},{deep:!0}),C([()=>F.value],()=>{i()},{deep:!0}),k(async()=>{(!n.treeDataForChart.length||n.currentSelectedType!==2)&&(n.setCurrentSelectedType(2),await n.fetchMeterList()),i()});const R={meterStore:n,areaStore:t,tableRef:w,dateRange:u,exportConfig:y,meterTableData:o,isLoading:f,isExporting:p,treeConfig:x,dateColumns:d,fetchMeterReport:i,fetchAndProcessMeterData:l,showUnknownRate:F,loadChildNodes:M,handleExport:q,ref:m,onMounted:k,watch:C,computed:b,reactive:V,get dayjs(){return v},get getMeterReportApi(){return O},CustomDatePicker:Z,get useMeterStore(){return N},get useAreaStore(){return j},get formatFlowValue(){return W},get formatReadingValue(){return Y},get generateDateColumns(){return T},get transformMeterData(){return P}};return Object.defineProperty(R,"__isScriptSetup",{enumerable:!1,value:!0}),R}},$={class:"meter-report-container"},ee={class:"meter-report-header"};function te(U,s,n,t,w,u){const y=Q,o=D("vxe-column"),f=D("vxe-colgroup"),p=D("vxe-table"),x=K;return _(),A("div",$,[B("div",ee,[a(t.CustomDatePicker,{border:"",round:"",modelValue:t.dateRange,"onUpdate:modelValue":s[0]||(s[0]=d=>t.dateRange=d)},null,8,["modelValue"]),a(y,{style:{"margin-left":"auto"},type:"success",loading:t.isExporting,onClick:t.handleExport},{icon:c(()=>s[1]||(s[1]=[B("i",{class:"fa fa-download"},null,-1)])),default:c(()=>[s[2]||(s[2]=g(" 导出 "))]),_:1},8,["loading"])]),X((_(),L(p,{ref:"tableRef",height:"92%",border:"",align:"center",data:t.meterTableData,"tree-config":t.treeConfig,"export-config":t.exportConfig},{default:c(()=>[a(o,{type:"seq",width:"60"}),a(o,{"tree-node":"",fixed:"left",field:"meter_code",title:"表计编号",width:"120"}),a(o,{width:"100","how-overflow":"tooltip",title:"所供区域"},{default:c(({row:d})=>[g(h(t.areaStore.getAreaNameById(d.area_id)||"-"),1)]),_:1}),a(o,{width:"120","how-overflow":"tooltip",field:"installation_location",title:"安装位置"}),a(o,{field:"specification",width:"100",title:"规格"}),a(o,{width:"100",field:"startReading",title:"启读数"}),(_(!0),A(G,null,H(t.dateColumns,(d,i)=>(_(),L(f,{key:d,title:d},{default:c(()=>[a(o,{width:"100",field:`usage_${i}`,title:"用量"},{default:c(({row:l})=>[g(h(t.formatFlowValue(l[`usage_${i}`])),1)]),footer:c(({row:l})=>[g(h(t.formatFlowValue(l[`usage_${i}`])),1)]),_:2},1032,["field"]),a(o,{width:"100",field:`reading_${i}`,title:"读数"},{default:c(({row:l})=>[g(h(t.formatReadingValue(l[`reading_${i}`])),1)]),_:2},1032,["field"])]),_:2},1032,["title"]))),128)),a(o,{fixed:"right",field:"sum",width:"100",title:"总用量"})]),_:1},8,["data","tree-config"])),[[x,t.isLoading]])])}const ke=J(I,[["render",te],["__scopeId","data-v-152238a2"],["__file","D:/临时存放/green-carbon-1.0/src/views/EnergyData/ElectricityData/IntelligentMeter/MonthlyMeter/index.vue"]]);export{ke as default};
