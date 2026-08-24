var curso = "Front-End";
let pontos = 0;
const ANO = 2026;

const botao = document.querySelector("#alterar");

botao.addEventListener("click", () => {
    curso = "Desenvolvimento Web";
    pontos = pontos + 10;
    
    document.querySelector("#varValor").textContent = 
        "var curso: " + curso;
    document.querySelector("#letValor").textContent = 
        "let pontos: " + pontos;
    document.querySelector("#constValor").textContent = 
        "const ano: " + ANO;
});