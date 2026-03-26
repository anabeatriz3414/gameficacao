// aluno.js

function atualizarInterface() {
    const pontosSalvos = parseInt(localStorage.getItem("pontos")) || 0;
    const metaXP = 1000; // Meta para o Nível 2

    // Atualiza o texto de XP com animação simples de contagem
    document.getElementById("pontos").innerText = pontosSalvos;
    
    // Cálculos
    const porcentagem = Math.min((pontosSalvos / metaXP) * 100, 100);
    const faltante = Math.max(metaXP - pontosSalvos, 0);

    // Atualiza a barra e textos
    document.getElementById("barraProgresso").style.width = porcentagem + "%";
    document.getElementById("percent-text").innerText = Math.floor(porcentagem) + "%";
    document.getElementById("xp-faltante").innerText = faltante;
}

// Inicializa
document.addEventListener("DOMContentLoaded", atualizarInterface);

// Escuta atualizações do Professor em tempo real
window.addEventListener('storage', (e) => {
    if (e.key === 'pontos') {
        atualizarInterface();
    }
});