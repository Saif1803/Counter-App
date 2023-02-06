let pos = document.querySelector("#pos");
let neg = document.querySelector("#negative");

pos.addEventListener("click",function(){
    let out = document.querySelector("#o");
    let result = Number(out.innerText)+1;
    out.innerText = result;
});
neg.addEventListener("click",function(){
    let out = document.querySelector("#o");
    let result = Number(out.innerText)-1;
    out.innerText = result;
});