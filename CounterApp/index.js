const count = document.getElementById("count")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const restart = document.getElementById("restart")

let value = 0;

function increment(){
    value++;
    count.textContent = value;
    document.getElementById("count").style.color = "indianred";
}
add.addEventListener("click", increment);

function decrement(){
    value--;
    count.textContent = value;
    document.getElementById("count").style.color = "blue";
}
subtract.addEventListener("click", decrement);

function reset(){
    value = 0;
    count.textContent = value;
    document.getElementById("count").style.color = "dimgrey";
}
restart.addEventListener("click", reset);
