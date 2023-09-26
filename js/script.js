const canvas = document.getElementById("motivacional-canvas");
const botaoDownload = document.getElementById("botao-download");
const mostraSaudacaoCheckbox = document.getElementById("mostra-saudacao");

mostraSaudacaoCheckbox.addEventListener("change", () => {
    getRandomMotivacional()
});

function desenhaSaudacao() {
    const hoje = new Date();
    const horaCorrente = hoje.getHours();
    let saudacao = "";
    if (horaCorrente >= 0 && horaCorrente < 12) {
        saudacao = "Bom dia!";
    } else if (horaCorrente >= 12 && horaCorrente < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }
    return saudacao
}



const context = canvas.getContext("2d");
const canvasWidth = canvas.width;

const imagensMotivacionais = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg", "imagem4.jpg", "imagem5.jpg", "imagem6.jpg", "imagem7.jpg", "imagem8.jpg", "imagem9.jpg", "imagem10.jpg", "imagem11.jpg", "imagem12.jpg",
    "imagem13.jpg", "imagem14.jpg", "imagem15.jpg", "imagem16.jpg", "imagem17.jpg", "imagem18.jpg", "imagem19.jpg", "imagem20.jpg", "imagem21.jpg", "imagem22.jpg", "imagem23.jpg", "imagem24.jpg"];
const frasesMotivacionais = [
    "Acredite em si mesmo e você será imparável.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Tudo o que você sonha pode se tornar realidade.",
    "A persistência é o caminho do êxito.",
    "As maiores mentes são capazes das maiores virtudes.",
    "A vida é feita de escolhas. Escolha ser feliz.",
    "O primeiro passo em direção ao sucesso é acreditar que você pode.",
    "O fracasso é o tempero do sucesso.",
    "Sonhe grande e ouse falhar.",
    "O sucesso nasce do querer, da determinação e da persistência.",
    "Acredite no seu potencial, mas não se esqueça de trabalhar duro.",
    "Você é mais forte do que pensa.",
    "A adversidade é a mãe da sabedoria.",
    "Grandes coisas nunca vieram de zonas de conforto.",
    "A cada novo dia, uma nova oportunidade.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "A jornada de mil milhas começa com um único passo.",
    "A motivação é o que faz o início, o hábito é o que mantém você em andamento.",
    "A força não vem da capacidade física, mas da vontade indomável.",
    "Acredite em si mesmo e você será imparável.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Tudo o que você sonha pode se tornar realidade.",
    "A persistência é o caminho do êxito.",
    "As maiores mentes são capazes das maiores virtudes.",
    "A vida é feita de escolhas. Escolha ser feliz.",
    "O primeiro passo em direção ao sucesso é acreditar que você pode.",
    "O fracasso é o tempero do sucesso.",
    "Sonhe grande e ouse falhar.",
    "O sucesso nasce do querer, da determinação e da persistência.",
    "Acredite no seu potencial, mas não se esqueça de trabalhar duro.",
    "Você é mais forte do que pensa.",
    "A adversidade é a mãe da sabedoria.",
    "Grandes coisas nunca vieram de zonas de conforto.",
    "A cada novo dia, uma nova oportunidade.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "A jornada de mil milhas começa com um único passo.",
    "A motivação é o que faz o início, o hábito é o que mantém você em andamento.",
    "A força não vem da capacidade física, mas da vontade indomável.",
    "O sucesso é a melhor vingança.",
    "Os obstáculos não podem te deter. Os problemas não podem te deter. Mais do que tudo, outras pessoas não podem te deter. Somente você pode se deter.",
    "Acreditar é o primeiro passo para alcançar.",
    "Toda conquista começa com a decisão de tentar.",
    "A luta que você enfrenta hoje é o trampolim para a força que você precisa amanhã.",
    "Se você não pode fazer grandes coisas, faça pequenas coisas de forma grandiosa.",
    "Você não é definido por seus problemas; você é definido por sua capacidade de os superar.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Não pare até se orgulhar do que alcançou.",
    "O sucesso é caminhar de falha em falha sem perder o entusiasmo.",
];




function getRandomMotivacional() {
    const randomImageIndex = Math.floor(Math.random() * imagensMotivacionais.length);
    const randomPhraseIndex = Math.floor(Math.random() * frasesMotivacionais.length);

    const imageUrl = imagensMotivacionais[randomImageIndex];
    const phrase = frasesMotivacionais[randomPhraseIndex];

    const img = new Image();
    img.src = 'images/' + imageUrl;

    img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        context.font = "30px Dancing Script";
        context.textAlign = "center";
        context.fillStyle = "#ff0";
        context.shadowColor = "rgba(255, 0, 255, 0.8)";
        context.shadowBlur = 16;
        context.shadowOffsetX = 8;
        context.shadowOffsetY = 4;

        //Escreve a saudação
        if (mostraSaudacaoCheckbox.checked) {
            const saudacao = desenhaSaudacao()
            context.fillText(saudacao, 150, 48)
        }


        wrapText(phrase, canvasWidth / 2, canvas.height / 2, canvasWidth - 16, 32);
    }
}

// Função para quebrar o texto em várias linhas
function wrapText(text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
            context.fillText(line, x, y);
            line = words[i] + " ";
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}


function downloadImage() {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "frase_motivacional.png";
    link.click();
}


botaoDownload.addEventListener("click", downloadImage);

getRandomMotivacional();

const generateButton = document.getElementById("botao-gerar");

generateButton.addEventListener("click", getRandomMotivacional);