import{F as c,ax as p,bI as z,bJ as F,aw as a,I as v,r as d,bK as K,o as h,w as j,ak as w,b as S}from"./index-Bx6Y8L80.js";const b=s=>{const e=p();return c(()=>{var o,n;return(n=(o=e==null?void 0:e.proxy)==null?void 0:o.$props)==null?void 0:n[s]})},m={prefix:Math.floor(Math.random()*1e4),current:0},_=Symbol("elIdInjection"),R=()=>p()?a(_,m):m,$=s=>{const e=R(),o=z();return F(()=>v(s)||`${o.value}-id-${e.prefix}-${e.current++}`)},f=Symbol("formContextKey"),y=Symbol("formItemContextKey"),E=(s,e={})=>{const o=d(void 0),n=e.prop?o:b("size"),u=e.global?o:K(),t=e.form?{size:void 0}:a(f,void 0),i=e.formItem?{size:void 0}:a(y,void 0);return c(()=>n.value||v(s)||(i==null?void 0:i.size)||(t==null?void 0:t.size)||u.value||"")},N=s=>{const e=b("disabled"),o=a(f,void 0);return c(()=>e.value||v(s)||(o==null?void 0:o.disabled)||!1)},J=()=>{const s=a(f,void 0),e=a(y,void 0);return{form:s,formItem:e}},L=(s,{formItemContext:e,disableIdGeneration:o,disableIdManagement:n})=>{o||(o=d(!1)),n||(n=d(!1));const u=d();let t;const i=c(()=>{var l;return!!(!(s.label||s.ariaLabel)&&e&&e.inputIds&&((l=e.inputIds)==null?void 0:l.length)<=1)});return h(()=>{t=j([w(s,"id"),o],([l,I])=>{const r=l??(I?void 0:$().value);r!==u.value&&(e!=null&&e.removeInputId&&(u.value&&e.removeInputId(u.value),!(n!=null&&n.value)&&!I&&r&&e.addInputId(r)),u.value=r)},{immediate:!0})}),S(()=>{t&&t(),e!=null&&e.removeInputId&&u.value&&e.removeInputId(u.value)}),{isLabeledByFormItem:i,inputId:u}};export{E as a,N as b,J as c,L as d,y as e,f,R as g,$ as u};