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
const resultsModal = document.getElementById("results-section");
const scoreBox = document.getElementById("score-box");
const homeBtn = document.getElementById("home-btn");
const saveScoreBtn = document.getElementById("save-btn");
const tableBody = document.getElementById("league-table-list");
const username = document.getElementById("name-entry");

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
        question: "In which season did Arsenal first compete in a European competition?",
        answers: {
            a: "1967/68",
            b: "1968/69",
            c: "1962/63",
            d: "1963/64"
        },
        correctAnswer: "d"
    },
    {
        question: "On March 12, 1900, Arsenal set a record by beating Loughborough Town. What was the score?",
        answers: {
            a: "9-0",
            b: "11-1",
            c: "12-0",
            d: "8-0"
        },
        correctAnswer: "c"
    },
    {
        question: "Who were Arsenal sponsored by in the 2000-01 season?",
        answers: {
            a: "JVC",
            b: "Dreamcast",
            c: "o2",
            d: "Emirates"
        },
        correctAnswer: "b"
    },
    {
        question: "Which Frenchman was Wenger's first signing as the manager of Arsenal?",
        answers: {
            a: "Gilles Grimandi",
            b: "Patrick Vieira",
            c: "Nicolas Anelka",
            d: "Emmanuel Petit"
        },
        correctAnswer: "c"
    },
    {
        question: "Which player score the winning goal to win the title in the last minute at Anfield 1989?",
        answers: {
            a: "Paul Merson",
            b: "Alan Smith",
            c: "Michael Thomas",
            d: "Niall Quinn"
        },
        correctAnswer: "c"
    },
    {
        question: "Which player scored the first Premier League goal for Arsenal at the Emirates Stadium?",
        answers: {
            a: "Emmanuel Adebayor",
            b: "Gilberto",
            c: "Cesc Fabregas",
            d: "Thierry Henry"
        },
        correctAnswer: "b"
    },
    {
        question: "How many times have Arsenal won the FA Cup?",
        answers: {
            a: "14",
            b: "9",
            c: "11",
            d: "15"
        },
        correctAnswer: "a"
    },
    {
        question: "What ground did Arsenal first play at, in 1885?",
        answers: {
            a: "Sportsman Ground",
            b: "Manor Ground",
            c: "Invicta Ground",
            d: "Plumstead Common"
        },
        correctAnswer: "d"
    }
];


//Variables for quiz game
const MAX_HIGH_SCORES = 20;
let i = 0;
let score = 0;
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

/**
 * This function pulls up new questions. Called when the user presses 'kick-off' and then subsequently after each answer is selected
 */
function buildQuiz() {
    quizContainer.style.display = "block";
    quizContainer.innerHTML =
        `<div class="popup-header"  id="question-count">
        <h2 id="question-progress">${i+1}/10</h2>
    </div>
    <div class="popup-content">
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
        </div>
    </div>`;
}

/**
 * This function compares the selected answer with the correct answer
 */
//Reference some of this code to David Walsh
quizContainer.addEventListener("click", function (e) {
    //Change color of buttons when answer selected
    if (e.target && e.target.matches(`button#${questions[i].correctAnswer}`)) {
        e.target.classList.add("correct-ans");
        //Increase score if answer correct
        score++;
    } else {
        e.target.classList.add("incorrect-ans");
        document.getElementById(`${questions[i].correctAnswer}`).classList.add("correct-ans");
    }
    //Finish quiz after 10th question
    if (i >= 9) {
        finishQuiz();
    } else {
        //Reset game and run next question
        setTimeout(function resetGame() {
            e.target.classList.remove("correct-ans");
            e.target.classList.remove("incorrect-ans");
            document.getElementById(`${questions[i].correctAnswer}`).classList.remove("correct-ans");
            i++
            buildQuiz();
        }, 1000);
    }
});

function finishQuiz() {
    quizContainer.style.display = "none";
    resultsModal.style.display = "block";
    displayScore();
    localStorage.setItem("mostRecentScore", score);
}

function rematch(event) {
    i = 0;
    score = 0;
    resultsModal.style.display = "none";
    buildQuiz();
}

function displayScore() {
    if (score <= 2) {
        scoreBox.innerHTML = `
    <h3>You Scored: ${score}/${i+1}</h3>
                <div id="results-box">
                    <p id="results-content">You're a Tottenham fan in disguise!</p>
                </div>`;
    } else if (score <= 5) {
        scoreBox.innerHTML = `
    <h3>You Scored: ${score}/${i+1}</h3>
                <div id="results-box">
                    <p id="results-content">You're a glory supporter! You know who Henry is but don't know your Pat Rice's from your Nigel Winterburn's!</p>
                </div>`;
    } else if (score <= 8) {
        scoreBox.innerHTML = `
    <h3>You Scored: ${score}/${i+1}</h3>
                <div id="results-box">
                    <p id="results-content">You're a true gunner. You know your stuff, provided it's about the first team!</p>
                </div>`;
    } else {
        scoreBox.innerHTML = `
    <h3>You Scored: ${score}/${i+1}</h3>
                <div id="results-box">
                    <p id="results-content">You a bleed red and white! You've followed arsenal through unbeaten seasons and league cup final losses</p>
                </div>`
    }
};

//Reference some of this code to James
function saveScore(event) {
    event.preventDefault();
    let leagueTableEntry = {
        player: username.value,
        score: score
    };
    highscores.push(leagueTableEntry);
    highscores.sort((a, b) => {
        return b.score - a.score;
    })
    for (i = 0; i < highscores.length; i++) {
        highscores[i].pos = i + 1;
    }
    highscores.splice(MAX_HIGH_SCORES);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    appendScores();
    i = 0;
    displayLeagueTable();
}

//Reference this code to James
function appendScores() {
    tableBody.innerHTML = highscores.map(score => {
        return `<tr><td>${score.pos}</td><td class="league-table-mid-col">${score.player}</td><td>${score.score}</td></tr>`
    }).join("");
}

function returnHome(event) {
    home.style.display = "block";
    quizContainer.style.display = "none";
    resultsModal.style.display = "none";
}

function displayRules(event) {
    rulesModal.style.display = "block";
}

function displayLeagueTable(event) {
    appendScores();
    leagueTableModal.style.display = "block";
    resultsModal.style.display = "none";
}

function back(event) {
    rulesModal.style.display = "none";
    leagueTableModal.style.display = "none";
}

//Event Listeners//

username.addEventListener("keyup", saveScoreBtn)

homeBtn.addEventListener("click", returnHome);

playBtn.addEventListener("click", buildQuiz);

rulesBtn.addEventListener("click", displayRules);

saveScoreBtn.addEventListener("click", saveScore);

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
})

for (let x = 0; x < leagueTableBtn.length; x++) {
    leagueTableBtn[x].addEventListener("click", displayLeagueTable);
}

for (let x = 0; x < backBtn.length; x++) {
    backBtn[x].addEventListener("click", back);
}

rematchBtn.addEventListener("click", rematch);