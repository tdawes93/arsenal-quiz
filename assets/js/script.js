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



const questions = [
    {question:"hello",
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
    let i = 0;
    quizContainer.innerHTML = `<div id="question-count">
        <h2 id="question-progress">${i+1}/10</h2>
    </div>
    <div id="questions-box">
        <p id="question">${questions[i].question}</p>
    </div>
    <div id="answers-box">
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="a" id="a">
            ${questions[i].answers.a}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="b" id="b">
            ${questions[i].answers.b}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="c" id="c">
            ${questions[i].answers.c}
        </label>
        <label class="answer-option">
            <input type="radio" name="question${i+1}" value="d" id="d">
            ${questions[i].answers.d}
        </label>
    </div>`;
    

    
    /*const output = [];
    questions.forEach(
        (currentQuestion, questionNumber) => {
    
          // variable to store the list of possible answers
          const answers = [];
    
          // and for each available answer...
          for(letter in currentQuestion.answers){
    
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
    
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');*/
    
    /*for (question of questions) {

        document.getElementById("quiz-container").innerHTML = `<div id="question-count">
        <h2 id="question-progress">#/#</h2>
    </div>
    <div id="questions-box">
        <p id="question">${question.property[0]}</p>
    </div>
    <div id="answers-box">
        <label class="answer-option">
            <input type="radio" name="question1" value="a">
            
        </label>
        <label class="answer-option">
            <input type="radio" name="question1" value="a">
            answer
        </label>
        <label class="answer-option">
            <input type="radio" name="question1" value="a">
            answer
        </label>
        <label class="answer-option">
            <input type="radio" name="question1" value="a">
            answer
        </label>
    </div>`
    }*/
}
function displayCorrectAnswer(event){
    let selectedAnswer = document.getElementsByTagName("input").selected;
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

document.getElementsByTagName("input").selected.addEventListener("select", displayCorrectAnswer);


