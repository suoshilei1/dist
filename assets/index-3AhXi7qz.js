import{z as _e,A as xe,B as fe,C as ke,D as Z,E as we,r as u,F as S,G as Se,H as Pe,w as te,c as d,d as v,n as G,I as k,J as M,l as c,K as se,M as R,N as C,O as ve,P as Ee,Q as De,R as Me,S as Ae,e as m,h as F,g as V,_ as oe,u as j,q as ae,o as q,T as W,U as ne,s as Q,V as Y,i as ie,W as Ie,X as J,k as i,f as B,Y as Le,Z as Te,$ as Ve,a0 as Be,a1 as Fe,a2 as ze,a3 as le,v as he,b as ce,j as Ue,a4 as Ne}from"./index-DU5BV6sj.js";import{E as ye}from"./button-C3fNXQ0E.js";/* empty css             */import{E as Re,a as Ge,b as He,c as Oe}from"./header-3UtByIIS.js";import{E as We}from"./dialog-BqmwFatm.js";import"./overlay-CaKmC84a.js";import{E as je,a as qe}from"./form-item-Da9sIxn1.js";import{E as Qe}from"./input-Cag95VNY.js";/* empty css                     */import"./popper-DmsXjoSL.js";import"./scrollbar-5YYltO8z.js";import{E as Ye,a as Je,b as Ke}from"./dropdown-item-CnnlES53.js";import{u as K}from"./area-CYcRQDxZ.js";import{u as X}from"./meter-CawyXifQ.js";import{C as Xe}from"./CompanyAutoInput-CPE2EVkw.js";import{c as de}from"./user-BYAcp0CO.js";import{s as ee}from"./sha256-CZX8Myq4.js";/* empty css             *//* empty css                 *//* empty css                   */import{E as T}from"./index-BmwD9m8C.js";import{E as Ce}from"./index-BCql8Cu-.js";import{i as Ze}from"./icon-Lrcg122U.js";import{_ as be}from"./plugin-vue_export-helper-CqGSI99y.js";import{E as $e}from"./index-B1KCpUhn.js";/* empty css                        */import{_ as et}from"./logo-rRFpfryy.js";import{E as O}from"./index-BjNTkPPk.js";import"./index-HfsxB2KS.js";import"./use-form-item-Bwue1zaK.js";import"./index-DspxDzgo.js";import"./scroll-b_nwKRMA.js";import"./vnode-CCieS0_D.js";import"./focus-trap-BFH-jL9N.js";import"./aria-BUADUvnR.js";import"./refs-BkwxSs2a.js";import"./index-imETKNmt.js";import"./castArray-C1OtMDCV.js";import"./_Uint8Array-ntTh0Oyk.js";import"./_initCloneObject-CWYxvHbU.js";import"./index-DsemQHVw.js";import"./dayjs.min-BzhD8rH5.js";import"./autocomplete-BgU4xmLg.js";import"./validator-BURDFhOy.js";const tt=_e({size:{type:[Number,String],values:xe,default:"",validator:p=>fe(p)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:Ze},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:ke(String),default:"cover"}}),st={error:p=>p instanceof Event},ot=Z({name:"ElAvatar"}),rt=Z({...ot,props:tt,emits:st,setup(p,{emit:t}){const s=p,e=we("avatar"),r=u(!1),f=S(()=>{const{size:a,icon:b,shape:g}=s,l=[e.b()];return Se(a)&&l.push(e.m(a)),b&&l.push(e.m("icon")),g&&l.push(e.m(g)),l}),o=S(()=>{const{size:a}=s;return fe(a)?e.cssVarBlock({size:Pe(a)||""}):void 0}),n=S(()=>({objectFit:s.fit}));te(()=>s.src,()=>r.value=!1);function w(a){r.value=!0,t("error",a)}return(a,b)=>(d(),v("span",{class:C(k(f)),style:G(k(o))},[(a.src||a.srcSet)&&!r.value?(d(),v("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:G(k(n)),onError:w},null,44,["src","alt","srcset"])):a.icon?(d(),M(k(Ce),{key:1},{default:c(()=>[(d(),M(se(a.icon)))]),_:1})):R(a.$slots,"default",{key:2})],6))}});var at=be(rt,[["__file","avatar.vue"]]);const nt=ve(at),z={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},me={[z.success]:Ee,[z.warning]:De,[z.error]:Me,[z.info]:Ae},it=_e({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),lt=Z({name:"ElResult"}),ct=Z({...lt,props:it,setup(p){const t=p,s=we("result"),e=S(()=>{const r=t.icon,f=r&&z[r]?z[r]:"icon-info",o=me[f]||me["icon-info"];return{class:f,component:o}});return(r,f)=>(d(),v("div",{class:C(k(s).b())},[m("div",{class:C(k(s).e("icon"))},[R(r.$slots,"icon",{},()=>[k(e).component?(d(),M(se(k(e).component),{key:0,class:C(k(e).class)},null,8,["class"])):F("v-if",!0)])],2),r.title||r.$slots.title?(d(),v("div",{key:0,class:C(k(s).e("title"))},[R(r.$slots,"title",{},()=>[m("p",null,V(r.title),1)])],2)):F("v-if",!0),r.subTitle||r.$slots["sub-title"]?(d(),v("div",{key:1,class:C(k(s).e("subtitle"))},[R(r.$slots,"sub-title",{},()=>[m("p",null,V(r.subTitle),1)])],2)):F("v-if",!0),r.$slots.extra?(d(),v("div",{key:2,class:C(k(s).e("extra"))},[R(r.$slots,"extra")],2)):F("v-if",!0)],2))}});var dt=be(ct,[["__file","result.vue"]]);const mt=ve(dt),ut="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='19.5692mm'%20height='17.7047mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%200.671195%200.607245'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str1%20{stroke:%23fff;stroke-width:0.0242011}%20.str0%20{stroke:%23fff;stroke-width:0.0242011;stroke-linecap:round;stroke-linejoin:round}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772231312'%3e%3cpath%20id='_325112704'%20class='fil0%20str0'%20d='M0.00779949%200.288516l0.325493%20-0.276446%200.325836%200.280219m-0.651329%20-0.00377284z'/%3e%3cpath%20id='_325113616'%20class='fil0%20str1'%20d='M0.272584%200.391755l0.122103%200c0.0209221,0%200.0380714,0.0171493%200.0380714,0.0380714l0%200.165319%20-0.198589%200%200%20-0.165319c0,-0.0209221%200.0171493,-0.0380714%200.0384144,-0.0380714z'/%3e%3cpath%20id='_325113184'%20class='fil0%20str1'%20d='M0.581957%200.226093l0%200.311088c0,0.0315547%20-0.0257239,0.0572786%20-0.0572786,0.0572786l-0.382429%200c-0.0315547,0%20-0.0572786,-0.0257239%20-0.0572786,-0.0572786l0%20-0.311088'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",pt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='23.6091mm'%20height='17.58mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%201.21653%200.905866'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0363583;stroke-linecap:round}%20.fil1%20{fill:none;fill-rule:nonzero}%20.fil2%20{fill:%23fff}%20.fil0%20{fill:%23fff;fill-rule:nonzero}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_770419928'%3e%3cpolygon%20id='_325717624'%20class='fil0'%20points='0.090128,0.905866%200.090128,0.749735%200.218948,0.646679%200.218948,0.905866%20'/%3e%3cpolygon%20id='_325718632'%20class='fil0'%20points='0.39466,0.905866%200.39466,0.506007%200.447218,0.463754%200.52348,0.523011%200.52348,0.905866%20'/%3e%3cpolygon%20id='_325719040'%20class='fil0'%20points='0.699191,0.905866%200.699191,0.659046%200.707951,0.665744%200.828012,0.563203%200.828012,0.905866%20'/%3e%3cpolygon%20id='_325719064'%20class='fil0'%20points='1.00372,0.905866%201.00372,0.412741%201.13203,0.302471%201.13203,0.905866%20'/%3e%3cpath%20id='_325719160'%20class='fil1%20str0'%20d='M0.0112898%200.597212l0.390584%20-0.311746%200.25661%200.197868%200.428715%20-0.366881m-1.07591%200.480758z'/%3e%3cpolygon%20id='_325719880'%20class='fil2'%20points='1.21653,0.00979036%201.2052,0.132427%201.19438,0.25558%201.08205,0.12779%200.969714,0%201.09338,0.00463754%20'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",gt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='17.6556mm'%20height='17.6556mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%200.926785%200.926785'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0370387}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772230232'%3e%3cpath%20id='_325716160'%20class='fil0%20str0'%20d='M0.710895%200.0185193c0.109184,0%200.197372,0.0887122%200.197372,0.197896%200,0.109184%20-0.0881873,0.197372%20-0.197372,0.197372l-0.197896%200%200%20-0.197372c0,-0.109184%200.0887122,-0.197896%200.197896,-0.197896z'/%3e%3cpath%20id='_325716232'%20class='fil0%20str0'%20d='M0.710895%200.908266c0.109184,0%200.197372,-0.0887122%200.197372,-0.197896%200,-0.109184%20-0.0881873,-0.197372%20-0.197372,-0.197372l-0.197896%200%200%200.197372c0,0.109184%200.0887122,0.197896%200.197896,0.197896z'/%3e%3cpath%20id='_325716256'%20class='fil0%20str0'%20d='M0.216416%200.0185193c-0.109184,0%20-0.197896,0.0887122%20-0.197896,0.197896%200,0.109184%200.0887122,0.197372%200.197896,0.197372l0.197896%200%200%20-0.197372c0,-0.109184%20-0.0887122,-0.197896%20-0.197896,-0.197896z'/%3e%3cpath%20id='_325717144'%20class='fil0%20str0'%20d='M0.216416%200.908266c-0.109184,0%20-0.197896,-0.0887122%20-0.197896,-0.197896%200,-0.109184%200.0887122,-0.197372%200.197896,-0.197372l0.197896%200%200%200.197372c0,0.109184%20-0.0887122,0.197896%20-0.197896,0.197896z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",_t="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='19.3945mm'%20height='17.7656mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%201.67843%201.53747'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str0%20{stroke:%23fff;stroke-width:0.0610639}%20.str1%20{stroke:%23fff;stroke-width:0.0610639;stroke-linejoin:round}%20.str2%20{stroke:%23fff;stroke-width:0.0610639;stroke-linecap:round}%20.str3%20{stroke:%23fff;stroke-width:0.0610639;stroke-linecap:round;stroke-linejoin:round}%20.fil0%20{fill:none}%20.fil1%20{fill:black}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_772230664'%3e%3cpath%20id='_325082440'%20class='fil0%20str0'%20d='M0.494396%201.42472l-0.334917%200c-0.0709643,0%20-0.128947,-0.057983%20-0.128947,-0.129813l0%20-1.13456c0,-0.0709643%200.057983,-0.129813%200.128947,-0.129813l1.1787%200c0.0709643,0%200.128947,0.0588484%200.128947,0.129813l0%201.07745'/%3e%3cpolygon%20id='_325082728'%20class='fil0%20str1'%20points='1.03528,0.644979%201.34164,1.07596%201.648,1.50693%201.03528,1.50693%200.423432,1.50693%200.72979,1.07596%20'/%3e%3cline%20id='_325083352'%20class='fil0%20str2'%20x1='0.282369'%20y1='0.391411'%20x2='1.21096'%20y2=%20'0.391411'%20/%3e%3cline%20id='_325082992'%20class='fil0%20str3'%20x1='0.278907'%20y1='0.696904'%20x2='0.681326'%20y2=%20'0.696904'%20/%3e%3cline%20id='_325083496'%20class='fil0%20str2'%20x1='0.27458'%20y1='1.05778'%20x2='0.520358'%20y2=%20'1.05778'%20/%3e%3cline%20id='_323923864'%20class='fil0%20str3'%20x1='1.04567'%20y1='1.24558'%20x2='1.04567'%20y2=%20'0.883834'%20/%3e%3ccircle%20id='_323925088'%20class='fil1'%20cx='1.05086'%20cy='1.38837'%20r='0.0588484'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ft="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='18.8056mm'%20height='17.5656mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%203.28349%203.06699'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.str1%20{stroke:%23fff;stroke-width:0.123199}%20.str0%20{stroke:%23fff;stroke-width:0.123199;stroke-linecap:round}%20.fil0%20{fill:none}%20]]%3e%3c/style%3e%3c/defs%3e%3cg%20id='图层_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_770422112'%3e%3cpath%20id='_325743304'%20class='fil0%20str0'%20d='M0.0615995%200.402073l0.783962%200m0.680947%200l1.69538%200'/%3e%3cpath%20id='_325743064'%20class='fil0%20str0'%20d='M0.0615995%201.54572l1.69538%200m0.682693%200l0.782216%200'/%3e%3cpath%20id='_325743184'%20class='fil0%20str0'%20d='M0.0615995%202.66491l0.747296%200m0.682693%200l1.7303%200'/%3e%3ccircle%20id='_325743400'%20class='fil0%20str1'%20cx='1.18604'%20cy='0.402073'%20r='0.340474'/%3e%3ccircle%20id='_325744072'%20class='fil0%20str1'%20cx='2.09746'%20cy='1.54572'%20r='0.340474'/%3e%3ccircle%20id='_325743904'%20class='fil0%20str1'%20cx='1.15112'%20cy='2.66491'%20r='0.340474'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ue=[{path:"/dashboard",title:"首页",icon:ut},{path:"/energy-data",title:"用能数据",icon:pt,children:[{path:"/energy-data/carbon",title:"能碳监控"},{path:"/energy-data/water-data",title:"用水数据"},{path:"/energy-data/electricity-data",title:"用电数据"}]},{path:"/device-center",title:"设备中心",icon:gt,children:[{path:"/device-center/console",title:"控制台"},{path:"/device-center/device-info",title:"设备信息"},{path:"/device-center/device-architecture",title:"设备架构"}]},{path:"/warning-center",title:"异常处理中心",icon:_t,children:[{path:"/warning-center/exception-handling",title:"异常处理"},{path:"/warning-center/water-leakage-analysis",title:"智能漏损分析"}]},{path:"/system-management",title:"系统管理",icon:ft,children:[{path:"/system-management/company-management",title:"公司管理"},{path:"/system-management/user-management",title:"用户管理"},{path:"/system-management/block-management",title:"区块管理"},{path:"/system-management/push-management",title:"推送管理"},{path:"/system-management/formula-management",title:"公式管理"},{path:"/system-management/constant-management",title:"常量管理"}]}],wt={"/dashboard":["view_simple_dashboard","view_big_screen"],"/dashboard/big-screen":["view_big_screen"],"/energy-data":["view_water_chart","view_water_daily_report","manage_water_meter","view_water_cost","view_electricity_chart","view_electricity_daily_report","manage_electricity_meter","view_electricity_cost"],"/energy-data/carbon":["view_carbon_data"],"/energy-data/water-data":["view_water_chart","view_water_daily_report","manage_water_meter","view_water_cost"],"/energy-data/electricity-data":["view_electricity_chart","view_electricity_daily_report","manage_electricity_meter","view_electricity_cost"],"/device-center":["view_device_console","control_device","view_device_info","manage_device"],"/device-center/console":["view_device_console","control_device"],"/device-center/device-info":["view_device_info"],"/device-center/device-architecture":["view_device_architecture"],"/warning-center":["view_exceptions","handle_exceptions","view_leakage"],"/warning-center/exception-handling":["view_exceptions","handle_exceptions"],"/warning-center/water-leakage-analysis":["view_leakage"],"/system-management":["manage_company","view_company","manage_block","manage_push","manage_formula","manage_user_permissions","manage_constant","manage_user","view_user"],"/system-management/company-management":["manage_company"],"/system-management/user-management":["manage_user"],"/system-management/block-management":["manage_block"],"/system-management/push-management":["manage_push"],"/system-management/formula-management":["manage_formula"],"/system-management/constant-management":["manage_constant"]};function pe(p,t){const s=wt[p];return s?s.some(e=>t.includes(e)):!0}function ge(p,t){return p.filter(s=>pe(s.path,t)).map(s=>{if(s.children){const e=s.children.filter(r=>pe(r.path,t));return e.length===0?null:{...s,children:e}}return s}).filter(Boolean)}const vt={__name:"NavList",props:{isCollapse:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1}},setup(p,{expose:t}){t();const s=p,e=j(),r=ae(),f=u(window.location.pathname),o=u([]),n=u({}),w=S(()=>ge(ue,r.userPermissions));q(()=>{w.value.forEach(l=>{if(l.children){const y=l.children.length*44+(l.children.length-1)*4+6;n.value[l.path]=y}})});const g={props:s,router:e,permissionStore:r,activeIndex:f,openSubmenus:o,submenuHeight:n,permissionFilteredMenu:w,handleMenuClick:l=>{f.value=l,e.push(l)},toggleSubmenu:l=>{const P=o.value.indexOf(l);P===-1?o.value.push(l):o.value.splice(P,1)},ref:u,computed:S,onMounted:q,get useRouter(){return j},get menuConfig(){return ue},get usePermissionStore(){return ae},get filterMenuByPermissions(){return ge}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}},ht={class:"menu-list"},yt=["onClick"],Ct=["src"],bt={class:"menu-title"},xt=["onClick"],kt=["src"],St={class:"menu-title"},Pt={class:"submenu-list"},Et=["onClick"];function Dt(p,t,s,e,r,f){return d(),v("nav",{class:C(["side-menu",{collapsed:s.isCollapse&&!s.isMobile}])},[m("ul",ht,[(d(!0),v(W,null,ne(e.permissionFilteredMenu,o=>(d(),v(W,{key:o.path},[o.children?(d(),v("li",{key:1,class:C(["submenu",{open:e.openSubmenus.includes(o.path)}])},[m("div",{class:"submenu-title",onClick:n=>e.toggleSubmenu(o.path)},[m("img",{src:o.icon,alt:"",class:"menu-icon"},null,8,kt),m("span",St,V(o.title),1),t[0]||(t[0]=m("span",{class:"arrow"},null,-1))],8,xt),m("div",{class:"submenu-wrapper",style:G({height:e.openSubmenus.includes(o.path)?e.submenuHeight[o.path]+"px":"0"})},[m("ul",Pt,[(d(!0),v(W,null,ne(o.children,n=>(d(),v("li",{key:n.path,class:C(["submenu-item",{active:e.activeIndex===n.path}]),onClick:w=>e.handleMenuClick(n.path)},V(n.title),11,Et))),128))])],4)],2)):(d(),v("li",{key:0,class:C(["menu-item",{active:e.activeIndex===o.path}]),onClick:n=>e.handleMenuClick(o.path)},[m("img",{src:o.icon,alt:"",class:"menu-icon"},null,8,Ct),m("span",bt,V(o.title),1)],10,yt))],64))),128))])],2)}const Mt=oe(vt,[["render",Dt],["__scopeId","data-v-47a8aff1"],["__file","D:/临时存放/green-carbon-1.0/src/components/nav/NavList.vue"]]),At={__name:"Header",props:{isCollapse:{type:Boolean,required:!0},isMobile:{type:Boolean,required:!0}},emits:["update:isCollapse","fullscreenChange"],setup(p,{expose:t,emit:s}){t();let e=u(!1);const r=p,f=s,o=Q(),n=Y(),w=K(),a=X(),b=ie(),g=j(),l=u(n.currentCompany),P=u(!1),E=u(null),y=u({oldPassword:"",newPassword:"",confirmPassword:""}),U={oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],confirmPassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:(h,H,re)=>{H!==y.value.newPassword?re(new Error("两次输入的密码不一致")):re()},trigger:"blur"}]};te(l,async(h,H)=>{h!==H&&await _(h)});const L=S(()=>o.userinfo||{}),A=()=>{f("update:isCollapse",!r.isCollapse)},_=async h=>{if(h)try{n.setCurrentCompany(h),await Promise.all([w.fetchAreas(),a.fetchMeterList()]),T.success("公司切换成功")}catch{T.error("数据加载失败，请重试")}},D=async h=>{switch(h){case"userInfo":g.push("/user-info");break;case"changePassword":P.value=!0;break;case"logout":await N();break}},I=()=>{E.value&&E.value.resetFields(),y.value={oldPassword:"",newPassword:"",confirmPassword:""}},$=async()=>{if(E.value)try{e.value=!0,await E.value.validate(),await de({username:L.value.username,id:L.value.id,oldPassword:ee(y.value.oldPassword),password:ee(y.value.newPassword)}),T.success("密码修改成功"),P.value=!1,I()}catch(h){h.message?T.error(h.message):T.error("密码修改失败，请重试")}finally{e.value=!1}},N=async()=>{try{await $e.confirm("确认退出登录吗？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),localStorage.removeItem("permissions"),await le(),g.push("/login"),T.success("已安全退出登录")}catch(h){h!=="cancel"&&(console.error(h),T.error("退出登录失败"))}},x={get passwordLoading(){return e},set passwordLoading(h){e=h},props:r,emit:f,userStore:o,companyStore:n,areaStore:w,meterStore:a,route:b,router:g,currentCompany:l,passwordDialogVisible:P,passwordFormRef:E,passwordForm:y,passwordRules:U,userInfo:L,toggleAside:A,handleCompanyChange:_,handleCommand:D,resetPasswordForm:I,handlePasswordChange:$,handleLogout:N,ref:u,computed:S,watch:te,get useRoute(){return ie},get useRouter(){return j},get Expand(){return Le},get Fold(){return Te},get CaretBottom(){return Ve},get User(){return Be},get Lock(){return Fe},get SwitchButton(){return ze},get useUserStore(){return Q},get useCompanyStore(){return Y},get useAreaStore(){return K},get useMeterStore(){return X},CompanyAutoInput:Xe,get logoutApi(){return le},get changePasswordApi(){return de},get sha256(){return ee}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}},It={class:"header-left"},Lt={class:"header-right"},Tt={class:"company-selector"},Vt={class:"user-info"},Bt={class:"username"},Ft={class:"dialog-footer"};function zt(p,t,s,e,r,f){const o=Ce,n=nt,w=Ye,a=Je,b=Ke,g=Qe,l=je,P=qe,E=ye,y=We,U=Re,L=Ie("permission"),A=he;return d(),M(U,{height:"55px",class:"header"},{default:c(()=>[m("div",It,[s.isMobile?(d(),M(o,{key:0,class:"toggle-btn",onClick:e.toggleAside},{default:c(()=>[(d(),M(se(s.isCollapse?"Expand":"Fold")))]),_:1})):F("",!0)]),m("div",Lt,[J((d(),v("div",Tt,[i(e.CompanyAutoInput,{modelValue:e.currentCompany,"onUpdate:modelValue":t[0]||(t[0]=_=>e.currentCompany=_)},null,8,["modelValue"])])),[[L,"manage_company"]]),i(b,{onCommand:e.handleCommand},{dropdown:c(()=>[i(a,null,{default:c(()=>[i(w,{command:"changePassword"},{default:c(()=>[i(o,null,{default:c(()=>[i(e.Lock)]),_:1}),t[6]||(t[6]=B("修改密码 "))]),_:1}),i(w,{divided:"",command:"logout"},{default:c(()=>[i(o,null,{default:c(()=>[i(e.SwitchButton)]),_:1}),t[7]||(t[7]=B("退出登录 "))]),_:1})]),_:1})]),default:c(()=>[m("div",Vt,[i(n,{size:32,class:"user-avatar"},{default:c(()=>{var _,D;return[B(V(((D=(_=e.userInfo.real_name)==null?void 0:_[0])==null?void 0:D.toUpperCase())||"U"),1)]}),_:1}),m("span",Bt,V(e.userInfo.real_name+"：你好呀"||"未登录"),1),i(o,{class:"dropdown-icon"},{default:c(()=>[i(e.CaretBottom)]),_:1})])]),_:1})]),i(y,{modelValue:e.passwordDialogVisible,"onUpdate:modelValue":t[5]||(t[5]=_=>e.passwordDialogVisible=_),title:"修改密码",width:"400px",onClose:e.resetPasswordForm},{footer:c(()=>[m("span",Ft,[i(E,{onClick:t[4]||(t[4]=_=>e.passwordDialogVisible=!1)},{default:c(()=>t[8]||(t[8]=[B("取消")])),_:1}),i(E,{type:"primary",onClick:e.handlePasswordChange},{default:c(()=>t[9]||(t[9]=[B("确认")])),_:1})])]),default:c(()=>[J((d(),M(P,{ref:"passwordFormRef",model:e.passwordForm,rules:e.passwordRules,"label-width":"100px"},{default:c(()=>[i(l,{label:"旧密码",prop:"oldPassword"},{default:c(()=>[i(g,{modelValue:e.passwordForm.oldPassword,"onUpdate:modelValue":t[1]||(t[1]=_=>e.passwordForm.oldPassword=_),type:"password",placeholder:"请输入旧密码","show-password":""},null,8,["modelValue"])]),_:1}),i(l,{label:"新密码",prop:"newPassword"},{default:c(()=>[i(g,{modelValue:e.passwordForm.newPassword,"onUpdate:modelValue":t[2]||(t[2]=_=>e.passwordForm.newPassword=_),type:"password",placeholder:"请输入新密码","show-password":""},null,8,["modelValue"])]),_:1}),i(l,{label:"确认新密码",prop:"confirmPassword"},{default:c(()=>[i(g,{modelValue:e.passwordForm.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=_=>e.passwordForm.confirmPassword=_),type:"password",placeholder:"请再次输入新密码","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[A,e.passwordLoading]])]),_:1},8,["modelValue"])]),_:1})}const Ut=oe(At,[["render",zt],["__scopeId","data-v-c7591e26"],["__file","D:/临时存放/green-carbon-1.0/src/components/header/Header.vue"]]),Nt={__name:"index",setup(p,{expose:t}){t();const s=u(!1),e=u(!1),r=u(!1),f=u(!1),o=u(!1),n=u(""),w=u(!1),a=Q(),b=Y(),g=K(),l=X(),P=S(()=>({width:e.value?s.value?"0":"260px":s.value?"4rem":"260px",borderRadius:"8px"})),E=S(()=>({marginLeft:r.value?"0":"auto"})),y=async()=>{w.value=!0;try{await a.getUserInfo(),b.setCurrentCompany(a.userCompany),await Promise.all([g.fetchAreas(),l.fetchMeterList()]),f.value=!0,o.value=!1}catch(x){o.value=!0,n.value="初始化数据失败，请刷新页面重试",O({type:"error",title:"错误",message:n.value,duration:0,showClose:!0}),console.error("初始化失败:",x)}finally{w.value=!1}},U=()=>{e.value&&(s.value=!s.value)},L=x=>{s.value=x},A=()=>{const x=window.innerWidth<=768;e.value!==x&&(e.value=x,s.value=x)},_=x=>{r.value=x},D=u(navigator.onLine),I=()=>{D.value=navigator.onLine,D.value?(o.value=!1,n.value="",O.closeAll(),y()):(o.value=!0,n.value="网络连接不可用，请检查您的网络",O({type:"warning",title:"网络警告",message:n.value,duration:0,showClose:!0}))};q(async()=>{A(),window.addEventListener("resize",A),window.addEventListener("online",I),window.addEventListener("offline",I),D.value?await y():(o.value=!0,n.value="网络连接不可用，请检查您的网络",O({type:"warning",title:"网络警告",message:n.value,duration:0,showClose:!0}))}),ce(()=>{window.removeEventListener("resize",A),window.removeEventListener("online",I),window.removeEventListener("offline",I)});const $=S(()=>"发生错误"),N={isCollapse:s,isMobile:e,isFullscreen:r,isInitialized:f,hasError:o,errorMessage:n,loading:w,userStore:a,companyStore:b,areaStore:g,meterStore:l,asideStyle:P,mainContainerStyle:E,initializeData:y,toggleAside:U,updateCollapse:L,checkMobile:A,handleFullscreenChange:_,isOnline:D,updateNetworkStatus:I,errorTitle:$,ref:u,computed:S,onMounted:q,onUnmounted:ce,NavList:Mt,AppHeader:Ut,get useUserStore(){return Q},get useCompanyStore(){return Y},get useAreaStore(){return K},get useMeterStore(){return X}};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}},Rt={class:"logo-container"},Gt={class:"platform-name"},Ht={class:"router-view-container"},Ot={key:2,class:"loading-container"};function Wt(p,t,s,e,r,f){const o=Ge,n=Ue("router-view"),w=He,a=Oe,b=ye,g=mt,l=he;return J((d(),M(a,{class:"layout-container"},{default:c(()=>[!e.hasError&&e.isInitialized?(d(),v(W,{key:0},[e.isMobile&&!e.isCollapse?(d(),v("div",{key:0,class:"drawer-overlay",onClick:e.toggleAside})):F("",!0),i(o,{class:C(["aside-container",["aside",{"mobile-aside":e.isMobile}]]),style:G(e.asideStyle)},{default:c(()=>[m("div",Rt,[t[0]||(t[0]=m("img",{style:{"border-radius":"8px"},src:et,alt:"Logo",class:"logo"},null,-1)),J(m("span",Gt,"融禹智慧能源管理",512),[[Ne,!e.isCollapse||e.isMobile]])]),i(e.NavList,{"is-collapse":e.isCollapse,"is-mobile":e.isMobile},null,8,["is-collapse","is-mobile"])]),_:1},8,["class","style"]),i(a,{class:C(["right-container",{"mobile-right":e.isMobile}]),style:G(e.mainContainerStyle)},{default:c(()=>[i(e.AppHeader,{"is-collapse":e.isCollapse,"is-mobile":e.isMobile,"onUpdate:isCollapse":e.updateCollapse,onFullscreenChange:e.handleFullscreenChange},null,8,["is-collapse","is-mobile"]),i(w,{class:"main-content"},{default:c(()=>[m("div",Ht,[i(n)])]),_:1})]),_:1},8,["class","style"])],64)):e.hasError?(d(),M(g,{key:1,icon:"error",title:e.errorTitle,"sub-title":e.errorMessage,class:"error-result"},{extra:c(()=>[i(b,{type:"primary",onClick:e.initializeData},{default:c(()=>t[1]||(t[1]=[B("重试")])),_:1})]),_:1},8,["title","sub-title"])):(d(),v("div",Ot))]),_:1})),[[l,e.loading]])}const Bs=oe(Nt,[["render",Wt],["__scopeId","data-v-a763a6ae"],["__file","D:/临时存放/green-carbon-1.0/src/views/Home/index.vue"]]);export{Bs as default};
