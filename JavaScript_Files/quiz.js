function Quiz(questions) {
    this.questions = questions;
    this.index = 0;
    this.correctAnswers = 0;
}

Quiz.prototype.showQuestion = function() {
    return this.questions[this.index];
}