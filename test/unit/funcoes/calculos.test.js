const { mediaEntreDoisNumeros } = require("../../../src/funcoes/calculos")
const assert = require("node:assert");

describe("Calculos", function() {
    // Tudo aqui é sobre Calculos 
    describe("#mediaEntreDoisNumeros", function() {
        // Tudo aqui é sobre a função mediaEntreDoisNumeros
        it("Validar se a média entre 10 e 2 é igual a 6", function() {
            const resultadoDaMedia = mediaEntreDoisNumeros(10, 2);
            assert.equal(resultadoDaMedia, 6);
        });

        it("Validar se valores textuais retornam NaN", () => {
            const resultadoDaMedia = mediaEntreDoisNumeros("a", "");
            assert.equal(resultadoDaMedia, NaN);
        });

        it("Validar se a média entre 0 e 0 é igual a zero", () => {
            // Arrange é Preparar
            const primeiroValor = 0;
            const segundoValor = 0;
            const resultadoEsperado = 0;

            // Act é Executar
            const resultadoAtual = mediaEntreDoisNumeros(primeiroValor, segundoValor);

            // Assert é a Comparação do Resultado Atual e do Esperado
            assert.equal(resultadoAtual, resultadoEsperado) 
            
            /*
                if (resultadoAtual != resultadoEsperado) {
                    throw new Error(`${resultadoEsperado} e ${resultadoAtual} não são iguais`); 
                }
            */
        })
    });
});