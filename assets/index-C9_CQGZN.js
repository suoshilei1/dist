import{_ as A,V as K,r as E,w as S,c as m,d as p,e as N,i as a,j as n,I as U,f as g,X as z,J as D,ai as x,g as h,v as T}from"./index-oALI6hjD.js";import{E as M}from"./card-DUC90zSS.js";import{E as j,a as J}from"./table-column-B3vmHtxt.js";import"./checkbox-eAiA7KBF.js";/* empty css                */import"./popper-8tqvLSZz.js";import"./scrollbar-BwLVa3O8.js";import{E as L}from"./input-_j8YarB1.js";import{E as R}from"./input-number-CaAXokvz.js";/* empty css            */import{E as W}from"./button-CW4VZptJ.js";import{a as X,c as q,u as F,d as G}from"./price-DPTdKMUz.js";import{d as H}from"./DebounceAndThrottle-B_grFKK4.js";/* empty css             *//* empty css                 *//* empty css                   */import{E as s}from"./index-CV7ElbEQ.js";import{E as O}from"./index-DKbZ_y2J.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-Ci2yyUHC.js";import"./_baseIteratee-_-ChXyeP.js";import"./_Uint8Array-Cyhry7Ym.js";import"./isEqual-DERyOhzh.js";import"./index-DXOgsKzf.js";import"./index-CPa7yTdP.js";import"./_initCloneObject-CeA08_Bb.js";import"./use-form-item-CJ5jT23N.js";import"./index-GdZBC0LW.js";import"./aria-BUADUvnR.js";import"./focus-trap-B9jhWFgs.js";import"./icon-DFUaFmZd.js";import"./index-BTnVmvBQ.js";import"./index-Civq4TP6.js";import"./index-JdeAZNwx.js";import"./scroll-BUhzRsoy.js";import"./vnode-DAFY4x8G.js";import"./validator-DaZaXEYL.js";const Q={class:"water-price-container"},Y={key:0},Z={key:1},ee={key:0},te={key:1},ie={__name:"index",setup(ae){const u=K(),r=E([]),o=E(!1),d=E("");async function c(){o.value=!0;try{let e=await X({type:1,company_id:u.currentCompany.id,name:d.value?`%${d.value}%`:void 0});r.value=e.data}catch{s.error("获取价格失败")}finally{o.value=!1}}const V=H(c,500),P=()=>{const e={name:"",fixed_price:0,tempPrice:0,isNew:!0,company_id:u.currentCompany.id,price_mode:"固定价格",type:1};r.value.unshift(e)},b=e=>{!e.name&&e.isNew&&(r.value=r.value.filter(i=>i!==e))},k=e=>{e.isEditing=!0,e.tempPrice=e.fixed_price},_=async e=>{if(!e.name){s.warning("请输入用水类别");return}if(e.isNew)e.fixed_price=e.tempPrice||0;else if(e.tempPrice==e.fixed_price){s.info("价格未修改"),e.isEditing=!1;return}o.value=!0;let i={...e.isNew?{name:e.name,company_id:e.company_id,price_mode:e.price_mode,type:e.type,fixed_price:e.tempPrice||0}:{id:e.id,fixed_price:e.tempPrice}};try{e.isNew?await q(i):await F(i),await c(),s.success(e.isNew?"添加成功":"修改成功")}catch{s.error(e.isNew?"添加失败":"保存失败")}finally{e.isEditing=!1,e.isNew=!1,o.value=!1}},C=async e=>{if(e.isNew){r.value=r.value.filter(i=>i!==e);return}try{await O.confirm("确定要删除该价格方案吗？","提示",{type:"warning"}),o.value=!0,await G({id:""+e.id}),s.success("删除成功"),await c()}catch(i){i!=="cancel"&&s.error("删除失败")}finally{o.value=!1}};return S(()=>u.currentCompany,async()=>{await c()},{immediate:!0}),(e,i)=>{const f=L,y=W,v=j,w=R,B=J,I=M,$=T;return m(),p("div",Q,[i[3]||(i[3]=N("div",{class:"page-title"},[N("div",null,"水费定价管理")],-1)),a(I,{class:"system-card"},{header:n(()=>[a(f,{clearable:"",modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=t=>d.value=t),style:{width:"150px"},placeholder:"搜索用水类别",onInput:U(V)},null,8,["modelValue","onInput"]),a(y,{icon:"plus",size:"small",type:"primary",onClick:P},{default:n(()=>i[1]||(i[1]=[g("添加定价方案")])),_:1})]),default:n(()=>[z((m(),D(B,{data:r.value,border:"",style:{width:"100%"}},{default:n(()=>[a(v,{align:"center",prop:"name",label:"用水类别"},{default:n(({row:t})=>[t.isEditing||t.isNew?(m(),p("div",Y,[a(f,{modelValue:t.name,"onUpdate:modelValue":l=>t.name=l,placeholder:"请输入用水类别",onBlur:l=>b(t),onKeyup:x(l=>_(t),["enter"])},null,8,["modelValue","onUpdate:modelValue","onBlur","onKeyup"])])):(m(),p("div",Z,h(t.name),1))]),_:1}),a(v,{align:"center",label:"价格(元/吨)"},{default:n(({row:t})=>[t.isEditing||t.isNew?(m(),p("div",ee,[a(w,{modelValue:t.tempPrice,"onUpdate:modelValue":l=>t.tempPrice=l,precision:2,step:.1,min:0,max:999,style:{width:"100%"},onKeyup:x(l=>_(t),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])])):(m(),p("div",te,h(t.fixed_price),1))]),_:1}),a(v,{align:"center",label:"操作"},{default:n(t=>[a(y,{size:"small",type:t.row.isEditing||t.row.isNew?"success":"primary",onClick:l=>t.row.isEditing||t.row.isNew?_(t.row):k(t.row)},{default:n(()=>[g(h(t.row.isEditing||t.row.isNew?"保存":"编辑"),1)]),_:2},1032,["type","onClick"]),a(y,{size:"small",type:"danger",onClick:l=>C(t.row)},{default:n(()=>i[2]||(i[2]=[g(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[$,o.value]])]),_:1})])}}},Je=A(ie,[["__scopeId","data-v-0a550596"]]);export{Je as default};
