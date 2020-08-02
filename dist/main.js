!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=e=>{let t=e.title,n=e.description,d=e.dueDate,o=e.priority,i=e.note,r=!1;return{getTitle:()=>t,getDescription:()=>n,getDueDate:()=>d,getPriority:()=>o,getNote:()=>i,editTitle:e=>{t=e},editDescription:e=>{n=e},editDueDate:e=>{d=e},editPriority:e=>{o=e},editNote:e=>{i=e},toggleFinished:()=>{r=!r},isFinished:()=>r}},o=e=>{let t=e,n=[];return{getName:()=>t,editName:e=>{t=e},getItems:()=>n,addItem:e=>{n.push(e)},removeItem:e=>{const t=n.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());n.splice(t,1)}}};let i={title:"Zvezda",description:"opis",dueDate:"datum",priority:"hitno",note:"nesto"},r={title:"Stefan",description:"Nesto",dueDate:"datum",priority:"dsa61161d",note:"daaaa"};const s=(()=>{let e=o("Personal"),t=o("Work"),n=o("Grocery store"),s=d(i),a=d(r),c=d(i);e.addItem(s),e.addItem(a),t.addItem(c),t.addItem(a),n.addItem(a),n.addItem(s);let l=[e,t,n];return{getLists:()=>l,addList:e=>{l.push(e)},removeList:e=>{const t=l.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());l.splice(t,1)},getList:e=>l.find(t=>t.getName().toLowerCase()===e.toLowerCase())}})(),a={addTask:e=>{e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#description"),o=document.querySelector("#dueDate"),i=document.querySelector("#priority"),r=document.querySelector("#note"),s=(document.querySelector("#addTask"),{title:t.value,description:n.value,dueDate:o.value,priotity:i.value,note:r.value});console.log(s);const a=d(s);console.log(a)}},c=(()=>{const e=document.querySelector("#tasksContainer");document.querySelector(".taskItem");let t;function n(){event.target===this&&t.parentNode.removeChild(t)}function d(e){const t=document.querySelector("#title"),n=document.querySelector("#addTask");""!==t.value?n.classList.add("enabled"):n.classList.remove("enabled")}return{showModal:function(o){t=document.createElement("div"),t.classList.add("modalBg");const i=document.createElement("div");i.setAttribute("id","modalTask"),i.style.transform=`translateX(-${o.pageX/3+30}px) translateY(-${o.pageY-50}px) scale(0.1)`;const r=document.createElement("form");r.setAttribute("autocomplete","off");const s=document.createElement("input");s.addEventListener("change",d),s.addEventListener("keyup",d),s.addEventListener("keydown",d),s.setAttribute("type","text"),s.setAttribute("id","title"),s.setAttribute("size","20"),s.setAttribute("placeholder","Task name");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","description"),c.setAttribute("size","20"),c.setAttribute("placeholder","Description");const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("id","dueDate"),l.setAttribute("name","dueDate");const u=document.createElement("select");u.setAttribute("id","priority");const p=document.createElement("option");p.setAttribute("selected","selected"),p.setAttribute("hidden","hidden"),p.setAttribute("disabled","disabled"),p.textContent="Priority";const m=document.createElement("option");m.setAttribute("value","low"),m.textContent="Low";const h=document.createElement("option");h.setAttribute("value","medium"),h.textContent="Medium";const b=document.createElement("option");b.setAttribute("value","high"),b.textContent="High";const C=document.createElement("option");C.setAttribute("value","urgent"),C.textContent="Urgent",u.appendChild(p),u.appendChild(m),u.appendChild(h),u.appendChild(b),u.appendChild(C);const y=document.createElement("textarea");y.setAttribute("id","note"),y.setAttribute("cols","20"),y.setAttribute("rows","5"),y.setAttribute("placeHolder","Note");const f=document.createElement("button");f.setAttribute("id","addTask"),f.textContent="Add task",f.addEventListener("click",a.addTask),r.appendChild(s),r.appendChild(c),r.appendChild(l),r.appendChild(u),r.appendChild(y),r.appendChild(f),i.appendChild(r),t.addEventListener("click",n),t.appendChild(i),e.appendChild(t)}}})(),l=(()=>{const e=document.querySelector("#tasks"),t=()=>{let e=tasks.lastChild;for(;e;)tasks.removeChild(e),e=tasks.lastChild};return{renderListTasks:()=>{t();const n=event.target.textContent,d=document.createElement("div");d.classList.add("taskItem");const o=document.createElement("div");o.classList.add("taskHeader");const i=document.createElement("h2");i.textContent=n,o.appendChild(i);const r=document.createElement("span");r.classList.add("add"),r.addEventListener("click",c.showModal);const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-plus-circle"),r.appendChild(a),o.appendChild(r),d.appendChild(o);s.getList(n).getItems().forEach(e=>{const t=document.createElement("div");t.classList.add("taskDiv");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",e.getTitle()),n.setAttribute("value",e.getTitle()),n.classList.add("checkbox");const o=document.createElement("p");o.innerText=e.getTitle(),t.append(n),t.appendChild(o),d.appendChild(t)}),e.appendChild(d)}}})(),u={renderLists:()=>{const e=document.querySelector("#listsList");s.getLists().forEach(t=>{const n=document.createElement("li");n.setAttribute("id",t.getName().replace(" ","").toLowerCase()),n.textContent=t.getName(),e.appendChild(n),n.addEventListener("click",l.renderListTasks)})},renderShortcuts:()=>{const e=document.createElement("li");e.textContent="Today",e.setAttribute("id","today");const t=document.createElement("li");t.textContent="Next 7 days",t.setAttribute("id","sevenDays");const n=document.createElement("li");n.textContent="All tasks",n.setAttribute("id","allTasks");const d=document.querySelector("#shortcutsList");d.appendChild(e),d.appendChild(t),d.appendChild(n)}};window.onload=(u.renderLists(),void u.renderShortcuts())}]);