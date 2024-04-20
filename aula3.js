const almocos = [
    [ "Salada", "Carne", "Bolo", "Vinho", "Sorvete" ],
    [ "Arroz " + 1, 2, true ],
    [ "Salada", null, "" ]
]

almocos[2][0] = "Lasanha";

console.log(`${almocos[2][0]}`)

/*
    1. Crie um vetor com suas 3 comidas favoritas
    2. Crie uma matriz que represente a tabela abaixo:

    | 7 | 8 | 9 |
    | 4 | 5 | 6 |
    | 1 | 2 | 3 |
    | # | 0 | * |

    3. Escreva no console a seguinte frase:
       Eu gosto muito de: comida 1, comida 2 e comida 3
    
    4. Escreva os números contidos na coluna do meio da matriz
       Os números são: 8, 5, 2 e 0
*/

const comidasFavoritas = [ 
    "Bife de Contra Filé", 
    "Mandioca Frita", 
    "Lasanha de Abobrinha" 
];

console.log(`Eu gosto muito de: ${comidasFavoritas[0]}, ${comidasFavoritas[1]} e ${comidasFavoritas[2]}`)

const tecladoTelefonico = [
    [ 7, 8, 9 ],
    [ 4, 5, 6 ],
    [ 1, 2, 3 ],
    [ "#", 0, "*" ]
]

console.log(`Os números são: ${tecladoTelefonico[0][1]}, ${tecladoTelefonico[1][1]}, ${tecladoTelefonico[2][1]} e ${tecladoTelefonico[3][1]}`)

/*
    const pessoas = [
        [ "Pedro Victor", 30, [ "Bolo Gelado", "Sushi", "Frango" ] ],
        [ "Valéria Silva", 18, [ "Pizza", "Feijoada", "Strogonoff" ] ]
    ]
*/

const pessoa = {
    nome: "Pedro Victor",
    idade: 30, 
    comidasFavoritas: [ "Bolo Gelado", "Sushi", "Frango" ]
}

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e gosta de ${pessoa.comidasFavoritas[0]}`)

const pessoas = [
    {
        nome: "Pedro Victor",
        idade: 30, 
        comidasFavoritas: [ "Bolo Gelado", "Sushi", "Frango" ]
    },
    {
        nome: "Valéria Silva",
        idade: 18, 
        comidasFavoritas: [ "Pizza", "Feijoada", "Strogonoff" ]
    }
]

console.log(pessoas[1].nome)

/*
    Construa um vetor com 5 objetos que estão na sala onde você está agora
    cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc.)
    Depois disso, escreva no console quais são as informações relacionadas a 
    cada um dos objetos que você colocou no vetor.
*/

const objetos = [
    { 
        id: 1,
        nome: "Quadro",
        tamanho: "Médio",
        cores: [ "azul", "rosa", "amarelo" ]
    },
    {
        id: 2,
        nome: "Livros",
        cores: [ "branco", "vermelho", "preto" ],
        quantidade: [ 3, 2, 5 ] 
    },
    {
        id: 3,
        nome: "Livros",
        caracteristicas: [
            { 
                cor: "branco",
                quantidade: 3
            },
            { 
                cor: "vermelho",
                quantidade: 2
            },
            { 
                cor: "preto",
                quantidade: 5
            }
        ]
    }
]

// Primeiro objeto
console.log(`O ID é ${objetos[0].id}, o nome é ${objetos[0].nome}, o tamanho é ${objetos[0].tamanho} e suas cores são ${objetos[0].cores.join(", ")}`)

// Segundo objeto
console.log(`Os dados do item da sala são ${objetos[1].id}, ${objetos[1].nome}, ${objetos[1].cores.join(" - ")} e ${objetos[1].quantidade.join(" - ")}`)

// Terceiro objeto
console.log(`Os livros do Julio são classificados:`)
console.log(`ID -> ${objetos[2].id}`)
console.log(`Nome -> ${objetos[2].nome}`)
console.log(`Cor -> ${objetos[2].caracteristicas[0].cor}`)
console.log(`Quantidade -> ${objetos[2].caracteristicas[0].quantidade}`)

const videoGame = {
    marca: "Sony",
    modelo: "PS",
    versao: 5
}

console.log(`A marca do vídeo-game é ${videoGame.marca}`)
console.log(`A marca do vídeo-game é ${videoGame["marca"]}`)