function verificarPrimeira() {
    var resposta = document.getElementById("resposta").value;

    if (resposta === "Competente" || resposta === "competente") {
        
        window.location.href = "../HTML/ganhou_chave_um.html" ;
        return false; // Evita o envio do formulário
    } 
    else {
        
        alert("ACHOU ERRADO OTÁRIO(A)!");
        return false; 
    }
}

function verificarSegunda() {
    var resposta = document.getElementById("resposta").value;

    if (resposta === " Aqueles que mentem serão punidos") {
        
        window.location.href = "../Premios/premio_dois.html" ;
        return false; 
    } 
    else {
        window.location.href = "../Fases/errou.html" 
        return false; 
    }
}

function embaralharCartas() {
    const cards = document.querySelectorAll('.card');
    
    
    cards.forEach(card => {
        card.classList.add('shuffling');
    });

    
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('shuffling');
        });

        
        alert("Agora, tente encontrar o Valete!");
    }, 2000);
}

// Função para verificar se a carta clicada é a correta
function verificarCartaClicada(event) {
    const card = event.currentTarget;
    const isValete = card.getAttribute('data-carta') === 'valete'; // Verifica se é o valete

    // Adiciona a classe 'flipped' para virar a carta
    card.classList.add('flipped');

    // Exibe a mensagem de acordo com o resultado após a carta virar
    setTimeout(() => {
        if (isValete) {
            window.location.href = "../Fases/quarta_chave.html";
        } 
        else {
            alert("Essa não é a carta correta. Tente novamente.");
        }
    }, 600); // Espera 600ms para dar tempo da carta virar
}

// Adiciona o evento de clique a todas as cartas para verificar se é o Valete
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', verificarCartaClicada);
});

function verificarQuinta() {
    var resposta = document.getElementById("resposta").value;

    if (resposta === "Orgulho" || resposta === "orgulho") {
        
        window.location.href = "../Premios/premio_dois.html" ;
        return false; 
    } 
    else {
        
        alert("ACHOU ERRADO OTÁRIO(A)!");
        return false; 
    }
}