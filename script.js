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
        "answer_1": "Atemregler",
        "answer_2": "Tarierweste",
        "answer_3": "Tauchcomputer",
        "answer_4": "Schnorchel",
        "right_answer": 1
    },
    {
        "question": "Welcher Begriff beschreibt das plötzliche Auftauchen eines Tauchers aus großer Tiefe, das zu gesundheitlichen Problemen führen kann?",
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
        "question": "Welche der folgenden Meerestiere steht oft im Ruf, für Taucher gefährlich zu sein, obwohl Angriffe auf Menschen äußerst selten sind und sie normalerweise scheu sind?",
        "answer_1": "Delfine",
        "answer_2": "Clownfische",
        "answer_3": "Quallen",
        "answer_4": "Haie",
        "right_answer": 4
    },
    {
        "question": "Was ist die empfohlene maximale Tauchtiefe für einen Open-Water-Taucher gemäß den meisten Tauchorganisationen?",
        "answer_1": "20 Meter",
        "answer_2": "30 Meter",
        "answer_3": "40 Meter",
        "answer_4": "50 Meter",
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


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}