import{_ as Q,r as f,F as B,a as Y,w as T,o as L,j,c as N,d as X,e as S,k as c,l as _,f as b,Y as Z,J as $,g as P,W as I,v as ee}from"./index-DWtISIBF.js";import{E as te}from"./button-DfREtLL_.js";import{d as m}from"./dayjs.min-t3tQ4ZJg.js";import{C as re}from"./CustomDatePicker-DTvPnXeh.js";import{u as W,g as E,m as M,f as ae}from"./meter-BWYCtTLu.js";import{h as p}from"./handleError-BsBqXgSR.js";import{c as H,g as U}from"./formula-HQf-IMJj.js";import{f as oe,a as le}from"./tableStyleConfig-B0fO-oaJ.js";import{_ as ne}from"./导出-BMYnDY6G.js";import"./index-CuP5NVML.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-DjvbDGpK.js";import"./use-form-item-CuJrx89H.js";import"./icon-Cc3ZZocH.js";import"./date-picker-B_H4_mfX.js";import"./popper-BNb2tGl7.js";import"./index-CVAPKPs0.js";import"./aria-BUADUvnR.js";import"./focus-trap-D8pg8SM_.js";import"./input-B0bTKLmJ.js";import"./index-DibVzrKz.js";import"./scrollbar-BMOxp_jN.js";import"./index-CeeR5a7H.js";import"./index-DfeXTFmx.js";import"./isEqual-DqXByToB.js";import"./_Uint8Array-DaZSNKBQ.js";/* empty css             *//* empty css                 */import"./index-CZh1RU_w.js";/* empty css                        */import"./index-DYLzNb0k.js";const z="用水日抄表",ie={__name:"index",setup(G,{expose:u}){u();const A=()=>({backgroundColor:"#416AB5",color:"#fff"}),t=({row:e,column:r})=>r.field==="Value"?{color:"#0D45AC"}:{color:"#21333f"},V=({row:e,rowIndex:r})=>{switch(e.level){case 1:return{backgroundColor:"#AFCAF7"};case 2:return{backgroundColor:"#D4E2FF"};case 3:return{backgroundColor:"#EBF0FA"};case 4:return{backgroundColor:"#F8FAFD"};default:return{backgroundColor:"#fff"}}},i=W(),h=f(null),a=f(m().subtract(1,"day").valueOf()),l=B(()=>{const e=m(a.value).startOf("day").valueOf(),r=m(a.value).endOf("day").valueOf();return[e,r]}),D={type:"xlsx",includeFooter:!0,useStyle:!0,isFooter:!0,isColgroup:!0,isAllExpand:!0,filename:"水表日抄表",sheetName:"表计报表",modes:["current"]},s=f([]),v=f(!1),C=f(!1),J=Y({transform:!0,rowField:"id",parentField:"parent_id",lazy:!0,hasChild:"hasChild",showLine:!0,loadMethod:({row:e})=>O(e)});let g=f([]),y=f([]);const k=async()=>{const{currentCompany:e}=I();if(!(e!=null&&e.id))throw new Error("需要公司ID");try{const{data:r}=await U(e.id),o=r.filter(d=>d.usage===z);if(!o.length){y.value=[],g.value=[];return}const w=m(l.value[1]).format("YYYY/MM/DD");y.value=await Promise.all(o.map(async d=>{try{const n={id:d.id,start_time:l.value[0],end_time:l.value[1]},{data:K}=await H(n);return{meter_code:d.name,current_reading_time:w,Value:K}}catch(n){return p(n,"计算公式失败"),{meter_code:d.name,current_reading_time:w,Value:0}}})),g.value=o}catch(r){p(r,"获取公式失败"),y.value=[],g.value=[]}};async function x(){if(!v.value)try{await k(),s.value=[],v.value=!0;let e=await F(i.treeDataForChart);s.value=e.filter(Boolean)}catch(e){p(e,"获取数据失败")}finally{v.value=!1}}async function F(e){const r=e.map(o=>o.id).toString();try{const o=await E({id:`[${r}]`,start_time:l.value[0],end_time:l.value[1]});if(o.code!==200)return p(o,"获取水表数据失败"),[];const w=M(e,o.meter_readings,"current_reading",!0,l.value[1]),d=await E({id:`[${r}]`,start_time:m(a.value).subtract(1,"day").startOf("day").valueOf(),end_time:m(a.value).subtract(1,"day").endOf("day").valueOf()});return d.code!==200?(p(d,"获取水表数据失败"),[]):M(w,d.meter_readings,"yesterday_reading",!0,m(a.value).subtract(1,"day").endOf("day")).map(n=>({...n,Value:Math.max(0,n.current_reading-n.yesterday_reading),hasChild:Array.isArray(n.children)&&n.children.length>0,customChild:n.children}))}catch(o){return p(o,"转换数据失败"),[]}}async function O(e){try{return(await F(e.customChild)).filter(Boolean)}catch(r){return console.error("Failed to load child nodes:",r),[]}}async function q(){try{C.value=!0;const e=h.value;for(let r=0;r<i.meterLevels.length;r++)await(e==null?void 0:e.setAllTreeExpand(!0));await(e==null?void 0:e.openExport({includeFooter:!0}))}finally{C.value=!1}}T([()=>l.value,()=>i.treeDataForChart],()=>{x()},{deep:!0}),L(async()=>{(!i.treeDataForChart.length||i.currentSelectedType!==1)&&(i.setCurrentSelectedType(1),await i.fetchMeterList()),x()});const R={headerRowStyle:A,cellStyle:t,rowStyle:V,meterStore:i,tableRef:h,date:a,dateRange:l,exportConfig:D,meterTableData:s,isLoading:v,isExporting:C,treeConfig:J,get dailyDetailFormula(){return g},set dailyDetailFormula(e){g=e},get footerData(){return y},set footerData(e){y=e},WATER_METER_USAGE:z,getDailyDetailFormula:k,fetchMeterDetail:x,fetchAndProcessMeterData:F,loadChildNodes:O,handleExport:q,ref:f,onMounted:L,watch:T,computed:B,reactive:Y,get dayjs(){return m},CustomDatePicker:re,get useMeterStore(){return W},get formatFlowValue(){return ae},get mapMeterData(){return M},get getMeterDetailApi(){return E},get handleError(){return p},get computeFormulaApi(){return H},get getFormulaApi(){return U},get useCompanyStore(){return I},get footerCellStyle(){return oe},get footerRowStyle(){return le}};return Object.defineProperty(R,"__isScriptSetup",{enumerable:!1,value:!0}),R}},se={class:"meter-report-container"},de={class:"meter-report-header"},ce={class:"meter-report-body"};function ue(G,u,A,t,V,i){const h=te,a=j("vxe-column"),l=j("vxe-table"),D=ee;return N(),X("div",se,[S("div",de,[c(t.CustomDatePicker,{border:"",isRange:!1,modelValue:t.date,"onUpdate:modelValue":u[0]||(u[0]=s=>t.date=s)},null,8,["modelValue"]),c(h,{style:{"margin-left":"auto"},type:"success",loading:t.isExporting,onClick:t.handleExport},{icon:_(()=>u[1]||(u[1]=[S("img",{src:ne,width:"14",height:"14",alt:"",srcset:""},null,-1)])),default:_(()=>[u[2]||(u[2]=b(" 导出 "))]),_:1},8,["loading"])]),S("div",ce,[Z((N(),$(l,{style:{"font-weight":"500"},"show-footer":!0,"footer-data":t.footerData,"footer-cell-style":t.footerCellStyle,"footer-row-style":t.footerRowStyle,"cell-style":t.cellStyle,"header-row-style":t.headerRowStyle,"row-style":t.rowStyle,height:"600px",ref:"tableRef",border:"",align:"center",data:t.meterTableData,"tree-config":t.treeConfig,"export-config":t.exportConfig},{default:_(()=>[c(a,{"tree-node":"",fixed:"left",field:"meter_code",title:"编号"}),c(a,{fixed:"left",field:"id",title:"表号"}),c(a,{field:"specification",title:"规格"}),c(a,{field:"yesterday_reading",title:"上次读数"}),c(a,{field:"current_reading",title:"本次读数"}),c(a,{field:"current_reading_time",title:"时间"},{default:_(({row:s})=>[b(P(t.dayjs(s.current_reading_time).format("YYYY/MM/DD HH:mm:ss")),1)]),_:1}),c(a,{fixed:"right",field:"Value",title:"流量"},{default:_(({row:s})=>[b(P(t.formatFlowValue(s.Value)),1)]),_:1})]),_:1},8,["footer-data","footer-cell-style","footer-row-style","data","tree-config"])),[[D,t.isLoading]])])])}const He=Q(ie,[["render",ue],["__scopeId","data-v-cc0670ee"],["__file","D:/临时存放/green-carbon-1.0/src/views/EnergyData/WaterData/IntelligentMeter/DailyMeter/index.vue"]]);export{He as default};