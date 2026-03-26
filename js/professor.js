function salvarXP() {
    const nome = document.getElementById("nomeAluno").value;
    const pontos = document.getElementById("pontos").value;
    const log = document.getElementById("logAtividade");

    if (!nome || !pontos) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    
    localStorage.setItem("pontos", pontos);
    localStorage.setItem("ultimo_aluno_nome", nome);

   
    log.innerHTML = `<span style="color: #10b981; font-weight: bold;">
        <i class="fas fa-check-circle"></i> ${pontos} XP enviados para ${nome}!
    </span>`;

    
    document.getElementById("nomeAluno").value = "";
    document.getElementById("pontos").value = "";
}