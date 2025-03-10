function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }
  
  function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }
  
  function temaBrut() {
      document.documentElement.style.setProperty("--cor-click", "#1E1E1E");
      document.documentElement.style.setProperty("--cor-sombra", "#9b0a59");
      document.documentElement.style.setProperty("--cor-text", "#303030");
      document.documentElement.style.setProperty("--cor-back1", "#A6A6A6");
      document.documentElement.style.setProperty("--cor-back2", "#F2F2F2");
      document.documentElement.style.setProperty("--md-sys-color-primary", "#1E1E1E");
  }
  
  function temaInatel() {
      document.documentElement.style.setProperty("--cor-click", "#126ae2");
      document.documentElement.style.setProperty("--cor-sombra", "#0a599b");
      document.documentElement.style.setProperty("--cor-text", "black");
      document.documentElement.style.setProperty("--cor-back1", "#CBCFD1");
      document.documentElement.style.setProperty("--cor-back2", "#white");
      document.documentElement.style.setProperty("--md-sys-color-primary", "#126ae2");
    
  }
  
  function temaDark() {
      const cores = {
          "--cor-click": "#BB86FC",
          "--cor-sombra": "#9b0a59",
          "--cor-text": "#E0E0E0",
          "--cor-back1": "#303030",
          "--cor-back2": "#121212",
          "--md-sys-color-primary": "#BB86FC"
      };
  
      for (const [variavel, valor] of Object.entries(cores)) {
          document.documentElement.style.setProperty(variavel, valor);
      }
  }