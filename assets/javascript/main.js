console.log("Hello")


var currentQuestion = 0;
var currentAnswer = 0;
var wrongAnswers = 0;
var correctAnswer = 0;
// When the user clicks the button, hide the button  increase the current question.

var justinss_queue = [{
    question: "Whats my name",
    answers: ["One", "two", "three"],
    correctAnswer: "two"
}];
console.log(justinss_queue[currentQuestion].question);
var questions = [{
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Lauguage", "HyperLink and Text Markup Languges", "Home Tool markup Launguage"],
        correctAnswer: "Hypertext Markup Lauguage"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Computer Style Sheet", "Colorful Style Sheets", "Cascading Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Inside which HTML element do we put the JavaScript code?",
        answers: ["<script>", "<javascript>", "<js>"],
        correctAnswer: "<script>"
    }

]

function startGame() {

}
var time = 0;

function gamePlay() {
    $(".startBtn").on("click", function () {
        $(".startBtn").hide();
        currentQuestion++
        timeCount();
        disCorAnsw();
    });
}

function timeCount() {
    time = 10;
    interval = setInterval(timeRemaining, 1000);
    //add a new div to btn container
    $(".btnContainer").append('<div class="timeRem">' + "Time Remaining: " + '<div class="timerCountDown"></div>' + "</div>");
}

function timeRemaining() {
    // decrement time by 1
    time--;
    //prints time rem
    $(".timerCountDown").text(time + "  seconds");
    console.log(time);
    //if reaches 0
    if (time === 0) {
        console.log("time = " + time);
        // stops time at 0
        clearInterval(interval);
        //removes bnt answ
        $("button").remove();
        // removes ques
        $(".questionInput").remove();
        // displays "time is up" if the time reaches 0
        $(".btnContainer").append("<div class ='timeIsUp'> Time is up </div>");
        disCorAnsw();
    }

    function disCorAnsw() {
        $(".btnContainer").append('<div class="questionInput">' + questions[currentQuestion].question + "</div>");
        $(".btnContainer").append('<button class="answerVal" value=1>' + questions[currentQuestion].answers[0] + "</button>");
        $(".btnContainer").append('<button class="answerVal" value=0>' + questions[currentQuestion].answers[1] + "</button>");
        $(".btnContainer").append('<button class="answerVal" value=0>' + questions[currentQuestion].answers[2] + "</button>");
    }


    $("body").on("click", ".answerVal", function () {
        console.log("Clicked")


        current_question++



        disCorAnsw()
    });


}
gamePlay();

// set the timer
//display 1st quest and time remaining 
//user clicks to selects the ansver
// if its right display "correct right answer" 
//if its wrong display "wrong right answ is "
//if time is up display time is up and right answer
// display 2nd quest