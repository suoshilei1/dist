import{z as P,C as B,a8 as _,c1 as $,r as c,b8 as q,c2 as Z,F as D,H as j,w as x,ac as G,o as H,ax as J,bq as F,aE as K}from"./index-Bx6Y8L80.js";import{i as Q}from"./icon-6zrsquxY.js";import{U as T}from"./index-CuyxIfpa.js";import{u as I}from"./use-form-item-50hJ8Ppj.js";import{a as W}from"./index-DZY-cmUL.js";import{i as X}from"./popper-DBn8ulUn.js";const Y=P({center:Boolean,alignCenter:Boolean,closeIcon:{type:Q},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),se={close:()=>!0},ue=P({...Y,appendToBody:Boolean,appendTo:{type:B([String,Object]),default:"body"},beforeClose:{type:B(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),ie={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[T]:e=>_(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ce=(e,a)=>{var m;const l=J().emit,{nextZIndex:C}=$();let p="";const E=I(),O=I(),n=c(!1),r=c(!1),i=c(!1),d=c((m=e.zIndex)!=null?m:C());let s,u;const S=q("namespace",Z),h=D(()=>{const o={},t=`--${S.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=j(e.width))),o}),w=D(()=>e.alignCenter?{display:"flex"}:{});function A(){l("opened")}function k(){l("closed"),l(T,!1),e.destroyOnClose&&(i.value=!1)}function L(){l("close")}function b(){u==null||u(),s==null||s(),e.openDelay&&e.openDelay>0?{stop:s}=F(()=>g(),e.openDelay):g()}function f(){s==null||s(),u==null||u(),e.closeDelay&&e.closeDelay>0?{stop:u}=F(()=>v(),e.closeDelay):v()}function y(){function o(t){t||(r.value=!0,n.value=!1)}e.beforeClose?e.beforeClose(o):f()}function N(){e.closeOnClickModal&&y()}function g(){K&&(n.value=!0)}function v(){n.value=!1}function z(){l("openAutoFocus")}function M(){l("closeAutoFocus")}function U(o){var t;((t=o.detail)==null?void 0:t.focusReason)==="pointer"&&o.preventDefault()}e.lockScroll&&W(n);function V(){e.closeOnPressEscape&&y()}return x(()=>e.modelValue,o=>{o?(r.value=!1,b(),i.value=!0,d.value=X(e.zIndex)?C():d.value++,G(()=>{l("open"),a.value&&(a.value.scrollTop=0)})):n.value&&f()}),x(()=>e.fullscreen,o=>{a.value&&(o?(p=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=p)}),H(()=>{e.modelValue&&(n.value=!0,i.value=!0,b())}),{afterEnter:A,afterLeave:k,beforeLeave:L,handleClose:y,onModalClick:N,close:f,doClose:v,onOpenAutoFocus:z,onCloseAutoFocus:M,onCloseRequested:V,onFocusoutPrevented:U,titleId:E,bodyId:O,closed:r,style:h,overlayDialogStyle:w,rendered:i,visible:n,zIndex:d}};export{se as a,ue as b,ie as c,Y as d,ce as u};