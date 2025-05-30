function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }
  
function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }

function openMapa() {
    window.location.href = "mapas.html"; // redireciona para a página mapas.html
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


// Eventos

const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];


// Inserindo elementos do 'Eventos' no HTML

document.addEventListener("DOMContentLoaded", function(){ // 'document' Acessa diretamente o HTML da pagina
    const carousel = document.querySelector(".carousel"); // Seleciona class carousel

    eventos.forEach(event => { // Percorre a array 'Eventos'
        // Criando a div do cerd
        const card = document.createElement("div"); // Cria um elemento div no HTML
        card.classList.add("card"); // O mesmo que <div class="card"></div> no HTML

        // Inserindo o HTML do evento dinamicamente
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div id="event_box">
                    <div id="msg1">
                     <span class="material-icons-outlined icoG">
                     event</span>
                </div>
                <div id="mns" class="font">${event.date} às ${event.time}</div>
                </div>

                <div id="pin_box">
                    <div id="msg1">
                     <span class="material-icons-outlined icoG">
                     pin_drop</span>
                </div>
                <div id="mns" class="font">${event.location}</div>
                </div>
            </div>
        `;

        // Adcionando o card ao carrossel
        carousel.appendChild(card);

    });
});


// Seleciona o carrossel no escopo global
const carousel = document.querySelector(".carousel");


// Controle do carrossel
let index = 0;
let slide; // Variável auxiliar para dar stopSlide

function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Reescrevendo o auto avanço do slide
function startAutoSlide(){
    slide = setInterval(nextCard, 5000);
}

// Função para parar o auto avanço do slide
function stopAutoSlide(){
    clearInterval(slide)
}

// Adicionando interatividade
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// aInicia o auto avanço ao carregar a página
startAutoSlide;

// Pausando o slide quando o mouse estiver sobre ele
carousel.addEventListener("mouseenter",stopAutoSlide);

// Retomar o slide quando o mouse sair dele
carousel.addEventListener("mouseleave",startAutoSlide);

// Arrastar no celular
let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

// Inicializando o carrossel
createCards();