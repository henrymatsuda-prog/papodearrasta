function analisarDados() {
    let nome = document.getElementById("nome").value.trim();
    let idadeDigitada = document.getElementById("idade").value;
    let idade = Number(idadeDigitada);
    let estudante = document.getElementById("estudante").checked;   
    
    let mensagem = document.getElementById("mensagem");
    let resultadoNome = document.getElementById("resultadoNome");
    let resultadoIdade = document.getElementById("resultadoIdade");
    let resultadoEstudante = document.getElementById("resultadoEstudante");

    if (nome === "" || idadeDigitada === "") {
        mensagem.innerText = "Preencha o nome e a idade antes de analisar.";
        mensagem.style.color = "#ff8d87";
        resultadoNome.innerText = "";
        resultadoIdade.innerText = "";
        resultadoEstudante.innerText = "";
        return;
    }


    mensagem.innerText = "Dados analisados com sucesso!";
    mensagem.style.color = "green";

    resultadoNome.innerText =
        "Nome: " + nome + " | Tipo: "+typeof nome;

    resultadoIdade.innerText =
        "Idade: " + idade + " | Tipo: " + typeof idade;
    
    resultadoEstudante.innerText =
        "É estudante: " + estudante + " | Tipo: " + typeof estudante;
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("estudante").checked = false;
    
    document.getElementById("mensagem").innerText =
        "Preencha os campos e clique em 'Analisar Dados' para ver os resultados.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("resultadoNome").innerText = "";
    document.getElementById("resultadoIdade").innerText = "";
    document.getElementById("resultado Estudante").innerText = "";
    document.getElementById("nome").focus();
}