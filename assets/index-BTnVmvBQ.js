import{f as v}from"./index-Ci2yyUHC.js";import{ae as C,r as m,w as g,az as f,ax as F,ab as b}from"./index-oALI6hjD.js";const x=s=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(s),k=s=>s;function A(s,{beforeFocus:a,afterFocus:t,beforeBlur:i,afterBlur:u}={}){const r=F(),{emit:p}=r,o=C(),l=m(!1),c=n=>{f(a)&&a(n)||l.value||(l.value=!0,p("focus",n),t==null||t())},d=n=>{var e;f(i)&&i(n)||n.relatedTarget&&((e=o.value)!=null&&e.contains(n.relatedTarget))||(l.value=!1,p("blur",n),u==null||u())},h=()=>{var n,e;(n=o.value)!=null&&n.contains(document.activeElement)&&o.value!==document.activeElement||(e=s.value)==null||e.focus()};return g(o,n=>{n&&n.setAttribute("tabindex","-1")}),v(o,"focus",c,!0),v(o,"blur",d,!0),v(o,"click",h,!0),{isFocused:l,wrapperRef:o,handleFocus:c,handleBlur:d}}function T({afterComposition:s,emit:a}){const t=m(!1),i=o=>{a==null||a("compositionstart",o),t.value=!0},u=o=>{var l;a==null||a("compositionupdate",o);const c=(l=o.target)==null?void 0:l.value,d=c[c.length-1]||"";t.value=!x(d)},r=o=>{a==null||a("compositionend",o),t.value&&(t.value=!1,b(()=>s(o)))};return{isComposing:t,handleComposition:o=>{o.type==="compositionend"?r(o):u(o)},handleCompositionStart:i,handleCompositionUpdate:u,handleCompositionEnd:r}}export{A as a,k as m,T as u};
