const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTImer(10);
    startTimerLine();
    ui.showQuestion(quiz.showQuestion());
    ui.showQuestionNumber(quiz.index + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function() {
    if (quiz.questions.length != quiz.index + 1) {
        quiz.index += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTImer(10);
        startTimerLine();
        ui.showQuestion(quiz.showQuestion());
        ui.showQuestionNumber(quiz.index + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show");
        ui.time_next.textContent = "Time left"
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.showScore(quiz.questions.length, quiz.correctAnswers);
        ui.time_next.textContent = "Time left"
    }
});

ui.btn_quit.addEventListener("click", function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function(){
    quiz.correctAnswers = 0;
    quiz.index = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let ans = option.querySelector("span b").textContent;
    let ques = quiz.showQuestion();

    if(ques.checkAnswer(ans)) {
        quiz.correctAnswers += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

let counter;

function startTImer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        ui.time_second.textContent = time;
        time--;
        if(time < 0) {
            clearInterval(counter);
            ui.time_next.textContent = "Time is over";
            let correctAnswer = quiz.showQuestion().correct;
            for(let option of ui.option_list.children) {
                if(option.querySelector("span b").textContent === correctAnswer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;

function startTimerLine() {
    let lineWidth = 0;
    counterLine = setInterval(timer, 100);
    function timer() {
        lineWidth += 5;
        ui.time_line.style.width = lineWidth + "px";
        if(lineWidth > 549) {
            clearInterval(counterLine);
        }
    }
}