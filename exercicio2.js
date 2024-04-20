const existeNoVetor = (vetor, item) => {
    return (vetor.includes(item)) ? true : false;
};

const existeNoVetor2 = (vetor, item) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === item){
            return true;
        }
    }
    return false;
};

module.exports = {existeNoVetor, existeNoVetor2};
