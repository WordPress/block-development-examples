!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addCounter:function(){return a},removeCounter:function(){return d},setCounterValue:function(){return l}});var n={};e.r(n),e.d(n,{getCounterIds:function(){return i},getCounterValue:function(){return s}});var r=window.React,o=window.wp.element,u=window.wp.data,c=window.lodash;function a(e){return{type:"ADD_COUNTER",counterId:e}}function d(e){return{type:"REMOVE_COUNTER",counterId:e}}function l(e,t){return{type:"SET_COUNTER_VALUE",counterId:e,value:t}}function i(e){return(0,c.map)(e,"id")}function s(e,t){return((0,c.find)(e,{id:t})||{}).value}(0,u.registerStore)("react-example/counters",{actions:t,reducer:function(e=[],t){switch(t.type){case"ADD_COUNTER":return[...e,{id:t.counterId,value:0}];case"REMOVE_COUNTER":return(0,c.without)(e,(0,c.find)(e,{id:t.counterId}));case"SET_COUNTER_VALUE":return(0,c.map)(e,(e=>e.id===t.counterId?{...e,value:t.value}:e))}return e},selectors:n});var p={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const f=new Uint8Array(16);function y(){if(!m&&(m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(f)}const E=[];for(let e=0;e<256;++e)E.push((e+256).toString(16).slice(1));var v=function(e,t,n){if(p.randomUUID&&!t&&!e)return p.randomUUID();const r=(e=e||{}).random||(e.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return E[e[t+0]]+E[e[t+1]]+E[e[t+2]]+E[e[t+3]]+"-"+E[e[t+4]]+E[e[t+5]]+"-"+E[e[t+6]]+E[e[t+7]]+"-"+E[e[t+8]]+E[e[t+9]]+"-"+E[e[t+10]]+E[e[t+11]]+E[e[t+12]]+E[e[t+13]]+E[e[t+14]]+E[e[t+15]]}(r)},w=window.wp.compose;const C=(0,u.withSelect)(((e,{counterId:t})=>{const{getCounterValue:n}=e("react-example/counters");return{value:n(t)}})),I=(0,u.withDispatch)(((e,{counterId:t,value:n})=>{const{setCounterValue:r,removeCounter:o}=e("react-example/counters");return{onIncrease:()=>r(t,n+1),onDecrease:()=>r(t,n-1),onDelete:()=>o(t)}}));var g=(0,w.compose)(C,I)((({value:e,onDelete:t,onIncrease:n,onDecrease:o})=>(0,r.createElement)("div",null,(0,r.createElement)("div",null,"Counter: ",(0,r.createElement)("strong",null,e)),(0,r.createElement)("button",{onClick:n},"+"),(0,r.createElement)("button",{onClick:o},"-"),(0,r.createElement)("button",{onClick:t},"Delete"))));const U=(0,u.withSelect)((e=>{const{getCounterIds:t}=e("react-example/counters");return{counterIds:t()}})),D=(0,u.withDispatch)((e=>{const{addCounter:t}=e("react-example/counters");return{addCounter:()=>t(v())}}));var b=D(U((({addCounter:e,counterIds:t})=>(0,r.createElement)("div",null,t.map((e=>(0,r.createElement)(g,{key:e,counterId:e}))),(0,r.createElement)("button",{onClick:e},"Add Counter")))));const h=document.getElementById("react-example-wrapper");(0,o.render)((0,r.createElement)(b,null),h)}();