//Jegyzet magamnak: egy masik modszer az onclick eventre 
//let btnAdd = document.querySelector("#add")
//Jegyzet magamnak: egy masik modszer az onclick eventre 
//let btnRemove = document.querySelector("#remove")
let index = 0; 
let table = document.getElementById("table");




//feladat1
function NewColor() {
    let symbols, color;
    symbols = "0123456789ABCDEF";
color = "#" ;
for (let i =0;i<6;i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    
    document.getElementById("genNew").style.background = color;
    document.querySelector("#genNew").style.color = "#ffffff";
    document.getElementById("torolall").style.background = color;
    document.querySelector("#torolall").style.color = "#ffffff";
    
    document.querySelector(".feladat1").style.color = color;
    document.querySelector(".Text").style.background = color;
    document.querySelector(".Text").style.color = "#ffffff";
    document.getElementById("hex-code").style.color = color;
    document.querySelector("#hex-code").innerHTML = color;
    
    
}


//feladat2
function hozzaadas() {
    index++;
    let y = document.createElement("tr");
    let z  = document.createElement("td");
    let w  = document.createElement("td");
    w.innerHTML = index + ".";
    z.innerHTML = document.getElementById('Text').value
    y.appendChild(w);
    y.appendChild(z);
    document.querySelector("tbody").appendChild(y);
}

//Jegyzet magamnak: egy masik modszer az onclick eventre 
// btnAdd.addEventListener("click", addHeader);

function torles() {
    if(index > 0) {
        let tbody = document.querySelector("tbody");
        let lastChild = tbody.lastChild;
        console.log(lastChild);
        tbody.removeChild(lastChild);
        index--;
    }
    
}
//Jegyzet magamnak: egy masik modszer az onclick eventre 
//btnRemove.addEventListener("click", deleteChild);
function torlesAll() {
    
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    index = 0;    
    
    
}