import{_ as k,ce as B,r as O,w as L,o as E,c as M,d as $,n as W,b as F}from"./index-Bx6Y8L80.js";import{d as w}from"./DebounceAndThrottle-B_grFKK4.js";import{u as D,es as T,er as A,eu as R,a as Y,ev as _,et as H,i as j,eq as X,b as q,ey as P,c as U}from"./installCanvasRenderer-7dDAEUGk.js";const G={__name:"BaseChart",props:{options:{type:Object,required:!0,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"400px"},theme:{type:String,default:"default"}},setup(d,{expose:S}){B(t=>({c3cf7ccc:d.width,"0b20f7d3":d.height})),D([T,A,R,Y,_,H,j,X,q,P]);const h=d,p=O(null);let e=null;const x=["#409EFF","#7dafff","#67C23A","#E6A23C","#F56C6C","#909399"],C=()=>({backgroundColor:"#ffffff",animation:!0,color:x,animationDuration:1e3,animationEasing:"cubicInOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:200,hoverLayerThreshold:3e3,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{width:1,type:"dashed",color:"#aaa"}},textStyle:{fontSize:12},padding:[8,12],borderRadius:4,borderWidth:0,backgroundColor:"rgba(255, 255, 255, 0.9)",shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,transitionDuration:.4,position:function(t,i,l,c,s){const[n,r]=t,{contentSize:o,viewSize:a}=s,{width:m,height:b}=o,f=20;let u=n+f,y=r+f;return u+m>a.width&&(u=Math.max(n-m-f,0)),y+b>a.height&&(y=Math.max(r-b-f,0)),m>a.width&&(u=0),[u,y]},confine:!0}}),v=(t,i,l,c)=>t.map((s,n)=>{const r={...s,itemStyle:{color:i[n%i.length],borderRadius:s.type==="bar"?[4,4,0,0]:0}};return s.type==="line"&&Object.assign(r,{smooth:.2,showSymbol:!0,symbol:"circle",symbolSize:6,lineStyle:{width:2,cap:"round",shadowColor:"rgba(0,0,0,0.2)",shadowBlur:5,shadowOffsetY:5},emphasis:{focus:"series",scale:!1,itemStyle:{borderWidth:2,shadowColor:"rgba(0,0,0,0.5)",shadowBlur:10}}}),s.type==="bar"&&Object.assign(r,{barMaxWidth:20,stack:l?"total":void 0,emphasis:{focus:"series",itemStyle:{shadowColor:"rgba(0,0,0,0.3)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:5}}}),c&&s.showExtremum&&(r.markLine={silent:!0,animation:!0,symbol:["none","none"],precision:2,label:{formatter:({data:o})=>{if(!o)return"";const a=typeof o.value=="number"?o.value.toFixed(2):o.value;return`${o.name}: ${a}`},position:"insideEndTop",fontSize:11,color:"#666",padding:[2,4],backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:2},lineStyle:{type:"dashed",width:1,opacity:.8},data:[{type:"average",name:"平均值",lineStyle:{color:"#FFB100"}},{type:"max",name:"最大值",lineStyle:{color:"#FF6B6B"}},{type:"min",name:"最小值",lineStyle:{color:"#4ECDC4"}}],animationDuration:1e3,animationEasing:"cubicInOut"}),r}),z=()=>{if(p.value){e=U(p.value,h.theme),g();const t=w(()=>{e==null||e.resize()},100);window.addEventListener("resize",t),F(()=>{window.removeEventListener("resize",t),e==null||e.dispose(),e=null})}},g=()=>{if(!e||!h.options)return;const{title:t,xAxisData:i=[],series:l=[],iszoom:c=!1,showMarkLine:s=!1,customColors:n=[],isStacked:r=!1}=h.options,o={...C(),title:t?{text:t,textStyle:{fontSize:16,fontWeight:500,color:"#333"},top:10,left:"3%"}:null,grid:{top:t?"15%":"10%",right:"5%",bottom:c?"20%":"10%",left:"5%",containLabel:!0},legend:l.length>1?{data:l.map(a=>a.name),right:"5%",icon:"circle",itemWidth:8,itemHeight:8,itemGap:16,textStyle:{fontSize:12,color:"#666"},animation:!0}:null,xAxis:{type:"category",data:i,axisLabel:{interval:"auto",rotate:i.length>8?30:0,fontSize:12,color:"#666"},axisLine:{lineStyle:{}},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",splitLine:{lineStyle:{type:"dashed",opacity:.3}},axisLabel:{fontSize:12,color:"#666"},axisLine:{show:!1},axisTick:{show:!1}},series:v(l,n,r,s)};if(c){const a=i.length<100?100:Math.min(100,Math.max(30,100/Math.ceil(i.length/4)));o.dataZoom=[{type:"slider",show:!0,start:0,end:a,height:30,bottom:10,borderColor:"transparent",handleSize:20,handleStyle:{color:"#fff",borderColor:"#ddd",borderWidth:1,shadowBlur:2,shadowColor:"rgba(0,0,0,0.2)",shadowOffsetY:1},moveHandleStyle:{color:"#fff",borderColor:"#aaa"},selectedDataBackground:{lineStyle:{color:"#215ae0",opacity:.3},areaStyle:{color:"#215ae0",opacity:.1}},emphasis:{handleStyle:{borderColor:"#8ab4f8"}},fillerColor:"rgba(24, 144, 255, 0.1)",backgroundColor:"#fafafa",showDetail:!1,zoomLock:!1,brushSelect:!1},{type:"inside",start:0,end:a,zoomOnMouseWheel:"ctrl",moveOnMouseWheel:!0}]}e.setOption(o,!0)};return L(()=>h.options,w(()=>{e&&(h.options.isMerge||e.clear(),g())},100),{deep:!0}),S({getChart:()=>e,resize:()=>e==null?void 0:e.resize()}),E(()=>{z()}),(t,i)=>(M(),$("div",{ref_key:"chartRef",ref:p,style:W({width:d.width||"100%",height:d.height||"400px"})},null,4))}},K=k(G,[["__scopeId","data-v-4f912a63"]]);export{K as B};