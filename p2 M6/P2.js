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
    return nombre, email, money;
}
console.log(document.getElementById('submit'));


let preguntasJson = [];
let currentQuestions = [];
let correctAnswersCount = 0;
let totalQuestions = 0;




async function loadQuestions() {
    let response = await fetch('./P2.json');
    preguntasJson = await response.json();
    generateQuestions();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateQuestions() {
    if (totalQuestions >= 10) {
        alert('¡Enhorabuena! Has acertado las 10 preguntas.');
        generateResultFile(true);
        return;
    }

    shuffleArray(preguntasJson);
    let newQuestions = preguntasJson.slice(0, 2);
    currentQuestions.push(...newQuestions);

    let preguntaContainer = document.getElementById('preguntas');

    newQuestions.forEach((preg, index) => {
        let preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('pregunta');

        let preguntaTitulo = document.createElement('h3');
        preguntaDiv.classList.add('tituloPregunta');
        preguntaTitulo.textContent = preg.question;
        preguntaDiv.appendChild(preguntaTitulo);

        shuffleArray(preg.answers);
        preg.answers.forEach((answer, answerIndex) => {
            let answerDiv = document.createElement('div');

            let answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = `question${totalQuestions + index}`;
            answerInput.value = answerIndex;
            answerDiv.appendChild(answerInput);

            let answerLabel = document.createElement('label');
            answerLabel.textContent = answer.text;
            answerDiv.appendChild(answerLabel);

            preguntaDiv.appendChild(answerDiv);
        });

        preguntaContainer.appendChild(preguntaDiv);
    });

    totalQuestions += 2;
}

function validateAnswers() {
    let correctAnswers = 0;
    currentQuestions.slice(-2).forEach((preg, index) => {
        let selectedAnswer = document.querySelector(`input[name="question${totalQuestions - 2 + index}"]:checked`);
        if (selectedAnswer && preg.answers[selectedAnswer.value].is_correct) {
            correctAnswers++;
        }
    });
    
    if (correctAnswers === 2 && correctAnswersCount<=9) {
        correctAnswersCount += 2;
        alert('¡Correcto! Generando nuevas preguntas...');
        lockPreviousQuestions();
        generateQuestions();
    } else if (correctAnswersCount != 10) {
        alert('Has perdido. Volviendo al inicio...');
        generateResultFile(false);
        location.reload(); // Recargar la página para reiniciar
    }
}

function lockPreviousQuestions() {
    currentQuestions.slice(-2).forEach((preg, index) => {
        let inputs = document.querySelectorAll(`input[name="question${totalQuestions - 2 + index}"]`);
        inputs.forEach(input => {
            input.disabled = true;
        });
    });
}

function generateResultFile(hasWon) {
    let result = {
        nickname: nombre,
        email: email,
        correctAnswers: correctAnswersCount,
        incorrectAnswers: totalQuestions - correctAnswersCount,
        hasWon: hasWon
    };

    let resultJson = JSON.stringify(result, null, 2);
    let blob = new Blob([resultJson], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    let resultado = document.createElement('resultado');
    resultado.href = url;
    resultado.download = 'result.json';
    document.body.appendChild(resultado);
    resultado.click();
    document.body.removeChild(resultado);
}

loadQuestions();
