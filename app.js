const groups=[["chest","Грудь"],["back","Спина"],["legs","Ноги"],["arms","Руки"],["shoulders","Плечи"],["abs","Пресс"]];
const weekdays=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
const key="gymtracker.v1";
let data=JSON.parse(localStorage.getItem(key)||"{}");
let selected=new Date(); selected.setHours(12,0,0,0);
let month=new Date(selected); month.setDate(1);
let group="chest";

const $=s=>document.querySelector(s);
const pad=n=>String(n).padStart(2,"0");
const dateKey=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const save=()=>localStorage.setItem(key,JSON.stringify(data));
const fmt=d=>d.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"});
const same=(a,b)=>dateKey(a)===dateKey(b);

function render(){
  renderCalendar(); renderGroups(); renderExercises();
}
function renderCalendar(){
  $("#monthTitle").textContent=month.toLocaleDateString("ru-RU",{month:"long",year:"numeric"});
  $("#weekdays").innerHTML=weekdays.map(x=>`<div>${x}</div>`).join("");
  const first=(month.getDay()+6)%7;
  const days=new Date(month.getFullYear(),month.getMonth()+1,0).getDate();
  let html="";
  for(let i=0;i<first;i++) html+="<span></span>";
  const now=new Date();
  for(let d=1;d<=days;d++){
    const x=new Date(month.getFullYear(),month.getMonth(),d,12);
    const k=dateKey(x), has=Object.values(data[k]||{}).some(a=>Array.isArray(a)&&a.length);
    html+=`<button class="${same(x,selected)?"selected ":""}${same(x,now)?"today ":""}${has?"has-workout":""}" data-day="${d}">${d}</button>`;
  }
  $("#days").innerHTML=html;
  document.querySelectorAll("#days button").forEach(b=>b.onclick=()=>{selected=new Date(month.getFullYear(),month.getMonth(),+b.dataset.day,12);render()});
}
function renderGroups(){
  $("#selectedDate").textContent=fmt(selected);
  $("#muscles").innerHTML=groups.map(([id,n])=>`<button class="${id===group?"active":""}" data-group="${id}">${n}</button>`).join("");
  document.querySelectorAll("#muscles button").forEach(b=>b.onclick=()=>{group=b.dataset.group;render()});
  $("#groupTitle").textContent=groups.find(x=>x[0]===group)[1];
}
function renderExercises(){
  const k=dateKey(selected); const arr=(data[k]?.[group])||[];
  if(!arr.length){$("#exerciseList").innerHTML='<div class="empty">Пока нет упражнений.<div class="hint">Нажми «＋ Добавить», чтобы записать тренировку.</div></div>';return}
  $("#exerciseList").innerHTML=arr.map((e,i)=>`<div class="exercise">
    <div class="row">
      <input class="name" data-i="${i}" data-field="name" value="${escapeHtml(e.name)}" placeholder="Название упражнения">
      <input class="metric" type="number" min="1" data-i="${i}" data-field="sets" value="${e.sets}">
      <input class="metric" type="number" min="1" data-i="${i}" data-field="reps" value="${e.reps}">
      <button class="delete" data-del="${i}">×</button>
    </div>
    <div class="hint">Подходы × Повторы</div>
  </div>`).join("");
  document.querySelectorAll("#exerciseList input").forEach(inp=>inp.onchange=()=>{
    const i=+inp.dataset.i; const f=inp.dataset.field;
    if(!data[k])data[k]={}; if(!data[k][group])data[k][group]=[];
    data[k][group][i][f]=f==="name"?inp.value:Math.max(1,+inp.value||1); save(); renderCalendar();
  });
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{data[k][group].splice(+b.dataset.del,1); if(!data[k][group].length)delete data[k][group]; if(!Object.keys(data[k]||{}).length)delete data[k];save();render()});
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
$("#addBtn").onclick=()=>{
  const k=dateKey(selected); if(!data[k])data[k]={}; if(!data[k][group])data[k][group]=[];
  data[k][group].push({name:"Новое упражнение",sets:3,reps:10}); save(); render();
  setTimeout(()=>{const inputs=document.querySelectorAll("#exerciseList .name"); inputs[inputs.length-1]?.focus(); inputs[inputs.length-1]?.select()},0);
};
$("#prev").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()-1,1,12);render()};
$("#next").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()+1,1,12);render()};
$("#todayBtn").onclick=()=>{selected=new Date();selected.setHours(12,0,0,0);month=new Date(selected);month.setDate(1);render()};
render();

if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
