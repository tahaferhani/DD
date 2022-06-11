const KEY = "questions3";

// Print button
var printBtn = document.querySelector(".print-btn");
printBtn.addEventListener("click", function () {
    window.print();
});

// On add button click
var btn = document.querySelector("form button[type=button]");
btn.addEventListener("click", function () {
    var form = document.querySelector("form");
    var formData = new FormData(form);

    var question = {};
    formData.forEach((value, key) => (question[key] = value));

    // Question text and minimum two responses are required
    if (!question.text || !question.response1 || !question.response2) return;

    var questions = localStorage.getItem(KEY) || "[]";
    questions = JSON.parse(questions);

    // Edit operation
    if (question.id) {
        var questionIndex = questions.findIndex(item => item.id == question.id);
        questions.splice(questionIndex, 1, question);
        localStorage.setItem(KEY, JSON.stringify(questions));
    }
    // Else new question will be added
    else {
        question.id = new Date().getTime();
        questions.push(question);
        localStorage.setItem(KEY, JSON.stringify(questions));
    }

    form.reset();
    generateQuestions();
});

// On form reseted
document.querySelector("form").addEventListener("reset", function () {
    document.querySelector("form input[type=hidden]").value = "";
    document.querySelector("form button[type=button]").innerHTML = "Ajouter";
});

// Handle questions edit button inside print area
function attachEditEvents() {
    var editButtons = document.querySelectorAll(".question .edit");
    editButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelector("form").reset();
            document.querySelector("form button[type=button]").innerHTML = "Modifier";

            var id = this.parentElement.getAttribute("data-id");
            var questions = JSON.parse(localStorage.getItem(KEY));
            var question = questions.find(item => item.id == id);

            Object.keys(question).forEach(key => {
                var input = document.querySelector(`[name=${key}]`);
                if (input.getAttribute("type") == "checkbox") document.querySelector(`[name=${key}]`).checked = question[key];
                else document.querySelector(`[name=${key}]`).value = question[key];
            });
        });
    });
}

// Handle questions delete button inside print area
function attachDeleteEvents() {
    var deleteButtons = document.querySelectorAll(".question .remove");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            if (!confirm("Êtes-vous sur de vouloir supprimer cette question ?")) return;

            var id = this.parentElement.getAttribute("data-id");
            var questions = JSON.parse(localStorage.getItem(KEY));
            questions = questions.filter(item => item.id != id);

            localStorage.setItem(KEY, JSON.stringify(questions));
            generateQuestions();
        });
    });
}

// Generate already stored questions
generateQuestions();
// Handle and generate questions in  print area
function generateQuestions() {
    var questionsContainer = document.querySelector(".questions");

    var questions = localStorage.getItem(KEY) || "[]";
    questions = JSON.parse(questions);

    questionsContainer.innerHTML = "";
    questions.forEach((question, index) => {
        question.text = question.text.replace(/\*\*([^*]+)\*\*/g, "<code>$1</code>");
        question.text = question.text.replace(/\n/g, "<br>");

        var questionHtml = document.createElement("div", { class: "question" });
        questionHtml.innerHTML = `
            <div class="question" data-id="${question.id}">
                <label class="question-text"><b>${("0" + (index + 1)).slice(-2)}</b>${question.text}</label>
                <ul class="${question.horizontal ? " horizontal" : ""} ${question.multi ? " multi" : ""}">
                    <li>${question.response1}</li>
                    <li>${question.response2}</li>
                    <li>${question.response3}</li>
                    <li>${question.response4}</li>
                </ul>
                <button class="edit">Modifier</button>
                <button class="remove">✕</button>
            </div>
        `;
        questionsContainer.appendChild(questionHtml);
    });

    attachEditEvents();
    attachDeleteEvents();
}
