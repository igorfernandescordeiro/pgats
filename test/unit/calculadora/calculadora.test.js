const { Calculadora } = require("../../../src/calculadora/calculadora")
const assert = require("node:assert");

describe("Calculadora", () => {

    describe("#media", () => {
        it("Validar a media de dois números", () => {
            const calculadora = new Calculadora();

            const media = calculadora.media(5, 10);

            assert.equal(media, 7.5);
        });
    });

    describe("#multiplicar", () => {
        it("Validar a soma de dois números", () => {
            const multiplicacao = Calculadora.multiplicar(3, 5);

            assert.equal(multiplicacao, 15);
        });
    });

    describe("#dividir", () => {
        const calculadora = new Calculadora();

        it("Validar a divisão de dois números inteiros", () => {
            const divisao = calculadora.dividir(5, 10);
            assert.equal(divisao, 0.5);
        });

        it("Validar se a divisão de 0 por 0 não resulta em um número", () => {
            const divisao = calculadora.dividir(0, 0);
            assert.equal(divisao, NaN);
        });

        it("Validar se a divisão de 1 por 0 resulta em um número infinito", () => {
            const divisao = calculadora.dividir(1, 0);
            assert.equal(divisao, Infinity);
        });
    });
});