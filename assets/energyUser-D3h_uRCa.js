import{a9 as o,aa as p,r as a,F as d,V as m}from"./index-DU5BV6sj.js";import{h as f}from"./handleError-Dl3av5vd.js";const v=(e={})=>o.get("/energy_users/",{params:e}),_=e=>o.post("/energy_users/",e),N=e=>o.patch("/energy_users/",e),S=e=>o.delete("/energy_users/",{data:e}),C=p("energyUsers",()=>{const e=a([]),u=a(!1),n=a({prop:"unknown_ratio",order:"descending"}),c=a(""),i=d(()=>{let s=e.value;if(n.value.prop&&n.value.order){const t=n.value.order==="ascending";s=[...s].sort((r,l)=>{const g=Number(r[n.value.prop]),y=Number(l[n.value.prop]);return t?g-y:y-g})}return s});return{energyUserList:e,loading:u,sortConfig:n,searchTerm:c,filteredEnergyUsers:i,fetchEnergyUsers:async(s={})=>{const t=m();u.value=!0;try{const r={...s};c.value&&(r.name=`%${c.value}%`);let l=await v({company_id:t.currentCompany.id,...r});e.value=l.data}catch(r){f(r,"获取用能户列表失败")}finally{u.value=!1}},getEnergyUserName:s=>{const t=e.value.find(r=>r.id===s);return t?t.name:"暂无"}}});export{N as a,_ as c,S as d,C as u};
