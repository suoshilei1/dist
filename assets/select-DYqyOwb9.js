import{cg as _l,aB as ye,F as i,af as q,bg as xl,ch as Q,w as U,aC as Te,D as ae,E as te,I as Ve,a as ne,t as $e,ah as et,ai as F,Y as le,a5 as ke,c as m,d as V,M as k,e as $,g as N,N as d,m as B,r as I,o as Me,h as T,n as he,au as lt,aM as tt,aw as P,aF as me,bG as xe,ae as nt,aJ as at,B as st,T as ot,aE as ee,ci as Ie,G as it,z as rt,ac as ut,C as be,aO as dt,aP as ct,aK as pt,aH as ol,j as A,X as ft,k as H,l as D,U as el,V as ll,f as tl,J as z,an as x,aQ as vt,K as Ee,cj as mt,O as bt,as as il}from"./index-DWtISIBF.js";import{u as ht,a as gt,E as yt}from"./popper-BNb2tGl7.js";import{d as St,E as Ct}from"./scrollbar-BMOxp_jN.js";import{t as nl,E as Ot}from"./index-0A8HTOTd.js";import{E as wt}from"./index-CuP5NVML.js";import{c as W}from"./castArray-6TPyo715.js";import{_ as Se}from"./plugin-vue_export-helper-CqGSI99y.js";import{u as rl,c as Vt,d as It,a as Et}from"./use-form-item-CuJrx89H.js";import{b as G,U as j,C as ul,u as Tt,j as $t}from"./index-CVAPKPs0.js";import{u as kt,a as Mt}from"./index-DibVzrKz.js";import{V as Rt,i as al}from"./icon-Cc3ZZocH.js";import{E as Dt}from"./aria-BUADUvnR.js";import{s as Lt}from"./scroll-DMdoCUCr.js";import{i as ge}from"./isEqual-DqXByToB.js";import{b as Bt}from"./_baseIteratee-FAqII4j1.js";import{C as Nt}from"./index-DfeXTFmx.js";function zt(e,o,a,b){e.length;for(var s=a+1;s--;)if(o(e[s],s,e))return s;return-1}function Ft(e,o,a){var b=e==null?0:e.length;if(!b)return-1;var s=b-1;return zt(e,Bt(o),s)}const Wt=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),hn=e=>_l(e),dl=Symbol("ElSelectGroup"),Ce=Symbol("ElSelect");function Pt(e,o){const a=ye(Ce),b=ye(dl,{disabled:!1}),s=i(()=>h(W(a.props.modelValue),e.value)),O=i(()=>{var p;if(a.props.multiple){const v=W((p=a.props.modelValue)!=null?p:[]);return!s.value&&v.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),t=i(()=>e.label||(q(e.value)?"":e.value)),f=i(()=>e.value||e.label||""),c=i(()=>e.disabled||o.groupDisabled||O.value),g=Te(),h=(p=[],v)=>{if(q(e.value)){const u=a.props.valueKey;return p&&p.some(E=>xl(Q(E,u))===Q(v,u))}else return p&&p.includes(v)},y=()=>{!e.disabled&&!b.disabled&&(a.states.hoveringIndex=a.optionsArray.indexOf(g.proxy))},C=p=>{const v=new RegExp(Wt(p),"i");o.visible=v.test(t.value)||e.created};return U(()=>t.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),U(()=>e.value,(p,v)=>{const{remote:u,valueKey:E}=a.props;if(p!==v&&(a.onOptionDestroy(v,g.proxy),a.onOptionCreate(g.proxy)),!e.created&&!u){if(E&&q(p)&&q(v)&&p[E]===v[E])return;a.setSelected()}}),U(()=>b.disabled,()=>{o.groupDisabled=b.disabled},{immediate:!0}),{select:a,currentLabel:t,currentValue:f,itemSelected:s,isDisabled:c,hoverItem:y,updateOption:C}}const Kt=ae({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const o=te("select"),a=rl(),b=i(()=>[o.be("dropdown","item"),o.is("disabled",Ve(f)),o.is("selected",Ve(t)),o.is("hovering",Ve(C))]),s=ne({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:O,itemSelected:t,isDisabled:f,select:c,hoverItem:g,updateOption:h}=Pt(e,s),{visible:y,hover:C}=$e(s),p=Te().proxy;c.onOptionCreate(p),et(()=>{const u=p.value,{selected:E}=c.states,se=(c.props.multiple?E:[E]).some(oe=>oe.value===p.value);F(()=>{c.states.cachedOptions.get(u)===p&&!se&&c.states.cachedOptions.delete(u)}),c.onOptionDestroy(u,p)});function v(){f.value||c.handleOptionSelect(p)}return{ns:o,id:a,containerKls:b,currentLabel:O,itemSelected:t,isDisabled:f,select:c,hoverItem:g,updateOption:h,visible:y,hover:C,selectOptionClick:v,states:s}}});function At(e,o,a,b,s,O){return le((m(),V("li",{id:e.id,class:d(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:e.hoverItem,onClick:B(e.selectOptionClick,["stop"])},[k(e.$slots,"default",{},()=>[$("span",null,N(e.currentLabel),1)])],42,["id","aria-disabled","aria-selected","onMouseenter","onClick"])),[[ke,e.visible]])}var Re=Se(Kt,[["render",At],["__file","option.vue"]]);const Ht=ae({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ye(Ce),o=te("select"),a=i(()=>e.props.popperClass),b=i(()=>e.props.multiple),s=i(()=>e.props.fitInputWidth),O=I("");function t(){var f;O.value=`${(f=e.selectRef)==null?void 0:f.offsetWidth}px`}return Me(()=>{t(),G(e.selectRef,t)}),{ns:o,minWidth:O,popperClass:a,isMultiple:b,isFitInputWidth:s}}});function Gt(e,o,a,b,s,O){return m(),V("div",{class:d([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:he({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(m(),V("div",{key:0,class:d(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):T("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(m(),V("div",{key:1,class:d(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):T("v-if",!0)],6)}var Ut=Se(Ht,[["render",Gt],["__file","select-dropdown.vue"]]);const jt=11,qt=(e,o)=>{const{t:a}=lt(),b=rl(),s=te("select"),O=te("input"),t=ne({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:[],selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),f=I(null),c=I(null),g=I(null),h=I(null),y=I(null),C=I(null),p=I(null),v=I(null),u=I(null),E=I(null),J=I(null),se=I(null),{isComposing:oe,handleCompositionStart:pl,handleCompositionUpdate:fl,handleCompositionEnd:vl}=kt({afterComposition:l=>je(l)}),{wrapperRef:De,isFocused:Le,handleBlur:ml}=Mt(y,{beforeFocus(){return Z.value},afterFocus(){e.automaticDropdown&&!S.value&&(S.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var n,r;return((n=g.value)==null?void 0:n.isFocusInsideContent(l))||((r=h.value)==null?void 0:r.isFocusInsideContent(l))},afterBlur(){S.value=!1,t.menuVisibleOnFocus=!1}}),S=I(!1),X=I(),{form:Be,formItem:Y}=Vt(),{inputId:bl}=It(e,{formItemContext:Y}),{valueOnClear:hl,isEmptyValue:gl}=tt(e),Z=i(()=>e.disabled||(Be==null?void 0:Be.disabled)),Oe=i(()=>P(e.modelValue)?e.modelValue.length>0:!gl(e.modelValue)),yl=i(()=>e.clearable&&!Z.value&&t.inputHovering&&Oe.value),Ne=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Sl=i(()=>s.is("reverse",Ne.value&&S.value)),ze=i(()=>(Y==null?void 0:Y.validateState)||""),Cl=i(()=>Rt[ze.value]),Ol=i(()=>e.remote?300:0),Fe=i(()=>e.loading?e.loadingText||a("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&ie.value===0?e.noMatchText||a("el.select.noMatch"):t.options.size===0?e.noDataText||a("el.select.noData"):null),ie=i(()=>M.value.filter(l=>l.visible).length),M=i(()=>{const l=Array.from(t.options.values()),n=[];return t.optionValues.forEach(r=>{const w=l.findIndex(R=>R.value===r);w>-1&&n.push(l[w])}),n.length>=l.length?n:l}),wl=i(()=>Array.from(t.cachedOptions.values())),Vl=i(()=>{const l=M.value.filter(n=>!n.created).some(n=>n.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),We=()=>{e.filterable&&ee(e.filterMethod)||e.filterable&&e.remote&&ee(e.remoteMethod)||M.value.forEach(l=>{var n;(n=l.updateOption)==null||n.call(l,t.inputValue)})},Pe=Et(),Il=i(()=>["small"].includes(Pe.value)?"small":"default"),El=i({get(){return S.value&&Fe.value!==!1},set(l){S.value=l}}),Tl=i(()=>{if(e.multiple&&!me(e.modelValue))return W(e.modelValue).length===0&&!t.inputValue;const l=P(e.modelValue)?e.modelValue[0]:e.modelValue;return e.filterable||me(l)?!t.inputValue:!0}),$l=i(()=>{var l;const n=(l=e.placeholder)!=null?l:a("el.select.placeholder");return e.multiple||!Oe.value?n:t.selectedLabel}),kl=i(()=>xe?null:"mouseenter");U(()=>e.modelValue,(l,n)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",re("")),ue(),!ge(l,n)&&e.validateEvent&&(Y==null||Y.validate("change").catch(r=>nt(r)))},{flush:"post",deep:!0}),U(()=>S.value,l=>{l?re(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),o("visible-change",l)}),U(()=>t.options.entries(),()=>{var l;if(!at)return;const n=((l=f.value)==null?void 0:l.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!me(e.modelValue)||!Array.from(n).includes(document.activeElement))&&ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&ie.value&&Ke()},{flush:"post"}),U(()=>t.hoveringIndex,l=>{st(l)&&l>-1?X.value=M.value[l]||{}:X.value={},M.value.forEach(n=>{n.hover=X.value===n})}),ot(()=>{t.isBeforeHide||We()});const re=l=>{t.previousQuery===l||oe.value||(t.previousQuery=l,e.filterable&&ee(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&ee(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&ie.value?F(Ke):F(Ml))},Ke=()=>{const l=M.value.filter(R=>R.visible&&!R.disabled&&!R.states.groupDisabled),n=l.find(R=>R.created),r=l[0],w=M.value.map(R=>R.value);t.hoveringIndex=Xe(w,n||r)},ue=()=>{if(e.multiple)t.selectedLabel="";else{const n=P(e.modelValue)?e.modelValue[0]:e.modelValue,r=Ae(n);t.selectedLabel=r.currentLabel,t.selected=[r];return}const l=[];me(e.modelValue)||W(e.modelValue).forEach(n=>{l.push(Ae(n))}),t.selected=l},Ae=l=>{let n;const r=Ie(l).toLowerCase()==="object",w=Ie(l).toLowerCase()==="null",R=Ie(l).toLowerCase()==="undefined";for(let K=t.cachedOptions.size-1;K>=0;K--){const L=wl.value[K];if(r?Q(L.value,e.valueKey)===Q(l,e.valueKey):L.value===l){n={value:l,currentLabel:L.currentLabel,get isDisabled(){return L.isDisabled}};break}}if(n)return n;const fe=r?l.label:!w&&!R?l:"";return{value:l,currentLabel:fe}},Ml=()=>{t.hoveringIndex=M.value.findIndex(l=>t.selected.some(n=>pe(n)===pe(l)))},Rl=()=>{t.selectionWidth=c.value.getBoundingClientRect().width},He=()=>{t.calculatorWidth=C.value.getBoundingClientRect().width},Dl=()=>{t.collapseItemWidth=J.value.getBoundingClientRect().width},we=()=>{var l,n;(n=(l=g.value)==null?void 0:l.updatePopper)==null||n.call(l)},Ge=()=>{var l,n;(n=(l=h.value)==null?void 0:l.updatePopper)==null||n.call(l)},Ue=()=>{t.inputValue.length>0&&!S.value&&(S.value=!0),re(t.inputValue)},je=l=>{if(t.inputValue=l.target.value,e.remote)qe();else return Ue()},qe=St(()=>{Ue()},Ol.value),_=l=>{ge(e.modelValue,l)||o(ul,l)},Ll=l=>Ft(l,n=>!t.disabledOptions.has(n)),Bl=l=>{if(e.multiple&&l.code!==Dt.delete&&l.target.value.length<=0){const n=W(e.modelValue).slice(),r=Ll(n);if(r<0)return;const w=n[r];n.splice(r,1),o(j,n),_(n),o("remove-tag",w)}},Nl=(l,n)=>{const r=t.selected.indexOf(n);if(r>-1&&!Z.value){const w=W(e.modelValue).slice();w.splice(r,1),o(j,w),_(w),o("remove-tag",n.value)}l.stopPropagation(),ce()},Qe=l=>{l.stopPropagation();const n=e.multiple?[]:hl.value;if(e.multiple)for(const r of t.selected)r.isDisabled&&n.push(r.value);o(j,n),_(n),t.hoveringIndex=-1,S.value=!1,o("clear"),ce()},Je=l=>{var n;if(e.multiple){const r=W((n=e.modelValue)!=null?n:[]).slice(),w=Xe(r,l);w>-1?r.splice(w,1):(e.multipleLimit<=0||r.length<e.multipleLimit)&&r.push(l.value),o(j,r),_(r),l.created&&re(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else o(j,l.value),_(l.value),S.value=!1;ce(),!S.value&&F(()=>{de(l)})},Xe=(l=[],n)=>q(n==null?void 0:n.value)?l.findIndex(r=>ge(Q(r,e.valueKey),pe(n))):l.indexOf(n.value),de=l=>{var n,r,w,R,fe;const ve=P(l)?l[0]:l;let K=null;if(ve!=null&&ve.value){const L=M.value.filter(_e=>_e.value===ve.value);L.length>0&&(K=L[0].$el)}if(g.value&&K){const L=(R=(w=(r=(n=g.value)==null?void 0:n.popperRef)==null?void 0:r.contentRef)==null?void 0:w.querySelector)==null?void 0:R.call(w,`.${s.be("dropdown","wrap")}`);L&&Lt(L,K)}(fe=se.value)==null||fe.handleScroll()},zl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l),l.disabled&&t.disabledOptions.set(l.value,l)},Fl=(l,n)=>{t.options.get(l)===n&&t.options.delete(l)},Wl=i(()=>{var l,n;return(n=(l=g.value)==null?void 0:l.popperRef)==null?void 0:n.contentRef}),Pl=()=>{t.isBeforeHide=!1,F(()=>de(t.selected))},ce=()=>{var l;(l=y.value)==null||l.focus()},Kl=()=>{var l;if(S.value){S.value=!1,F(()=>{var n;return(n=y.value)==null?void 0:n.blur()});return}(l=y.value)==null||l.blur()},Al=l=>{Qe(l)},Hl=l=>{if(S.value=!1,Le.value){const n=new FocusEvent("focus",l);F(()=>ml(n))}},Gl=()=>{t.inputValue.length>0?t.inputValue="":S.value=!1},Ye=()=>{Z.value||(xe&&(t.inputHovering=!0),t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:S.value=!S.value)},Ul=()=>{S.value?M.value[t.hoveringIndex]&&Je(M.value[t.hoveringIndex]):Ye()},pe=l=>q(l.value)?Q(l.value,e.valueKey):l.value,jl=i(()=>M.value.filter(l=>l.visible).every(l=>l.disabled)),ql=i(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),Ql=i(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Ze=l=>{if(!S.value){S.value=!0;return}if(!(t.options.size===0||t.filteredOptionsCount===0||oe.value)&&!jl.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const n=M.value[t.hoveringIndex];(n.disabled===!0||n.states.groupDisabled===!0||!n.visible)&&Ze(l),F(()=>de(X.value))}},Jl=()=>{if(!c.value)return 0;const l=window.getComputedStyle(c.value);return Number.parseFloat(l.gap||"6px")},Xl=i(()=>{const l=Jl();return{maxWidth:`${J.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth}px`}}),Yl=i(()=>({maxWidth:`${t.selectionWidth}px`})),Zl=i(()=>({width:`${Math.max(t.calculatorWidth,jt)}px`}));return G(c,Rl),G(C,He),G(u,we),G(De,we),G(E,Ge),G(J,Dl),Me(()=>{ue()}),{inputId:bl,contentId:b,nsSelect:s,nsInput:O,states:t,isFocused:Le,expanded:S,optionsArray:M,hoverOption:X,selectSize:Pe,filteredOptionsCount:ie,resetCalculatorWidth:He,updateTooltip:we,updateTagTooltip:Ge,debouncedOnInputChange:qe,onInput:je,deletePrevTag:Bl,deleteTag:Nl,deleteSelected:Qe,handleOptionSelect:Je,scrollToOption:de,hasModelValue:Oe,shouldShowPlaceholder:Tl,currentPlaceholder:$l,mouseEnterEventName:kl,showClose:yl,iconComponent:Ne,iconReverse:Sl,validateState:ze,validateIcon:Cl,showNewOption:Vl,updateOptions:We,collapseTagSize:Il,setSelected:ue,selectDisabled:Z,emptyText:Fe,handleCompositionStart:pl,handleCompositionUpdate:fl,handleCompositionEnd:vl,onOptionCreate:zl,onOptionDestroy:Fl,handleMenuEnter:Pl,focus:ce,blur:Kl,handleClearClick:Al,handleClickOutside:Hl,handleEsc:Gl,toggleMenu:Ye,selectOption:Ul,getValueKey:pe,navigateOptions:Ze,dropdownMenuVisible:El,showTagList:ql,collapseTagList:Ql,tagStyle:Xl,collapseTagStyle:Yl,inputStyle:Zl,popperRef:Wl,inputRef:y,tooltipRef:g,tagTooltipRef:h,calculatorRef:C,prefixRef:p,suffixRef:v,selectRef:f,wrapperRef:De,selectionRef:c,scrollbarRef:se,menuRef:u,tagMenuRef:E,collapseItemRef:J}};var Qt=ae({name:"ElOptions",setup(e,{slots:o}){const a=ye(Ce);let b=[];return()=>{var s,O;const t=(s=o.default)==null?void 0:s.call(o),f=[];function c(g){P(g)&&g.forEach(h=>{var y,C,p,v;const u=(y=(h==null?void 0:h.type)||{})==null?void 0:y.name;u==="ElOptionGroup"?c(!it(h.children)&&!P(h.children)&&ee((C=h.children)==null?void 0:C.default)?(p=h.children)==null?void 0:p.default():h.children):u==="ElOption"?f.push((v=h.props)==null?void 0:v.value):P(h.children)&&c(h.children)})}return t.length&&c((O=t[0])==null?void 0:O.children),ge(f,b)||(b=f,a&&(a.states.optionValues=f)),t}}});const Jt=rt({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:ut,effect:{type:be(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:be(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:ht.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:al,default:dt},fitInputWidth:Boolean,suffixIcon:{type:al,default:ct},tagType:{...nl.type,default:"info"},tagEffect:{...nl.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:be(String),values:gt,default:"bottom-start"},fallbackPlacements:{type:be(Array),default:["bottom-start","top-start","right","left"]},appendTo:String,...pt,...Tt(["ariaLabel"])}),sl="ElSelect",Xt=ae({name:sl,componentName:sl,components:{ElSelectMenu:Ut,ElOption:Re,ElOptions:Qt,ElTag:Ot,ElScrollbar:Ct,ElTooltip:yt,ElIcon:wt},directives:{ClickOutside:Nt},props:Jt,emits:[j,ul,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:o}){const a=i(()=>{const{modelValue:t,multiple:f}=e,c=f?[]:void 0;return P(t)?f?t:c:f?c:t}),b=ne({...$e(e),modelValue:a}),s=qt(b,o);ol(Ce,ne({props:b,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected}));const O=i(()=>e.multiple?s.states.selected.map(t=>t.currentLabel):s.states.selectedLabel);return{...s,modelValue:a,selectedLabel:O}}});function Yt(e,o,a,b,s,O){const t=A("el-tag"),f=A("el-tooltip"),c=A("el-icon"),g=A("el-option"),h=A("el-options"),y=A("el-scrollbar"),C=A("el-select-menu"),p=ft("click-outside");return le((m(),V("div",{ref:"selectRef",class:d([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[mt(e.mouseEnterEventName)]:v=>e.states.inputHovering=!0,onMouseleave:v=>e.states.inputHovering=!1},[H(f,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,"append-to":e.appendTo,onBeforeShow:e.handleMenuEnter,onHide:v=>e.states.isBeforeHide=!1},{default:D(()=>{var v;return[$("div",{ref:"wrapperRef",class:d([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:B(e.toggleMenu,["prevent"])},[e.$slots.prefix?(m(),V("div",{key:0,ref:"prefixRef",class:d(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):T("v-if",!0),$("div",{ref:"selectionRef",class:d([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(m(!0),V(el,null,ll(e.showTagList,u=>(m(),V("div",{key:e.getValueKey(u),class:d(e.nsSelect.e("selected-item"))},[H(t,{closable:!e.selectDisabled&&!u.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.tagStyle),onClose:E=>e.deleteTag(E,u)},{default:D(()=>[$("span",{class:d(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:u.currentLabel,value:u.value},()=>[tl(N(u.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(m(),z(f,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:D(()=>[$("div",{ref:"collapseItemRef",class:d(e.nsSelect.e("selected-item"))},[H(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.collapseTagStyle)},{default:D(()=>[$("span",{class:d(e.nsSelect.e("tags-text"))}," + "+N(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:D(()=>[$("div",{ref:"tagMenuRef",class:d(e.nsSelect.e("selection"))},[(m(!0),V(el,null,ll(e.collapseTagList,u=>(m(),V("div",{key:e.getValueKey(u),class:d(e.nsSelect.e("selected-item"))},[H(t,{class:"in-tooltip",closable:!e.selectDisabled&&!u.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:E=>e.deleteTag(E,u)},{default:D(()=>[$("span",{class:d(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:u.currentLabel,value:u.value},()=>[tl(N(u.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):T("v-if",!0)]):T("v-if",!0),e.selectDisabled?T("v-if",!0):(m(),V("div",{key:1,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[le($("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":u=>e.states.inputValue=u,type:"text",name:e.name,class:d([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:he(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((v=e.hoverOption)==null?void 0:v.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[x(B(u=>e.navigateOptions("next"),["stop","prevent"]),["down"]),x(B(u=>e.navigateOptions("prev"),["stop","prevent"]),["up"]),x(B(e.handleEsc,["stop","prevent"]),["esc"]),x(B(e.selectOption,["stop","prevent"]),["enter"]),x(B(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:B(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[vt,e.states.inputValue]]),e.filterable?(m(),V("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:d(e.nsSelect.e("input-calculator")),textContent:N(e.states.inputValue)},null,10,["textContent"])):T("v-if",!0)],2)),e.shouldShowPlaceholder?(m(),V("div",{key:2,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?k(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[$("span",null,N(e.currentPlaceholder),1)]):(m(),V("span",{key:1},N(e.currentPlaceholder),1))],2)):T("v-if",!0)],2),$("div",{ref:"suffixRef",class:d(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(m(),z(c,{key:0,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:D(()=>[(m(),z(Ee(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.showClose&&e.clearIcon?(m(),z(c,{key:1,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.nsSelect.e("clear")]),onClick:e.handleClearClick},{default:D(()=>[(m(),z(Ee(e.clearIcon)))]),_:1},8,["class","onClick"])):T("v-if",!0),e.validateState&&e.validateIcon?(m(),z(c,{key:2,class:d([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:D(()=>[(m(),z(Ee(e.validateIcon)))]),_:1},8,["class"])):T("v-if",!0)],2)],10,["onClick"])]}),content:D(()=>[H(C,{ref:"menuRef"},{default:D(()=>[e.$slots.header?(m(),V("div",{key:0,class:d(e.nsSelect.be("dropdown","header")),onClick:B(()=>{},["stop"])},[k(e.$slots,"header")],10,["onClick"])):T("v-if",!0),le(H(y,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:d([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:D(()=>[e.showNewOption?(m(),z(g,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):T("v-if",!0),H(h,null,{default:D(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[ke,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(m(),V("div",{key:1,class:d(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(m(),V("div",{key:2,class:d(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[$("span",null,N(e.emptyText),1)])],2)):T("v-if",!0),e.$slots.footer?(m(),V("div",{key:3,class:d(e.nsSelect.be("dropdown","footer")),onClick:B(()=>{},["stop"])},[k(e.$slots,"footer")],10,["onClick"])):T("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","append-to","onBeforeShow","onHide"])],16,["onMouseleave"])),[[p,e.handleClickOutside,e.popperRef]])}var Zt=Se(Xt,[["render",Yt],["__file","select.vue"]]);const _t=ae({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const o=te("select"),a=I(null),b=Te(),s=I([]);ol(dl,ne({...$e(e)}));const O=i(()=>s.value.some(g=>g.visible===!0)),t=g=>{var h,y;return((h=g.type)==null?void 0:h.name)==="ElOption"&&!!((y=g.component)!=null&&y.proxy)},f=g=>{const h=W(g),y=[];return h.forEach(C=>{var p,v;t(C)?y.push(C.component.proxy):(p=C.children)!=null&&p.length?y.push(...f(C.children)):(v=C.component)!=null&&v.subTree&&y.push(...f(C.component.subTree))}),y},c=()=>{s.value=f(b.subTree)};return Me(()=>{c()}),$t(a,c,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:O,ns:o}}});function xt(e,o,a,b,s,O){return le((m(),V("ul",{ref:"groupRef",class:d(e.ns.be("group","wrap"))},[$("li",{class:d(e.ns.be("group","title"))},N(e.label),3),$("li",null,[$("ul",{class:d(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[ke,e.visible]])}var cl=Se(_t,[["render",xt],["__file","option-group.vue"]]);const gn=bt(Zt,{Option:Re,OptionGroup:cl}),yn=il(Re),Sn=il(cl);export{yn as E,gn as a,Sn as b,hn as c,Ce as s};
