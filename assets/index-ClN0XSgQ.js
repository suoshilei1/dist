import{z as M,A as N,D as v,E as V,F as w,c as t,d as I,e as l,M as f,N as o,I as a,J as c,j as r,i as k,aQ as g,k as y,h as b,n as C,bl as $,O as F}from"./index-oALI6hjD.js";import{E as h}from"./index-DXOgsKzf.js";import{_ as P}from"./plugin-vue_export-helper-CqGSI99y.js";import{a as j}from"./use-form-item-CJ5jT23N.js";const A=M({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:N},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),D={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},J=v({name:"ElTag"}),K=v({...J,props:A,emits:D,setup(n,{emit:i}){const E=n,_=j(),s=V("tag"),u=w(()=>{const{type:e,hit:m,effect:z,closable:B,round:T}=E;return[s.b(),s.is("closable",B),s.m(e||"primary"),s.m(_.value),s.m(z),s.is("hit",m),s.is("round",T)]}),p=e=>{i("close",e)},d=e=>{i("click",e)},S=e=>{e.component.subTree.component.bum=null};return(e,m)=>e.disableTransitions?(t(),I("span",{key:0,class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[f(e.$slots,"default")],2),e.closable?(t(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(t(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:S},{default:r(()=>[l("span",{class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[f(e.$slots,"default")],2),e.closable?(t(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)]),_:3},8,["name"]))}});var O=P(K,[["__file","tag.vue"]]);const L=F(O);export{L as E,A as t};