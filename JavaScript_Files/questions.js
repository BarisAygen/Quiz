function Question(text, options, correct) {
    this.text = text;
    this.options = options;
    this.correct = correct;
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correct
}

let questions = [
    new Question("1-What year did the movie La La Land come out?", {a: "2016", b: "2014", c: "2018", d: "2013"}, "a"),
    new Question("2-Which one is not a guitar brand?", {a: "Ibanez", b: "Gibson", c: "Takamine", d: "Vans"}, "d"),
    new Question("3-Which one is a Turkish name?", {a: "Mirko", b: "Robbert", c: "Hailey", d: "Meral"}, "d"),
    new Question("4-What does Leon drink in the movie?", {a: "Water", b: "Milk", c: "Vodka", d: "Red Wine"}, "b"),
    new Question("5-Which one is not a \"the Strokes?\" song?", {a: "Ode to the Mets", b: "Chances", c: "Make it with Chu", d: "Someday"}, "c")
];