let nombre = "";
let email = "";
let money = 0;

function registrationForm() {
    nombre = document.getElementById('name').value;
    email = document.getElementById('email').value;
    money = document.getElementById('money').value;

    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Datos Bancarios:', money);
}
console.log(document.getElementById('submit'));

/*
let preguntasJson = [];

async function loadQuestions() {
    let response = await fetch('./P2.json')
    preguntasJson = await response.json();

    preguntasJson.forEach(preg => {
        
    });
    console.log(preguntasJson);

}


loadQuestions();*/

async function loadQuestions() {
    const response = await fetch('p2.json');
    const questions = await response.json();
    return questions;
    console.log(questions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




function displayQuestions(questions) {
    const quizContainer = document.getElementById('quiz-container');
    const shuffledQuestions = shuffleArray(questions).slice(0, 4); // Tomar 4 preguntas aleatorias
    
    shuffledQuestions.forEach((item) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>${item.question}</h3>`;
        
        const shuffledAnswers = shuffleArray(item.answers);
        shuffledAnswers.forEach((answer) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.textContent = answer.text;
            optionDiv.onclick = () => checkAnswer(answer.is_correct);
            questionDiv.appendChild(optionDiv);
        });
        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto.');
    }
}

async function init() {
    const questions = await loadQuestions();
    displayQuestions(questions);
}

window.onload = init; 