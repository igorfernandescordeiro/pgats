const {mediaEntreDoisNumeros} = require('./../../../src/funcoes/calculos');
const assert = require("node:assert");



describe("Calculos", () => {

    describe("#mediaEntreDoisNumeros", () => {
        it("validar se a media de 10 e 2 é igual a 6", () => {
  
            const resultado = mediaEntreDoisNumeros(10, 2);
            assert.equal(resultado, 6);
        });
        
        it("validar se a media de a e zero é igual a NaN", () => {
  
            const resultado = mediaEntreDoisNumeros("a", "");
            assert.equal(resultado, NaN);
        });
    });
});

