import e,{useState as t}from"react";import{createPortal as o}from"react-dom";import{Button as n,Modal as r}from"antd";const l=({buttonValue:l,modalContent:m,buttonSize:a})=>{const[c,u]=t(!1);return e.createElement(e.Fragment,null,e.createElement(n,{size:a,onClick:()=>{u(!0)}},l),c&&o(e.createElement(r,{open:c,footer:null,onCancel:()=>{u(!1)}},e.createElement("p",null,m)),document.body))};export{l as Modal};
//# sourceMappingURL=bundle.js.map