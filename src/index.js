const { concatenarPalavras, darBoasVindas, existeTexto } = require("./funcoes/texto")
const { mediaEntreDoisNumeros } = require("./funcoes/calculos")
const { listarItens } = require("./funcoes/vetores")

// Apresentar no console o as palavras Cleiton e Reis de maneira concatenada.
// const nomeConcatenado = concatenarPalavras("Cleiton", "Reis")
// console.log(nomeConcatenado)
console.log(concatenarPalavras("Cleiton", "Reis"));
darBoasVindas();
console.log(mediaEntreDoisNumeros(12, 15))

const tecnologias = [ "Cypress", "Selenium", "Playwright", "UFT", "Katalon" ];

listarItens(tecnologias);

if (existeTexto(tecnologias, "Selenium") == true) {
    console.log("Achou");
} else {
    console.log("Não encontrou");
}
