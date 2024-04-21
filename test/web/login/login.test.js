const { Builder, Browser, By } = require("selenium-webdriver");
const assert = require("node:assert");

describe("Login da Lojinha", () => {
    it("Validar que é possível logar usando credenciais válidas", async () => {
        // Abrir o Navegador
        const navegador = new Builder()
            .forBrowser(Browser.CHROME)
            .build();
        
        // Setar a espera implícita
        await navegador.manage().setTimeouts( { script: 6000 });

        // Navegar para a URL da Lojinha
        await navegador.get("http://165.227.93.41/lojinha-web/v2/");

        // Preencher o campo usuário
        await navegador.findElement(By.id("usuario")).sendKeys("admin");
        
        // Preencher a senha
        await navegador.findElement(By.id("senha")).sendKeys("admin");

        /*
        navegador.wait(function() {
            return navegador.findElement(By.css(".btn")).isDisplayed();
        }, timeout);
        */
       
        // Clicar em entrar (sem usar o await)
        navegador.findElement(By.css(".btn")).then((botao) => {
            botao.click();
        });

        // Verificar se a URL é http://165.227.93.41/lojinha-web/v2/produto
        const urlEsperada = "http://165.227.93.41/lojinha-web/v2/produto";
        const urlAtual = await navegador.getCurrentUrl();
        assert.equal(urlAtual, urlEsperada);

        // Fechar o navegador
        await navegador.quit();
    });
});