// Declaração das variáveis
const primeiroNumero = 5;
const segundoNumero = 7;

// Cálculo da Soma
function somar(valor1, valor2) {
    return valor1 + valor2;
}

const resultadoSoma = somar(primeiroNumero, segundoNumero)

// Cálculo da Média
function media(resultadoSomaDoisNumeros) {
    return resultadoSomaDoisNumeros / 2;
}

const resultadoMedia = media(resultadoSoma);

// Exibição do Resultado
function exibirResultado(resultado) {
    console.log(`O resultado é ${resultado}`);
}

exibirResultado(resultadoMedia);

const mediaMais5 = somar(resultadoMedia, 5);

exibirResultado(mediaMais5)