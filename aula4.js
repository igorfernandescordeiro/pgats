const mensagem = mensagemMisteriosa();

if (mensagem != "Sucesso") {
    console.log("O teste falhou");
} else {
    console.log("O teste passou");
}

const idade = 18;

if (idade >= 12 && idade < 18) { 
    console.log("teenager");
} else if (idade < 12 && idade >= 0) {
    console.log("child");
} else if (idade >= 18) {
    console.log("adult");
} else {
    console.log("invalid number");
}