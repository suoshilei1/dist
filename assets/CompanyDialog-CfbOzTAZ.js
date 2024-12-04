import{cz as T,r as E,a$ as j,cA as O,cB as I,b2 as P,_ as Y,u as k,i as x,F as q,w as y,Y as G,c as _,J as h,l as u,k as t,h as C,d as J,U as K,f as w,g as Q,v as W}from"./index-DWtISIBF.js";import{E as H,a as X}from"./form-item-ijUMtc9_.js";import{E as Z}from"./button-DfREtLL_.js";import{E as $}from"./autocomplete-DkTQJXpJ.js";import{E as ee}from"./input-B0bTKLmJ.js";import"./scrollbar-BMOxp_jN.js";import"./popper-BNb2tGl7.js";/* empty css            */import{E as oe,a as ae}from"./select-DYqyOwb9.js";import{E as v}from"./index-CZh1RU_w.js";import{E as B}from"./index-BTG_XGfc.js";const le="Ai0WGVDpQy6Nku83k3BuP2B9rY51aNVt";function M(){return{queryLocationSuggestions:async(o,c)=>{if(!o){c([]);return}try{const e=`/map/place/v2/suggestion?query=${encodeURIComponent(o)}&output=json&ak=${le}&region=无&city_limit=false`,m=(await T.get(e)).data.result.map(r=>r.location&&r.address?{value:r.name,address:r.address,location:r.location}:null).filter(Boolean);c(m)}catch(e){console.error("Location search error:",e),c([])}}}}function U(f={}){const{defaultValues:o={},onSuccess:c,onError:e,onDelete:d}=f,m=E(!1),r=E(null),n=E({id:null,name:"",status:1,phone:"",company_code:"",sector:"",product_name:"",comment:"",location:"",latitude:"",longitude:"",zoom:17,...o});return{form:n,rules:{name:[{required:!0,message:"请输入公司名称",trigger:"blur"}],status:[{required:!0,message:"请选择公司状态",trigger:"change"}],company_code:[{required:!0,message:"请输入公司代码",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}],location:[{required:!0,message:"请输入地址",trigger:"blur"}],latitude:[{required:!0,message:"纬度不能为空",trigger:"blur"}],longitude:[{required:!0,message:"经度不能为空",trigger:"blur"}]},loading:m,companyForm:r,fetchCompanyDetails:async s=>{if(s){m.value=!0;try{const a=await j({id:s});if(a.code===200)Object.assign(n.value,a.data.companies[0]);else throw new Error(a.message||"加载公司详情失败")}catch(a){throw e==null||e(a),a}finally{m.value=!1}}},submitForm:async()=>{if(r.value)try{if(!await r.value.validate())throw new Error("请完善公司信息");m.value=!0,await(n.value.id?O:I)(n.value),c()}catch(s){throw e==null||e(s),s}finally{m.value=!1}},deleteCompany:async()=>{if(n.value.id)try{m.value=!0;const s=await P({id:n.value.id});if(s.code===200)d==null||d();else throw new Error(s.message||"删除失败")}catch(s){throw e==null||e(s),s}finally{m.value=!1}},resetForm:()=>{r.value&&r.value.resetFields(),Object.assign(n.value,o)}}}const te={__name:"CompanyDialog",props:{id:{type:[String,Number],default:null},latitude:{type:Number,default:null},longitude:{type:Number,default:null},zoom:{type:Number,default:17}},emits:["update:latitude","update:longitude","update:zoom","location-change","fetch-company-list"],setup(f,{expose:o,emit:c}){o();const e=f,d=c,m=k(),r=x(),{queryLocationSuggestions:n}=M(),{form:i,rules:V,loading:b,companyForm:p,fetchCompanyDetails:g,submitForm:s,deleteCompany:a,resetForm:S}=U({defaultValues:{latitude:e.latitude,longitude:e.longitude,zoom:e.zoom},onSuccess:()=>{v.success("操作成功"),d("fetch-company-list");let l=m.currentRoute.value.query;l.from&&m.push({name:l.from})},onError:l=>{console.error(l),v.error(l.message||"操作失败")},onDelete:()=>{v.success("删除成功"),m.push({name:"CompanyManagement"}),d("fetch-company-list")}}),z=q(()=>r.name!=="MapSelector"),D=l=>{i.value.location=l.address,i.value.latitude=l.location.lat,i.value.longitude=l.location.lng,d("update:latitude",l.location.lat),d("update:longitude",l.location.lng),d("location-change",l.location.lat,l.location.lng)},A=async()=>{try{await s()}catch{}},L=async()=>{try{await B.confirm("确定要删除该公司吗？","提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}),await a()}catch(l){l!=="cancel"&&v.error(l.message||"删除失败")}},N=()=>{B.confirm("确定要重置表单吗？","提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>{S()}).catch(()=>{})},R=()=>{m.push({name:"MapSelector",query:{id:i.value.id}})};y(()=>e.id,l=>{l?g(l):S()},{immediate:!0}),y(()=>e.latitude,l=>{l!==i.value.latitude&&(i.value.latitude=l)}),y(()=>e.longitude,l=>{l!==i.value.longitude&&(i.value.longitude=l)}),y(()=>e.zoom,l=>{l!==i.value.zoom&&(i.value.zoom=l)});const F={props:e,emit:d,router:m,route:r,queryLocationSuggestions:n,form:i,rules:V,loading:b,companyForm:p,fetchCompanyDetails:g,submitForm:s,deleteCompany:a,resetForm:S,showMapButton:z,handleLocationSelect:D,handleSubmit:A,handleDelete:L,handleReset:N,navigateToMap:R,computed:q,watch:y,get useRouter(){return k},get useRoute(){return x},get ElMessage(){return v},get ElMessageBox(){return B},get useLocationSearch(){return M},get useCompanyForm(){return U}};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}};function re(f,o,c,e,d,m){const r=ee,n=H,i=oe,V=ae,b=$,p=Z,g=X,s=W;return G((_(),h(g,{ref:"companyForm",model:e.form,rules:e.rules,"label-width":"120px"},{default:u(()=>[t(n,{label:"公司名称",prop:"name"},{default:u(()=>[t(r,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.name=a),placeholder:"请输入公司名称"},null,8,["modelValue"])]),_:1}),e.form.id?(_(),h(n,{key:0,label:"公司状态",prop:"status"},{default:u(()=>[t(V,{modelValue:e.form.status,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.status=a),placeholder:"请选择状态"},{default:u(()=>[t(i,{label:"可用",value:1}),t(i,{label:"不可用",value:2})]),_:1},8,["modelValue"])]),_:1})):C("",!0),t(n,{label:"联系电话",prop:"phone"},{default:u(()=>[t(r,{modelValue:e.form.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.phone=a),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),t(n,{label:"行业代码",prop:"company_code"},{default:u(()=>[t(r,{modelValue:e.form.company_code,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.company_code=a),placeholder:"请输入行业代码"},null,8,["modelValue"])]),_:1}),t(n,{label:"行业名称",prop:"sector"},{default:u(()=>[t(r,{modelValue:e.form.sector,"onUpdate:modelValue":o[4]||(o[4]=a=>e.form.sector=a),placeholder:"请输入行业名称"},null,8,["modelValue"])]),_:1}),t(n,{label:"产品名称",prop:"product_name"},{default:u(()=>[t(r,{modelValue:e.form.product_name,"onUpdate:modelValue":o[5]||(o[5]=a=>e.form.product_name=a),placeholder:"请输入产品名称"},null,8,["modelValue"])]),_:1}),t(n,{label:"地址",prop:"location"},{default:u(()=>[t(b,{modelValue:e.form.location,"onUpdate:modelValue":o[6]||(o[6]=a=>e.form.location=a),"fetch-suggestions":e.queryLocationSuggestions,placeholder:"请输入地址",onSelect:e.handleLocationSelect,"trigger-on-focus":!1,clearable:""},null,8,["modelValue","fetch-suggestions"])]),_:1}),e.form.location?(_(),J(K,{key:1},[t(n,{label:"纬度",prop:"latitude"},{default:u(()=>[t(r,{modelValue:e.form.latitude,"onUpdate:modelValue":o[7]||(o[7]=a=>e.form.latitude=a),placeholder:"自动获取纬度",disabled:""},null,8,["modelValue"])]),_:1}),t(n,{label:"经度",prop:"longitude"},{default:u(()=>[t(r,{modelValue:e.form.longitude,"onUpdate:modelValue":o[8]||(o[8]=a=>e.form.longitude=a),placeholder:"自动获取经度",disabled:""},null,8,["modelValue"])]),_:1}),t(n,{label:"缩放比例",prop:"zoom"},{default:u(()=>[t(r,{modelValue:e.form.zoom,"onUpdate:modelValue":o[9]||(o[9]=a=>e.form.zoom=a),placeholder:"自动获取缩放比例",disabled:""},null,8,["modelValue"])]),_:1})],64)):C("",!0),t(n,{label:"备注",prop:"comment"},{default:u(()=>[t(r,{resize:"none",modelValue:e.form.comment,"onUpdate:modelValue":o[10]||(o[10]=a=>e.form.comment=a),placeholder:"请输入备注",type:"textarea",rows:2},null,8,["modelValue"])]),_:1}),t(n,null,{default:u(()=>[t(p,{type:"primary",onClick:e.handleSubmit,loading:e.loading},{default:u(()=>[w(Q(e.form.id?"修改":"新增"),1)]),_:1},8,["loading"]),t(p,{onClick:e.handleReset},{default:u(()=>o[11]||(o[11]=[w("重置")])),_:1}),e.form.id?(_(),h(p,{key:0,type:"danger",onClick:e.handleDelete,loading:e.loading},{default:u(()=>o[12]||(o[12]=[w(" 删除 ")])),_:1},8,["loading"])):C("",!0),e.showMapButton?(_(),h(p,{key:1,type:"success",onClick:e.navigateToMap},{default:u(()=>o[13]||(o[13]=[w(" 在地图上显示 ")])),_:1})):C("",!0)]),_:1})]),_:1},8,["model","rules"])),[[s,e.loading]])}const _e=Y(te,[["render",re],["__file","D:/临时存放/green-carbon-1.0/src/views/SystemManagement/CompanyManagement/CompanyList/components/CompanyDialog.vue"]]);export{_e as C};