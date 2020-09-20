function getinput(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let td1 = document.createElement("td");
    td1.innerHTML = a;
    let td2 = document.createElement("td");
    td2.innerHTML = b;
    let td3 = document.createElement("td");
    td3.innerHTML = c;
    let row = document.createElement("tr");
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    let t = document.getElementById("t");
    t.appendChild(row);
}
window.onload = function(){
    let bt = document.getElementById("bt").onclick = getinput;
}