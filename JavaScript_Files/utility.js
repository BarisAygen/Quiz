function UI() {
    this.btn_start = document.querySelector(".btn-start"),
    this.btn_next = document.querySelector(".next-btn"),
    this.btn_replay = document.querySelector(".btn-replay"),
    this.btn_quit = document.querySelector(".btn-quit"),
    this.quiz_box = document.querySelector(".quiz-box"),
    this.score_box = document.querySelector(".score-box"),
    this.option_list = document.querySelector(".option-list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_next = document.querySelector(".time-next"),
    this.time_second = document.querySelector(".time-second"),
    this.time_line = document.querySelector(".time-line")
}

UI.prototype.showQuestion = function(question) {
    let ques = `<span>${question.text}</span>`;
    let opts = '';

    for(let answer in question.options) {
        opts += 
            `
                <div class="option"> 
                    <span><b>${answer}</b>: ${question.options[answer]}</span>
                </div>
            `;
    }
    document.querySelector(".question-text").innerHTML = ques;
    this.option_list.innerHTML = opts;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showQuestionNumber = function(queue, total) {
    let tag = `<span class="badge bg-warning ">${queue} / ${total}</span>`;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
}

UI.prototype.showScore = function(total, correctAnswers) {
    let tag = `${correctAnswers}/${total}`;
    document.querySelector(".score-box .score-text").innerHTML = tag;
}