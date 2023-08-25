let questions = [
    {
        "question": "Welche physikalische Gesetzmäßigkeit beschreibt, wie sich das Volumen eines Gases unter verändertem Druck verhält?",
        "answer_1": "Archimedes' Prinzip",
        "answer_2": "Boyle-Mariotte-Gesetz",
        "answer_3": "Bernoulli-Effekt",
        "answer_4": "Avogadrosches Gesetz",
        "right_answer": 1
    },
    {
        "question": "Welche Tauchausrüstung ermöglicht es Tauchern, unter Wasser zu atmen, indem sie die Atemluft aus der Druckluftflasche atmen?",
        "answer_1": "Tarierweste",
        "answer_2": "Atemregler",
        "answer_3": "Tauchcomputer",
        "answer_4": "Schnorchel",
        "right_answer": 2
    },
    {
        "question": "Welcher Begriff beschreibt das gesundheitliche Problem, dass beim plötzlichen Auftauchen eines Tauchers aus großer Tiefe, auftreten kann?",
        "answer_1": "Dekompressionskrankheit",
        "answer_2": "Taucherohren",
        "answer_3": "Seekrankheit",
        "answer_4": "Wasserlunge",
        "right_answer": 1
    },
    {
        "question": "Welche Farbe dringt unter Wasser am weitesten in die Tiefe, bevor sie verschwindet?",
        "answer_1": "Rot",
        "answer_2": "Gelb",
        "answer_3": "Grün",
        "answer_4": "Blau",
        "right_answer": 4
    },
    {
        "question": "Welche der folgenden Meerestiere steht oft im Ruf, für Taucher gefährlich zu sein, obwohl Angriffe auf Menschen äußerst selten sind?",
        "answer_1": "Delfine",
        "answer_2": "Clownfische",
        "answer_3": "Quallen",
        "answer_4": "Haie",
        "right_answer": 4
    },
    {
        "question": "Was ist die empfohlene maximale Tauchtiefe für einen Open-Water-Taucher gemäß den meisten Tauchorganisationen?",
        "answer_1": "18 Meter",
        "answer_2": "30 Meter",
        "answer_3": "42 Meter",
        "answer_4": "60 Meter",
        "right_answer": 1
    },
    {
        "question": "Welches Gerät wird von Tauchern verwendet, um ihre Auftriebskontrolle während des Tauchgangs zu regulieren, indem sie Luft in und aus einem darin befindlichen Luftkammer",
        "answer_1": "Tauchlampe",
        "answer_2": "Neoprenanzug",
        "answer_3": "Tarierweste",
        "answer_4": "Tauchcomputer",
        "right_answer":  3
    },
    {
        "question": "Welche Tauchtechnik ermöglicht es einem Taucher, ohne Atemgerät auf begrenzter Tiefe zu bleiben, um die Unterwasserwelt zu erkunden?",
        "answer_1": "Freitauchen",
        "answer_2": "Technisches Tauchen",
        "answer_3": "Sporttauchen",
        "answer_4": "Wracktauchen",
        "right_answer": 1
    },
    {
        "question": "In welcher Tiefe sollte bei jedem Tauchgang der Sicherheitsstopp eingelegt werden?",
        "answer_1": "3 Meter",
        "answer_2": "5 Meter",
        "answer_3": "8 Meter",
        "answer_4": "10 Meter",
        "right_answer": 2
    },
    {
        "question": "Welche der folgenden Tauchorganisationen ist eine der bekanntesten und größten weltweit, die Tauchausbildungen und Zertifizierungen anbietet?",
        "answer_1": "TUI (Tauchen und Unterwasserwelt International)",
        "answer_2": "ADTC (Allgemeiner Deutscher Tauch-Club)",
        "answer_3": "SSI (Scuba Schools International)",
        "answer_4": "WDE (We Dive Everywhere)",
        "right_answer": 3
    }
];


let currentQuestion = 0;

let rightQuestions = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
    currentQuestionNumber()
}


//Zeigt die aktuelle Frage + Antworten an.
function showQuestion() {

    if(currentQuestion >= questions.length){
        //show Endscreen
        document.getElementById('endscreen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('quiz-img').style = 'display: none';

        document.getElementById('amount-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    } else { //show next question
    let question = questions[currentQuestion];


    //calculating progress (for progress bar)
    let percent = (currentQuestion +1) / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style= `width: ${percent}%;`;
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


//Prüft, ob Antwort richtig oder falsch ist und gibt "nächste Frage"-Button frei.
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // erhöht Wert von z.b. 0 auf 1 und blendet somit die nächste Frage ein.
    document.getElementById('next-button').disabled = true;
    currentQuestionNumber();
    resetAnswerButton();
    showQuestion();
}

//Entfernt farbliche Markierung von den Antwortfeldern
function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function currentQuestionNumber() {
    document.getElementById('current-number').innerHTML = currentQuestion +1;
}
