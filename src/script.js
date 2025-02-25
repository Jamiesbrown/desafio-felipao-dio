// Entrada do jogador
const nickname = prompt("Digite o nome do herói:");
const xp = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Herói
let nivel;
let imageSrc;


// Determinar o nível do herói
if (xp < 1000) {
    nivel = "Ferro";
    imageSrc = "src/image/ferro.jpg";
} else if (xp <= 2000) {
    nivel = "Bronze";
    imageSrc = "src/image/bronze.jpg";
} else if (xp <= 5000) {
    nivel = "Prata";
    imageSrc = "src/image/prata.jpg";
} else if (xp <= 7000) {
    nivel = "Ouro";
    imageSrc = "src/image/ouro.jpg";
} else if (xp <= 8000) {
    nivel = "Platina";
    imageSrc = "src/image/platina.jpg";
} else if (xp <= 9000) {
    nivel = "Ascendente";
    imageSrc = "src/image/ascendente.jpg";
} else if (xp <= 10000) {
    nivel = "Imortal";
    imageSrc = "src/image/imortal.jpg";
} else {
    nivel = "Radiante";
    imageSrc = "src/image/radiante.jpg";
}

// Resultado

document.getElementById("resultado").innerHTML = `Bem vindo <strong>${nickname}</strong> seu nível atual é Cavaleiro de <strong>${nivel}</strong>`;

const imagem = document.getElementById("imagem");
imagem.src = imageSrc;
imagem.classList.remove("hidden");