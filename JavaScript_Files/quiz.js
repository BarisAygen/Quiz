let score = 0;

function Question (text, options, correct) {
    this.text = text;
    this.options = options;
    this.correct = correct;
}

Question.prototype.check = function(answer) {
    if(answer === this.correct) {
        score++;
        return true;
    }
    return false;
}

let questions = [
    new Question("1-What year did the movie La La Land come out?", {a: "2016", b: "2014", c: "2018", d: "2013"}, "a"),
    new Question("2-Which one is not a guitar brand?", {a: "Ibanez", b: "Gibson", c: "Takamine", d: "Vans"}, "d"),
    new Question("3-Which one is a Turkish name?", {a: "Mirko", b: "Robbert", c: "Hailey", d: "Meral"}, "d"),
    new Question("4-What does Leon drink in the movie?", {a: "Water", b: "Milk", c: "Vodka", d: "Red Wine"}, "b")
]

function Quiz(questions) {
    this.questions = questions;
    this.index = 0;
}

Quiz.prototype.bring = function() {
    return this.questions[this.index];
}

const quiz = new Quiz(questions);
const optionList = document.querySelector(".option-list");
const correction = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrection = '<div class="icon"><i class="fas fa-times"></i></div>';

document.querySelector(".btn-start").addEventListener("click", function() {
    document.querySelector(".quiz-box").classList.add("active");
    show(quiz.bring());
    showQuestionNumber(quiz.index + 1, quiz.questions.length);
    document.querySelector(".next-btn").classList.remove("show");
});

document.querySelector(".next-btn").addEventListener("click", function(){
    if(quiz.questions.length != quiz.index + 1) {
        document.querySelector(".quiz-box").classList.add("active");
        quiz.index += 1;
        show(quiz.bring());
        document.querySelector(".next-btn").classList.remove("show");
        showQuestionNumber(quiz.index + 1, quiz.questions.length);
    }
    else {
        document.querySelector(".quiz-box").classList.remove("active");
    }
});

function show(question) {
    let ques = `<span>${question.text}</span>`
    let ops = ``
    for(let answer in question.options) {
        ops += 
        `
            <div class="option">
                <span><b>${answer}</b>: ${question.options[answer]}</span>
            </div>
        `;
    }
    document.querySelector(".question-text").innerHTML = ques;
    optionList.innerHTML = ops;
    const option = optionList.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(opt) {
    let ans = opt.querySelector("span b").textContent;
    let ques = quiz.bring();
    if(ques.check(ans)) {
        opt.classList.add("correct");
        opt.insertAdjacentHTML("beforeend", correction)
    }
    else {
        opt.classList.add("incorrect");
        opt.insertAdjacentHTML("beforeend", incorrection)
    }
    for(let i=0; i<optionList.children.length; i++) {
        optionList.children[i].classList.add("disabled");
    }

    document.querySelector(".next-btn").classList.add("show");
}

function showQuestionNumber(queue, total) {
    let tag = `<span class="badge bg-warning ">${queue} / ${total}</span>`;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
}