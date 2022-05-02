
function calcTip() {
    let subtotal = document.getElementById('subtotal').value;
    let tip = document.getElementById('tip').value;
    let total = (parseFloat(subtotal) * parseFloat(tip) / 100) + parseFloat(subtotal);
    document.getElementById('total').innerText = '$' + total;
}

