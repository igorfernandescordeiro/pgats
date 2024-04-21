const { existeTexto } = require("../../../src/funcoes/texto");
const assert = require("node:assert");

describe("Texto", () => {
    describe("#existeTexto", () => {
        const vetor = [ "Selenium", "Cypress" ];
        
        it("Validar quando existe um texto", () => {
            // Arrange
            const textoEsperado = "Selenium";

            // Act 
            const encontrouOTexto = existeTexto(vetor, textoEsperado);

            // Assert
            assert.ok(encontrouOTexto)
        });

        it("Validar que não é possível encontrar um valor no vetor", () => {
            const encontrouOTexto = existeTexto(vetor, "Seleniun");
            assert.equal(encontrouOTexto, false, `O valor Seleniun foi encontrado mas não deveria estar no ${vetor}`);
        })
    });
})