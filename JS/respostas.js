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

// LÓGICA DO JOGO DA MEMÓRIA 

const cartas = document.querySelectorAll('.carta-memoria');
let cartaVirada = false;
let cartaPrimeira, cartaSegunda;
let bloqueio = false;

function virarCarta() {
    if (bloqueio) return;
    if (this === cartaPrimeira) return;

    this.classList.add('virada');

    if (!cartaVirada) {
        cartaVirada = true;
        cartaPrimeira = this;
    } else {
        cartaVirada = false;
        cartaSegunda = this;

        verificarPar();
    }
}

function verificarPar() {
    const isMatch = cartaPrimeira.dataset.carta === cartaSegunda.dataset.carta;

    isMatch ? desativarCartas() : desvirarCartas();
}

function desativarCartas() {
    cartaPrimeira.removeEventListener('click', virarCarta);
    cartaSegunda.removeEventListener('click', virarCarta);

    verificarFimDoJogo();
    resetarTabuleiro();
}

function desvirarCartas() {
    bloqueio = true;

    setTimeout(() => {
        cartaPrimeira.classList.remove('virada');
        cartaSegunda.classList.remove('virada');

        resetarTabuleiro();
    }, 1000);
}

function verificarFimDoJogo() {
    const todasCartasViradas = [...cartas].every(carta => carta.classList.contains('virada'));

    if (todasCartasViradas) {
        setTimeout(() => {
            window.location.href = "../Premios/premio_dois.html"; 
        }, 1000); 
    }
}

function resetarTabuleiro() {
    [cartaVirada, bloqueio] = [false, false];
    [cartaPrimeira, cartaSegunda] = [null, null];
}

cartas.forEach(carta => carta.addEventListener('click', virarCarta));

//FIM DO JOGO DA MEMÓRIA

function verificarTerceira() {
    const resposta = document.getElementById("resposta").value.trim();

    if (resposta === "Ganância") {
        
        window.location.href = "../Premios/premio_tres.html";
    } else {
        
        window.location.href = "../Fases/errou.html";
    }

    return false; 
}


function verificarQuinta() {
    var resposta = document.getElementById("resposta").value;

    if (resposta === "Orgulho precede a queda" || resposta === "orgulho precede a queda") {
        
        window.location.href = "../Premios/premio_cinco.html" ;
        return false; 
    } 
    else {
        window.location.href = "../Fases/errou.html" 
        return false; 
    }
}