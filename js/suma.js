/* funcion suma */
function suma(){
    let a=parseFloat(document.getElementById("n1").value);
    let b=parseFloat(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("res").innerHTML=c.toFixed(1);
}