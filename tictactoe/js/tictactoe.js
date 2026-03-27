let board = [];
let size = 3;
let player = "X";
let gameOver = false;

const boardDiv = document.getElementById("board");
const status = document.getElementById("status");

document.getElementById("start").addEventListener("click", startGame);

function startGame(){

size = Number(document.getElementById("size").value);

if(size < 3){
status.textContent = "Минимальный размер поля — 3×3";
return;
}

board = new Array(size*size).fill("");
player = "X";
gameOver = false;

boardDiv.innerHTML="";
boardDiv.style.gridTemplateColumns=`repeat(${size},60px)`;

for(let i=0;i<board.length;i++){

let cell=document.createElement("div");
cell.className="cell";
cell.dataset.index=i;

cell.addEventListener("click", move);

boardDiv.appendChild(cell);
}

status.textContent="Ход: X";
}

function move(e){

if(gameOver) return;

let i=e.target.dataset.index;

if(board[i]!="") return;

board[i]=player;
e.target.textContent=player;

if(checkWin()){
status.textContent="Победил "+player;
gameOver=true;
return;
}

if(!board.includes("")){
status.textContent="Ничья";
gameOver=true;
return;
}

player = player==="X" ? "O":"X";
status.textContent="Ход: "+player;
}

function checkWin(){

for(let r=0;r<size;r++){
let win=true;
for(let c=0;c<size;c++){
if(board[r*size+c]!=player) win=false;
}
if(win) return true;
}

for(let c=0;c<size;c++){
let win=true;
for(let r=0;r<size;r++){
if(board[r*size+c]!=player) win=false;
}
if(win) return true;
}

let win=true;
for(let i=0;i<size;i++){
if(board[i*size+i]!=player) win=false;
}
if(win) return true;

win=true;
for(let i=0;i<size;i++){
if(board[i*size+(size-1-i)]!=player) win=false;
}
if(win) return true;

return false;
}