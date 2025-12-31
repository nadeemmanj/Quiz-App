const questions  = [
    {
        question : "Which is largest animal in world?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "false"}
        ]
    },
    {
        question : "Which is the smallest country in the world?",
        answers: [
            {text: "Vetican city", correct: "true"},
            {text: "Bhotan", correct: "false"},
            {text: "Nepal", correct: "false"},
            {text: "Sri Lanka", correct: "false"}
        ]
    },
    {
        question : "Which is largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: "false"},
            {text: "Ghobi", correct: "false"},
            {text: "Sahara", correct: "false"},
            {text: "Antarctica", correct: "true"}
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: "false"},
            {text: "Australia", correct: "true"},
            {text: "Arctica", correct: "false"},
            {text: "Africa", correct: "false"}
        ]
    },
]





const questionbtn = document.querySelector(".question");
const answerbtn = document.querySelector(".answer-button");
const nextbtn = document.querySelector(".next");




let currentQuestionIndex = 0;
let score = 0;




function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextbtn.innerHTML = "Next";
showQuestion();

}





function showQuestion(){

    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionbtn.innerHTML = `${questionNo} . ${currentQuestion.question}`;



    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",setAnswer)
    });

};



function resetState(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}





function setAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = "true";
    })

    nextbtn.style.display = "block"
}






function showScore(){
    resetState();
    questionbtn.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block"
}






function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore();
    }
}






nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})

startQuiz(); 