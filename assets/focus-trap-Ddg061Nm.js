import{o as N,aE as $,ab as R,r as _,D as te,aC as ne,w,I as T,a_ as se,M as oe,ac as M,G as re}from"./index-Bx6Y8L80.js";import{_ as ae}from"./plugin-vue_export-helper-CqGSI99y.js";import{E as Q}from"./aria-BUADUvnR.js";const ce='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',ue=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,we=e=>Array.from(e.querySelectorAll(ce)).filter(n=>ie(n)&&ue(n)),ie=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.tabIndex<0||e.hasAttribute("disabled")||e.getAttribute("aria-disabled")==="true")return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},de=e=>!e.getAttribute("aria-owns"),Ae=(e,n,s)=>{const{parentNode:o}=e;if(!o)return null;const a=o.querySelectorAll(s),c=Array.prototype.indexOf.call(a,e);return a[c+n]||null},Oe=e=>{e&&(e.focus(),!de(e)&&e.click())};let E=[];const q=e=>{const n=e;n.key===Q.esc&&E.forEach(s=>s(n))},fe=e=>{N(()=>{E.length===0&&document.addEventListener("keydown",q),$&&E.push(e)}),R(()=>{E=E.filter(n=>n!==e),E.length===0&&$&&document.removeEventListener("keydown",q)})},A="focus-trap.focus-after-trapped",O="focus-trap.focus-after-released",le="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},ve={cancelable:!0,bubbles:!1},W="focusAfterTrapped",G="focusAfterReleased",Ee=Symbol("elFocusTrap"),I=_(),S=_(0),k=_(0);let b=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},J=(e,n)=>{for(const s of e)if(!pe(s,n))return s},pe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},me=e=>{const n=Z(e),s=J(n,e),o=J(n.reverse(),e);return[s,o]},Te=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),k.value=window.performance.now(),e!==s&&Te(e)&&n&&e.select()}};function X(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const be=()=>{let e=[];return{push:o=>{const a=e[0];a&&o!==a&&a.pause(),e=X(e,o),e.unshift(o)},remove:o=>{var a,c;e=X(e,o),(c=(a=e[0])==null?void 0:a.resume)==null||c.call(a)}}},Fe=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},Y=be(),ye=()=>S.value>k.value,F=()=>{I.value="pointer",S.value=window.performance.now()},z=()=>{I.value="keyboard",S.value=window.performance.now()},_e=()=>(N(()=>{b===0&&(document.addEventListener("mousedown",F),document.addEventListener("touchstart",F),document.addEventListener("keydown",z)),b++}),R(()=>{b--,b<=0&&(document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",z))}),{focusReason:I,lastUserFocusTimestamp:S,lastAutomatedFocusTimestamp:k}),y=e=>new CustomEvent(le,{...ve,detail:e}),Se=te({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,G,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=_();let o,a;const{focusReason:c}=_e();fe(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},p=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:r,altKey:u,ctrlKey:i,metaKey:d,currentTarget:B,shiftKey:V}=t,{loop:H}=e,ee=r===Q.tab&&!u&&!i&&!d,m=document.activeElement;if(ee&&m){const P=B,[g,C]=me(P);if(g&&C){if(!V&&m===C){const f=y({focusReason:c.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),H&&l(g,!0))}else if(V&&[g,P].includes(m)){const f=y({focusReason:c.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),H&&l(C,!0))}}else if(m===P){const f=y({focusReason:c.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};ne(Ee,{focusTrapRef:s,onKeydown:p}),w(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),w([s],([t],[r])=>{t&&(t.addEventListener("keydown",p),t.addEventListener("focusin",L),t.addEventListener("focusout",h)),r&&(r.removeEventListener("keydown",p),r.removeEventListener("focusin",L),r.removeEventListener("focusout",h))});const U=t=>{n(W,t)},x=t=>n(G,t),L=t=>{const r=T(s);if(!r)return;const u=t.target,i=t.relatedTarget,d=u&&r.contains(u);e.trapped||i&&r.contains(i)||(o=i),d&&n("focusin",t),!v.paused&&e.trapped&&(d?a=u:l(a,!0))},h=t=>{const r=T(s);if(!(v.paused||!r))if(e.trapped){const u=t.relatedTarget;!se(u)&&!r.contains(u)&&setTimeout(()=>{if(!v.paused&&e.trapped){const i=y({focusReason:c.value});n("focusout-prevented",i),i.defaultPrevented||l(a,!0)}},0)}else{const u=t.target;u&&r.contains(u)||n("focusout",t)}};async function K(){await M();const t=T(s);if(t){Y.push(v);const r=t.contains(document.activeElement)?o:document.activeElement;if(o=r,!t.contains(r)){const i=new Event(A,j);t.addEventListener(A,U),t.dispatchEvent(i),i.defaultPrevented||M(()=>{let d=e.focusStartEl;re(d)||(l(d),document.activeElement!==d&&(d="first")),d==="first"&&Fe(Z(t),!0),(document.activeElement===r||d==="container")&&l(t)})}}}function D(){const t=T(s);if(t){t.removeEventListener(A,U);const r=new CustomEvent(O,{...j,detail:{focusReason:c.value}});t.addEventListener(O,x),t.dispatchEvent(r),!r.defaultPrevented&&(c.value=="keyboard"||!ye()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(O,x),Y.remove(v)}}return N(()=>{e.trapped&&K(),w(()=>e.trapped,t=>{t?K():D()})}),R(()=>{e.trapped&&D(),s.value&&(s.value.removeEventListener("keydown",p),s.value.removeEventListener("focusin",L),s.value.removeEventListener("focusout",h),s.value=void 0)}),{onKeydown:p}}});function Le(e,n,s,o,a,c){return oe(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ne=ae(Se,[["render",Le],["__file","focus-trap.vue"]]);export{Ne as E,Ee as F,ie as a,Oe as f,Ae as g,de as i,we as o};