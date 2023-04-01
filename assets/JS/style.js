var questionArea = document.getElementById("questionArea");
var startBtn = document.querySelector('.start-btn');
var timeShow = document.getElementById('count1');
var MainTitle = document.querySelector(".MainTitle");
var title = document.getElementById("title");
var questionNumber = 0;
var count = 65;
var ansResult = document.getElementById("ansResult");
var submitForm = document.getElementById("nameform");
var submitButton = document.getElementById("submit");
var highScore = document.getElementById("score");
var scoreList = document.getElementById("HighScore");
var resetBtn = document.querySelector(".reset");

var initialTime = 65;


highScore.style.display="none";
timeShow.style.display = "none"
submitForm.style.display="none";
scoreList.style.display="none";

const quizquestions = [
  {
    question: "Which Pokémon has a single type of Fire?",
    answers: {
      option1: "#0952  Scovillian, Type: Grass/Fire",
      option2: "#0006  Charizard, Type: Fire/Flying",
      option3: "#0157  Typhlosion, Type: Fire",
      option4: "#0229  Houndoom, Type: Dark/Fire"
    },
    correctAnswer: "option3"
  },
  {
    question: "Which Pokémon learns the move, Eruption?",
    answers: {
      option1: "#0149  Dragonite, Type: Dragon/Flying",
      option2: " #0006  Charizard, Type: Fire/Flying",
      option3: "#0952  Scovillian, Type: Grass/Fire",
      option4: "#0157  Typhlosion, Type: Fire"
    },
    correctAnswer: "option4"
  },
  {
    question: "How many Pokémon are there?",
    answers: {
      option1: "#1010",
      option2: "#0855",
      option3: "#0342",
      option4: "#0101"
    },
    correctAnswer: "option1"
  },
  {
    question: "Which Pokémon is known as The God of all Pokémon and Creator of the Pokémon Universe?",
    answers: {
      option1: "#0151  Mew, Type: Psychic",
      option2: "#0493  Arceus, Type: Normal",
      option3: "#0448  Lucario, Type: Fighting/Steel",
      option4: "#0251  Celebi, Type: Psychic/Grass"
    },
    correctAnswer: "option2"
  }
];

function makequestion() {
    var questionDiv = document.createElement("div");
    var questionTitle = document.createElement("p");
    var questionBtn1 = document.createElement("button");
    var questionBtn2 = document.createElement("button");
    var questionBtn3 = document.createElement("button");
    var questionBtn4 = document.createElement("button");
    
    if (questionNumber >= quizquestions.length) {
      // no more questions, end the quiz
      clearInterval(timerInterval);
      questionArea.innerHTML = "Quiz finished!";
      ansResult.innerText = "";
      highScore.style.display="";
      submitForm.style.display="";
      return;

    }
    
    var correctAnswer = quizquestions[questionNumber].correctAnswer;
    
    questionTitle.textContent = quizquestions[questionNumber].question;
    questionBtn1.textContent = quizquestions[questionNumber].answers.option1;
    questionBtn2.textContent = quizquestions[questionNumber].answers.option2;
    questionBtn3.textContent = quizquestions[questionNumber].answers.option3;
    questionBtn4.textContent = quizquestions[questionNumber].answers.option4;
    
    questionBtn1.addEventListener("click", () => {
      // To check if answer is right or wrong
      if (correctAnswer === "option1") {
      //   alert("Correct!");
          ansResult.innerText = "Correct Answer";
      } else {
          ansResult.innerText = "Incorrect!";
          initialTime -= 10;
      }
      
      questionNumber += 1;
      questionDiv.remove(); 
      makequestion();
    });
    
    questionBtn2.addEventListener("click", () => {
      if (correctAnswer === "option2") {
          ansResult.innerText = "Correct Answer";
      } else {
          ansResult.innerText = "Incorrect!";
          initialTime -= 10;
      }
      questionNumber += 1;
      questionDiv.remove(); 
      makequestion();
    });
    
    questionBtn3.addEventListener("click", () => {
      if (correctAnswer === "option3") {
          ansResult.innerText = "Correct Answer";
      } else {
          ansResult.innerText = "Incorrect!";
          initialTime -= 10;
      }
      questionNumber += 1;
      questionDiv.remove(); 
      makequestion();
    });
    
    questionBtn4.addEventListener("click", () => {
      if (correctAnswer === "option4") {
          ansResult.innerText = "Correct Answer";
      } else {
          ansResult.innerText = "Incorrect!";
          initialTime -= 10;
      }
      questionNumber += 1;
      questionDiv.remove(); 
      makequestion();
    });
    
    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(questionBtn1);
    questionDiv.appendChild(questionBtn2);
    questionDiv.appendChild(questionBtn3);
    questionDiv.appendChild(questionBtn4);
    questionArea.appendChild(questionDiv);
  }

  timerInterval = setInterval(function(){
    initialTime--;
    timeShow.textContent = 'You have ' + initialTime + ' seconds left.';
    if (initialTime === 0) {
      clearInterval(timerInterval);
      alert("Game Over! Your Poké Knowledge is Inferior, Please Try Again.");
      gameOver();
    }
  }, 1000);








function start(){

                timeShow.style.display = ""
                timerInterval = setInterval(function(){
                count--;
                timeShow.textContent = 'You have a ' + count;
if (count === 0) {
                 alert("Game Over! Your Poké Knowledge is Inferior, Please Try Again.");
                 clearInterval(timerInterval);
                 gameOver();
                 }}, 1000);

startBtn.style.display = "none";
MainTitle.style.display = "none";
title.style.display = "none";

                 makequestion();
}

function gameOver(){
                   questionArea.style.display="none";
                   submitForm.style.display="";
}

playerStats = [];

function score(){
                initialString = localStorage.getItem("score");
                highScore.style.display="";
                submitForm.style.display="none";
        for (var i = 0 ; i < playerStats.length; i++){

var scoreId = document.createElement("li");
scoreId.textContent = playerStats[i].initial + " mastered Pokémon with  " + playerStats[i].timeLeft + " seconds left ";
scoreList.appendChild(scoreId);
}};

submitButton.addEventListener("click", 

           function(event){
                    event.preventDefault();
var initial = document.querySelector('#initials');
var timeLeft = count
var playerScore = {
initial: initial, 
timeLeft: timeLeft
};
    
localStorage.setItem(initial, timeLeft)
playerStats.push(playerScore);
questionArea.innerHTML = "Your Initials and Score: "+ timeLeft +" has been saved";
score();
})
     
resetBtn.addEventListener("click", () => {
window.location.reload();
});

for (var i = 0 ; i < localStorage.length; i++){

var key = localStorage.key(i);
var value = localStorage.getItem(key);
var playerScore = {
initial: key,
timeLeft: value
};

playerStats.push(playerScore);
}

// this should make a question and put it on the page //
startBtn.addEventListener('click', start)