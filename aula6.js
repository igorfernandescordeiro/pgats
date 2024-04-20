const { calcularIMC, somar } = require("./calculos");

const meuIMC = calcularIMC(1.75, 97);

console.log(meuIMC.toFixed(2))
console.log(somar(5, 5));