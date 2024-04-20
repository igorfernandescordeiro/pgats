let nome = "Júlio"
nome = "Yubram"
nome += " Guevara"
console.log(nome)

const idade = 42;
console.log(idade);

let salario = 5000;
salario += 1000;
// salario = salario + 1000
salario -= 1000;
console.log(salario);
// salario = salario - 1000

//salario = salario + 1
//salario += 1
console.log(--salario);
console.log(salario)

/*
   salario -= 1
   console.log(salario)
   console.log(salario)
*/

salario = 3000.00;
salario = 5000.00;
salario += 5000.00;
console.log(salario);

const possuiVistoDeTrabalho = true;
console.log(possuiVistoDeTrabalho);

const linguagensDeProgramacao = [ "js", "php", "java", "ruby" ];

console.log(linguagensDeProgramacao[0])
console.log(linguagensDeProgramacao[1])
console.log(linguagensDeProgramacao[2])
console.log(linguagensDeProgramacao[3])

let indice = 3;
console.log(linguagensDeProgramacao[indice]) // ruby
console.log(linguagensDeProgramacao[--indice]) // java
// console.log(linguagensDeProgramacao.join(" e "))

/* 
    Crie uma variável que possui o valor 5. 
    Depois crie um vetor que possui 2 itens: 
        1) soma de 5 + a variável
        2) subtração de 5,99 menos a variável
    Apresente o valor dos itens do vetor no Console.
    Depois some os dois itens
    Depois apresente um texto dizendo:
        O resultados final é [resultado]
*/

const valor = 5;

const resultadoSoma = 5 + valor;
const resultadoSubtracao = 5.99 - valor;

const calculos = [
    resultadoSoma, 
    resultadoSubtracao
];

console.log(calculos[0]);
console.log(calculos[1].toFixed(3));
// console.log(calculos[1].toFixed(3));

const somaDosItensDoVetor = calculos[0] + calculos[1];

console.log(`O resultados final é ${somaDosItensDoVetor}`);