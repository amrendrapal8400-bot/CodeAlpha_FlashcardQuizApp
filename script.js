let cards = [
    {question: "What is HTML?", answer: "HyperText Markup Language"},
    {question: "What is CSS?", answer: "Style Sheet Language"},
    {question: "What is JS?", answer: "JavaScript"}
];

let current = 0;

function displayCard() {
    document.getElementById("question").innerText = cards[current].question;
    document.getElementById("answer").innerText = cards[current].answer;
    document.getElementById("answer").style.display = "none";
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function nextCard() {
    current = (current + 1) % cards.length;
    displayCard();
}

function prevCard() {
    current = (current - 1 + cards.length) % cards.length;
    displayCard();
}

function addCard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if (q && a) {
        cards.push({question: q, answer: a});
        alert("Card Added");
function editCard() {
    let newQuestion = prompt("Enter new question:", cards[current].question);
    let newAnswer = prompt("Enter new answer:", cards[current].answer);

    if (newQuestion && newAnswer) {
        cards[current].question = newQuestion;
        cards[current].answer = newAnswer;
        displayCard();
    }
}

function deleteCard() {
    if (cards.length > 1) {
        cards.splice(current, 1);
        current = 0;
        displayCard();
    }
}
    }
}

displayCard();