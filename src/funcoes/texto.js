function concatenarPalavras(primeiraPalavra, segundaPalavra) {
    return primeiraPalavra + " " + segundaPalavra;
}

const darBoasVindas = () => {
    console.log("Seja bem vindo")
}

/*
    Crie uma função que retorna true caso um texto 
    pesquisado seja um dos itens de um vetor fornecido. 
    A função deve estar dentro de um arquivo e o uso 
    dela deve estar em outro arquivo no qual teremos um 
    condicional que mostra o texto "Achou" em casos onde a 
    função retorna true.
*/

function existeTexto(listaTextos, textoPesquisado) {
    const quantidadeDeTextos = listaTextos.length;

    // [ "Cypress", "Selenium" ]
    for (let indice = 0; indice < quantidadeDeTextos; indice++) {
        if (listaTextos[indice] == textoPesquisado) {
            return true;
        } 
    }

    return false;
}

module.exports = {
    concatenarPalavras,
    darBoasVindas,
    existeTexto
}