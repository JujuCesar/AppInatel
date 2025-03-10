function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }
  
function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }
  
  // Função para aplicar um tema com base no nome
function aplicarTema(tema) {
    if (tema === "temaBrut") {
        document.documentElement.style.setProperty("--cor-click", "#1E1E1E");
        document.documentElement.style.setProperty("--cor-sombra", "#9b0a59");
        document.documentElement.style.setProperty("--cor-text", "#303030");
        document.documentElement.style.setProperty("--cor-back1", "#A6A6A6");
        document.documentElement.style.setProperty("--cor-back2", "#F2F2F2");
        document.documentElement.style.setProperty("--cor-text2", "#F2F2F2");
        document.documentElement.style.setProperty("--md-sys-color-primary", "#1E1E1E");
    } 
    
    else if (tema === "temaInatel") {
        document.documentElement.style.setProperty("--cor-click", "#126ae2");
        document.documentElement.style.setProperty("--cor-sombra", "#0a599b");
        document.documentElement.style.setProperty("--cor-text", "black");
        document.documentElement.style.setProperty("--cor-back1", "#E1E6E8");
        document.documentElement.style.setProperty("--cor-back2", "#B7BBBD");
        document.documentElement.style.setProperty("--cor-text2", "#B7BBBD");
        document.documentElement.style.setProperty("--md-sys-color-primary", "#126ae2");
    } 
    
    else if (tema === "temaDark") {
        document.documentElement.style.setProperty("--cor-click", "#BB86FC");
        document.documentElement.style.setProperty("--cor-sombra", "#9b0a59");
        document.documentElement.style.setProperty("--cor-text", "#E0E0E0");
        document.documentElement.style.setProperty("--cor-back1", "#303030");
        document.documentElement.style.setProperty("--cor-back2", "#121212");
        document.documentElement.style.setProperty("--cor-text2", "white");
        document.documentElement.style.setProperty("--md-sys-color-primary", "#BB86FC");
    }
}


// Função para salvar o tema no Local Storage
function salvarTema(tema) {
    localStorage.setItem("temaSelecionado", tema);
}

// Funções que aplicam o tema e salvam no Local Storage
function temaBrut() {
    aplicarTema("temaBrut");
    salvarTema("temaBrut");
}

function temaInatel() {
    aplicarTema("temaInatel");
    salvarTema("temaInatel");
}

function temaDark() {
    aplicarTema("temaDark");
    salvarTema("temaDark");
}

// Recupera o tema salvo ao carregar a página
window.onload = function () {
    const temaSalvo = localStorage.getItem("temaSelecionado");
    if (temaSalvo) {
        aplicarTema(temaSalvo); // Aplica o tema salvo
    }
};

