
function planes() {
    var disp = Number(document.getElementById("devi").value);
    const subsc = 550
    var plan = document.getElementById("plan").value;
    var meses = 0
    var desc = 0
    var pago = 0
switch (plan) {
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
document.getElementById('pago').innerHTML = pago
}

