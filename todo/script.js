let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

const list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.done){
li.classList.add("done");
}

li.innerHTML=`

<div class="task-top">

<div class="task-actions">
<input type="checkbox" ${task.done ? "checked":""} onchange="toggleTask(${index})">
<span class="task-title">${task.title}</span>
</div>

<button class="delete-btn" onclick="deleteTask(${index})">Удалить</button>

</div>

<div class="task-desc">${task.description || ""}</div>

<div class="task-status">
Статус: <b>${task.done ? "Выполнено ✅" : "В процессе ⏳"}</b>
</div>

`;

list.appendChild(li);

});

}

function addTask(){

const title=document.getElementById("title").value.trim();
const description=document.getElementById("description").value.trim();

if(title===""){
alert("Название задачи обязательно");
return;
}

const task={
title:title,
description:description,
done:false
};

tasks.push(task);

saveTasks();
renderTasks();

document.getElementById("title").value="";
document.getElementById("description").value="";
}

function toggleTask(index){
tasks[index].done=!tasks[index].done;
saveTasks();
renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
renderTasks();
}

renderTasks();