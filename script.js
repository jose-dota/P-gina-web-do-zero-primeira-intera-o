const botoesReacao = document.querySelectorAll(".botoes-reacao button");

botoesReacao.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});

const themeBtn = document.getElementById("theme-toggle-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});