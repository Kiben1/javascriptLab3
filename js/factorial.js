/* factorial */
function factorial(){
    let n=parseFloat(document.getElementById("n1").value);
    let r=1;
    for(let i=1; i<=n;i++){
        r*=i;
    }
    document.getElementById("res").innerHTML=r.toFixed(1);
}
/* ecuacion */
function ecuacion(){
    let a=parseFloat(document.getElementById("na").value);
    let b=parseFloat(document.getElementById("nb").value);
    let c=parseFloat(document.getElementById("nc").value);
di=b**2
mul=a*c
DIS=di-mul
if (DIS >0) {
    res = "la ecuacion tiene dos raices"
} else if(DIS==0){
    res = "la ecuacion tiene una raiz"
}else if(DIS<0){
    res = "la ecuacion no tiene raices reales"
}
document.getElementById("r").innerHTML=res;

}
