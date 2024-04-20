/*
    [ "Cypress", "Selenium", "Playwright" ]

    "Cypress é um item"
    "Selenium é um item"
    "Playwright é um item"
*/

const listarItens = (itens) => {
    const quantidadeDeItems = itens.length;

    // iniciacao; condicao de continuidade; incrementador
    // Quando eu quero interagir com os itens usando seu indice
    for (let indice = 0; indice < quantidadeDeItems; indice = indice + 1) {
        console.log(`${itens[indice]} é um item`)
    }
}

module.exports = {
    listarItens
}