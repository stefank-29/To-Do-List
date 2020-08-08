!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=e=>{let t=e.title,n=e.description,s=e.dueDate,i=e.priority,d=e.note,o=!1;return{getTitle:()=>t,getDescription:()=>n,getDueDate:()=>s,getPriority:()=>i,getNote:()=>d,editTitle:e=>{t=e},editDescription:e=>{n=e},editDueDate:e=>{s=e},editPriority:e=>{i=e},editNote:e=>{d=e},toggleFinished:()=>{o=!o},isFinished:()=>o,title:t,description:n,dueDate:s,priority:i,note:d,finished:o}},i=(e,t)=>{let n,s=e;n=void 0!==t?[...t]:[];return{getName:function(){return s},editName:function(e){s=e},getItems:()=>n,getItemsNumber:()=>n.length,addItem:e=>{n.unshift(e)},removeItem:e=>{const t=n.findIndex(t=>t.title===e);n.splice(t,1)},removeItemByIndex:function(e){n.splice(e,1)},name:s,items:n}};let d={title:"Task",description:"opis",dueDate:"2020-09-17",priority:"medium",note:"nesto"},o={title:"Zadatak",description:"Nesto",dueDate:"2020-10-21",priority:"high",note:"daaaa"};const a=(()=>{let e=i("Personal"),t=i("Work"),n=i("Grocery store"),a=s(d),r=s(o),l=s(d);e.addItem(a),e.addItem(r),t.addItem(l),t.addItem(r),n.addItem(r),n.addItem(a);let c=[e,t,n];const u=()=>{let e=localStorage.getItem("lists"),t=JSON.parse(e);return c.length=0,t.forEach(e=>{c.push(i(e.name,e.items))}),c};return{getLists:u,addList:e=>{c=u(),c.push(e),localStorage.setItem("lists",JSON.stringify(c))},removeListByName:e=>{const t=c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());c.splice(t,1)},getList:function(e){return c.find(t=>t.getName().toLowerCase()===e.toLowerCase())},setListsToStorage:function(){c=u(),localStorage.setItem("lists",JSON.stringify(c))},getListIndex:function(e){return c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase())},removeListByIndex:function(e){c.splice(e,1)},lists:c}})(),r={addTask:function(e){e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#listSelect"),i=document.querySelector("#description"),d=document.querySelector("#dueDate"),o=document.querySelector("#priority"),r=document.querySelector("#note"),c=document.querySelector("#addTask"),u={title:t.value,description:i.value,dueDate:d.value,priority:o.value,note:r.value};if(c.classList.contains("enabled")&&null==n){const e=s(u);console.log(e);const t=p.getCurrentList();console.log(t),t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),l.exitModalOnButton(),p.renderListTasks(void 0,t.getName())}else if(c.classList.contains("enabled")&&null!==n)if(""!==n.value){const e=s(u),t=a.getList(n.value);t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),l.exitModalOnButton(),p.renderListTasks(void 0,t.getName())}else n.style.backgroundColor="rgba(156, 54, 54, 0.4)";else t.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},l=(()=>{const e=document.querySelector("#tasksContainer");document.querySelector(".taskItem");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#title"),n=document.querySelector("#addTask");t.style="",""!==t.value?n.classList.add("enabled"):n.classList.remove("enabled")}return{showModal:function(i){t=document.createElement("div"),t.classList.add("modalBg");const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const o=document.createElement("form");o.setAttribute("autocomplete","off");const l=document.createElement("input");let c;if(l.addEventListener("change",s),l.addEventListener("keyup",s),l.addEventListener("keydown",s),setTimeout((function(){l.focus()}),500),l.setAttribute("type","text"),l.setAttribute("id","title"),l.setAttribute("size","20"),l.setAttribute("placeholder","Task name"),l.setAttribute("maxlength","50"),"menuAddTask"===this.getAttribute("id")){c=document.createElement("select"),c.setAttribute("id","listSelect");const e=document.createElement("option");e.setAttribute("selected","selected"),e.setAttribute("hidden","hidden"),e.setAttribute("disabled","disabled"),e.setAttribute("value",""),e.textContent="Choose list:",c.appendChild(e);a.getLists().forEach(e=>{const t=document.createElement("option");t.setAttribute("value",e.getName()),t.textContent=e.getName(),c.appendChild(t)}),d.style.height="60rem",c.addEventListener("click",(function(){c.style=""})),c.addEventListener("mousedown",(function(){c.style=""}))}const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","description"),u.setAttribute("size","20"),u.setAttribute("placeholder","Description");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),m.setAttribute("name","dueDate");const p=document.createElement("select");p.setAttribute("id","priority");const h=document.createElement("option");h.setAttribute("selected","selected"),h.setAttribute("hidden","hidden"),h.setAttribute("disabled","disabled"),h.setAttribute("value",""),h.textContent="Priority";const L=document.createElement("option");L.setAttribute("value","low"),L.textContent="Low";const v=document.createElement("option");v.setAttribute("value","medium"),v.textContent="Medium";const b=document.createElement("option");b.setAttribute("value","high"),b.textContent="High";const C=document.createElement("option");C.setAttribute("value","urgent"),C.textContent="Urgent",p.appendChild(h),p.appendChild(L),p.appendChild(v),p.appendChild(b),p.appendChild(C);const f=document.createElement("textarea");f.setAttribute("id","note"),f.setAttribute("cols","20"),f.setAttribute("rows","5"),f.setAttribute("placeHolder","Note");const y=document.createElement("button");y.setAttribute("id","addTask"),y.textContent="Add task",y.addEventListener("click",r.addTask),o.appendChild(l),"menuAddTask"===this.getAttribute("id")&&o.appendChild(c),o.appendChild(u),o.appendChild(m),o.appendChild(p),o.appendChild(f),o.appendChild(y),d.appendChild(o),t.addEventListener("click",n),t.appendChild(d),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),c={addTask:function(){const e={title:this.parentNode.querySelector(".quickTaskInput").value,description:"",dueDate:"",priority:"",note:""};if(this.classList.contains("enabled")){const t=s(e),n=p.getCurrentList();n.addItem(t),localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),p.renderListTasks(void 0,n.getName())}},addTaskOnEnter:function(e){const t={title:e.value,description:"",dueDate:"",priority:"",note:""},n=s(t),i=p.getCurrentList();i.addItem(n),localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),p.renderListTasks(void 0,i.getName())}},u={deleteTask:function(e){const t=p.getCurrentList();t.removeItemByIndex(e),localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),p.renderListTasks(void 0,t.name),m.exitModalOnButton()},saveTask:function(e,t){const n=document.querySelector("#title"),s=document.querySelector("#saveTask"),i=p.getCurrentList();s.classList.contains("enabled")?(e.title=t.title,e.description=t.description,e.dueDate=t.dueDate,e.priority=t.priority,e.note=t.note,localStorage.setItem("lists",JSON.stringify(a.lists)),p.renderListTasks(void 0,i.name),m.exitModalOnButton()):n.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},m=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#saveTask");this.style.backgroundColor="",""!==this.value?t.classList.add("enabled"):t.classList.remove("enabled")}return{showInfo:function(i){if("INPUT"===i.target.tagName)return;const d=this.querySelector("p").textContent,o=this.dataset.index,a=p.getCurrentList().items[o];t=document.createElement("div"),t.classList.add("modalBg");const r=document.createElement("div");r.setAttribute("id","taskInfo"),r.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const l=document.createElement("form"),c=document.createElement("div");c.setAttribute("id","header");const m=document.createElement("h2");m.textContent="TASK DETAILS",c.appendChild(m),r.appendChild(c);const h=document.createElement("div");h.setAttribute("id","taskButtons");const L=document.createElement("button");L.textContent="Delete",L.setAttribute("id","deleteTask"),L.addEventListener("click",(function(){u.deleteTask(o)}));const v=document.createElement("button");v.textContent="Save",v.setAttribute("id","saveTask"),v.classList.add("enabled"),h.appendChild(L),h.appendChild(v);const b=document.createElement("input");b.setAttribute("type","text"),b.setAttribute("id","title"),b.setAttribute("size","20"),b.setAttribute("placeholder","Task name"),b.setAttribute("maxlength","50"),b.addEventListener("change",s),b.addEventListener("keydown",s),b.addEventListener("keyup",s),b.value=""+d,setTimeout((function(){b.focus()}),500);const C=document.createElement("p");C.textContent="Description:";const f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("id","description"),f.setAttribute("size","20"),f.value=a.description;const y=document.createElement("p");y.textContent="Due date:";const g=document.createElement("input");g.setAttribute("type","date"),g.setAttribute("id","dueDate"),g.setAttribute("name","dueDate"),g.value=a.dueDate;const E=document.createElement("p");E.textContent="Priority:";const A=document.createElement("select");A.setAttribute("id","priority");const k=document.createElement("option");k.setAttribute("selected","selected"),k.setAttribute("hidden","hidden"),k.setAttribute("disabled","disabled"),k.setAttribute("value",""),k.textContent="Priority";const S=document.createElement("option");S.setAttribute("value","low"),S.textContent="Low";const x=document.createElement("option");x.setAttribute("value","medium"),x.textContent="Medium";const T=document.createElement("option");T.setAttribute("value","high"),T.textContent="High";const q=document.createElement("option");q.setAttribute("value","urgent"),q.textContent="Urgent",A.appendChild(k),A.appendChild(S),A.appendChild(x),A.appendChild(T),A.appendChild(q),""!=a.priority&&(A.value=a.priority);const N=document.createElement("p");N.textContent="Note:";const I=document.createElement("textarea");I.setAttribute("id","note"),I.setAttribute("cols","20"),I.setAttribute("rows","5"),I.value=a.note,l.setAttribute("autocomplete","off"),l.appendChild(b),l.appendChild(C),l.appendChild(f),l.appendChild(y),l.appendChild(g),l.appendChild(E),l.appendChild(A),l.appendChild(N),l.appendChild(I),r.appendChild(l),r.appendChild(h),t.addEventListener("click",n),t.appendChild(r),e.appendChild(t),v.addEventListener("click",(function(){let e={title:b.value,description:f.value,dueDate:g.value,priority:A.value,note:I.value};u.saveTask(a,e)}))},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),p=(()=>{const e=document.querySelector("#tasks");let t;const n=()=>{let e=tasks.lastChild;for(;e;)tasks.removeChild(e),e=tasks.lastChild};function s(e){const t=this,n=this.parentNode.querySelector(".up");""!==t.value?(n.classList.add("enabled"),t.classList.add("enabled"),"Enter"===e.key&&c.addTaskOnEnter(t)):(n.classList.remove("enabled"),t.classList.remove("enabled"))}function i(e){e.querySelectorAll("li").forEach(e=>{e.classList.remove("active")})}return{renderListTasks:function(d,o){let r;var u;n(),"LI"===this.tagName&&(i(this.parentNode),this.classList.add("active")),void 0!==d?r=this.firstChild.textContent:(r=o,u=r,document.querySelector("#listsList").querySelectorAll("li").forEach(e=>{e.querySelector("p").textContent===u&&e.classList.add("active")}));const p=document.createElement("div");p.classList.add("listItem");const h=document.createElement("div");h.classList.add("listHeader");const L=document.createElement("h2");L.textContent=r,h.appendChild(L);const v=document.createElement("span");v.classList.add("add"),v.addEventListener("click",l.showModal);const b=document.createElement("i");b.classList.add("fas"),b.classList.add("fa-plus-circle"),v.appendChild(b),h.appendChild(v),p.appendChild(h);const C=a.getList(r).getItems(),f=document.createElement("div");f.classList.add("listTasks");let y=0;C.forEach(e=>{const t=document.createElement("div");t.classList.add("taskDiv"),t.addEventListener("click",m.showInfo),t.setAttribute("data-index",y++);const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",e.title),n.setAttribute("value",e.title),n.classList.add("checkbox");const s=document.createElement("p");s.innerText=e.title,t.append(n),t.appendChild(s),f.appendChild(t)}),p.appendChild(f);const g=document.createElement("div");g.classList.add("quickTask");const E=document.createElement("input");E.classList.add("quickTaskInput"),E.setAttribute("type","text"),E.setAttribute("maxlength","50"),E.setAttribute("placeholder","Click to quickly add task"),E.addEventListener("change",s),E.addEventListener("keydown",s),E.addEventListener("keyup",s);const A=document.createElement("span"),k=document.createElement("i");k.classList.add("fas"),k.classList.add("fa-arrow-circle-up"),A.appendChild(k),A.classList.add("up"),A.addEventListener("click",c.addTask),g.appendChild(E),g.appendChild(A),p.appendChild(g),e.appendChild(p),t=a.getList(r)},getCurrentList:()=>t,_deactiveAllLists:i,currentList:t}})(),h={addList:function(e){event.preventDefault();const t=e.value;if(document.querySelector("#createList").classList.contains("enabled")){const e=i(t,[]);a.addList(e),C.renderLists(),C.renderShortcuts(),L.exitModalOnButton()}else e.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},L=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){const t=this,n=document.querySelector("#createList");t.style.backgroundColor="",""!==t.value?(n.classList.add("enabled"),"Enter"===e.key&&h.addList(t)):n.classList.remove("enabled")}function s(e){e.target===this&&t.parentNode.removeChild(t)}function i(){t.parentNode.removeChild(t)}return{showModal:function(){t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",s);const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",d.style.width="40rem",d.style.height="15rem";const o=document.createElement("form");o.setAttribute("autocomplete","off"),o.style.width="95%",o.setAttribute("onkeydown","return event.key != 'Enter';");const a=document.createElement("input");a.addEventListener("change",n),a.addEventListener("keydown",n),a.addEventListener("keyup",n),a.addEventListener("mousedown",n),a.setAttribute("type","text"),a.setAttribute("id","title"),a.setAttribute("size","20"),a.setAttribute("placeholder","List name"),a.setAttribute("maxlength","23"),a.style.width="100%",a.style.margin="0",setTimeout((function(){a.focus()}),500);const r=document.createElement("div");r.setAttribute("id","modalButtons");const l=document.createElement("button");l.textContent="Cancel",l.setAttribute("id","cancel"),l.addEventListener("click",i);const c=document.createElement("button");c.textContent="Create",c.setAttribute("id","createList"),c.addEventListener("click",(function(){h.addList(a)})),r.appendChild(l),r.appendChild(c),o.appendChild(a),d.appendChild(o),d.appendChild(r),t.appendChild(d),e.appendChild(t)},exitModalOnButton:i}})(),v=(()=>{const e=document.querySelector("#tasksContainer");let t,n,s;function i(){const e=this,t=document.querySelector("#saveList");e.style.backgroundColor="",""!==e.value?(t.classList.add("enabled"),"Enter"===event.key&&b.saveList(s,n,e.value)):t.classList.remove("enabled")}function d(e){e.target===this&&t.parentNode.removeChild(t)}return{showModal:function(){s=this.parentNode,n=this.parentNode.textContent,t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",d);const o=document.createElement("div");o.setAttribute("id","modalTask"),o.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",o.style.width="40rem",o.style.height="15rem";const a=document.createElement("form");a.setAttribute("autocomplete","off"),a.style.width="95%",a.setAttribute("onkeydown","return event.key != 'Enter';");const r=document.createElement("input");r.addEventListener("change",i),r.addEventListener("keydown",i),r.addEventListener("keyup",i),r.addEventListener("mousedown",i),r.setAttribute("type","text"),r.setAttribute("id","title"),r.setAttribute("size","20"),r.setAttribute("placeholder","List name"),r.setAttribute("maxlength","23"),r.style.width="100%",r.style.margin="0",r.value=""+n,setTimeout((function(){r.focus()}),500);const l=document.createElement("div");l.setAttribute("id","modalButtons");const c=document.createElement("button");c.textContent="Delete",c.setAttribute("id","deleteList"),c.addEventListener("click",(function(){b.deleteList(s)}));const u=document.createElement("button");u.textContent="Save",u.setAttribute("id","saveList"),u.addEventListener("click",(function(){b.saveList(s,n,r.value)})),l.appendChild(c),l.appendChild(u),a.appendChild(r),o.appendChild(a),o.appendChild(l),t.appendChild(o),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),b={saveList:function(e,t,n){const s=e.dataset.index;a.lists[s].name=n,e.childNodes[1].textContent=n,v.exitModalOnButton()},deleteList:function(e){const t=e.dataset.index;e.parentNode.removeChild(e),C.changeDataIndices(),a.removeListByIndex(t),v.exitModalOnButton()},saveEdit:function(){localStorage.setItem("lists",JSON.stringify(a.lists));const e=C.getActiveListName();void 0!==e?(localStorage.setItem("lists",JSON.stringify(a.lists)),C.renderLists(),C.renderShortcuts(),p.renderListTasks(void 0,e)):C.renderLists()},cancelEdit:function(){C.renderLists()}},C=(()=>{function e(){const e=document.querySelector("#listsList"),t=document.querySelector("#shortcutsList"),n=document.querySelector("#icons");"lists"==this.getAttribute("id")?(e.classList.toggle("hide"),e.classList.contains("hide")?setTimeout((function(){e.style.display="none"}),500):e.style.display="block",n.classList.toggle("hide")):"shortcuts"==this.getAttribute("id")&&(t.classList.toggle("hide"),t.classList.contains("hide")?setTimeout((function(){t.style.display="none"}),500):t.style.display="block"),this.firstChild.classList.toggle("fa-chevron-down"),this.firstChild.classList.toggle("fa-chevron-up")}function t(e){e.querySelectorAll("li").forEach(e=>{e.parentNode.removeChild(e)})}function n(){const t=document.querySelector("#listsList").querySelectorAll("li"),s=document.querySelector("#listsHeader");if(document.querySelector("#menu").querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notOverlay")||e.classList.toggle("overlayed")}),s.classList.toggle("editable"),s.classList.contains("editable")){s.lastElementChild.classList.add("hide"),s.removeChild(s.querySelector(".arrow"));const e=document.createElement("div");e.setAttribute("id","editIcons");const t=document.createElement("i");t.classList.add("fas","fa-times"),t.classList.add("editIcon","editHeader"),t.setAttribute("id","cross"),t.addEventListener("click",b.cancelEdit),t.addEventListener("click",n);const i=document.createElement("i");i.classList.add("fas","fa-check"),i.classList.add("editIcon","editHeader"),i.setAttribute("id","check"),i.addEventListener("click",b.saveEdit),i.addEventListener("click",n),e.appendChild(t),e.appendChild(i),s.appendChild(e)}else{s.removeChild(s.lastElementChild),s.lastElementChild.classList.remove("hide");const t=document.createElement("span");t.classList.add("arrow"),t.setAttribute("id","lists"),t.addEventListener("click",e);const n=document.createElement("i");n.classList.add("fas","fa-chevron-up"),t.appendChild(n),s.insertBefore(t,s.lastElementChild)}"edit"===this.getAttribute("id")&&t.forEach(e=>{if(e.classList.toggle("editable"),e.classList.contains("editable")){e.removeChild(e.lastChild);const t=document.createElement("i");t.classList.add("fas"),t.classList.add("fa-bars"),t.classList.add("dragIcon"),e.insertBefore(t,e.firstChild);const n=document.createElement("img");n.setAttribute("src","./images/edit.svg"),n.classList.add("editIcon"),n.addEventListener("click",v.showModal),e.appendChild(n),e.removeEventListener("click",p.renderListTasks)}else{e.removeChild(e.firstChild),e.removeChild(e.lastChild);const t=document.createElement("span");t.classList.add("taskNumber"),t.textContent=""+a.getList(e.textContent).items.length,e.appendChild(t),e.addEventListener("click",p.renderListTasks)}})}return document.querySelectorAll(".arrow").forEach(t=>{t.addEventListener("click",e)}),document.querySelector("#menuAddTask").addEventListener("click",l.showModal),document.querySelector("#menuBars").addEventListener("click",(function(){const e=document.querySelector("#menu");e.classList.toggle("hide"),e.querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notHide")?e.classList.toggle("minimize"):e.classList.toggle("hide"),"add"==e.getAttribute("id")&&e.classList.contains("minimize")?e.querySelector("button").innerHTML='<i class="fas fa-plus"></i>':"add"!=e.getAttribute("id")||e.classList.contains("minimize")||(e.querySelector("button").innerHTML='<i class="fas fa-plus"></i> Create a task')})})),document.querySelector("#addList").addEventListener("click",L.showModal),document.querySelector("#edit").addEventListener("click",n),{renderLists:()=>{const e=document.querySelector("#listsList");let n=a.getLists();t(e);let s=0;n.forEach(t=>{const n=document.createElement("li");n.setAttribute("id",t.getName().replace(" ","").toLowerCase());const i=document.createElement("p");i.textContent=t.getName();const d=document.createElement("span");d.classList.add("taskNumber"),d.textContent=""+t.getItems().length,n.setAttribute("data-index",s++),n.appendChild(i),n.appendChild(d),e.appendChild(n),n.addEventListener("click",p.renderListTasks)})},renderShortcuts:()=>{const e=document.createElement("li");e.textContent="Today",e.setAttribute("id","today");const n=document.createElement("li");n.textContent="Next 7 days",n.setAttribute("id","sevenDays");const s=document.createElement("li");s.textContent="All tasks",s.setAttribute("id","allTasks");const i=document.querySelector("#shortcutsList");t(i),i.appendChild(e),i.appendChild(n),i.appendChild(s)},getActiveListName:function(){let e;return document.querySelector("#listsList").querySelectorAll("li").forEach(t=>{t.classList.contains("active")&&(e=t.querySelector("p").textContent,p.currentList=t)}),e},_editableLists:n,changeDataIndices:function(){const e=document.querySelector("#listsList");let t=0;e.querySelectorAll("li").forEach(e=>{e.dataset.index=t++})}}})();window.onload=(a.setListsToStorage(),C.renderLists(),void C.renderShortcuts())}]);