function calcularIMC(altura, peso) {
    return peso / (altura * altura)
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

module.exports = {
    calcularIMC,
    somar
}