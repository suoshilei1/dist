import{z as H,D as A,aR as O,F as v,r as E,E as q,ap as M,H as V,c as o,J as U,j as l,i,bl as j,I as e,Y as J,e as C,al as Q,k as Y,N as t,d,M as f,g as _,h as r,aQ as G,a2 as K,O as W}from"./index-Bx6Y8L80.js";import{E as X}from"./index-DZY-cmUL.js";import{d as Z}from"./popper-DBn8ulUn.js";import{E as x}from"./index-A4BGBRGh.js";import{b as ee,c as ae,u as se}from"./overlay-04qnzRyj.js";import{_ as te}from"./plugin-vue_export-helper-CqGSI99y.js";import{u as oe}from"./index-AkNVqhGZ.js";import{E as re}from"./focus-trap-Ddg061Nm.js";const le=H({...ee,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),ie=ae,de=A({name:"ElDrawer",inheritAttrs:!1}),ne=A({...de,props:le,emits:ie,setup(g,{expose:R}){const n=g,F=O();oe({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},v(()=>!!F.title));const u=E(),b=E(),s=q("drawer"),{t:S}=M(),{afterEnter:y,afterLeave:h,beforeLeave:D,visible:c,rendered:L,titleId:p,bodyId:k,zIndex:T,onModalClick:z,onOpenAutoFocus:B,onCloseAutoFocus:P,onFocusoutPrevented:$,onCloseRequested:I,handleClose:m}=se(n,u),N=v(()=>n.direction==="rtl"||n.direction==="ltr"),w=v(()=>V(n.size));return R({handleClose:m,afterEnter:y,afterLeave:h}),(a,ue)=>(o(),U(e(Z),{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},{default:l(()=>[i(j,{name:e(s).b("fade"),onAfterEnter:e(y),onAfterLeave:e(h),onBeforeLeave:e(D),persisted:""},{default:l(()=>[J(i(e(X),{mask:a.modal,"overlay-class":a.modalClass,"z-index":e(T),onClick:e(z)},{default:l(()=>[i(e(re),{loop:"",trapped:e(c),"focus-trap-el":u.value,"focus-start-el":b.value,onFocusAfterTrapped:e(B),onFocusAfterReleased:e(P),onFocusoutPrevented:e($),onReleaseRequested:e(I)},{default:l(()=>[C("div",Q({ref_key:"drawerRef",ref:u,"aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:e(p),"aria-describedby":e(k)},a.$attrs,{class:[e(s).b(),a.direction,e(c)&&"open"],style:e(N)?"width: "+e(w):"height: "+e(w),role:"dialog",onClick:Y(()=>{},["stop"])}),[C("span",{ref_key:"focusStartRef",ref:b,class:t(e(s).e("sr-focus")),tabindex:"-1"},null,2),a.withHeader?(o(),d("header",{key:0,class:t(e(s).e("header"))},[a.$slots.title?f(a.$slots,"title",{key:1},()=>[r(" DEPRECATED SLOT ")]):f(a.$slots,"header",{key:0,close:e(m),titleId:e(p),titleClass:e(s).e("title")},()=>[a.$slots.title?r("v-if",!0):(o(),d("span",{key:0,id:e(p),role:"heading","aria-level":a.headerAriaLevel,class:t(e(s).e("title"))},_(a.title),11,["id","aria-level"]))]),a.showClose?(o(),d("button",{key:2,"aria-label":e(S)("el.drawer.close"),class:t(e(s).e("close-btn")),type:"button",onClick:e(m)},[i(e(x),{class:t(e(s).e("close"))},{default:l(()=>[i(e(G))]),_:1},8,["class"])],10,["aria-label","onClick"])):r("v-if",!0)],2)):r("v-if",!0),e(L)?(o(),d("div",{key:1,id:e(k),class:t(e(s).e("body"))},[f(a.$slots,"default")],10,["id"])):r("v-if",!0),a.$slots.footer?(o(),d("div",{key:2,class:t(e(s).e("footer"))},[f(a.$slots,"footer")],2)):r("v-if",!0)],16,["aria-label","aria-labelledby","aria-describedby","onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[K,e(c)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var fe=te(ne,[["__file","drawer.vue"]]);const we=W(fe);export{we as E};