import{_ as N,D as x,r as h,F as k,w as B,c as d,d as l,g as f,h as y,k as F,l as V,e as $}from"./index-DWtISIBF.js";/* empty css                */import{E as A}from"./popper-BNb2tGl7.js";const C=x({name:"AnimatedNumber",props:{value:{type:[Number,String],required:!0},duration:{type:Number,default:1e3},prefix:{type:String,default:""},suffix:{type:String,default:""},decimals:{type:Number,default:2},useGrouping:{type:Boolean,default:!0}},emits:["end"],setup(e,{emit:p}){const s=h(0),_=k(()=>{const t=Number(s.value).toFixed(e.decimals);if(!e.useGrouping)return t;const[n,r]=t.split("."),a=n.replace(/\B(?=(\d{3})+(?!\d))/g,",");return r?`${a}.${r}`:a}),g=t=>{const n=s.value,r=performance.now();let a;const u=o=>{const i=o-r;if(i<e.duration){const c=i/e.duration,b=v(.25,.1,.25,1,c);s.value=n+(t-n)*b,a=requestAnimationFrame(u)}else s.value=t,p("end")};a&&cancelAnimationFrame(a),a=requestAnimationFrame(u)},v=(t,n,r,a,u)=>{const o=3*n,i=3*(a-n)-o,c=1-o-i;return(m=>((c*m+i)*m+o)*m)(u)};return B(()=>e.value,t=>{t!=null&&g(Number(t))},{immediate:!0}),{formattedValue:_}}}),S={class:"animated-number"},q={key:0,class:"prefix"},D={class:"value number-display"},E={key:1,class:"suffix"};function I(e,p,s,_,g,v){const t=A;return d(),l("div",S,[e.prefix?(d(),l("span",q,f(e.prefix),1)):y("",!0),F(t,{effect:"dark",content:e.formattedValue},{default:V(()=>[$("span",D,f(e.formattedValue),1)]),_:1},8,["content"]),e.suffix?(d(),l("span",E,f(e.suffix),1)):y("",!0)])}const T=N(C,[["render",I],["__scopeId","data-v-429531d6"],["__file","D:/临时存放/green-carbon-1.0/src/components/animate/AnimatedNumber.vue"]]);export{T as _};