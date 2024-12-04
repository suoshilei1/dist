import{_ as K,W as q,r as g,w as M,c as y,d as h,e as v,Y as b,I as i,J as Y,j as r,i as o,cw as j,cq as J,f as c,ai as P,g as k,aY as W,ag as G,U as H,ac as O,v as Q}from"./index-Bx6Y8L80.js";import{E as X}from"./card-fNeABwz5.js";import{E as Z,a as ee}from"./table-column-DjUxz4le.js";import"./checkbox-LjaCbo-5.js";/* empty css                */import"./popper-DBn8ulUn.js";import"./scrollbar-DuXO1tWo.js";/* empty css            */import{E as te}from"./button-8bviUT_H.js";import{E as ne}from"./input-CFaQgGx5.js";import{u as ae,c as oe,a as re,d as se}from"./energyUser-DEVB5SRj.js";import{h as C}from"./handleError-DD4JYoq7.js";import{d as le}from"./DebounceAndThrottle-B_grFKK4.js";/* empty css             *//* empty css                 *//* empty css                   */import{E}from"./index-KJp6TXG9.js";import{E as ie}from"./index-slq3sC_j.js";import{E as ue}from"./index-A4BGBRGh.js";import{E as de}from"./index-aFn2MKle.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-CuyxIfpa.js";import"./_baseIteratee-CkjM3wkz.js";import"./_Uint8Array-B6mJ0Xm4.js";import"./isEqual-BM-Gj-iT.js";import"./index-zrRcpBp4.js";import"./_initCloneObject-nnMrnZRY.js";import"./use-form-item-50hJ8Ppj.js";import"./index-AkNVqhGZ.js";import"./aria-BUADUvnR.js";import"./focus-trap-Ddg061Nm.js";import"./icon-6zrsquxY.js";import"./index-iw6eP590.js";/* empty css                        */import"./index-CWCMyxJA.js";import"./index-DZY-cmUL.js";import"./scroll-BawlEUY1.js";import"./vnode-DK7gyQZj.js";import"./validator-ulZFuTQV.js";const ce={class:"energy-users-container"},me={class:"header-operations"},pe={key:0},fe={key:1},_e={__name:"index",setup(ge){const x={mounted:t=>O(()=>t.querySelector("input").focus())},n=ae(),w=q(),u=g(null),d=g(""),s=g(!1),p=g(null);M(()=>w.currentCompany.id,()=>{n.fetchEnergyUsers()},{immediate:!0});const N=le(()=>{n.fetchEnergyUsers()},300),B=()=>{n.searchTerm="",n.sortConfig={prop:"unknown_ratio",order:"descending"},p.value&&(p.value.clearFilter(),p.value.sort("unknown_ratio","descending")),n.fetchEnergyUsers()},S=({prop:t,order:e})=>{n.sortConfig={prop:t||"unknown_ratio",order:e||"descending"}},T=(t,e)=>t===1?Number(e.unknown_ratio)>0:Number(e.unknown_ratio)===0,V=(t,e)=>n.energyUserList.some(l=>l.name===t&&l.id!==e),I=()=>{if(s.value)return;const t={id:"temp_"+Date.now(),name:"",unknown_ratio:"0"};n.energyUserList.unshift(t),u.value=t.id,d.value="",s.value=!0},z=t=>{u.value=t.id,d.value=t.name,s.value=!1},U=async t=>{const e=d.value.trim();if(!e){s.value&&(n.energyUserList=n.energyUserList.filter(l=>l.id!==t.id)),u.value=null,s.value=!1;return}if(V(e,t.id)){E.error("用能户名称不能重复"),s.value||(u.value=null),d.value=t.name;return}if(!s.value&&e===t.name){u.value=null;return}n.loading=!0;try{s.value?(await oe({company_id:w.currentCompany.id,name:e,unknown_ratio:"0"}),E.success("添加成功")):(await re({id:t.id,name:e}),E.success("保存成功")),await n.fetchEnergyUsers(),u.value=null,s.value=!1}catch(l){C(l,s.value?"添加用能户失败":"保存用能户失败")}finally{n.loading=!1}},D=async t=>{try{await ie.confirm("确认删除该用能户吗？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),n.loading=!0;try{await se({id:""+t.id}),await n.fetchEnergyUsers(),E.success("删除成功")}catch(e){C(e,"删除用能户失败")}finally{n.loading=!1}}catch{}};return(t,e)=>{const l=ne,L=ue,f=te,_=Z,A=de,R=ee,$=X,F=Q;return y(),h(H,null,[e[6]||(e[6]=v("div",{class:"page-title"},[v("span",{class:"title"},"用能户管理")],-1)),v("div",ce,[b((y(),Y($,null,{header:r(()=>[v("div",me,[o(l,{modelValue:i(n).searchTerm,"onUpdate:modelValue":e[0]||(e[0]=a=>i(n).searchTerm=a),placeholder:"搜索用能户...",class:"search-input","prefix-icon":i(j),size:"small",onInput:i(N)},null,8,["modelValue","prefix-icon","onInput"]),o(f,{type:"primary",size:"small",onClick:I},{default:r(()=>[o(L,null,{default:r(()=>[o(i(J))]),_:1}),e[2]||(e[2]=c("添加用能户 "))]),_:1}),o(f,{type:"info",size:"small",onClick:B},{default:r(()=>e[3]||(e[3]=[c("重置")])),_:1})])]),default:r(()=>[o(R,{data:i(n).filteredEnergyUsers,style:{width:"100%"},ref_key:"tableRef",ref:p},{default:r(()=>[o(_,{align:"center",label:"名称"},{default:r(({row:a})=>[u.value===a.id?(y(),h("div",pe,[b(o(l,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=m=>d.value=m),size:"small",onBlur:m=>U(a),onKeyup:P(m=>U(a),["enter"])},null,8,["modelValue","onBlur","onKeyup"]),[[x]])])):(y(),h("span",fe,k(a.name),1))]),_:1}),o(_,{align:"center",label:"不明水分摊比例",sortable:"custom",prop:"unknown_ratio","default-sort":{prop:"unknown_ratio",order:"descending"},"sort-orders":["descending","ascending"],onSortChange:S},{default:r(({row:a})=>[c(k(a.unknown_ratio)+"% ",1)]),_:1}),o(_,{align:"center",label:"是否参与不明水分摊",filters:[{text:"参与",value:1},{text:"不参与",value:0}],"filter-method":T},{default:r(({row:a})=>[o(A,{type:Number(a.unknown_ratio)>0?"success":"info"},{default:r(()=>[c(k(Number(a.unknown_ratio)>0?"参与":"不参与"),1)]),_:2},1032,["type"])]),_:1}),o(_,{align:"center",label:"操作"},{default:r(({row:a})=>[o(f,{type:"primary",size:"small",icon:i(W),onClick:m=>z(a)},{default:r(()=>e[4]||(e[4]=[c("编辑")])),_:2},1032,["icon","onClick"]),o(f,{type:"danger",size:"small",icon:i(G),onClick:m=>D(a)},{default:r(()=>e[5]||(e[5]=[c("删除")])),_:2},1032,["icon","onClick"])]),_:1})]),_:1},8,["data"])]),_:1})),[[F,i(n).loading]])])],64)}}},nt=K(_e,[["__scopeId","data-v-ed511962"]]);export{nt as default};