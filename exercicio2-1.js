const {existeNoVetor, existeNoVetor2} = require('./exercicio2');

const vetor = ['Igor', 'Fernandes', 'Cordeiro'];

console.log((existeNoVetor(vetor, 'Fernandes')) ? console.log('Achou') : console.log('Não achou'));

console.log(existeNoVetor2(vetor, 'Igor'));