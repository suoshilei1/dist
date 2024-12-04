import{_ as Y,r as p,F as j,w as q,o as I,m as b,c as M,d as J,e as C,i,j as y,f as D,X as w,J as L,a1 as T,v as U}from"./index-oALI6hjD.js";import{E as $}from"./button-CW4VZptJ.js";import{d as A}from"./meter-GWsXRyue.js";import{d as f}from"./dayjs.min-VPOC9PSa.js";import{C as F}from"./CustomDatePicker-BcsvcsJp.js";/* empty css             *//* empty css                 *//* empty css                        */import{E as P}from"./index-CV7ElbEQ.js";import{E as H}from"./index-BFWR71cx.js";import"./index-DXOgsKzf.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-GdZBC0LW.js";import"./use-form-item-CJ5jT23N.js";import"./icon-DFUaFmZd.js";import"./date-picker-DSsGajNu.js";import"./popper-8tqvLSZz.js";import"./index-Ci2yyUHC.js";import"./aria-BUADUvnR.js";import"./focus-trap-B9jhWFgs.js";import"./input-_j8YarB1.js";import"./index-BTnVmvBQ.js";import"./scrollbar-BwLVa3O8.js";import"./index-Civq4TP6.js";import"./index-CPa7yTdP.js";import"./isEqual-DERyOhzh.js";import"./_Uint8Array-Cyhry7Ym.js";const X={class:"table-container"},G={class:"filter-container"},K={__name:"MeterReportDaily",props:{currentMeter:{type:Object,required:!0}},setup(V){const s=V,u=p([]),l=p({field:"",order:""}),d=p(!1),g=p(!1),x=p(null),r=p({currentPage:1,pageSize:10,total:0}),h=[f().startOf("month").valueOf(),f().endOf("month").valueOf()],m=p(h),z=j(()=>{let t=[...u.value];l.value.field&&l.value.order&&t.sort((o,v)=>{const c=o[l.value.field],_=v[l.value.field],n=l.value.order==="desc"?-1:1;return l.value.field==="usage"&&(c===null||_===null)?c===null?1:-1:c>_?n:-n});const e=(r.value.currentPage-1)*r.value.pageSize,a=e+r.value.pageSize;return t.slice(e,a)});q([()=>s.currentMeter,()=>m.value],async([t,e],[a,o])=>{if(!t)return;const v=!a||t.id!==a.id,c=!o||e[0]!==o[0]||e[1]!==o[1];(v||c)&&await S()});function E(t){return t.map(a=>({end:a.end,Value:a.Value,start_time:f(a.start_time).format("MM-DD")}))}async function S(){var t;if((t=s.currentMeter)!=null&&t.id){d.value=!0,u.value=[];try{const e=await A({id:s.currentMeter.id,start_time:m.value[0],end_time:f(m.value[1]).add(1,"day").endOf("day").valueOf(),interval:"day"});if(e.code===200){const a=E(e.aggregated_data);console.log(a),u.value=a,r.value.total=a.length,r.value.currentPage=1,a.length===0&&P.warning("所选时间范围内无数据")}else throw new Error(e.message||"获取数据失败")}catch(e){console.error("获取表计数据失败:",e),H({title:"请求失败",message:e.message||"服务器错误，请稍后重试",type:"error",duration:5e3})}finally{d.value=!1}}}function N({currentPage:t,pageSize:e}){r.value.currentPage=t,r.value.pageSize=e}function O({property:t,order:e}){l.value.field=t,l.value.order=e}function k(){m.value=h,l.value={field:"",order:""},r.value.currentPage=1;const t=x.value;t==null||t.clearSort()}async function B(){var t;if(!u.value.length){P.warning("暂无数据可导出");return}try{g.value=!0;const e=x.value;await(e==null?void 0:e.exportData({filename:`${((t=s==null?void 0:s.currentMeter)==null?void 0:t.meter_code)||"未知表计"}_${f().format("YYYY-MM-DD")}_统计报表`,type:"xlsx",mode:"all",useStyle:!0,data:u.value}))}catch(e){console.error("导出失败:",e),P.error("导出失败，请重试")}finally{g.value=!1}}function R({rowIndex:t}){return(r.value.currentPage-1)*r.value.pageSize+t+1}return I(()=>{s.currentMeter&&S()}),(t,e)=>{const a=$,o=b("vxe-column"),v=b("vxe-table"),c=b("vxe-pager"),_=U;return M(),J("div",X,[C("div",G,[i(F,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=n=>m.value=n),disabled:d.value},null,8,["modelValue","disabled"]),i(a,{onClick:k,type:"danger",disabled:d.value},{default:y(()=>e[3]||(e[3]=[D("重置")])),_:1},8,["disabled"]),i(a,{style:{"margin-left":"auto"},loading:g.value,disabled:g.value||d.value||!u.value.length,onClick:B,type:"success"},{icon:y(()=>e[4]||(e[4]=[C("i",{class:"fa fa-download"},null,-1)])),default:y(()=>[e[5]||(e[5]=D(" 导出 "))]),_:1},8,["loading","disabled"])]),w((M(),L(v,{align:"center",ref_key:"tableRef",ref:x,data:z.value,"empty-text":d.value?"加载中...":"暂无数据",onSortChange:O},{default:y(()=>[i(o,{type:"seq",width:"70","seq-method":R}),i(o,{sortable:"",field:"end",title:"读数"}),i(o,{sortable:"",field:"Value",title:"流量"}),i(o,{sortable:"",field:"start_time",title:"时间"})]),_:1},8,["data","empty-text"])),[[_,d.value]]),w(i(c,{currentPage:r.value.currentPage,"onUpdate:currentPage":e[1]||(e[1]=n=>r.value.currentPage=n),pageSize:r.value.pageSize,"onUpdate:pageSize":e[2]||(e[2]=n=>r.value.pageSize=n),total:r.value.total,layouts:["Home","PrevJump","PrevPage","Number","NextPage","NextJump","End","Sizes","Total"],onPageChange:N},null,8,["currentPage","pageSize","total"]),[[T,u.value.length>0]])])}}},Me=Y(K,[["__scopeId","data-v-2bf2a3ca"]]);export{Me as default};