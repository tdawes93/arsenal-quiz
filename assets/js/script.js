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
const answers = document.getElementsByClassName("answer-option");

const questions = [{
        question: "How many games did arsenal go unbeaten when they won the invincibles season?",
        answers: {
            a: "49",
            b: "56",
            c: "39",
            d: "43"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is Arsenal's all time top scorer?",
        answers: {
            a: "Ian Wright",
            b: "Thierry Henry",
            c: "Cliff Bastin",
            d: "Robin Van Persie"
        },
        correctAnswer: "b"
    },
    {
        question: "...",
        answers: {
            a: "...",
            b: "....",
            c: ".....",
            d: ".."
        },
        correctAnswer: "d"
    }
];


//Variables for quiz game
let i = 0;
let score = 0;
let correctPoints = 1;


/**
 * This function pulls up new questions. Called when the user presses 'kick-off' and then subsequently after each answer is selected
 */
function buildQuiz() {
    quizContainer.innerHTML = `<div id="question-count">
    <h2 id="question-progress">${i+1}/10</h2>
</div>
<div id="questions-box">
    <p id="question">${questions[i].question}</p>
</div>
<div id="answers-box">
    <button value="a" class="answer-option" id="a">
        ${questions[i].answers.a}
    </button>
    <button value="b" class="answer-option" id="b">
        ${questions[i].answers.b}
    </button>
    <button value="c" class="answer-option" id="c">
        ${questions[i].answers.c}
    </button>
    <button value="d" class="answer-option" id="d">
        ${questions[i].answers.d}
    </button>
</div>`;
}

quizContainer.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target && e.target.matches(`button#${questions[i].correctAnswer}`)) {
        e.target.classList.add("correct-ans");
        correctScore(correctPoints);
    } else {
        e.target.classList.add("incorrect-ans");
        document.getElementById(`${questions[i].correctAnswer}`).classList.add("correct-ans");
    }
    setTimeout(function resetGame() {
        e.target.classList.remove("correct-ans");
        e.target.classList.remove("incorrect-ans");
        document.getElementById(`${questions[i].correctAnswer}`).classList.remove("correct-ans");
        i++
        buildQuiz();
    }, 1000);
});

function correctScore(num) {
    score = +num;
};

function resetGame() {
    e.target.classList.remove("correct-ans");
    e.target.classList.remove("incorrect-ans");
    document.getElementById(`${questions[i].correctAnswer}`).classList.remove("correct-ans");
    buildQuiz;
}

function finishQuiz() {};

function displayScore() {};

function saveScore() {};

function returnHome() {
    home.style.display = "block";
    quizContainer.style.display = "none";
    resultsModal.style.display = "none";
};

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