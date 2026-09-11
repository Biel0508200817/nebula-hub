const themeButton = document.getElementById("themeButton");
const randomButton = document.getElementById("randomButton");
const generateButton = document.getElementById("generateButton");
const idea = document.getElementById("idea");
const notification = document.getElementById("notification");


// MODO ESCURO / CLARO

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// NOTIFICAÇÃO

function showNotification(message) {

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2500);

}


// BOTÃO SURPREENDA-ME

randomButton.addEventListener("click", () => {

    const messages = [
        "🚀 Você acaba de desbloquear uma nova ideia!",
        "🌌 Talvez seu próximo projeto seja sobre astronomia.",
        "🎮 Que tal criar um jogo em JavaScript?",
        "🤖 Crie um chatbot usando uma API.",
        "💡 Transforme uma ideia simples em um projeto completo."
    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    showNotification(random);

});


// GERADOR DE IDEIAS

const ideas = [
    "Crie um site de previsão do tempo.",
    "Crie um gerenciador de tarefas.",
    "Crie um catálogo de filmes.",
    "Crie um jogo de perguntas.",
    "Crie um site para uma equipe de corrida.",
    "Crie um painel de estatísticas.",
    "Crie um aplicativo de receitas.",
    "Crie uma página pessoal para seu portfólio.",
    "Crie um sistema de ranking.",
    "Crie um simulador de viagem."
];

generateButton.addEventListener("click", () => {

    const random =
        ideas[Math.floor(Math.random() * ideas.length)];

    idea.textContent = "💡 " + random;

});


// BOTÕES DOS CARDS

const cardButtons =
    document.querySelectorAll(".card-button");

cardButtons.forEach(button => {

    button.addEventListener("click", () => {

        showNotification(
            button.dataset.message
        );

    });

});