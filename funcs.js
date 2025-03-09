// Função para abrir o menu
function openMenu() {
    const menu = document.getElementById("menu_aba");
    menu.classList.toggle("ativo");
}

// Função para fechar o menu
function closeMenu() {
    const menu = document.getElementById("menu_aba");
    menu.classList.remove("ativo");
}

  function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
  
}  