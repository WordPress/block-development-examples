!function(){"use strict";var e={520:function(e,t,n){var r=n(850);r.createRoot,t.a=r.hydrateRoot},850:function(e){e.exports=window.ReactDOM}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}!function(){var e=n(520),t=window.wp.element;const r=({attributes:e})=>{const[n,r]=(0,t.useState)(e.initial);return React.createElement(React.Fragment,null,React.createElement("button",{onClick:()=>r(n-e.increment)},"-"),React.createElement("input",{width:"5",type:"number",readOnly:!0,value:n}),React.createElement("button",{onClick:()=>r(n+e.increment)},"+"))};window.addEventListener("load",(()=>{document.querySelectorAll(".wp-block-wp-block-development-examples-counter-react-99def1 .counter-contaner").forEach((t=>{const n=JSON.parse(t.dataset.gutenbergAttributes);(0,e.a)(t,React.createElement(r,{attributes:n}))}))}))}()}();