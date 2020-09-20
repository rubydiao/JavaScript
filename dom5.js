function sumint(){
    let s1 = document.getElementById("s1").value;
    let s2 = document.getElementById("s2").value;
    let sum = parseInt(s1)+parseInt(s2);
    let s3 = document.getElementById("sum").value = sum;
    let s4 = document.getElementById("sum2").value = sum;
}
function sumall(){
    let st = document.getElementById("sl").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let nsum = document.getElementById("nsum")
    if(st === '+'){
        let temp = parseInt(n1)+parseInt(n2);
        nsum.value = temp;
    }
    if(st === '-'){
        let temp = parseInt(n1)-parseInt(n2);
        nsum.value = temp;
    }if(st === '*'){
        let temp = parseInt(n1)*parseInt(n2);
        nsum.value = temp;
    }if(st === '/'){
        let temp = parseInt(n1)/parseInt(n2);
        nsum.value = temp;
    }
}
window.onload = function(){
    let at = document.getElementById("p").onclick = sumall;
    let as = document.getElementById("q").onclick = sumint;
}