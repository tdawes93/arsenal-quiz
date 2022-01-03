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
    const output = [];
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
      quizContainer.innerHTML = output.join('');
    
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
/*function displayCorrectAnswer(){};

function calculateScore(){};

function finishQuiz(){};

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


