import{z as Z,C as _,ad as V,G as E,B as S,D as G,E as x,F as d,r as T,H as ee,w as O,ae as L,o as ae,c as i,d as v,e as C,I as a,N as u,an as ie,J as c,l as m,K as y,h as r,g as N,k as te,az as ne,M as U,n as oe,m as se,ai as le,aN as $,b9 as ce,O as re}from"./index-DWtISIBF.js";import{E as p}from"./index-CuP5NVML.js";import{i as ue}from"./validator-CunO4hgy.js";import{i as g}from"./icon-Cc3ZZocH.js";import{u as de,U as P,C as B,I as A}from"./index-CVAPKPs0.js";import{_ as ve}from"./plugin-vue_export-helper-CqGSI99y.js";import{c as fe,a as me,d as pe,b as he}from"./use-form-item-CuJrx89H.js";const ye=Z({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:ue},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:_(Function)},id:String,tabindex:{type:[String,Number]},...de(["ariaLabel"])}),be={[P]:s=>V(s)||E(s)||S(s),[B]:s=>V(s)||E(s)||S(s),[A]:s=>V(s)||E(s)||S(s)},z="ElSwitch",Ie=G({name:z}),ke=G({...Ie,props:ye,emits:be,setup(s,{expose:H,emit:f}){const n=s,{formItem:b}=fe(),J=me(),t=x("switch"),{inputId:R}=pe(n,{formItemContext:b}),I=he(d(()=>n.loading)),D=T(n.modelValue!==!1),h=T(),W=T(),j=d(()=>[t.b(),t.m(J.value),t.is("disabled",I.value),t.is("checked",o.value)]),q=d(()=>[t.e("label"),t.em("label","left"),t.is("active",!o.value)]),Q=d(()=>[t.e("label"),t.em("label","right"),t.is("active",o.value)]),X=d(()=>({width:ee(n.width)}));O(()=>n.modelValue,()=>{D.value=!0});const K=d(()=>D.value?n.modelValue:!1),o=d(()=>K.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(K.value)||(f(P,n.inactiveValue),f(B,n.inactiveValue),f(A,n.inactiveValue)),O(o,e=>{var l;h.value.checked=e,n.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(M=>L(M)))});const k=()=>{const e=o.value?n.inactiveValue:n.activeValue;f(P,e),f(B,e),f(A,e),le(()=>{h.value.checked=o.value})},F=()=>{if(I.value)return;const{beforeChange:e}=n;if(!e){k();return}const l=e();[$(l),V(l)].includes(!0)||ce(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),$(l)?l.then(w=>{w&&k()}).catch(w=>{L(z,`some error occurred: ${w}`)}):l&&k()},Y=()=>{var e,l;(l=(e=h.value)==null?void 0:e.focus)==null||l.call(e)};return ae(()=>{h.value.checked=o.value}),H({focus:Y,checked:o}),(e,l)=>(i(),v("div",{class:u(a(j)),onClick:se(F,["prevent"])},[C("input",{id:a(R),ref_key:"input",ref:h,class:u(a(t).e("input")),type:"checkbox",role:"switch","aria-checked":a(o),"aria-disabled":a(I),"aria-label":e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(I),tabindex:e.tabindex,onChange:k,onKeydown:ie(F,["enter"])},null,42,["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"]),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(q))},[e.inactiveIcon?(i(),c(a(p),{key:0},{default:m(()=>[(i(),c(y(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(o)},N(e.inactiveText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),C("span",{ref_key:"core",ref:W,class:u(a(t).e("core")),style:oe(a(X))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(p),{key:0,class:u(a(t).is("icon"))},{default:m(()=>[(i(),c(y(a(o)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(t).is("text")),"aria-hidden":!a(o)},N(a(o)?e.activeText:e.inactiveText),11,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),C("div",{class:u(a(t).e("action"))},[e.loading?(i(),c(a(p),{key:0,class:u(a(t).is("loading"))},{default:m(()=>[te(a(ne))]),_:1},8,["class"])):a(o)?U(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(p),{key:0},{default:m(()=>[(i(),c(y(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(o)?r("v-if",!0):U(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(p),{key:0},{default:m(()=>[(i(),c(y(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(Q))},[e.activeIcon?(i(),c(a(p),{key:0},{default:m(()=>[(i(),c(y(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(o)},N(e.activeText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0)],10,["onClick"]))}});var ge=ve(ke,[["__file","switch.vue"]]);const Pe=re(ge);export{Pe as E};