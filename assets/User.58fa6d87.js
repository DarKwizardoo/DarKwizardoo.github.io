import{_ as l,g as d,r as u,f as p,d as f,u as i,h as r,o as _,c as m,i as s,j as h,k}from"./index.8b11de85.js";const C={name:"User",setup(){let e=d(),t=u({menus:[],defaultProps:{label:"name",children:"children"}});p(()=>{t.menus=f.options.routes});function n(){let o=e.refs.tree.getCheckedNodes();console.log(o)}return{...i(t),getCheckedNodes:n}}};function g(e,t,n,o,x,N){const a=r("el-tree"),c=r("el-button");return _(),m("div",null,[s(a,{data:e.menus,"show-checkbox":"","node-key":"name",props:e.defaultProps,ref:"tree"},null,8,["data","props"]),s(c,{onClick:o.getCheckedNodes},{default:h(()=>[k("node")]),_:1},8,["onClick"])])}var v=l(C,[["render",g]]);export{v as default};
