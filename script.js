
const botoes = document.querySelectorAll("button");

        botoes.forEach(function(botao) {
            botao.addEventListener("click", function() {
                console.log("fui clicado");
                let texto = botao.querySelector("span");
                texto.textContent++;
            });
        });