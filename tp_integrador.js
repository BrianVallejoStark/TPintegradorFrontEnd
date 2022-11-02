let pago = 0
function planes() {
    var disp = parseInt(document.getElementById("devi").value);
    const subsc = 550
    var plan = document.getElementById("plan");
  //  console.log(plan.value)
    var meses = 0
    var desc = 0
switch (plan.value) {
    case "1 meses":
        desc = 0
        meses = 1
        break;
    case "3 meses":
        desc = 0.1
        meses = 3
        break;
    case "6 meses":
        desc = 0.17
        meses = 6
        break;
    case "12 meses":
        desc = 0.25
        meses = 12
        break;                        
}
pago = disp * subsc * meses * (1-desc)
// console.log(pago)
let aPagar = document.getElementById('pago')
aPagar.innerHTML=pago
//console.log(aPagar.innerText)
}
function limpiar() {
    pago = ""
    document.getElementById('pago').innerHTML =pago
}

