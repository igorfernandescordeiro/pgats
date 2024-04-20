const {existeTexto} = require('./../../../src/funcoes/texto');
const assert = require("node:assert");


describe("Testes do arquivo de funcoes texto.js", () => {

    describe("#existeText", () => {
        const vetor = ['Igor', 'Fernandes', 'Cordeiro'];

        it("Validar que é possível encontrar um valor no vetor", ()=>{
            const resultado = existeTexto(vetor, "Igor");
            assert.equal(resultado, true);
            assert.ok(resultado);
        });

        it("Validar que NÃO é possível encontrar um valor no vetor", () => {
            const resultado = existeTexto(vetor, "Igorr");
            assert.equal(resultado, false, `Não deveria ser possível encontarar um valor no vetor`);
            assert.ok(!resultado);
        });
    });

});



/*
Criar dois testes. Um para validar a função existeTexto, encontrando um texto em um vetor; 
Outro teste não encontrando um texto em um vetor
*/