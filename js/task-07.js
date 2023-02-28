const input =document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.style.fontSize = input.ariaValueMax;

input.addEventListener("input", (event)=>{
    output.style.fontSize = event.currentTarget.value+"px";

});