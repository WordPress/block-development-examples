!function(){"use strict";var e,t={653:function(){var e=window.wp.blocks,t=window.React,n=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,i=window.wp.primitives,a=(0,t.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(i.Path,{d:"M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"})),l=JSON.parse('{"u2":"block-development-examples/interactivity-api-countdown-3cd73e"}');(0,e.registerBlockType)(l.u2,{edit:function({attributes:e,setAttributes:i}){const{date:l}=e;if(!l){const e=new Date,t=e=>1e3*e,n=Math.floor(1e4*Math.random()),o=e.setTime(e.getTime()+t(n));i({date:new Date(o).toISOString().slice(0,19).replace("T"," ")})}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,{group:"block"},(0,t.createElement)(r.ToolbarGroup,null,(0,t.createElement)(r.Dropdown,{renderContent:({onClose:e})=>(0,t.createElement)(r.DateTimePicker,{currentDate:l,onChange:e=>i({date:e}),is12Hour:!0,onClose:e}),renderToggle:({isOpen:e,onToggle:o})=>(0,t.createElement)(r.ToolbarButton,{"aria-expanded":e,icon:a,title:(0,n.__)("Change Date","block-development-examples"),onClick:o,onKeyDown:t=>{e||40!==t.keyCode||(t.preventDefault(),o())}})}))),(0,t.createElement)("div",{...(0,o.useBlockProps)()},l))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(t,n,r,i){if(!n){var a=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],i=e[p][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(p--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,r,i]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],l=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var p=c(o)}for(t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},n=self.webpackChunk_block_development_examples_interactivity_api_countdown_3cd73e=self.webpackChunk_block_development_examples_interactivity_api_countdown_3cd73e||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[431],(function(){return o(653)}));r=o.O(r)}();