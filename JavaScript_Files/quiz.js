function Question (text, options, correct) {
    this.text = text;
    this.options = options;
    this.correct = correct;
}

Question.prototype.check = function(answer) {
    return answer === this.correct;
}

let q1 = new Question("Which one is the biggest animal?", {a: "African Elephant", b: "Blue Whale", c: "Polar Bear", 
d: "Hippopotamus"}, "b");

let q2 = new Question("What does 2+2 equals to?", {a: "0", b: "2", c: "4", d: "8"}, "c");

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

document.querySelector("#start-button").addEventListener("click", function() {
    if(quiz.questions.length != quiz.index) {
        console.log(quiz.bring());
        quiz.index += 1;
    }
    else {
        console.log("Quiz is over...");
    }
})