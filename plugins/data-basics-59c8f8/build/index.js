!function(){"use strict";var e,t={738:function(){var e=window.React,t=window.wp.components,n=window.wp.element,a=window.wp.data,r=window.wp.coreData,s=window.wp.notices;function o(){const n=(0,a.useSelect)((e=>e(s.store).getNotices()),[]),{removeNotice:r}=(0,a.useDispatch)(s.store),o=n.filter((({type:e})=>"snackbar"===e));return(0,e.createElement)(t.SnackbarList,{notices:o,className:"components-editor-notices__snackbar",onRemove:r})}function l({title:n,onChangeTitle:a,hasEdits:r,lastError:s,isSaving:o,onCancel:l,onSave:i}){return(0,e.createElement)("div",{className:"my-gutenberg-form"},(0,e.createElement)(t.TextControl,{label:"Page title:",value:n,onChange:a}),!!s&&(0,e.createElement)("div",{className:"form-error"},"Error: ",s.message),(0,e.createElement)("div",{className:"form-buttons"},(0,e.createElement)(t.Button,{onClick:i,variant:"primary",disabled:!r||o},o?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Spinner,null),"Saving"):"Save"),(0,e.createElement)(t.Button,{onClick:l,variant:"tertiary",disabled:o},"Cancel")))}function i({onCancel:t,onSaveFinished:s}){const[o,i]=(0,n.useState)(),{saveEntityRecord:c}=(0,a.useDispatch)(r.store),{lastError:p,isSaving:d}=(0,a.useSelect)((e=>({lastError:e(r.store).getLastEntitySaveError("postType","page"),isSaving:e(r.store).isSavingEntityRecord("postType","page")})),[]);return(0,e.createElement)(l,{title:o,onChangeTitle:i,hasEdits:!!o,lastError:p,isSaving:d,onSave:async()=>{await c("postType","page",{title:o,status:"publish"})&&s()},onCancel:t})}function c(){const[a,r]=(0,n.useState)(!1),s=()=>r(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{onClick:()=>r(!0),variant:"primary"},"Create a new Page"),a&&(0,e.createElement)(t.Modal,{onRequestClose:s,title:"Create a new page"},(0,e.createElement)(i,{onCancel:s,onSaveFinished:s})))}var p=window.wp.htmlEntities;function d({pageId:t,onCancel:n,onSaveFinished:s}){const{editEntityRecord:o}=(0,a.useDispatch)(r.store),{saveEditedEntityRecord:i}=(0,a.useDispatch)(r.store),{lastError:c,page:p,isSaving:d,hasEdits:u}=(0,a.useSelect)((e=>({page:e(r.store).getEditedEntityRecord("postType","page",t),lastError:e(r.store).getLastEntitySaveError("postType","page",t),isSaving:e(r.store).isSavingEntityRecord("postType","page",t),hasEdits:e(r.store).hasEditsForEntityRecord("postType","page",t)})),[t]);return(0,e.createElement)(l,{title:p.title,onChangeTitle:e=>o("postType","page",t,{title:e}),hasEdits:u,lastError:c,isSaving:d,onCancel:n,onSave:async()=>{await i("postType","page",t)&&s()}})}function u({pageId:a}){const[r,s]=(0,n.useState)(!1),o=()=>s(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{onClick:()=>s(!0),variant:"primary"},"Edit"),r&&(0,e.createElement)(t.Modal,{onRequestClose:o,title:"Edit page"},(0,e.createElement)(d,{pageId:a,onCancel:o,onSaveFinished:o})))}var E=({pageId:o})=>{const{createSuccessNotice:l,createErrorNotice:i}=(0,a.useDispatch)(s.store),{getLastEntityDeleteError:c}=(0,a.useSelect)(r.store),{deleteEntityRecord:p}=(0,a.useDispatch)(r.store),{isDeleting:d,error:u}=(0,a.useSelect)((e=>({isDeleting:e(r.store).isDeletingEntityRecord("postType","page",o),error:e(r.store).getLastEntityDeleteError("postType","page",o)})),[o]);return(0,n.useEffect)((()=>{}),[u]),(0,e.createElement)(t.Button,{variant:"primary",onClick:async()=>{if(await p("postType","page",o))l("The page was deleted!",{type:"snackbar"});else{const e=c("postType","page",o);i((e?.message||"There was an error.")+" Please refresh the page and try again.",{type:"snackbar"})}},disabled:d},d?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Spinner,null),"Deleting..."):"Delete")};function m({hasResolved:n,pages:a}){return n?a?.length?(0,e.createElement)("table",{className:"wp-list-table widefat fixed striped table-view-list"},(0,e.createElement)("thead",null,(0,e.createElement)("tr",null,(0,e.createElement)("td",null,"Title"),(0,e.createElement)("td",{style:{width:190}},"Actions"))),(0,e.createElement)("tbody",null,a?.map((t=>(0,e.createElement)("tr",{key:t.id},(0,e.createElement)("td",null,(0,p.decodeEntities)(t.title.rendered)),(0,e.createElement)("td",null,(0,e.createElement)("div",{className:"form-buttons"},(0,e.createElement)(u,{pageId:t.id}),(0,e.createElement)(E,{pageId:t.id})))))))):(0,e.createElement)("div",null,"No results"):(0,e.createElement)(t.Spinner,null)}function g(){const[s,l]=(0,n.useState)(""),{pages:i,hasResolved:p}=(0,a.useSelect)((e=>{const t={};s&&(t.search=s);const n=["postType","page",t];return{pages:e(r.store).getEntityRecords(...n),hasResolved:e(r.store).hasFinishedResolution("getEntityRecords",n)}}),[s]);return(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"list-controls"},(0,e.createElement)(t.SearchControl,{onChange:l,value:s}),(0,e.createElement)(c,null)),(0,e.createElement)(m,{hasResolved:p,pages:i}),(0,e.createElement)(o,null))}window.addEventListener("load",(function(){const t=document.getElementById("my-custom-gutenberg-app");(0,n.createRoot)(t).render((0,e.createElement)(g,null))}),!1)}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,a),s.exports}a.m=t,e=[],a.O=function(t,n,r,s){if(!n){var o=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],s=e[p][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[n,r,s]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],l=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var p=i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(p)},n=self.webpackChunk_block_development_examples_data_basics_59c8f8=self.webpackChunk_block_development_examples_data_basics_59c8f8||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=a.O(void 0,[431],(function(){return a(738)}));r=a.O(r)}();