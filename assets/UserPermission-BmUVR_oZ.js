import{_ as T,s as b,r as m,o as N,c as f,d as u,X as A,e as a,g as _,i as h,j as y,I as R,f as S,cA as D,cB as L,y as M,v as V}from"./index-oALI6hjD.js";import{E as H}from"./button-CW4VZptJ.js";import{E as I}from"./tree-DFq1abUa.js";import"./checkbox-eAiA7KBF.js";import{h as U}from"./handleError-BVJ6YTlw.js";/* empty css             *//* empty css                   *//* empty css                 */import{E as j}from"./index-DKbZ_y2J.js";import{E as v}from"./index-CV7ElbEQ.js";import"./index-DXOgsKzf.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-GdZBC0LW.js";import"./use-form-item-CJ5jT23N.js";import"./icon-DFUaFmZd.js";import"./select-B0JZ5Vmm.js";import"./popper-8tqvLSZz.js";import"./index-Ci2yyUHC.js";import"./aria-BUADUvnR.js";import"./focus-trap-B9jhWFgs.js";import"./scrollbar-BwLVa3O8.js";import"./index-ClN0XSgQ.js";import"./castArray-DuUCQlE9.js";import"./index-BTnVmvBQ.js";import"./scroll-BUhzRsoy.js";import"./isEqual-DERyOhzh.js";import"./_Uint8Array-Cyhry7Ym.js";import"./_baseIteratee-_-ChXyeP.js";import"./index-CPa7yTdP.js";/* empty css                        */import"./index-BFWR71cx.js";import"./input-_j8YarB1.js";import"./index-JdeAZNwx.js";import"./vnode-DAFY4x8G.js";import"./validator-DaZaXEYL.js";const z={class:"permission-management"},X={class:"permission-tree-container"},q={style:{"margin-bottom":"1rem"}},F={class:"permission-node"},G={class:"actions"},J={__name:"UserPermission",props:["userinfo"],setup(g){const k=b(),o=m(null),x={children:"children",label:"label"};let n=g;const p=m(null),c=m(!1),E=async()=>{var t;try{c.value=!0;let e=await D({id:n.userinfo.id}),s=await L({username:n.userinfo.username});p.value=s.data[0];let r=e.data;(t=o.value)==null||t.setCheckedKeys(r)}catch(e){U(e)}finally{c.value=!1}},w=async()=>{var t,e;try{const s=((t=o.value)==null?void 0:t.getCheckedKeys())||[],r=((e=o.value)==null?void 0:e.getHalfCheckedKeys())||[],i=K=>K.filter(P=>{const d=o.value.getNode(P);return!d.childNodes||d.childNodes.length===0}),l=i(s),B=i(r),C=[...l,...B];await j.confirm("确定要保存权限更改吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await M({user_id:n.userinfo.id,permissions:C}),v.success("权限保存成功")}catch(s){s!=="cancel"&&v.error("保存失败："+s.message)}};return N(()=>{E()}),(t,e)=>{const s=I,r=H,i=V;return f(),u("div",z,[A((f(),u("div",X,[a("span",q,"当前权限："+_(p.value),1),h(s,{ref_key:"permissionTreeRef",ref:o,data:R(k).permissionTreeData,props:x,"show-checkbox":"","node-key":"code","default-expand-all":"","check-strictly":!1},{default:y(({node:l})=>[a("div",F,[a("span",null,_(l.label),1)])]),_:1},8,["data"])])),[[i,c.value]]),a("div",G,[h(r,{type:"primary",onClick:w},{default:y(()=>e[0]||(e[0]=[S("保存权限设置")])),_:1})])])}}},be=T(J,[["__scopeId","data-v-49b36718"]]);export{be as default};
