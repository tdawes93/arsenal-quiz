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
const answers = document.getElementsByClassName("ans-btn");



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
        question: "...",
        answers: {
            a: "...",
            b: "....",
            c: ".....",
            d: ".."
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




function buildQuiz() {
    let i = 0;
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


    /*`<div id="question-count">
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
    </div>`;*/
}

function checkAnswer(event) {
    document.getElementById("a") = "green";
}

function displayCorrectAnswer() {
    if (selectedAnswer === correctAns) {
        console.log("correct");
        document.getElementById(`${correctAns}`).style.backgroundColor = "green";

    } else {
        console.log("incorrect");
        document.getElementById(`${correctAns}`).style.backgroundColor = "green";
        document.getElementById(`${selectedAnswer}`).style.backgroundColor = "red";
    }
}




/* answers.forEach(ans => {
        ans.addEventListener('click', e => {
            if (!acceptingAnswers) return;
    
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset.number;
    
            //check if answer is correct and set the class
            let classToApply = selectedAnswer == currentQuestion.correct ? 'btn-correct' : 'btn-incorrect';
    
            //if correct answer increase score
            if (classToApply === 'btn-correct') {
                incrementScore(SCORE_POINTS);
            }
    
            //set class to change color for answer 
            selectedChoice.classList.add(classToApply);
            selectedChoice.classList.remove('ans-btn');
    
            //function to reset get new question
            setTimeout(() => {
                selectedChoice.classList.remove(classToApply);
                selectedChoice.classList.add('ans-btn');
                renderQuestion();
    
            }, 800);
        });
    });

    /*
    
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
};*/

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

const ans = document.getElementsByClassName("answer-option");

for (let i = 0; i < ans.length; i++) {
    ans[i].addEventListener("click", checkAnswer);
}