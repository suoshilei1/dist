const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserPermission-DMK1C_Wv.js","assets/index-Bx6Y8L80.js","assets/index-CKGHOdoA.css","assets/button-8bviUT_H.js","assets/index-A4BGBRGh.js","assets/plugin-vue_export-helper-CqGSI99y.js","assets/index-AkNVqhGZ.js","assets/use-form-item-50hJ8Ppj.js","assets/icon-6zrsquxY.js","assets/button-CzpQr9Wb.css","assets/tree-Bp6m8vKT.js","assets/select-BmMHn9PT.js","assets/popper-DBn8ulUn.js","assets/index-CuyxIfpa.js","assets/aria-BUADUvnR.js","assets/focus-trap-Ddg061Nm.js","assets/popper-CLIXM2zs.css","assets/scrollbar-DuXO1tWo.js","assets/scrollbar-C4q0Zfda.css","assets/index-aFn2MKle.js","assets/castArray-CrUPC_Z8.js","assets/index-iw6eP590.js","assets/scroll-BawlEUY1.js","assets/isEqual-BM-Gj-iT.js","assets/_Uint8Array-B6mJ0Xm4.js","assets/_baseIteratee-CkjM3wkz.js","assets/index-zrRcpBp4.js","assets/select-BgyzP3al.css","assets/checkbox-LjaCbo-5.js","assets/checkbox-DD4l_ypT.css","assets/tree-Dov2ACS9.css","assets/handleError-DD4JYoq7.js","assets/index-KJp6TXG9.js","assets/index-CWCMyxJA.js","assets/base-CMRK1q-d.css","assets/el-notification-BWnt3bt7.css","assets/index-slq3sC_j.js","assets/input-CFaQgGx5.js","assets/input-CvX03x0l.css","assets/index-DZY-cmUL.js","assets/vnode-DK7gyQZj.js","assets/validator-ulZFuTQV.js","assets/UserPermission-DsF0mPC9.css","assets/el-overlay-adAJ4NaI.css","assets/el-badge-BWN_0xb6.css"])))=>i.map(i=>d[i]);
import{r as n,a as ie,W as N,T as ue,Y as Z,I as B,c as A,J as F,j as r,i as l,d as K,U as G,V as me,h as M,f as U,v as H,_ as Q,w as pe,o as de,e as T,g as D,k as J,l as ce,a3 as fe,a4 as _e}from"./index-Bx6Y8L80.js";import{E as ge}from"./drawer-C6VChdbn.js";import"./overlay-04qnzRyj.js";import{E as ve}from"./card-fNeABwz5.js";import{E as ye}from"./dialog-Dt2QUqOw.js";import{E as be}from"./pagination-BWpx24Am.js";/* empty css            */import{E as we,a as he}from"./select-BmMHn9PT.js";import"./scrollbar-DuXO1tWo.js";import"./popper-DBn8ulUn.js";import{E as Ee,a as Ce}from"./table-column-DjUxz4le.js";import"./checkbox-LjaCbo-5.js";/* empty css                */import{E as Ve}from"./empty-CF5nbTvc.js";import{E as X}from"./button-8bviUT_H.js";import{E as Pe}from"./autocomplete-BsDCzI7r.js";import{E as Ue}from"./input-CFaQgGx5.js";import{f as Y}from"./date-Cgy1PrMx.js";import{E as ke,a as xe}from"./form-item-CWYWsPGl.js";import{U as Re,C as Ae,P as Se}from"./constants-NVab_QuI.js";import{g as z,u as Te,a as $e,d as De}from"./user-Csntps2O.js";import{s as ze}from"./sha256-ByTVSy_2.js";/* empty css             *//* empty css                 */import{E as g}from"./index-KJp6TXG9.js";import{d as Be}from"./DebounceAndThrottle-B_grFKK4.js";/* empty css                   */import{E as Fe}from"./index-slq3sC_j.js";import"./index-DZY-cmUL.js";import"./index-CuyxIfpa.js";import"./scroll-BawlEUY1.js";import"./vnode-DK7gyQZj.js";import"./index-A4BGBRGh.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-AkNVqhGZ.js";import"./focus-trap-Ddg061Nm.js";import"./aria-BUADUvnR.js";import"./icon-6zrsquxY.js";import"./use-form-item-50hJ8Ppj.js";import"./refs-Bp53MkJS.js";import"./index-iw6eP590.js";import"./isEqual-BM-Gj-iT.js";import"./_Uint8Array-B6mJ0Xm4.js";import"./index-aFn2MKle.js";import"./castArray-CrUPC_Z8.js";import"./_baseIteratee-CkjM3wkz.js";import"./index-zrRcpBp4.js";import"./_initCloneObject-nnMrnZRY.js";import"./dayjs.min-Cd48fqZ9.js";import"./validator-ulZFuTQV.js";const Ie={__name:"UserDialog",props:["id"],emits:["fetchUser"],setup(I,{emit:$}){let c=n(!1);const w=[{label:"用户权限",value:""+Re},{label:"公司管理员",value:""+Ae},{label:"平台管理员",value:""+Se}],e=ie({id:null,phone:"",email:"",username:"",permission:"",company_id:N().currentCompany.id,real_name:"",password:""}),k={phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入有效的邮箱地址",trigger:["blur","change"]}],username:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:20,message:"账号长度在 3 到 20 个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"账号只能包含字母和数字",trigger:"blur"}],permission:[{required:!0,message:"请选择权限",trigger:"change"}],real_name:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度不能少于6位",trigger:"blur"}]},v=n(null),p=n(!1),h=$,f=I,_=()=>{e.id=null,e.permission="",e.company_id=N().currentCompany.id,e.real_name="",e.password="",e.phone="",e.email="",e.username=""};ue(async()=>{if(f.id){p.value=!0,e.id=f.id;try{c.value=!0;const y=await z({id:f.id});Object.assign(e,y.results[0])}catch(y){console.log(y),g.error("获取用户信息失败")}finally{c.value=!1}}else p.value=!1,_()});const u=async()=>{v.value.validate(async y=>{if(y){c.value=!0,e.password&&(e.password=await ze(e.password)),console.log(e);try{e.id?(await Te(e),g.success("更新成功！")):(await $e(e),g.success("添加成功！"))}catch(t){g.error(t.message||"提交失败！")}finally{c.value=!1,h("fetchUser"),v.value.resetFields()}}else return g.error("请检查表单填写是否正确"),c.value=!1,!1})};return(y,t)=>{const E=Ue,C=ke,O=we,q=he,x=X,V=xe,j=H;return Z((A(),F(V,{model:e,rules:k,ref_key:"userForm",ref:v,"label-width":"120px"},{default:r(()=>[l(C,{label:"真实姓名",prop:"real_name"},{default:r(()=>[l(E,{modelValue:e.real_name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.real_name=s),placeholder:"请输入真实姓名"},null,8,["modelValue"])]),_:1}),l(C,{label:"手机号",prop:"phone"},{default:r(()=>[l(E,{modelValue:e.phone,"onUpdate:modelValue":t[1]||(t[1]=s=>e.phone=s),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),l(C,{label:"邮箱",prop:"email"},{default:r(()=>[l(E,{modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=s=>e.email=s),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),l(C,{label:"账号",prop:"username"},{default:r(()=>[l(E,{modelValue:e.username,"onUpdate:modelValue":t[3]||(t[3]=s=>e.username=s),placeholder:"请输入账号"},null,8,["modelValue"])]),_:1}),l(C,{label:"权限",prop:"permission"},{default:r(()=>[l(q,{modelValue:e.permission,"onUpdate:modelValue":t[4]||(t[4]=s=>e.permission=s),placeholder:"请选择权限"},{default:r(()=>[(A(),K(G,null,me(w,s=>l(O,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),p.value?M("",!0):(A(),F(C,{key:0,label:"密码",prop:"password"},{default:r(()=>[l(E,{type:"password",modelValue:e.password,"onUpdate:modelValue":t[5]||(t[5]=s=>e.password=s),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1})),l(C,{style:{"margin-top":"1rem"}},{default:r(()=>[l(x,{type:"primary",onClick:u},{default:r(()=>t[6]||(t[6]=[U("提交")])),_:1}),l(x,{onClick:_},{default:r(()=>t[7]||(t[7]=[U("重置")])),_:1})]),_:1})]),_:1},8,["model"])),[[j,B(c)]])}}},qe={class:"container"},Le={class:"search-bar"},Me={class:"custom-suggestion-item"},Ne={__name:"UserTable",props:{company_id:{type:[Number,String],default:null}},emits:["showPermission"],setup(I,{expose:$,emit:c}){const w=I,e=c,k=n(!1),v=n([]),p=n(),h=n(null),f=n(!1),_=n(1),u=n(12),y=n(0),t=n(""),E=n(null),C=a=>{E.value=a,q(a)},O=a=>{a||e("showPermission",null)},q=a=>{p.value&&p.value.setCurrentRow(a),e("showPermission",a)},x=()=>{p.value&&p.value.setCurrentRow(null)},V=async(a=0,o=u.value)=>{f.value=!1;try{k.value=!0;const m={offset:a,limit:o,real_name:t.value?`%${t.value}%`:"%"};let b=ce().query;b.id?m.company_id=b.id:m.company_id=N().currentCompany.id;const R=await z(m);if(R.code===200){const{results:d,total:S}=R;v.value=d,y.value=S,E.value&&(d.some(P=>P.id===E.value.id)||(x(),e("showPermission",null)))}else console.error(R.message),g.error(R.message)}catch(m){console.error(m),g.error("获取用户信息失败")}finally{k.value=!1}},j=()=>{t.value="",_.value=1,x(),e("showPermission",null),V(0,u.value)},s=a=>{f.value=!0,h.value=a.id},ee=a=>{Fe.confirm(`确认删除用户 ${a.real_name} 吗？`,"警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(async()=>{await le(a.username),V((_.value-1)*u.value,u.value)}).catch(()=>{})};async function le(a){try{let o=await De({username:a});o.code===200?g.success("删除成功"):(console.error(o.message),g.error(o.message||"删除失败请稍后重试"))}catch(o){console.error(o),g.error(o.message||"删除失败请稍后重试")}}const oe=a=>{t.value=a.real_name,_.value=1,x(),V(0,u.value)},ae=Be(async(a,o)=>{if(!a){o([]);return}try{const m={offset:0,limit:5};w.company_id&&(m.company_id=w.company_id);const[b,R,d]=await Promise.all([z({...m,real_name:"%"+a+"%"}),z({...m,email:"%"+a+"%"}),z({...m,phone:"%"+a+"%"})]),S=[];[b,R,d].forEach(P=>{P.code===200&&S.push(...P.results)});const L=Array.from(new Map(S.map(P=>[P.id,P])).values());o(L)}catch(m){console.error(m),g.error("获取用户信息失败"),o([])}},500),te=()=>{h.value=null,f.value=!0},re=a=>{_.value=a,x(),V((_.value-1)*u.value,u.value)};let se=N();return pe(()=>se.currentCompany,()=>{V(0,u.value)}),de(()=>{V(0,u.value)}),$({clearCurrentRow:x}),(a,o)=>{const m=Pe,b=X,R=Ve,d=Ee,S=Ce,L=be,P=ye,ne=H;return A(),K(G,null,[T("div",qe,[T("div",Le,[l(m,{"trigger-on-focus":!1,style:{width:"200px"},clearable:"","hide-loading":!0,class:"search-input",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=i=>t.value=i),"fetch-suggestions":B(ae),placeholder:"搜索姓名、邮箱或电话",onSelect:oe},{default:r(({item:i})=>[T("div",Me,[T("span",null,D(i.real_name)+" - ",1),T("span",null,D(i.email)+" - ",1),T("span",null,D(i.phone),1)])]),_:1},8,["modelValue","fetch-suggestions"]),l(b,{type:"primary",onClick:j,class:"reset-button"},{default:r(()=>o[2]||(o[2]=[U("重置")])),_:1}),l(b,{type:"primary",onClick:te,class:"add-button"},{default:r(()=>o[3]||(o[3]=[U("新增人员")])),_:1})]),!v.value.length&&!k.value?(A(),F(R,{key:0,description:"暂无数据",style:{width:"100%",height:"80%"}})):M("",!0),v.value.length?Z((A(),F(S,{key:1,ref_key:"tableRef",ref:p,data:v.value,class:"person-table",style:{width:"100%"},onRowClick:C,"highlight-current-row":!0,onCurrentChange:O},{default:r(()=>[l(d,{label:"编号",width:"80",prop:"id",sortable:"",align:"center"}),l(d,{prop:"real_name",label:"姓名",align:"center"}),l(d,{prop:"phone",align:"center",label:"电话"}),l(d,{prop:"email",align:"center","show-overflow-tooltip":"",label:"邮箱"}),l(d,{sortable:"",prop:"created_at",label:"创建时间"},{default:r(i=>[U(D(B(Y)(i.row.created_at)),1)]),_:1}),l(d,{sortable:"",prop:"updated_at",label:"修改时间"},{default:r(i=>[U(D(B(Y)(i.row.updated_at)),1)]),_:1}),l(d,{fixed:"right",align:"center",label:"操作",width:"250"},{default:r(i=>[l(b,{onClick:J(W=>q(i.row),["stop"]),type:"success",size:"small"},{default:r(()=>o[4]||(o[4]=[U("查看权限")])),_:2},1032,["onClick"]),l(b,{type:"primary",icon:"Edit",onClick:J(W=>s(i.row),["stop"]),size:"small"},{default:r(()=>o[5]||(o[5]=[U("编辑")])),_:2},1032,["onClick"]),l(b,{type:"danger",icon:"Delete",onClick:J(W=>ee(i.row),["stop"]),size:"small"},{default:r(()=>o[6]||(o[6]=[U("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ne,k.value]]):M("",!0),y.value>0?(A(),F(L,{key:2,onCurrentChange:re,"current-page":_.value,"page-size":u.value,"hide-on-single-page":!0,background:"","pager-count":5,layout:"prev, pager, next",total:y.value,class:"pagination"},null,8,["current-page","page-size","total"])):M("",!0)]),l(P,{"destroy-on-close":"",title:h.value?"编辑人员":"新增人员",modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=i=>f.value=i)},{default:r(()=>[l(Ie,{onFetchUser:V,id:h.value},null,8,["id"])]),_:1},8,["title","modelValue"])],64)}}},Oe=Q(Ne,[["__scopeId","data-v-0eb190ba"]]),je={class:"layout-wrapper"},Je={__name:"index",setup(I){const $=fe(()=>_e(()=>import("./UserPermission-DMK1C_Wv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]))),c=n(null),w=n(!1),e=n(null);function k(p){e.value=p,w.value=!0}function v(){c.value.clearCurrentRow(),w.value=!1}return(p,h)=>{const f=ve,_=ge;return A(),K("div",je,[l(f,{class:"table-wrapper"},{default:r(()=>[l(Oe,{ref_key:"userTable",ref:c,onShowPermission:k},null,512)]),_:1}),l(_,{modelValue:w.value,"onUpdate:modelValue":h[0]||(h[0]=u=>w.value=u),title:"权限管理",size:"30%","show-close":!0,"before-close":v,direction:"rtl","destroy-on-close":!0},{default:r(()=>[l(B($),{userinfo:e.value},null,8,["userinfo"])]),_:1},8,["modelValue"])])}}},Nl=Q(Je,[["__scopeId","data-v-cf7f8a3d"]]);export{Nl as default};
