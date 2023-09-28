const escolhas = ["pedra", "papel", "tesoura"];
const emojis = {
    feliz: document.getElementById("emoji-feliz"),
    triste: document.getElementById("emoji-triste"),
    indeciso: document.getElementById("emoji-indeciso")
};

function getEscolhaComputador() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return escolhas[indiceAleatorio];
}

function mostrarEmoji(emoji) {
    Object.keys(emojis).forEach(key => {
        emojis[key].style.display = "none";
    });
    emojis[emoji].style.display = "block";
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        mostrarEmoji("indeciso");
        return "Empate!";
    } else if ((escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) {
        mostrarEmoji("feliz");
        return "Você ganhou!";
    } else {
        mostrarEmoji("triste");
        return "Você perdeu!";
    }
}

function jogarJogo(escolhaUsuario) {
    const escolhaComputador = getEscolhaComputador();
    const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
    const elementoResultado = document.querySelector(".resultado p");
    elementoResultado.textContent = `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`;


    const botaoJogarNovamente = document.getElementById("jogar-novamente");
    botaoJogarNovamente.style.display = "block";


    const botoesEscolha = document.querySelectorAll(".opcoes button");
    botoesEscolha.forEach((botao) => {
        botao.disabled = true;
    });
}

document.getElementById("pedra").addEventListener("click", function () {
    jogarJogo("pedra");
});

document.getElementById("papel").addEventListener("click", function () {
    jogarJogo("papel");
});

document.getElementById("tesoura").addEventListener("click", function () {
    jogarJogo("tesoura");
});

document.getElementById("jogar-novamente").addEventListener("click", function () {

    const botaoJogarNovamente = document.getElementById("jogar-novamente");
    botaoJogarNovamente.style.display = "none";


    const botoesEscolha = document.querySelectorAll(".opcoes button");
    botoesEscolha.forEach((botao) => {
        botao.disabled = false;
    });


    const elementoResultado = document.querySelector(".resultado p");
    elementoResultado.textContent = "Aguardando sua escolha...";


    mostrarEmoji("");
});
