const form = document.getElementById("userForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value.trim();
const age = Number(document.getElementById("age").value);

if(name === ""){
result.textContent = "Ошибка: введите имя";
return;
}

if(isNaN(age) || age <= 0){
result.textContent = "Ошибка: возраст должен быть больше 0";
return;
}

if(age < 18){
result.textContent = name + ": Доступ ограничен";
}
else if(age <= 65){
result.textContent = name + ": Доступ разрешен";
}
else{
result.textContent = name + ": Рекомендуется упрощенный режим";
}

});