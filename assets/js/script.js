const previousQuestion = document.getElementById("previous");
const nextQuestion = document.getElementById("next");
const finishQuiz = document.getElementById("submit");
const playButton = document.getElementById("kick-off");
const rulesButton = document.getElementById("rules");
const leagueTableButton = document.getElementById("league-table");
const quizContainer = document.getElementById("quiz-container");
const backBtn = document.getElementsByClassName("back-btn");
const rulesModal = document.getElementById("rules-container");
const home = document.getElementById("home");
const resultsModal = document.getElementById("results-container");
const leagueTableModal = document.getElementById("league-table-container");

const questions = [
    {question:"...",
    answers: {
        a: "...",
        b: "....",
        c: ".....",
        d: ".."
    },
    correctAnswer: "a"},
    {question:"...",
    answers: {
        a: "...",
        b: "....",
        c: ".....",
        d: ".."
    },
    correctAnswer: "b"},
    {question:"...",
    answers: {
        a: "...",
        b: "....",
        c: ".....",
        d: ".."
    },
    correctAnswer: "d"}
];

function buildQuiz() {
};

function checkAnswer(){};

function calculateScore(){};

function displayLeagueTable(event){
    leagueTableModal.style.display = "block";
};

function saveScore(){};

function displayRules(){
    rulesModal.style.display = "block";
};

function returnHome(){
    home.style.display = "block";
    quizContainer.style.display = "none";
    resultsModal.style.display = "none";
};

function next(){};

function previous(){};

function back(){
    rulesModal.style.display = "none";
    leagueTableModal.style.display = "none";
};

leagueTableButton.addEventListener = ("onclick", displayLeagueTable);

rulesButton.addEventListener = ("click", displayRules);

