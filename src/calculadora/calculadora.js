class Calculadora {
    static nome = "Rafa";

     #somar(primeiroNumero, segundoNumero) {
        return primeiroNumero + segundoNumero;
    }

    subtrair(primeiroNumero, segundoNumero) {
        return primeiroNumero - segundoNumero;
    }

    media(primeiroNumero, segundoNumero) {
        return this.#somar(primeiroNumero, segundoNumero) / 2;
    }

    dividir(primeiroNumero, segundoNumero) {
        return primeiroNumero / segundoNumero;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

    static multiplicar(primeiroNumero, segundoNumero) {
        return primeiroNumero * segundoNumero;
    }
}

module.exports = {
    Calculadora
}