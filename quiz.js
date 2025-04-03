

const questions = [ 
    {
        
    question : "Which method is used to merge two arrays in JavaScript?",
    answers : [
    { text : "Concat()" , correct : true},
    { text  : "join()" , correct : false},
    { text  : "Merge()" , correct : false},
    { text  : "Add()" , correct : false},
]
},
{
        
    question : "Which of the following is NOT a valid JavaScript data type?",
    answers : [
    { text : "Boolean" , correct : false},
    { text  : "Number" , correct : false},
    { text  : "Character" , correct : true},
    { text  : "Null" , correct : false},
]
},
{
question : "Which of the following methods can be used to stop a JavaScript function from executing further?",
answers : [
{ text : "exit" , correct : false},
{ text  : "finish" , correct : false},
{ text  : "return" , correct : true},
{ text  : "logout" , correct : false},
]
},
{
    question : "Which of these operators is used to assign a value to a variable in JavaScript?",
    answers : [
    { text : "=" , correct : true},
    { text  : "==" , correct : false},
    { text  : "===" , correct : false},
    { text  : "!=" , correct : false},
    ]
    },
    {
        question : "Which statement is used to prevent further code execution in a JavaScript loop?",
        answers : [
        { text : "return" , correct : false},
        { text  : "logout" , correct : false},
        { text  : "break" , correct : true},
        { text  : "end" , correct : false},
        ]
        },
        {
            question : "Which method is used to add an item to the beginning of an array in JavaScript?",
            answers : [
            { text : "pop" , correct : false},
            { text  : "shift" , correct : false},
            { text  : "push" , correct : false},
            { text  : "unshift" , correct : true},
            ]
            },
            {
                question : "What is the scope of a variable declared with let inside a function?",
                answers : [
                { text : "Block Scope" , correct : true},
                { text  : "Global Scope" , correct : false},
                { text  : "Function Scope" , correct : false},
                { text  : "Program Scope" , correct : false},
                ]
                },

  {
    question : "Which of the following is used to define a block of code in JavaScript?",
     answers : [
    { text : "[]" , correct : false},
    { text  : "()" , correct : false},
    { text  : "<>" , correct : false},
    { text  : "{}" , correct : true},
     ]
     },
     {
        question : "What is the old name of javaScript?",
         answers : [
        { text : "javaSun" , correct : false},
        { text  : "Mocha" , correct : true},
        { text  : "StunShine" , correct : false},
        { text  : "Pygon" , correct : false},
         ]
         },
         {
            question : "How much time it takes to create JavaScript language?",
             answers : [
            { text : "1 Year" , correct : false},
            { text  : "10 days" , correct : true},
            { text  : "3 months" , correct : false},
            { text  : "10 months" , correct : false},
             ]
             },
             {
                question : "who created JavaScript",
                 answers : [
                { text : "William Jos" , correct : false},
                { text  : "Henry Klave" , correct : false},
                { text  : "Muchin yan" , correct : false},
                { text  : "Brenden Eich" , correct : true},
                 ]
                 },
                       
        

]
/*const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");
let score = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    
    score = 0;
    currentQuestionIndex = 0;
    nextButtons.innerHTML = "Next";
     showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; // Get the current question
    let questionNo = currentQuestionIndex + 1; // The question number (1-based index)
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer => { 
const button = document.createElement("Button");
button.innerText =answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct;
}

button.addEventListener("click",selectAnswer);
    });
    
}
function resetState(){
    nextButtons.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
const selectedBtn = e.target;
const iscorrect = selectedBtn.dataset.correct === "true";
if(iscorrect){
    selectedBtn.classList.add("correct");
score++;
}

    else { 
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct ==="true"){
        button.classList.add("correct");

    }
    button.disabled = true;
});
nextButtons.style.display = "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}`;
    nextButtons.innerHTML = "Play Again";
    nextButtons.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }
    else {
        showScore();
    }
}
nextButtons.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();*/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");
let score = 0;
let currentQuestionIndex = 0;
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextButtons.innerHTML = "NEXT";
    showQuestion();
}
function resetState(){
    nextButtons.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showQuestion() {
    resetState();  // Reset the state before showing the next question

    let currentQuestion = questions[currentQuestionIndex]; // Get the current question
    let questionNo = currentQuestionIndex + 1; // Display question number (1-based)

    // Log for debugging purposes
    console.log(`Showing question #${questionNo}: ${currentQuestion.question}`);
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`; // Show the question text

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");  // Create a new button for each answer
        button.innerHTML = answer.text;
        button.classList.add("btn");  // Add a class for styling
        answerButtons.appendChild(button);  // Append the button to the answer container

        // Set the correct answer as data attribute on the button
        button.dataset.correct = answer.correct;

        // Add click event listener to select an answer
        button.addEventListener("click", selectAnswer);
    });
}
   
    function selectAnswer(e){
const selectedBtn = e.target;
const iscorrect =selectedBtn.dataset.correct === "true";
if(iscorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else {
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
button.classList.add("correct")
    }
    button.disabled = true;
});
nextButtons.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextButtons.innerHTML ="Play Again";
    nextButtons.style.display = "block";

    }
    function handleNextButton(){
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }
        else {
            showScore();
        }
    }
    nextButtons.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();  // Go to next question
        } else {
            startQuiz();  // Restart the quiz
        }
    });
    

startQuiz();

