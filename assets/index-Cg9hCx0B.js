import{D as N,w as x,r as w,I as c,_ as F,W as Z,o as Y,c as k,J as S,j as L,i as m,ah as T,d as z,U as Q,V as J,Y as X,e as ee,v as te}from"./index-Bx6Y8L80.js";import{E as ne}from"./card-fNeABwz5.js";import{M as le}from"./MeterTree-CoH_k643.js";import{e as oe,h as ae,i as ie,j as re,u as H}from"./meter-5sbrBbgq.js";import{_ as se}from"./MeterSelect-CiP2rIsy.js";/* empty css            */import{E as ce,a as pe}from"./select-BmMHn9PT.js";import"./scrollbar-DuXO1tWo.js";import"./popper-DBn8ulUn.js";import{E as de}from"./switch-Cnp2D3m2.js";/* empty css             *//* empty css                 */import{E as M}from"./index-KJp6TXG9.js";import{u as V,s as ue}from"./useParentComponentEffect-CXSsrGL2.js";import{s as A}from"./index.vue-dz08okpR.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./dialog-Dt2QUqOw.js";import"./index-DZY-cmUL.js";import"./index-CuyxIfpa.js";import"./scroll-BawlEUY1.js";import"./vnode-DK7gyQZj.js";import"./index-A4BGBRGh.js";import"./overlay-04qnzRyj.js";import"./icon-6zrsquxY.js";import"./use-form-item-50hJ8Ppj.js";import"./focus-trap-Ddg061Nm.js";import"./aria-BUADUvnR.js";import"./refs-Bp53MkJS.js";import"./index-AkNVqhGZ.js";import"./MeterDialog-C3DuWE-y.js";import"./form-item-CWYWsPGl.js";import"./castArray-CrUPC_Z8.js";import"./_Uint8Array-B6mJ0Xm4.js";import"./_initCloneObject-nnMrnZRY.js";import"./button-8bviUT_H.js";import"./input-CFaQgGx5.js";import"./index-iw6eP590.js";import"./checkbox-LjaCbo-5.js";import"./isEqual-BM-Gj-iT.js";/* empty css              */import"./date-picker-CfUXe-Kp.js";import"./dayjs.min-Cd48fqZ9.js";import"./index-DLcTS03G.js";import"./index-zrRcpBp4.js";import"./radio-group-i8YIvWc2.js";import"./area-COPnz-hV.js";import"./formula-ClsumsYI.js";import"./formula-SHWkc_ME.js";import"./handleError-DD4JYoq7.js";/* empty css                        */import"./index-CWCMyxJA.js";import"./constant-Dm8qiNaG.js";import"./constants-NVab_QuI.js";import"./index-aFn2MKle.js";import"./tree-Bp6m8vKT.js";/* empty css                */import"./_baseIteratee-CkjM3wkz.js";import"./validator-ulZFuTQV.js";var U=N(Object.assign({name:"BScale"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_LEFT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},unit:{type:null,required:!1,default:"BMAP_UNIT_METRIC"},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(_){const t=_;let e;const{ready:n}=V(o=>{const{visible:r,offset:p,anchor:d}=t;return e=new BMapGL.ScaleControl({offset:new BMapGL.Size(p.x,p.y),anchor:window[d]}),r&&o.addControl(e),l(),n(o,e),x(()=>t.visible,h=>{o[h?"addControl":"removeControl"](e)}),()=>o.removeControl(e)});x(()=>t.unit,l);function l(){e.setUnit(window[t.unit])}return(o,r)=>null}}));U.__file="packages/components/control/scale/index.vue";var W=N(Object.assign({name:"BZoom"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(_){const t=_;let e;const{ready:n}=V(l=>{const{visible:o,offset:r,anchor:p}=t;return e=new BMapGL.ZoomControl({offset:new BMapGL.Size(r.x,r.y),anchor:window[p]}),o&&l.addControl(e),n(l,e),x(()=>t.visible,d=>{l[d?"addControl":"removeControl"](e)}),()=>l.removeControl(e)});return(l,o)=>null}}));W.__file="packages/components/control/zoom/index.vue";var q=N(Object.assign({name:"BNavigation3d"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(_){const t=_;let e;const{ready:n}=V(l=>{const{visible:o,offset:r,anchor:p}=t;return e=new BMapGL.NavigationControl3D({offset:new BMapGL.Size(r.x,r.y),anchor:window[p]}),o&&l.addControl(e),n(l,e),x(()=>t.visible,d=>{l[d?"addControl":"removeControl"](e)}),()=>l.removeControl(e)});return(l,o)=>null}}));q.__file="packages/components/control/navigation3d/index.vue";class he{constructor(t){if(!t)throw new Error("百度地图实例不能为空");this.map=t,this.options={},this.mode="none",this.overlays={markers:[],polylines:[],tempPolylines:[]},this.currentLine=[],this.tempLine=null,this.lastPoint=null,this.currentPolyline=null,this.undoStack=[],this.snapDistance=10,this.isDoubleClick=!1,this.dblClickTimer=null,this._handleMapClick=this._handleMapClick.bind(this),this._handleMapMove=this._handleMapMove.bind(this),this._handleMapDblClick=this._handleMapDblClick.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this)}deleteAllPoints(){this.overlays.markers.forEach(t=>{this.map.removeOverlay(t)}),this.overlays.markers=[]}deleteAllLines(){this.overlays.polylines.forEach(t=>{this.map.removeOverlay(t)}),this.overlays.polylines=[],this.overlays.tempPolylines.forEach(t=>{this.map.removeOverlay(t)}),this.overlays.tempPolylines=[]}addPoint(t,e,n={}){const l=new BMapGL.Point(t,e);let o;if(n.iconUrl){const d=new BMapGL.Icon(n.iconUrl,new BMapGL.Size(20,20));o=new BMapGL.Marker(l,{icon:d})}else o=new BMapGL.Marker(l);if(n.title){const d=new BMapGL.Label(n.title,{offset:new BMapGL.Size(20,-10)});d.setStyle({color:"#1a1a1a",fontSize:"0.8em",backgroundColor:"rgba(255, 255, 255, 0.95)",border:"1px solid #e0e0e0",borderRadius:"4px",padding:"5px 10px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",fontWeight:"500",letterSpacing:"0.3px"}),o.setLabel(d)}const r=new BMapGL.ContextMenu,p=new BMapGL.MenuItem("删除标记",()=>{n.onRemoveMarker&&n.onRemoveMarker(n.info)});return r.addItem(p),o.addContextMenu(r),this.map.addOverlay(o),this.overlays.markers.push(o),o}addLine(t,e={}){if(!Array.isArray(t)||t.length<2)throw new Error("添加线条需要至少两个点");const n=t.map(p=>new BMapGL.Point(p.lng,p.lat)),l=new BMapGL.Polyline(n,{strokeColor:e.strokeColor||"#FF0000",strokeWeight:e.strokeWeight||2,strokeOpacity:e.strokeOpacity||1,enableEditing:!1,enableMassClear:!0});l.isCompleted=!0;const o=new BMapGL.ContextMenu,r=new BMapGL.MenuItem("删除线段",()=>{e.onRemoveLine&&e.onRemoveLine(e.id)});return o.addItem(r),l.addContextMenu(o),this.map.addOverlay(l),this.overlays.polylines.push(l),this.undoStack.push({type:"line",overlay:l}),l}startDrawing(t,e){this.mode=t,this.options=e,this.map.setDefaultCursor("crosshair"),this.map.addEventListener("click",this._handleMapClick),this.map.addEventListener("mousemove",this._handleMapMove),this.map.addEventListener("dblclick",this._handleMapDblClick),document.addEventListener("keydown",this._handleKeyDown)}stopDrawing(t){if(this.mode="none",this.map.removeEventListener("click",this._handleMapClick),this.map.removeEventListener("mousemove",this._handleMapMove),this.map.removeEventListener("dblclick",this._handleMapDblClick),document.removeEventListener("keydown",this._handleKeyDown),this.tempLine&&(this.map.removeOverlay(this.tempLine),this.tempLine=null),this.currentPolyline&&!this.currentPolyline.isCompleted){this.map.removeOverlay(this.currentPolyline);const e=this.overlays.tempPolylines.indexOf(this.currentPolyline);e>-1&&this.overlays.tempPolylines.splice(e,1),this.currentPolyline=null}t&&this.options.onDrawEnd&&this.options.onDrawEnd(t),this.options={},this.map.setDefaultCursor("default"),this.currentLine=[],this.lastPoint=null}_handleMapClick(t){if(this.isDoubleClick){this.isDoubleClick=!1;return}if(this.mode!=="none"&&(this.mode==="point"&&(this.addPoint(t.latlng.lng,t.latlng.lat,this.options),this.stopDrawing({point:{lng:t.latlng.lng,lat:t.latlng.lat}})),this.mode==="line")){const e=this._snapToNearestPoint(t.latlng);if(this.currentLine.push(e),this.lastPoint=e,this.currentPolyline){const n=this.currentPolyline.getPath();n.push(new BMapGL.Point(e.lng,e.lat)),this.currentPolyline.setPath(n)}else this.currentPolyline=new BMapGL.Polyline(this.currentLine.map(n=>new BMapGL.Point(n.lng,n.lat)),{strokeColor:this.options.strokeColor||"#FF0000",strokeWeight:this.options.strokeWeight||2,strokeOpacity:this.options.strokeOpacity||1,enableEditing:!1,enableMassClear:!0}),this.currentPolyline.isCompleted=!1,this.map.addOverlay(this.currentPolyline),this.overlays.tempPolylines.push(this.currentPolyline);this.undoStack.push({type:"linePoint",point:e,polyline:this.currentPolyline})}}_handleMapMove(t){if(this.mode==="line"&&this.lastPoint){const e=this._snapToNearestPoint(t.latlng);this.tempLine&&this.map.removeOverlay(this.tempLine),this.tempLine=new BMapGL.Polyline([new BMapGL.Point(this.lastPoint.lng,this.lastPoint.lat),new BMapGL.Point(e.lng,e.lat)],{strokeColor:"#00FF00",strokeWeight:2,strokeOpacity:.7,enableEditing:!1,enableMassClear:!0}),this.map.addOverlay(this.tempLine)}}_handleMapDblClick(t){if(this.mode==="line"){if(t.domEvent.preventDefault(),this.isDoubleClick=!0,clearTimeout(this.dblClickTimer),this.dblClickTimer=setTimeout(()=>{this.isDoubleClick=!1},300),this.tempLine){const e=this._snapToNearestPoint(t.latlng);(this.currentLine.length===0||this._calculateDistance(e,this.currentLine[this.currentLine.length-1])>5)&&this.currentLine.push(e),this.map.removeOverlay(this.tempLine),this.tempLine=null}if(this.currentLine.length>=2){const e=[];for(let n=0;n<this.currentLine.length-1;n++){const l=this.currentLine[n],o=this.currentLine[n+1];(l.lng!==o.lng||l.lat!==o.lat)&&e.push({lng_start:l.lng,lat_start:l.lat,lng_stop:o.lng,lat_stop:o.lat})}if(this.currentPolyline){this.currentPolyline.isCompleted=!0;const n=this.overlays.tempPolylines.indexOf(this.currentPolyline);n>-1&&(this.overlays.tempPolylines.splice(n,1),this.overlays.polylines.push(this.currentPolyline))}this.currentLine=[],this.lastPoint=null,this.currentPolyline=null,this.stopDrawing({line:e})}else M.warning("请至少绘制两点以完成折线")}}_handleKeyDown(t){if(t.key==="Escape"){if(this.mode!=="none"){if(this.tempLine&&(this.map.removeOverlay(this.tempLine),this.tempLine=null),this.currentPolyline&&!this.currentPolyline.isCompleted){this.map.removeOverlay(this.currentPolyline);const e=this.overlays.tempPolylines.indexOf(this.currentPolyline);e>-1&&this.overlays.tempPolylines.splice(e,1)}this.currentPolyline=null,this.currentLine=[],this.lastPoint=null,this.options.onDrawCancel&&this.options.onDrawCancel(),this.stopDrawing(null)}}else t.ctrlKey&&t.key==="z"&&this.undo()}_snapToNearestPoint(t){let e=null,n=1/0;return this.overlays.markers.forEach(l=>{const o=l.getPosition(),r=this._calculateDistance(t,o);r<n&&r<this.snapDistance&&(n=r,e=o)}),this.overlays.polylines.forEach(l=>{l.getPath().forEach(r=>{const p=this._calculateDistance(t,r);p<n&&p<this.snapDistance&&(n=p,e=r)})}),e?{lng:e.lng,lat:e.lat}:{lng:t.lng,lat:t.lat}}_calculateDistance(t,e){const n=this.map.pointToPixel(new BMapGL.Point(t.lng,t.lat)),l=this.map.pointToPixel(new BMapGL.Point(e.lng,e.lat)),o=n.x-l.x,r=n.y-l.y;return Math.sqrt(o*o+r*r)}undo(){if(this.undoStack.length>0){const t=this.undoStack.pop();if(t.type==="point"){this.map.removeOverlay(t.overlay);const e=this.overlays.markers.indexOf(t.overlay);e>-1&&this.overlays.markers.splice(e,1)}else if(t.type==="line"){this.map.removeOverlay(t.overlay);const e=this.overlays.polylines.indexOf(t.overlay);e>-1&&this.overlays.polylines.splice(e,1)}else if(t.type==="linePoint"){const e=t.polyline.getPath();if(e.pop(),e.length<2){if(this.map.removeOverlay(t.polyline),t.polyline.isCompleted){const n=this.overlays.polylines.indexOf(t.polyline);n>-1&&this.overlays.polylines.splice(n,1)}else{const n=this.overlays.tempPolylines.indexOf(t.polyline);n>-1&&this.overlays.tempPolylines.splice(n,1)}this.currentPolyline=null,this.currentLine=[],this.lastPoint=null}else t.polyline.setPath(e),this.currentLine=e.map(n=>({lng:n.lng,lat:n.lat})),this.lastPoint=this.currentLine[this.currentLine.length-1]}}}}function me(_,{onCompanyChange:t}={}){const e=w(null),n=w(null),l=w("BMAP_NORMAL_MAP"),o=w({building:!0,overlay:!0,poiText:!0}),r=w({lng:0,lat:0}),p=w(17);return x(()=>_.currentCompany,async(h,y)=>{!h||!e.value||(!y||h.id!==y.id)&&(console.log("Company changed, updating map...",h),r.value={lng:h.longitude,lat:h.latitude},p.value=h.zoom,n.value&&(n.value.deleteAllPoints(),n.value.deleteAllLines()),typeof t=="function"&&await t(h))},{deep:!0,immediate:!0}),{map:e,mapDraw:n,mapType:l,displayOptions:o,center:r,zoom:p,handleInit:({map:h})=>{const y=_.currentCompany;return y&&(r.value={lng:y.longitude,lat:y.latitude},p.value=y.zoom),e.value=h,n.value=new he(e.value),{map:e.value,mapDraw:n.value}}}}const E="/assets/water-meter-PYCkDZWY.png";function ye(_,t){const e=w([]),n=w(null),l=()=>c(_),o=a=>({1:"水表",2:"电表",3:"气表"})[a]||"",r=a=>({1:E,2:E,3:E})[a]||E,p=async()=>{try{const{data:a}=await oe();e.value=a.map(i=>({...i,label:`${i.meter_code}`,value:i.meter_code}))}catch(a){console.error("Fetch meters error:",a),M.error("获取表计数据失败")}},d=async()=>{try{const a=l();if(!a){console.warn("MapDraw instance not ready");return}await p(),e.value.forEach(i=>{const u=r(i.type);i.longitude&&i.latitude&&a.addPoint(i.longitude,i.latitude,{iconUrl:u,title:i.label,info:i,onRemoveMarker:h})})}catch(a){console.error("Add meter overlays error:",a),M.error("添加表计失败")}},h=async a=>{try{const i=l();if(!i)return;await t.addMeterLocation({...a,longitude:-1,latitude:-1}),M.success("表计删除成功"),i.deleteAllPoints(),await d()}catch(i){console.error("Remove meter error:",i),M.error("表计删除失败")}},y=a=>{if(!a)return;const i=e.value.find(u=>u.meter_code===a);i&&D(i)},D=a=>{const i=l();if(!i)return;const u=r(a.type);i.startDrawing("point",{iconUrl:u,title:a.label,onClick:()=>M.info(`点击了表计 ${a.label}`),onDrawEnd:async({point:s})=>{try{await t.addMeterLocation({...a,longitude:s.lng,latitude:s.lat}),M.success("表计添加成功"),i.deleteAllPoints(),await d()}catch(v){console.error("Add meter location error:",v),M.error("表计添加失败")}}})};return{meters:e,currentMeter:n,getMeterTypeLabel:o,getMeterIcon:r,fetchMeters:p,addMeterOverlays:d,handleRemoveMeter:h,handleSelect:y,handleDrawingMeter:D}}function fe(_,t){const e=w(null),n=w(!1),l=()=>c(_),o={water:"#05FC04",electric:"#05FC04",gas:"#05FC04"},r=a=>({1:o.water,2:o.electric,3:o.gas})[a]||o.water,p=a=>({1:"水管",2:"电缆",3:"气管"})[a]||"",d=async()=>{try{const a=l();if(!a)throw new Error("MapDraw 实例未就绪");a.deleteAllLines();const i={company_id:t.currentCompany.id},u=await ae(i);if(u.code===200){const s=u.data||u.pipes||[];s.length>0?h(s):console.log("No pipeline data available")}else throw new Error(u.message||"获取管线数据失败")}catch(a){console.error("Fetch pipeline error:",a),M.error(a.message||"获取管线数据失败")}},h=a=>{const i=l();if(!i||!i.map||!Array.isArray(a)||a.length===0)return;const u=[];a.forEach((s,v)=>{if(!s.lng_start||!s.lat_start||!s.lng_stop||!s.lat_stop){console.error(`Invalid pipeline data at index ${v}:`,s);return}u.push(new BMapGL.Point(s.lng_start,s.lat_start)),u.push(new BMapGL.Point(s.lng_stop,s.lat_stop));const b=r(s.type);console.log(`Drawing pipeline ${v}:`,{start:{lng:s.lng_start,lat:s.lat_start},end:{lng:s.lng_stop,lat:s.lat_stop},color:b});try{i.addLine([{lng:s.lng_start,lat:s.lat_start},{lng:s.lng_stop,lat:s.lat_stop}],{strokeColor:b,strokeWeight:3,strokeOpacity:.8,title:p(s.type),onRemoveLine:y,id:s.id})}catch(G){console.error(`Error drawing pipeline ${v}:`,G)}}),u.length>0&&i.map&&i.map.setViewport(u,{margins:[50,50,50,50]})},y=async a=>{try{const i=l();if(!i)throw new Error("MapDraw 实例未就绪");const u=await ie(a);if(u.code!==200)throw new Error(u.message||"删除管线失败");i.deleteAllLines(),await d(),M.success("管线删除成功")}catch(i){console.error("Remove pipeline error:",i),M.error(i.message||"管线删除失败")}};return{selectedPipelineType:e,isDrawing:n,getPipelineColor:r,getPipelineLabel:p,fetchPipelineData:d,addPipes:h,handleRemovePipeline:y,startDrawingPipeline:()=>{const a=l();if(!a)return;if(n.value){M.warning("正在绘制中，请完成当前绘制");return}if(!e.value){M.warning("请先选择管线类型");return}n.value=!0;const i=r(e.value);a.startDrawing("line",{strokeColor:i,strokeWeight:3,onDrawEnd:async({line:u})=>{try{if(!Array.isArray(u)||u.length===0)throw new Error("未获取到有效的管线数据");const s=u[0],v={type:e.value,company_id:t.currentCompany.id,lng_start:s.lng_start,lat_start:s.lat_start,lng_stop:s.lng_stop,lat_stop:s.lat_stop};if(!v.lng_start||!v.lat_start||!v.lng_stop||!v.lat_stop)throw new Error("管线坐标数据不完整");const b=await re(v);if(b.code===200)M.success("管线添加成功"),a.deleteAllLines(),await d();else throw new Error(b.message||"添加失败")}catch(s){console.error("Add pipeline error:",s),M.error(s.message||"管线添加失败"),a.deleteAllLines()}finally{n.value=!1,e.value=null}},onDrawCancel:()=>{n.value=!1,e.value=null,a.deleteAllLines()}})}}}const ve={__name:"MapMonitoring",setup(_,{expose:t}){const e=Z(),n=H(),l=w(null),o=w(null),r=async B=>{var f,C;console.log("Reloading data for company:",B),v.value=null,O.value=null;try{await Promise.all([(f=o.value)==null?void 0:f.fetchPipelineData(),(C=l.value)==null?void 0:C.addMeterOverlays()])}catch(P){console.error("Failed to reload data:",P)}},{map:p,mapDraw:d,mapType:h,displayOptions:y,center:D,zoom:a,handleInit:i}=me(e,{onCompanyChange:r}),u=ye(d,n);l.value=u;const{meters:s,currentMeter:v,getMeterTypeLabel:b,handleSelect:G}=u,R=fe(d,e);o.value=R;const{selectedPipelineType:O,isDrawing:$,startDrawingPipeline:j}=R,K=async B=>{const{mapDraw:f}=i(B);if(f){d.value=f;try{await Promise.all([R.fetchPipelineData(),u.addMeterOverlays()])}catch(C){console.error("Failed to load initial data:",C)}}};return Y(()=>{}),t({reloadData:r}),(B,f)=>{const C=de,P=ce,I=pe;return k(),S(c(ue),{displayOptions:c(y),width:"100%",height:"100%",ak:"Kwc6trl7dmb2Go3SM6S5QueuW0Foa0QN",enableScrollWheelZoom:"",ref_key:"map",ref:p,center:c(D),zoom:c(a),onInitd:K,mapType:c(h)},{default:L(()=>[m(c(W),{offset:{x:22,y:40}}),m(c(A),{anchor:"BMAP_ANCHOR_TOP_RIGHT",offset:{x:20,y:60},class:"control-panel"},{default:L(()=>[m(C,{style:{"margin-right":"1rem"},modelValue:c(y).building,"onUpdate:modelValue":f[0]||(f[0]=g=>c(y).building=g),"inline-prompt":"","active-text":"显示3D建筑","inactive-text":"隐藏3D建筑"},null,8,["modelValue"]),m(C,{style:{"margin-right":"1rem"},modelValue:c(y).overlay,"onUpdate:modelValue":f[1]||(f[1]=g=>c(y).overlay=g),"inline-prompt":"","active-text":"显示表计","inactive-text":"隐藏表计"},null,8,["modelValue"]),m(C,{modelValue:c(y).poiText,"onUpdate:modelValue":f[2]||(f[2]=g=>c(y).poiText=g),"inline-prompt":"","active-text":"显示地标文字","inactive-text":"隐藏地标文字"},null,8,["modelValue"])]),_:1}),m(c(A),{anchor:"BMAP_ANCHOR_TOP_LEFT",offset:{x:20,y:20},class:"control-panel"},{default:L(()=>[m(I,{modelValue:c(v),"onUpdate:modelValue":f[3]||(f[3]=g=>T(v)?v.value=g:null),placeholder:"选择表计",clearable:"",filterable:"",onChange:c(G),size:"small",style:{width:"200px"}},{default:L(()=>[(k(!0),z(Q,null,J(c(s),g=>(k(),S(P,{key:g.meter_code,label:`${g.meter_code}（${c(b)(g.type)}）`,value:g.meter_code},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),m(c(U),{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT"}),m(c(q),{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",offset:{x:10,y:103}}),m(c(A),{anchor:"BMAP_ANCHOR_TOP_RIGHT",offset:{x:20,y:20},class:"control-panel map-type-control"},{default:L(()=>[m(I,{modelValue:c(h),"onUpdate:modelValue":f[4]||(f[4]=g=>T(h)?h.value=g:null),size:"small",style:{width:"120px"}},{default:L(()=>[m(P,{label:"普通地图",value:"BMAP_NORMAL_MAP"}),m(P,{label:"卫星地图",value:"BMAP_SATELLITE_MAP"}),m(P,{label:"地球模式",value:"BMAP_EARTH_MAP"})]),_:1},8,["modelValue"])]),_:1}),m(c(A),{anchor:"BMAP_ANCHOR_TOP_LEFT",offset:{x:20,y:70},class:"control-panel"},{default:L(()=>[m(I,{modelValue:c(O),"onUpdate:modelValue":f[5]||(f[5]=g=>T(O)?O.value=g:null),placeholder:"选择管线类型",onChange:c(j),size:"small",style:{width:"200px"},disabled:c($)},{default:L(()=>[m(P,{label:"水管",value:1}),m(P,{label:"电缆",value:2}),m(P,{label:"燃气管",value:3})]),_:1},8,["modelValue","onChange","disabled"])]),_:1})]),_:1},8,["displayOptions","center","zoom","mapType"])}}},ge=F(ve,[["__scopeId","data-v-f9ddcbd7"]]),_e={class:"container"},Me={class:"meter-report-card"},we={__name:"index",setup(_){let t=H(),e=w(!1);return(async()=>{e.value=!0,await t.fetchMeterList(),t.setCurrentMeter(t.treeDataForChart[0]),e.value=!1})(),(l,o)=>{const r=ne,p=te;return k(),z("div",_e,[X((k(),S(r,{class:"meter-nav"},{default:L(()=>[m(se,{"onUpdate:loading":o[0]||(o[0]=d=>T(e)?e.value=d:e=d)}),m(le,{data:c(t).treeDataForChart},null,8,["data"])]),_:1})),[[p,c(e)]]),ee("div",Me,[m(ge)])])}}},Dt=F(we,[["__scopeId","data-v-4e94e96a"]]);export{Dt as default};
