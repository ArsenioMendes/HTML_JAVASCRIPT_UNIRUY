function calcularMedia(aluno) {
    var nota1 = parseFloat(document.getElementById(`nota1_${aluno}`).value);
    var nota2 = parseFloat(document.getElementById(`nota2_${aluno}`).value);
    var nota3 = parseFloat(document.getElementById(`nota3_${aluno}`).value);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById(`consulta_media_${aluno}`).textContent = media.toFixed(2);

    // Enviar os dados para o servidor PHP para salvar no SQLite
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "salvar_media.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`aluno=${aluno}&media=${media}`);
}

function salvarDados(aluno) {
    var nota1 = parseFloat(document.getElementById(`nota1_${aluno}`).value);
    var nota2 = parseFloat(document.getElementById(`nota2_${aluno}`).value);
    var nota3 = parseFloat(document.getElementById(`nota3_${aluno}`).value);
    
    var media = (nota1 + nota2 + nota3) / 3;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "salvar_media.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`aluno=${aluno}&media=${media}`);

    alert(`Dados do ${aluno} salvos com sucesso!`);
}

function carregarDados(aluno) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `carregar_media.php?aluno=${aluno}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById(`nota1_${aluno}`).value = data.nota1;
            document.getElementById(`nota2_${aluno}`).value = data.nota2;
            document.getElementById(`nota3_${aluno}`).value = data.nota3;
        }
    };
    xhr.send();
}

function excluirDados(aluno) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "excluir_media.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`aluno=${aluno}`);

    alert(`Dados do ${aluno} excluídos com sucesso!`);
}