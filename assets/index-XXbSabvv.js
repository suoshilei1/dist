import{z as ne,A as Se,B as ie,C as De,D as Q,E as ce,r as v,F as E,G as Te,H as Me,w as de,c as n,d as _,n as G,I as w,J as P,j as l,K as Z,M as N,N as k,O as me,P as Ie,Q as Ae,R as Le,S as Ve,e as u,h as V,g as T,_ as ee,u as ue,s as $e,o as pe,T as q,U as ae,q as ge,V as fe,l as ze,W as Be,X as H,i as o,Y as Ue,f as L,Z as Fe,$ as Ne,a0 as Ge,v as ve,b as Re,m as We,a1 as Oe}from"./index-oALI6hjD.js";import{E as _e}from"./button-CW4VZptJ.js";/* empty css             */import{E as qe,a as He,b as Qe,c as Ye}from"./header-C-zY-bWP.js";import{_ as je}from"./logo-rRFpfryy.js";import{E as Je}from"./dialog-B_GDP7gC.js";import"./overlay-WqKCga-H.js";import{E as Ke,a as Xe}from"./form-item-JkdAUXjO.js";import{E as Ze}from"./input-_j8YarB1.js";/* empty css                     */import"./popper-8tqvLSZz.js";import"./scrollbar-BwLVa3O8.js";import{E as et,a as tt,b as st}from"./dropdown-item-CucUtGiP.js";import{u as we}from"./area-DGez3_R7.js";import{u as he}from"./meter-GWsXRyue.js";import{C as at}from"./CompanyAutoInput-DQQBCQTH.js";import{c as ot}from"./user-DEGSMhkJ.js";import{s as oe}from"./sha256-DcrFp9Dj.js";/* empty css             *//* empty css                 *//* empty css                   */import{E as D}from"./index-CV7ElbEQ.js";import{E as rt}from"./index-DKbZ_y2J.js";import{E as ye}from"./index-DXOgsKzf.js";import{i as lt}from"./icon-DFUaFmZd.js";import{_ as Ce}from"./plugin-vue_export-helper-CqGSI99y.js";/* empty css                        */import{E as O}from"./index-BFWR71cx.js";import"./index-GdZBC0LW.js";import"./use-form-item-CJ5jT23N.js";import"./index-JdeAZNwx.js";import"./index-Ci2yyUHC.js";import"./scroll-BUhzRsoy.js";import"./vnode-DAFY4x8G.js";import"./focus-trap-B9jhWFgs.js";import"./aria-BUADUvnR.js";import"./refs-sNzFHjPI.js";import"./castArray-DuUCQlE9.js";import"./_Uint8Array-Cyhry7Ym.js";import"./_initCloneObject-CeA08_Bb.js";import"./index-BTnVmvBQ.js";import"./dayjs.min-VPOC9PSa.js";import"./autocomplete-N5BG9fbW.js";import"./validator-DaZaXEYL.js";const nt=ne({size:{type:[Number,String],values:Se,default:"",validator:p=>ie(p)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:lt},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:De(String),default:"cover"}}),it={error:p=>p instanceof Event},ct=Q({name:"ElAvatar"}),dt=Q({...ct,props:nt,emits:it,setup(p,{emit:c}){const e=p,d=ce("avatar"),s=v(!1),g=E(()=>{const{size:t,icon:h,shape:i}=e,m=[d.b()];return Te(t)&&m.push(d.m(t)),h&&m.push(d.m("icon")),i&&m.push(d.m(i)),m}),f=E(()=>{const{size:t}=e;return ie(t)?d.cssVarBlock({size:Me(t)||""}):void 0}),x=E(()=>({objectFit:e.fit}));de(()=>e.src,()=>s.value=!1);function S(t){s.value=!0,c("error",t)}return(t,h)=>(n(),_("span",{class:k(w(g)),style:G(w(f))},[(t.src||t.srcSet)&&!s.value?(n(),_("img",{key:0,src:t.src,alt:t.alt,srcset:t.srcSet,style:G(w(x)),onError:S},null,44,["src","alt","srcset"])):t.icon?(n(),P(w(ye),{key:1},{default:l(()=>[(n(),P(Z(t.icon)))]),_:1})):N(t.$slots,"default",{key:2})],6))}});var mt=Ce(dt,[["__file","avatar.vue"]]);const ut=me(mt),$={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},re={[$.success]:Ie,[$.warning]:Ae,[$.error]:Le,[$.info]:Ve},pt=ne({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),gt=Q({name:"ElResult"}),ft=Q({...gt,props:pt,setup(p){const c=p,e=ce("result"),d=E(()=>{const s=c.icon,g=s&&$[s]?$[s]:"icon-info",f=re[g]||re["icon-info"];return{class:g,component:f}});return(s,g)=>(n(),_("div",{class:k(w(e).b())},[u("div",{class:k(w(e).e("icon"))},[N(s.$slots,"icon",{},()=>[w(d).component?(n(),P(Z(w(d).component),{key:0,class:k(w(d).class)},null,8,["class"])):V("v-if",!0)])],2),s.title||s.$slots.title?(n(),_("div",{key:0,class:k(w(e).e("title"))},[N(s.$slots,"title",{},()=>[u("p",null,T(s.title),1)])],2)):V("v-if",!0),s.subTitle||s.$slots["sub-title"]?(n(),_("div",{key:1,class:k(w(e).e("subtitle"))},[N(s.$slots,"sub-title",{},()=>[u("p",null,T(s.subTitle),1)])],2)):V("v-if",!0),s.$slots.extra?(n(),_("div",{key:2,class:k(w(e).e("extra"))},[N(s.$slots,"extra")],2)):V("v-if",!0)],2))}});var vt=Ce(ft,[["__file","result.vue"]]);const _t=me(vt),wt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='19.5692mm'%20height='17.7047mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%200.671195%200.607245'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str1%20{stroke:%23fff;stroke-width:0.0242011}%20.str0%20{stroke:%23fff;stroke-width:0.0242011;stroke-linecap:round;stroke-linejoin:round}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772231312'%3e%3cpath%20id='_325112704'%20class='fil0%20str0'%20d='M0.00779949%200.288516l0.325493%20-0.276446%200.325836%200.280219m-0.651329%20-0.00377284z'/%3e%3cpath%20id='_325113616'%20class='fil0%20str1'%20d='M0.272584%200.391755l0.122103%200c0.0209221,0%200.0380714,0.0171493%200.0380714,0.0380714l0%200.165319%20-0.198589%200%200%20-0.165319c0,-0.0209221%200.0171493,-0.0380714%200.0384144,-0.0380714z'/%3e%3cpath%20id='_325113184'%20class='fil0%20str1'%20d='M0.581957%200.226093l0%200.311088c0,0.0315547%20-0.0257239,0.0572786%20-0.0572786,0.0572786l-0.382429%200c-0.0315547,0%20-0.0572786,-0.0257239%20-0.0572786,-0.0572786l0%20-0.311088'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ht="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='23.6091mm'%20height='17.58mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%201.21653%200.905866'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0363583;stroke-linecap:round}%20.fil1%20{fill:none;fill-rule:nonzero}%20.fil2%20{fill:%23fff}%20.fil0%20{fill:%23fff;fill-rule:nonzero}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_770419928'%3e%3cpolygon%20id='_325717624'%20class='fil0'%20points='0.090128,0.905866%200.090128,0.749735%200.218948,0.646679%200.218948,0.905866%20'/%3e%3cpolygon%20id='_325718632'%20class='fil0'%20points='0.39466,0.905866%200.39466,0.506007%200.447218,0.463754%200.52348,0.523011%200.52348,0.905866%20'/%3e%3cpolygon%20id='_325719040'%20class='fil0'%20points='0.699191,0.905866%200.699191,0.659046%200.707951,0.665744%200.828012,0.563203%200.828012,0.905866%20'/%3e%3cpolygon%20id='_325719064'%20class='fil0'%20points='1.00372,0.905866%201.00372,0.412741%201.13203,0.302471%201.13203,0.905866%20'/%3e%3cpath%20id='_325719160'%20class='fil1%20str0'%20d='M0.0112898%200.597212l0.390584%20-0.311746%200.25661%200.197868%200.428715%20-0.366881m-1.07591%200.480758z'/%3e%3cpolygon%20id='_325719880'%20class='fil2'%20points='1.21653,0.00979036%201.2052,0.132427%201.19438,0.25558%201.08205,0.12779%200.969714,0%201.09338,0.00463754%20'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='17.6556mm'%20height='17.6556mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%200.926785%200.926785'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0370387}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772230232'%3e%3cpath%20id='_325716160'%20class='fil0%20str0'%20d='M0.710895%200.0185193c0.109184,0%200.197372,0.0887122%200.197372,0.197896%200,0.109184%20-0.0881873,0.197372%20-0.197372,0.197372l-0.197896%200%200%20-0.197372c0,-0.109184%200.0887122,-0.197896%200.197896,-0.197896z'/%3e%3cpath%20id='_325716232'%20class='fil0%20str0'%20d='M0.710895%200.908266c0.109184,0%200.197372,-0.0887122%200.197372,-0.197896%200,-0.109184%20-0.0881873,-0.197372%20-0.197372,-0.197372l-0.197896%200%200%200.197372c0,0.109184%200.0887122,0.197896%200.197896,0.197896z'/%3e%3cpath%20id='_325716256'%20class='fil0%20str0'%20d='M0.216416%200.0185193c-0.109184,0%20-0.197896,0.0887122%20-0.197896,0.197896%200,0.109184%200.0887122,0.197372%200.197896,0.197372l0.197896%200%200%20-0.197372c0,-0.109184%20-0.0887122,-0.197896%20-0.197896,-0.197896z'/%3e%3cpath%20id='_325717144'%20class='fil0%20str0'%20d='M0.216416%200.908266c-0.109184,0%20-0.197896,-0.0887122%20-0.197896,-0.197896%200,-0.109184%200.0887122,-0.197372%200.197896,-0.197372l0.197896%200%200%200.197372c0,0.109184%20-0.0887122,0.197896%20-0.197896,0.197896z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ct="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='19.3945mm'%20height='17.7656mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%201.67843%201.53747'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0610639}%20.str1%20{stroke:%23fff;stroke-width:0.0610639;stroke-linejoin:round}%20.str2%20{stroke:%23fff;stroke-width:0.0610639;stroke-linecap:round}%20.str3%20{stroke:%23fff;stroke-width:0.0610639;stroke-linecap:round;stroke-linejoin:round}%20.fil0%20{fill:none}%20.fil1%20{fill:black}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772230664'%3e%3cpath%20id='_325082440'%20class='fil0%20str0'%20d='M0.494396%201.42472l-0.334917%200c-0.0709643,0%20-0.128947,-0.057983%20-0.128947,-0.129813l0%20-1.13456c0,-0.0709643%200.057983,-0.129813%200.128947,-0.129813l1.1787%200c0.0709643,0%200.128947,0.0588484%200.128947,0.129813l0%201.07745'/%3e%3cpolygon%20id='_325082728'%20class='fil0%20str1'%20points='1.03528,0.644979%201.34164,1.07596%201.648,1.50693%201.03528,1.50693%200.423432,1.50693%200.72979,1.07596%20'/%3e%3cline%20id='_325083352'%20class='fil0%20str2'%20x1='0.282369'%20y1='0.391411'%20x2='1.21096'%20y2=%20'0.391411'%20/%3e%3cline%20id='_325082992'%20class='fil0%20str3'%20x1='0.278907'%20y1='0.696904'%20x2='0.681326'%20y2=%20'0.696904'%20/%3e%3cline%20id='_325083496'%20class='fil0%20str2'%20x1='0.27458'%20y1='1.05778'%20x2='0.520358'%20y2=%20'1.05778'%20/%3e%3cline%20id='_323923864'%20class='fil0%20str3'%20x1='1.04567'%20y1='1.24558'%20x2='1.04567'%20y2=%20'0.883834'%20/%3e%3ccircle%20id='_323925088'%20class='fil1'%20cx='1.05086'%20cy='1.38837'%20r='0.0588484'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",kt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='18.8056mm'%20height='17.5656mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%203.28349%203.06699'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str1%20{stroke:%23fff;stroke-width:0.123199}%20.str0%20{stroke:%23fff;stroke-width:0.123199;stroke-linecap:round}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_770422112'%3e%3cpath%20id='_325743304'%20class='fil0%20str0'%20d='M0.0615995%200.402073l0.783962%200m0.680947%200l1.69538%200'/%3e%3cpath%20id='_325743064'%20class='fil0%20str0'%20d='M0.0615995%201.54572l1.69538%200m0.682693%200l0.782216%200'/%3e%3cpath%20id='_325743184'%20class='fil0%20str0'%20d='M0.0615995%202.66491l0.747296%200m0.682693%200l1.7303%200'/%3e%3ccircle%20id='_325743400'%20class='fil0%20str1'%20cx='1.18604'%20cy='0.402073'%20r='0.340474'/%3e%3ccircle%20id='_325744072'%20class='fil0%20str1'%20cx='2.09746'%20cy='1.54572'%20r='0.340474'/%3e%3ccircle%20id='_325743904'%20class='fil0%20str1'%20cx='1.15112'%20cy='2.66491'%20r='0.340474'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xt=[{path:"/dashboard",title:"首页",icon:wt},{path:"/energy-data",title:"用能数据",icon:ht,children:[{path:"/energy-data/carbon",title:"能碳监控"},{path:"/energy-data/water-data",title:"用水数据"},{path:"/energy-data/electricity-data",title:"用电数据"}]},{path:"/device-center",title:"设备中心",icon:yt,children:[{path:"/device-center/console",title:"控制台"},{path:"/device-center/device-info",title:"设备信息"},{path:"/device-center/device-architecture",title:"设备架构"}]},{path:"/warning-center",title:"异常处理中心",icon:Ct,children:[{path:"/warning-center/exception-handling",title:"异常处理"},{path:"/warning-center/water-leakage-analysis",title:"智能漏损分析"}]},{path:"/system-management",title:"系统管理",icon:kt,children:[{path:"/system-management/company-management",title:"公司管理"},{path:"/system-management/user-management",title:"用户管理"},{path:"/system-management/block-management",title:"区块管理"},{path:"/system-management/push-management",title:"推送管理"},{path:"/system-management/formula-management",title:"公式管理"},{path:"/system-management/constant-management",title:"常量管理"}]}],bt={"/dashboard":["view_simple_dashboard","view_big_screen"],"/dashboard/big-screen":["view_big_screen"],"/energy-data":["view_water_chart","view_water_daily_report","manage_water_meter","view_water_cost","view_electricity_chart","view_electricity_daily_report","manage_electricity_meter","view_electricity_cost"],"/energy-data/carbon":["view_carbon_data"],"/energy-data/water-data":["view_water_chart","view_water_daily_report","manage_water_meter","view_water_cost"],"/energy-data/electricity-data":["view_electricity_chart","view_electricity_daily_report","manage_electricity_meter","view_electricity_cost"],"/device-center":["view_device_console","control_device","view_device_info","manage_device"],"/device-center/console":["view_device_console","control_device"],"/device-center/device-info":["view_device_info"],"/device-center/device-architecture":["view_device_architecture"],"/warning-center":["view_exceptions","handle_exceptions","view_leakage"],"/warning-center/exception-handling":["view_exceptions","handle_exceptions"],"/warning-center/water-leakage-analysis":["view_leakage"],"/system-management":["manage_company","view_company","manage_block","manage_push","manage_formula","manage_user_permissions","manage_constant","manage_user","view_user"],"/system-management/company-management":["manage_company"],"/system-management/user-management":["manage_user"],"/system-management/block-management":["manage_block"],"/system-management/push-management":["manage_push"],"/system-management/formula-management":["manage_formula"],"/system-management/constant-management":["manage_constant"]};function le(p,c){const e=bt[p];return e?e.some(d=>c.includes(d)):!0}function Pt(p,c){return p.filter(e=>le(e.path,c)).map(e=>{if(e.children){const d=e.children.filter(s=>le(s.path,c));return d.length===0?null:{...e,children:d}}return e}).filter(Boolean)}const Et={class:"menu-list"},St=["onClick"],Dt=["src"],Tt={class:"menu-title"},Mt=["onClick"],It=["src"],At={class:"menu-title"},Lt={class:"submenu-list"},Vt=["onClick"],$t={__name:"NavList",props:{isCollapse:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1}},setup(p){const c=ue(),e=$e(),d=v(window.location.pathname),s=v([]),g=v({}),f=E(()=>Pt(xt,e.userPermissions));pe(()=>{f.value.forEach(t=>{if(t.children){const m=t.children.length*44+(t.children.length-1)*4+6;g.value[t.path]=m}})});const x=t=>{d.value=t,c.push(t)},S=t=>{const h=s.value.indexOf(t);h===-1?s.value.push(t):s.value.splice(h,1)};return(t,h)=>(n(),_("nav",{class:k(["side-menu",{collapsed:p.isCollapse&&!p.isMobile}])},[u("ul",Et,[(n(!0),_(q,null,ae(f.value,i=>(n(),_(q,{key:i.path},[i.children?(n(),_("li",{key:1,class:k(["submenu",{open:s.value.includes(i.path)}])},[u("div",{class:"submenu-title",onClick:m=>S(i.path)},[u("img",{src:i.icon,alt:"",class:"menu-icon"},null,8,It),u("span",At,T(i.title),1),h[0]||(h[0]=u("span",{class:"arrow"},null,-1))],8,Mt),u("div",{class:"submenu-wrapper",style:G({height:s.value.includes(i.path)?g.value[i.path]+"px":"0"})},[u("ul",Lt,[(n(!0),_(q,null,ae(i.children,m=>(n(),_("li",{key:m.path,class:k(["submenu-item",{active:d.value===m.path}]),onClick:y=>x(m.path)},T(m.title),11,Vt))),128))])],4)],2)):(n(),_("li",{key:0,class:k(["menu-item",{active:d.value===i.path}]),onClick:m=>x(i.path)},[u("img",{src:i.icon,alt:"",class:"menu-icon"},null,8,Dt),u("span",Tt,T(i.title),1)],10,St))],64))),128))])],2))}},zt=ee($t,[["__scopeId","data-v-107b2c21"]]),Bt={class:"header-left"},Ut={class:"header-right"},Ft={class:"company-selector"},Nt={class:"user-info"},Gt={class:"username"},Rt={class:"dialog-footer"},Wt={__name:"Header",props:{isCollapse:{type:Boolean,required:!0},isMobile:{type:Boolean,required:!0}},emits:["update:isCollapse","fullscreenChange"],setup(p,{emit:c}){let e=v(!1);const d=p,s=c,g=ge(),f=fe(),x=we(),S=he();ze();const t=ue(),h=v(f.currentCompany),i=v(!1),m=v(null),y=v({oldPassword:"",newPassword:"",confirmPassword:""}),z={oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],confirmPassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:(r,a,b)=>{a!==y.value.newPassword?b(new Error("两次输入的密码不一致")):b()},trigger:"blur"}]};de(h,async(r,a)=>{r!==a&&await B(r)});const M=E(()=>g.userinfo||{}),Y=()=>{s("update:isCollapse",!d.isCollapse)},B=async r=>{if(r)try{f.setCurrentCompany(r),await Promise.all([x.fetchAreas(),S.fetchMeterList()]),D.success("公司切换成功")}catch{D.error("数据加载失败，请重试")}},j=async r=>{switch(r){case"userInfo":t.push("/user-info");break;case"changePassword":i.value=!0;break;case"logout":await J();break}},I=()=>{m.value&&m.value.resetFields(),y.value={oldPassword:"",newPassword:"",confirmPassword:""}},A=async()=>{if(m.value)try{e.value=!0,await m.value.validate(),await ot({username:M.value.username,id:M.value.id,oldPassword:oe(y.value.oldPassword),password:oe(y.value.newPassword)}),D.success("密码修改成功"),i.value=!1,I()}catch(r){r.message?D.error(r.message):D.error("密码修改失败，请重试")}finally{e.value=!1}},J=async()=>{try{await rt.confirm("确认退出登录吗？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),localStorage.removeItem("permissions"),await Ge(),t.push("/login"),D.success("已安全退出登录")}catch(r){r!=="cancel"&&(console.error(r),D.error("退出登录失败"))}};return(r,a)=>{const b=ye,K=ut,R=et,W=tt,X=st,U=Ze,F=Ke,ke=Xe,te=_e,xe=Je,be=qe,Pe=Be("permission"),Ee=ve;return n(),P(be,{height:"55px",class:"header"},{default:l(()=>[u("div",Bt,[p.isMobile?(n(),P(b,{key:0,class:"toggle-btn",onClick:Y},{default:l(()=>[(n(),P(Z(p.isCollapse?"Expand":"Fold")))]),_:1})):V("",!0)]),u("div",Ut,[H((n(),_("div",Ft,[o(at,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=C=>h.value=C)},null,8,["modelValue"])])),[[Pe,"manage_company"]]),o(X,{onCommand:j},{dropdown:l(()=>[o(W,null,{default:l(()=>[o(R,{command:"changePassword"},{default:l(()=>[o(b,null,{default:l(()=>[o(w(Ue))]),_:1}),a[6]||(a[6]=L("修改密码 "))]),_:1}),o(R,{divided:"",command:"logout"},{default:l(()=>[o(b,null,{default:l(()=>[o(w(Fe))]),_:1}),a[7]||(a[7]=L("退出登录 "))]),_:1})]),_:1})]),default:l(()=>[u("div",Nt,[o(K,{size:32,class:"user-avatar"},{default:l(()=>{var C,se;return[L(T(((se=(C=M.value.real_name)==null?void 0:C[0])==null?void 0:se.toUpperCase())||"U"),1)]}),_:1}),u("span",Gt,T(M.value.real_name+"：你好呀"||"未登录"),1),o(b,{class:"dropdown-icon"},{default:l(()=>[o(w(Ne))]),_:1})])]),_:1})]),o(xe,{modelValue:i.value,"onUpdate:modelValue":a[5]||(a[5]=C=>i.value=C),title:"修改密码",width:"400px",onClose:I},{footer:l(()=>[u("span",Rt,[o(te,{onClick:a[4]||(a[4]=C=>i.value=!1)},{default:l(()=>a[8]||(a[8]=[L("取消")])),_:1}),o(te,{type:"primary",onClick:A},{default:l(()=>a[9]||(a[9]=[L("确认")])),_:1})])]),default:l(()=>[H((n(),P(ke,{ref_key:"passwordFormRef",ref:m,model:y.value,rules:z,"label-width":"100px"},{default:l(()=>[o(F,{label:"旧密码",prop:"oldPassword"},{default:l(()=>[o(U,{modelValue:y.value.oldPassword,"onUpdate:modelValue":a[1]||(a[1]=C=>y.value.oldPassword=C),type:"password",placeholder:"请输入旧密码","show-password":""},null,8,["modelValue"])]),_:1}),o(F,{label:"新密码",prop:"newPassword"},{default:l(()=>[o(U,{modelValue:y.value.newPassword,"onUpdate:modelValue":a[2]||(a[2]=C=>y.value.newPassword=C),type:"password",placeholder:"请输入新密码","show-password":""},null,8,["modelValue"])]),_:1}),o(F,{label:"确认新密码",prop:"confirmPassword"},{default:l(()=>[o(U,{modelValue:y.value.confirmPassword,"onUpdate:modelValue":a[3]||(a[3]=C=>y.value.confirmPassword=C),type:"password",placeholder:"请再次输入新密码","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[Ee,w(e)]])]),_:1},8,["modelValue"])]),_:1})}}},Ot=ee(Wt,[["__scopeId","data-v-e79c95ab"]]),qt={class:"logo-container"},Ht={class:"platform-name"},Qt={class:"router-view-container"},Yt={key:2,class:"loading-container"},jt={__name:"index",setup(p){const c=v(!1),e=v(!1),d=v(!1),s=v(!1),g=v(!1),f=v(""),x=v(!1),S=ge(),t=fe(),h=we(),i=he(),m=E(()=>({width:e.value?c.value?"0":"260px":c.value?"4rem":"260px",borderRadius:"8px"})),y=E(()=>({marginLeft:d.value?"0":"auto"})),z=async()=>{x.value=!0;try{await S.getUserInfo(),t.setCurrentCompany(S.userCompany),await Promise.all([h.fetchAreas(),i.fetchMeterList()]),s.value=!0,g.value=!1}catch(r){g.value=!0,f.value="初始化数据失败，请刷新页面重试",O({type:"error",title:"错误",message:f.value,duration:0,showClose:!0}),console.error("初始化失败:",r)}finally{x.value=!1}},M=()=>{e.value&&(c.value=!c.value)},Y=r=>{c.value=r},B=()=>{const r=window.innerWidth<=768;e.value!==r&&(e.value=r,c.value=r)},j=r=>{d.value=r},I=v(navigator.onLine),A=()=>{I.value=navigator.onLine,I.value?(g.value=!1,f.value="",O.closeAll(),z()):(g.value=!0,f.value="网络连接不可用，请检查您的网络",O({type:"warning",title:"网络警告",message:f.value,duration:0,showClose:!0}))};pe(async()=>{B(),window.addEventListener("resize",B),window.addEventListener("online",A),window.addEventListener("offline",A),I.value?await z():(g.value=!0,f.value="网络连接不可用，请检查您的网络",O({type:"warning",title:"网络警告",message:f.value,duration:0,showClose:!0}))}),Re(()=>{window.removeEventListener("resize",B),window.removeEventListener("online",A),window.removeEventListener("offline",A)});const J=E(()=>"发生错误");return(r,a)=>{const b=He,K=We("router-view"),R=Qe,W=Ye,X=_e,U=_t,F=ve;return H((n(),P(W,{class:"layout-container"},{default:l(()=>[!g.value&&s.value?(n(),_(q,{key:0},[e.value&&!c.value?(n(),_("div",{key:0,class:"drawer-overlay",onClick:M})):V("",!0),o(b,{class:k(["aside-container",["aside",{"mobile-aside":e.value}]]),style:G(m.value)},{default:l(()=>[u("div",qt,[a[0]||(a[0]=u("img",{style:{"border-radius":"8px"},src:je,alt:"Logo",class:"logo"},null,-1)),H(u("span",Ht,"融禹智慧能源管理",512),[[Oe,!c.value||e.value]])]),o(zt,{"is-collapse":c.value,"is-mobile":e.value},null,8,["is-collapse","is-mobile"])]),_:1},8,["class","style"]),o(W,{class:k(["right-container",{"mobile-right":e.value}]),style:G(y.value)},{default:l(()=>[o(Ot,{"is-collapse":c.value,"is-mobile":e.value,"onUpdate:isCollapse":Y,onFullscreenChange:j},null,8,["is-collapse","is-mobile"]),o(R,{class:"main-content"},{default:l(()=>[u("div",Qt,[o(K)])]),_:1})]),_:1},8,["class","style"])],64)):g.value?(n(),P(U,{key:1,icon:"error",title:J.value,"sub-title":f.value,class:"error-result"},{extra:l(()=>[o(X,{type:"primary",onClick:z},{default:l(()=>a[1]||(a[1]=[L("重试")])),_:1})]),_:1},8,["title","sub-title"])):(n(),_("div",Yt))]),_:1})),[[F,x.value]])}}},Ns=ee(jt,[["__scopeId","data-v-5659165d"]]);export{Ns as default};
