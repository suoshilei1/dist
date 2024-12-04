import{D as A,w as L,r as f,I as z,_ as H,W as I,o as R,c as C,J as T,l as _,k as h,d as U,U as J,V as X,Y as $,e as ee,v as te}from"./index-DWtISIBF.js";import{E as ne}from"./card-Cr9tAXzl.js";import{M as le}from"./MeterTree-DDo9CbZZ.js";import{e as re,h as oe,i as ie,j as ae,u as x}from"./meter-BWYCtTLu.js";import{_ as se}from"./MeterSelect-w6b73_BF.js";/* empty css            */import{E as ce,a as pe}from"./select-DYqyOwb9.js";import"./scrollbar-BMOxp_jN.js";import"./popper-BNb2tGl7.js";import{E as de}from"./switch-DymwEZcu.js";/* empty css             *//* empty css                 */import{E as y}from"./index-CZh1RU_w.js";import{u as E,s as ue}from"./useParentComponentEffect-DPTUSRTe.js";import{s as he}from"./index.vue-BlwWegdC.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./dialog-DnmK2X7S.js";import"./index-DxRU3L2W.js";import"./scroll-DMdoCUCr.js";import"./vnode-BIvhTfyw.js";import"./index-CuP5NVML.js";import"./overlay-BY0G5ok6.js";import"./icon-Cc3ZZocH.js";import"./index-CVAPKPs0.js";import"./use-form-item-CuJrx89H.js";import"./focus-trap-D8pg8SM_.js";import"./aria-BUADUvnR.js";import"./refs-BfLSHSPd.js";import"./index-DjvbDGpK.js";import"./MeterDialog-DLFqLZEh.js";import"./form-item-ijUMtc9_.js";import"./castArray-6TPyo715.js";import"./_Uint8Array-DaZSNKBQ.js";import"./_initCloneObject-ChNElRpx.js";import"./button-DfREtLL_.js";import"./input-B0bTKLmJ.js";import"./index-DibVzrKz.js";import"./checkbox-BzIrpOFw.js";import"./isEqual-DqXByToB.js";/* empty css              */import"./date-picker-B_H4_mfX.js";import"./dayjs.min-t3tQ4ZJg.js";import"./index-CeeR5a7H.js";import"./index-DfeXTFmx.js";import"./radio-group-QDHk4pt3.js";import"./area-CDc72icr.js";import"./formula-BoDYiet4.js";import"./formula-HQf-IMJj.js";import"./handleError-BsBqXgSR.js";/* empty css                        */import"./index-DYLzNb0k.js";import"./constant-C2yHPMd2.js";import"./constants-NVab_QuI.js";import"./index-0A8HTOTd.js";import"./tree-CfWa2fVO.js";/* empty css                */import"./_baseIteratee-FAqII4j1.js";import"./validator-CunO4hgy.js";var W=A(Object.assign({name:"BScale"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_LEFT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},unit:{type:null,required:!1,default:"BMAP_UNIT_METRIC"},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(m){const n=m;let t;const{ready:e}=E(r=>{const{visible:o,offset:s,anchor:d}=n;return t=new BMapGL.ScaleControl({offset:new BMapGL.Size(s.x,s.y),anchor:window[d]}),o&&r.addControl(t),l(),e(r,t),L(()=>n.visible,c=>{r[c?"addControl":"removeControl"](t)}),()=>r.removeControl(t)});L(()=>n.unit,l);function l(){t.setUnit(window[n.unit])}return(r,o)=>null}}));W.__file="packages/components/control/scale/index.vue";var q=A(Object.assign({name:"BZoom"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(m){const n=m;let t;const{ready:e}=E(l=>{const{visible:r,offset:o,anchor:s}=n;return t=new BMapGL.ZoomControl({offset:new BMapGL.Size(o.x,o.y),anchor:window[s]}),r&&l.addControl(t),e(l,t),L(()=>n.visible,d=>{l[d?"addControl":"removeControl"](t)}),()=>l.removeControl(t)});return(l,r)=>null}}));q.__file="packages/components/control/zoom/index.vue";var j=A(Object.assign({name:"BNavigation3d"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(m){const n=m;let t;const{ready:e}=E(l=>{const{visible:r,offset:o,anchor:s}=n;return t=new BMapGL.NavigationControl3D({offset:new BMapGL.Size(o.x,o.y),anchor:window[s]}),r&&l.addControl(t),e(l,t),L(()=>n.visible,d=>{l[d?"addControl":"removeControl"](t)}),()=>l.removeControl(t)});return(l,r)=>null}}));j.__file="packages/components/control/navigation3d/index.vue";class me{constructor(n){if(!n)throw new Error("百度地图实例不能为空");this.map=n,this.options={},this.mode="none",this.overlays={markers:[],polylines:[],tempPolylines:[]},this.currentLine=[],this.tempLine=null,this.lastPoint=null,this.currentPolyline=null,this.undoStack=[],this.snapDistance=10,this.isDoubleClick=!1,this.dblClickTimer=null,this._handleMapClick=this._handleMapClick.bind(this),this._handleMapMove=this._handleMapMove.bind(this),this._handleMapDblClick=this._handleMapDblClick.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this)}deleteAllPoints(){this.overlays.markers.forEach(n=>{this.map.removeOverlay(n)}),this.overlays.markers=[]}deleteAllLines(){this.overlays.polylines.forEach(n=>{this.map.removeOverlay(n)}),this.overlays.polylines=[],this.overlays.tempPolylines.forEach(n=>{this.map.removeOverlay(n)}),this.overlays.tempPolylines=[]}addPoint(n,t,e={}){const l=new BMapGL.Point(n,t);let r;if(e.iconUrl){const d=new BMapGL.Icon(e.iconUrl,new BMapGL.Size(20,20));r=new BMapGL.Marker(l,{icon:d})}else r=new BMapGL.Marker(l);if(e.title){const d=new BMapGL.Label(e.title,{offset:new BMapGL.Size(20,-10)});d.setStyle({color:"#1a1a1a",fontSize:"0.8em",backgroundColor:"rgba(255, 255, 255, 0.95)",border:"1px solid #e0e0e0",borderRadius:"4px",padding:"5px 10px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",fontWeight:"500",letterSpacing:"0.3px"}),r.setLabel(d)}const o=new BMapGL.ContextMenu,s=new BMapGL.MenuItem("删除标记",()=>{e.onRemoveMarker&&e.onRemoveMarker(e.info)});return o.addItem(s),r.addContextMenu(o),this.map.addOverlay(r),this.overlays.markers.push(r),r}addLine(n,t={}){if(!Array.isArray(n)||n.length<2)throw new Error("添加线条需要至少两个点");const e=n.map(s=>new BMapGL.Point(s.lng,s.lat)),l=new BMapGL.Polyline(e,{strokeColor:t.strokeColor||"#FF0000",strokeWeight:t.strokeWeight||2,strokeOpacity:t.strokeOpacity||1,enableEditing:!1,enableMassClear:!0});l.isCompleted=!0;const r=new BMapGL.ContextMenu,o=new BMapGL.MenuItem("删除线段",()=>{t.onRemoveLine&&t.onRemoveLine(t.id)});return r.addItem(o),l.addContextMenu(r),this.map.addOverlay(l),this.overlays.polylines.push(l),this.undoStack.push({type:"line",overlay:l}),l}startDrawing(n,t){this.mode=n,this.options=t,this.map.setDefaultCursor("crosshair"),this.map.addEventListener("click",this._handleMapClick),this.map.addEventListener("mousemove",this._handleMapMove),this.map.addEventListener("dblclick",this._handleMapDblClick),document.addEventListener("keydown",this._handleKeyDown)}stopDrawing(n){if(this.mode="none",this.map.removeEventListener("click",this._handleMapClick),this.map.removeEventListener("mousemove",this._handleMapMove),this.map.removeEventListener("dblclick",this._handleMapDblClick),document.removeEventListener("keydown",this._handleKeyDown),this.tempLine&&(this.map.removeOverlay(this.tempLine),this.tempLine=null),this.currentPolyline&&!this.currentPolyline.isCompleted){this.map.removeOverlay(this.currentPolyline);const t=this.overlays.tempPolylines.indexOf(this.currentPolyline);t>-1&&this.overlays.tempPolylines.splice(t,1),this.currentPolyline=null}n&&this.options.onDrawEnd&&this.options.onDrawEnd(n),this.options={},this.map.setDefaultCursor("default"),this.currentLine=[],this.lastPoint=null}_handleMapClick(n){if(this.isDoubleClick){this.isDoubleClick=!1;return}if(this.mode!=="none"&&(this.mode==="point"&&(this.addPoint(n.latlng.lng,n.latlng.lat,this.options),this.stopDrawing({point:{lng:n.latlng.lng,lat:n.latlng.lat}})),this.mode==="line")){const t=this._snapToNearestPoint(n.latlng);if(this.currentLine.push(t),this.lastPoint=t,this.currentPolyline){const e=this.currentPolyline.getPath();e.push(new BMapGL.Point(t.lng,t.lat)),this.currentPolyline.setPath(e)}else this.currentPolyline=new BMapGL.Polyline(this.currentLine.map(e=>new BMapGL.Point(e.lng,e.lat)),{strokeColor:this.options.strokeColor||"#FF0000",strokeWeight:this.options.strokeWeight||2,strokeOpacity:this.options.strokeOpacity||1,enableEditing:!1,enableMassClear:!0}),this.currentPolyline.isCompleted=!1,this.map.addOverlay(this.currentPolyline),this.overlays.tempPolylines.push(this.currentPolyline);this.undoStack.push({type:"linePoint",point:t,polyline:this.currentPolyline})}}_handleMapMove(n){if(this.mode==="line"&&this.lastPoint){const t=this._snapToNearestPoint(n.latlng);this.tempLine&&this.map.removeOverlay(this.tempLine),this.tempLine=new BMapGL.Polyline([new BMapGL.Point(this.lastPoint.lng,this.lastPoint.lat),new BMapGL.Point(t.lng,t.lat)],{strokeColor:"#00FF00",strokeWeight:2,strokeOpacity:.7,enableEditing:!1,enableMassClear:!0}),this.map.addOverlay(this.tempLine)}}_handleMapDblClick(n){if(this.mode==="line"){if(n.domEvent.preventDefault(),this.isDoubleClick=!0,clearTimeout(this.dblClickTimer),this.dblClickTimer=setTimeout(()=>{this.isDoubleClick=!1},300),this.tempLine){const t=this._snapToNearestPoint(n.latlng);(this.currentLine.length===0||this._calculateDistance(t,this.currentLine[this.currentLine.length-1])>5)&&this.currentLine.push(t),this.map.removeOverlay(this.tempLine),this.tempLine=null}if(this.currentLine.length>=2){const t=[];for(let e=0;e<this.currentLine.length-1;e++){const l=this.currentLine[e],r=this.currentLine[e+1];(l.lng!==r.lng||l.lat!==r.lat)&&t.push({lng_start:l.lng,lat_start:l.lat,lng_stop:r.lng,lat_stop:r.lat})}if(this.currentPolyline){this.currentPolyline.isCompleted=!0;const e=this.overlays.tempPolylines.indexOf(this.currentPolyline);e>-1&&(this.overlays.tempPolylines.splice(e,1),this.overlays.polylines.push(this.currentPolyline))}this.currentLine=[],this.lastPoint=null,this.currentPolyline=null,this.stopDrawing({line:t})}else y.warning("请至少绘制两点以完成折线")}}_handleKeyDown(n){if(n.key==="Escape"){if(this.mode!=="none"){if(this.tempLine&&(this.map.removeOverlay(this.tempLine),this.tempLine=null),this.currentPolyline&&!this.currentPolyline.isCompleted){this.map.removeOverlay(this.currentPolyline);const t=this.overlays.tempPolylines.indexOf(this.currentPolyline);t>-1&&this.overlays.tempPolylines.splice(t,1)}this.currentPolyline=null,this.currentLine=[],this.lastPoint=null,this.options.onDrawCancel&&this.options.onDrawCancel(),this.stopDrawing(null)}}else n.ctrlKey&&n.key==="z"&&this.undo()}_snapToNearestPoint(n){let t=null,e=1/0;return this.overlays.markers.forEach(l=>{const r=l.getPosition(),o=this._calculateDistance(n,r);o<e&&o<this.snapDistance&&(e=o,t=r)}),this.overlays.polylines.forEach(l=>{l.getPath().forEach(o=>{const s=this._calculateDistance(n,o);s<e&&s<this.snapDistance&&(e=s,t=o)})}),t?{lng:t.lng,lat:t.lat}:{lng:n.lng,lat:n.lat}}_calculateDistance(n,t){const e=this.map.pointToPixel(new BMapGL.Point(n.lng,n.lat)),l=this.map.pointToPixel(new BMapGL.Point(t.lng,t.lat)),r=e.x-l.x,o=e.y-l.y;return Math.sqrt(r*r+o*o)}undo(){if(this.undoStack.length>0){const n=this.undoStack.pop();if(n.type==="point"){this.map.removeOverlay(n.overlay);const t=this.overlays.markers.indexOf(n.overlay);t>-1&&this.overlays.markers.splice(t,1)}else if(n.type==="line"){this.map.removeOverlay(n.overlay);const t=this.overlays.polylines.indexOf(n.overlay);t>-1&&this.overlays.polylines.splice(t,1)}else if(n.type==="linePoint"){const t=n.polyline.getPath();if(t.pop(),t.length<2){if(this.map.removeOverlay(n.polyline),n.polyline.isCompleted){const e=this.overlays.polylines.indexOf(n.polyline);e>-1&&this.overlays.polylines.splice(e,1)}else{const e=this.overlays.tempPolylines.indexOf(n.polyline);e>-1&&this.overlays.tempPolylines.splice(e,1)}this.currentPolyline=null,this.currentLine=[],this.lastPoint=null}else n.polyline.setPath(t),this.currentLine=t.map(e=>({lng:e.lng,lat:e.lat})),this.lastPoint=this.currentLine[this.currentLine.length-1]}}}}function N(m,{onCompanyChange:n}={}){const t=f(null),e=f(null),l=f("BMAP_NORMAL_MAP"),r=f({building:!0,overlay:!0,poiText:!0}),o=f({lng:0,lat:0}),s=f(17);return L(()=>m.currentCompany,async(c,v)=>{!c||!t.value||(!v||c.id!==v.id)&&(console.log("Company changed, updating map...",c),o.value={lng:c.longitude,lat:c.latitude},s.value=c.zoom,e.value&&(e.value.deleteAllPoints(),e.value.deleteAllLines()),typeof n=="function"&&await n(c))},{deep:!0,immediate:!0}),{map:t,mapDraw:e,mapType:l,displayOptions:r,center:o,zoom:s,handleInit:({map:c})=>{const v=m.currentCompany;return v&&(o.value={lng:v.longitude,lat:v.latitude},s.value=v.zoom),t.value=c,e.value=new me(t.value),{map:t.value,mapDraw:e.value}}}}const k="/assets/water-meter-PYCkDZWY.png";function V(m,n){const t=f([]),e=f(null),l=()=>z(m),r=i=>({1:"水表",2:"电表",3:"气表"})[i]||"",o=i=>({1:k,2:k,3:k})[i]||k,s=async()=>{try{const{data:i}=await re();t.value=i.map(a=>({...a,label:`${a.meter_code}`,value:a.meter_code}))}catch(i){console.error("Fetch meters error:",i),y.error("获取表计数据失败")}},d=async()=>{try{const i=l();if(!i){console.warn("MapDraw instance not ready");return}await s(),t.value.forEach(a=>{const u=o(a.type);a.longitude&&a.latitude&&i.addPoint(a.longitude,a.latitude,{iconUrl:u,title:a.label,info:a,onRemoveMarker:c})})}catch(i){console.error("Add meter overlays error:",i),y.error("添加表计失败")}},c=async i=>{try{const a=l();if(!a)return;await n.addMeterLocation({...i,longitude:-1,latitude:-1}),y.success("表计删除成功"),a.deleteAllPoints(),await d()}catch(a){console.error("Remove meter error:",a),y.error("表计删除失败")}},v=i=>{if(!i)return;const a=t.value.find(u=>u.meter_code===i);a&&w(a)},w=i=>{const a=l();if(!a)return;const u=o(i.type);a.startDrawing("point",{iconUrl:u,title:i.label,onClick:()=>y.info(`点击了表计 ${i.label}`),onDrawEnd:async({point:p})=>{try{await n.addMeterLocation({...i,longitude:p.lng,latitude:p.lat}),y.success("表计添加成功"),a.deleteAllPoints(),await d()}catch(g){console.error("Add meter location error:",g),y.error("表计添加失败")}}})};return{meters:t,currentMeter:e,getMeterTypeLabel:r,getMeterIcon:o,fetchMeters:s,addMeterOverlays:d,handleRemoveMeter:c,handleSelect:v,handleDrawingMeter:w}}function F(m,n){const t=f(null),e=f(!1),l=()=>z(m),r={water:"#05FC04",electric:"#05FC04",gas:"#05FC04"},o=i=>({1:r.water,2:r.electric,3:r.gas})[i]||r.water,s=i=>({1:"水管",2:"电缆",3:"气管"})[i]||"",d=async()=>{try{const i=l();if(!i)throw new Error("MapDraw 实例未就绪");i.deleteAllLines();const a={company_id:n.currentCompany.id},u=await oe(a);if(u.code===200){const p=u.data||u.pipes||[];p.length>0?c(p):console.log("No pipeline data available")}else throw new Error(u.message||"获取管线数据失败")}catch(i){console.error("Fetch pipeline error:",i),y.error(i.message||"获取管线数据失败")}},c=i=>{const a=l();if(!a||!a.map||!Array.isArray(i)||i.length===0)return;const u=[];i.forEach((p,g)=>{if(!p.lng_start||!p.lat_start||!p.lng_stop||!p.lat_stop){console.error(`Invalid pipeline data at index ${g}:`,p);return}u.push(new BMapGL.Point(p.lng_start,p.lat_start)),u.push(new BMapGL.Point(p.lng_stop,p.lat_stop));const M=o(p.type);console.log(`Drawing pipeline ${g}:`,{start:{lng:p.lng_start,lat:p.lat_start},end:{lng:p.lng_stop,lat:p.lat_stop},color:M});try{a.addLine([{lng:p.lng_start,lat:p.lat_start},{lng:p.lng_stop,lat:p.lat_stop}],{strokeColor:M,strokeWeight:3,strokeOpacity:.8,title:s(p.type),onRemoveLine:v,id:p.id})}catch(O){console.error(`Error drawing pipeline ${g}:`,O)}}),u.length>0&&a.map&&a.map.setViewport(u,{margins:[50,50,50,50]})},v=async i=>{try{const a=l();if(!a)throw new Error("MapDraw 实例未就绪");const u=await ie(i);if(u.code!==200)throw new Error(u.message||"删除管线失败");a.deleteAllLines(),await d(),y.success("管线删除成功")}catch(a){console.error("Remove pipeline error:",a),y.error(a.message||"管线删除失败")}};return{selectedPipelineType:t,isDrawing:e,getPipelineColor:o,getPipelineLabel:s,fetchPipelineData:d,addPipes:c,handleRemovePipeline:v,startDrawingPipeline:()=>{const i=l();if(!i)return;if(e.value){y.warning("正在绘制中，请完成当前绘制");return}if(!t.value){y.warning("请先选择管线类型");return}e.value=!0;const a=o(t.value);i.startDrawing("line",{strokeColor:a,strokeWeight:3,onDrawEnd:async({line:u})=>{try{if(!Array.isArray(u)||u.length===0)throw new Error("未获取到有效的管线数据");const p=u[0],g={type:t.value,company_id:n.currentCompany.id,lng_start:p.lng_start,lat_start:p.lat_start,lng_stop:p.lng_stop,lat_stop:p.lat_stop};if(!g.lng_start||!g.lat_start||!g.lng_stop||!g.lat_stop)throw new Error("管线坐标数据不完整");const M=await ae(g);if(M.code===200)y.success("管线添加成功"),i.deleteAllLines(),await d();else throw new Error(M.message||"添加失败")}catch(p){console.error("Add pipeline error:",p),y.error(p.message||"管线添加失败"),i.deleteAllLines()}finally{e.value=!1,t.value=null}},onDrawCancel:()=>{e.value=!1,t.value=null,i.deleteAllLines()}})}}}const ye={__name:"MapMonitoring",setup(m,{expose:n}){const t=I(),e=x(),l=f(null),r=f(null),o=async B=>{var P,D;console.log("Reloading data for company:",B),g.value=null,S.value=null;try{await Promise.all([(P=r.value)==null?void 0:P.fetchPipelineData(),(D=l.value)==null?void 0:D.addMeterOverlays()])}catch(Q){console.error("Failed to reload data:",Q)}},{map:s,mapDraw:d,mapType:c,displayOptions:v,center:w,zoom:i,handleInit:a}=N(t,{onCompanyChange:o}),u=V(d,e);l.value=u;const{meters:p,currentMeter:g,getMeterTypeLabel:M,handleSelect:O}=u,b=F(d,t);r.value=b;const{selectedPipelineType:S,isDrawing:K,startDrawingPipeline:Z}=b,Y=async B=>{const{mapDraw:P}=a(B);if(P){d.value=P;try{await Promise.all([b.fetchPipelineData(),u.addMeterOverlays()])}catch(D){console.error("Failed to load initial data:",D)}}};R(()=>{}),n({reloadData:o});const G={companyStore:t,meterStore:e,meterMapRef:l,pipelineMapRef:r,handleCompanyChange:o,map:s,mapDraw:d,mapType:c,displayOptions:v,center:w,zoom:i,handleMapBaseInit:a,meterMap:u,meters:p,currentMeter:g,getMeterTypeLabel:M,handleMeterSelect:O,pipelineMap:b,selectedPipelineType:S,isDrawing:K,startDrawingPipeline:Z,handleMapInit:Y,get BMap(){return ue},get BZoom(){return q},get BScale(){return W},get BNavigation3d(){return j},get BControl(){return he},get useCompanyStore(){return I},get useMeterStore(){return x},get useMapBase(){return N},get useMeterMap(){return V},get usePipelineMap(){return F},onMounted:R,ref:f};return Object.defineProperty(G,"__isScriptSetup",{enumerable:!1,value:!0}),G}};function fe(m,n,t,e,l,r){const o=de,s=ce,d=pe;return C(),T(e.BMap,{displayOptions:e.displayOptions,width:"100%",height:"100%",ak:"Kwc6trl7dmb2Go3SM6S5QueuW0Foa0QN",enableScrollWheelZoom:"",ref:"map",center:e.center,zoom:e.zoom,onInitd:e.handleMapInit,mapType:e.mapType},{default:_(()=>[h(e.BZoom,{offset:{x:22,y:40}}),h(e.BControl,{anchor:"BMAP_ANCHOR_TOP_RIGHT",offset:{x:20,y:60},class:"control-panel"},{default:_(()=>[h(o,{style:{"margin-right":"1rem"},modelValue:e.displayOptions.building,"onUpdate:modelValue":n[0]||(n[0]=c=>e.displayOptions.building=c),"inline-prompt":"","active-text":"显示3D建筑","inactive-text":"隐藏3D建筑"},null,8,["modelValue"]),h(o,{style:{"margin-right":"1rem"},modelValue:e.displayOptions.overlay,"onUpdate:modelValue":n[1]||(n[1]=c=>e.displayOptions.overlay=c),"inline-prompt":"","active-text":"显示表计","inactive-text":"隐藏表计"},null,8,["modelValue"]),h(o,{modelValue:e.displayOptions.poiText,"onUpdate:modelValue":n[2]||(n[2]=c=>e.displayOptions.poiText=c),"inline-prompt":"","active-text":"显示地标文字","inactive-text":"隐藏地标文字"},null,8,["modelValue"])]),_:1}),h(e.BControl,{anchor:"BMAP_ANCHOR_TOP_LEFT",offset:{x:20,y:20},class:"control-panel"},{default:_(()=>[h(d,{modelValue:e.currentMeter,"onUpdate:modelValue":n[3]||(n[3]=c=>e.currentMeter=c),placeholder:"选择表计",clearable:"",filterable:"",onChange:e.handleMeterSelect,size:"small",style:{width:"200px"}},{default:_(()=>[(C(!0),U(J,null,X(e.meters,c=>(C(),T(s,{key:c.meter_code,label:`${c.meter_code}（${e.getMeterTypeLabel(c.type)}）`,value:c.meter_code},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),h(e.BScale,{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT"}),h(e.BNavigation3d,{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",offset:{x:10,y:103}}),h(e.BControl,{anchor:"BMAP_ANCHOR_TOP_RIGHT",offset:{x:20,y:20},class:"control-panel map-type-control"},{default:_(()=>[h(d,{modelValue:e.mapType,"onUpdate:modelValue":n[4]||(n[4]=c=>e.mapType=c),size:"small",style:{width:"120px"}},{default:_(()=>[h(s,{label:"普通地图",value:"BMAP_NORMAL_MAP"}),h(s,{label:"卫星地图",value:"BMAP_SATELLITE_MAP"}),h(s,{label:"地球模式",value:"BMAP_EARTH_MAP"})]),_:1},8,["modelValue"])]),_:1}),h(e.BControl,{anchor:"BMAP_ANCHOR_TOP_LEFT",offset:{x:20,y:70},class:"control-panel"},{default:_(()=>[h(d,{modelValue:e.selectedPipelineType,"onUpdate:modelValue":n[5]||(n[5]=c=>e.selectedPipelineType=c),placeholder:"选择管线类型",onChange:e.startDrawingPipeline,size:"small",style:{width:"200px"},disabled:e.isDrawing},{default:_(()=>[h(s,{label:"水管",value:1}),h(s,{label:"电缆",value:2}),h(s,{label:"燃气管",value:3})]),_:1},8,["modelValue","onChange","disabled"])]),_:1})]),_:1},8,["displayOptions","center","zoom","mapType"])}const ve=H(ye,[["render",fe],["__scopeId","data-v-0d075cce"],["__file","D:/临时存放/green-carbon-1.0/src/views/DeviceCenter/Console/DeviceMonitoring/components/MapMonitoring.vue"]]),ge={__name:"index",setup(m,{expose:n}){n();let t=x(),e=f(!1);const l=async()=>{e.value=!0,await t.fetchMeterList(),t.setCurrentMeter(t.treeDataForChart[0]),e.value=!1};l();const r={get meterStore(){return t},set meterStore(o){t=o},get loading(){return e},set loading(o){e=o},getMeters:l,MeterTree:le,get useMeterStore(){return x},ref:f,MeterSelect:se,MeterStructure:ve};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},_e={class:"container"},Me={class:"meter-report-card"};function we(m,n,t,e,l,r){const o=ne,s=te;return C(),U("div",_e,[$((C(),T(o,{class:"meter-nav"},{default:_(()=>[h(e.MeterSelect,{"onUpdate:loading":n[0]||(n[0]=d=>e.loading=d)}),h(e.MeterTree,{data:e.meterStore.treeDataForChart},null,8,["data"])]),_:1})),[[s,e.loading]]),ee("div",Me,[h(e.MeterStructure)])])}const Dt=H(ge,[["render",we],["__scopeId","data-v-48e8863b"],["__file","D:/临时存放/green-carbon-1.0/src/views/DeviceCenter/Console/DeviceMonitoring/index.vue"]]);export{Dt as default};