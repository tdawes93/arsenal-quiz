/*
const playButton = document.getElementById("kick-off");*/
const quizContainer = document.getElementById("quiz-container");
const playBtn = document.getElementById("kick-off");
const rulesBtn = document.getElementById("rules");
const backBtn = document.getElementsByClassName("back-btn");
const rulesModal = document.getElementById("rules-section");
const leagueTableBtn = document.getElementsByClassName("leaderboard");
const leagueTableModal = document.getElementById("league-table-section");
const rematchBtn = document.getElementById("restart");
const answers = Array.from(document.querySelectorAll('.ans-btn'));



const questions = [
    {question:"How many games did arsenal go unbeaten when they won the invincibles season?",
    answers: {
        a: "49",
        b: "56",
        c: "39",
        d: "43"
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
    let i = 0;
    quizContainer.innerHTML = `<div id="question-count">
        <h2 id="question-progress">${i+1}/10</h2>
    </div>
    <div id="questions-box">
        <p id="question">${questions[i].question}</p>
    </div>
    <div id="answers-box">
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="a" class="ans-btn" id="a">
            ${questions[i].answers.a}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="b" class="ans-btn" id="b">
            ${questions[i].answers.b}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="c" class="ans-btn" id="c">
            ${questions[i].answers.c}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="d" class="ans-btn" id="d">
            ${questions[i].answers.d}
        </label>
    </div>`;
}

function displayCorrectAnswer(event){
    let selectedAnswer = document.getElementsByTagName("input").checked;
    if (selectedAnswer === questions[i].correctAnswer) {
        selectedAnswer.style.backgroundColor = "green";
    } else {
        document.getElementById(`${questions[i].correctAnswer}`).style.backgroundColor = "green";
        selectedAnswer.style.backgroundColor = "red";
    }
    calculateScore();
};

function calculateScore(){
    let score = 0;
    let numberOfQuestions = 0;
    if (selectedAnswer === questions[i].correctAnswer) {
        score =+ 1;
        numberOfQuestions =+ 1;
    } else {
        score = score;
        numberOfQuestions =+ 1;
    }
};

/*function finishQuiz(){};

function displayScore(){};

function saveScore(){};

function returnHome(){
    home.style.display = "block";
    quizContainer.style.display = "none";
    resultsModal.style.display = "none";
};
*/


function displayRules(event) {
    rulesModal.style.display = "block";
}

function displayLeagueTable(event) {
    leagueTableModal.style.display = "block";
}

function back(event) {
    rulesModal.style.display = "none";
    leagueTableModal.style.display = "none";
}

//Event Listeners//

playBtn.addEventListener("click", buildQuiz);

rulesBtn.addEventListener("click", displayRules);

for (let i = 0; i < leagueTableBtn.length; i++) {
leagueTableBtn[i].addEventListener("click", displayLeagueTable);
}

for (let i = 0; i < backBtn.length; i++) {
    backBtn[i].addEventListener("click", back);
}

document.getElementsByTagName("input").selected.addEventListener("click", displayCorrectAnswer);


