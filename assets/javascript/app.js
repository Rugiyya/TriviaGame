
var questions = {
	q1: ["What does HTML stand for?"],
	
    q2:["What does CSS stand for?"],
    
    q3:["Inside which HTML element do we put the JavaScript code?"],
    
};
var answers = {
    answers1: [{
		1: "Hypertext Markup Lauguage",
		2: "HyperLink and Text Markup Languges",
		3: "Home Tool markup Launguage"
    }],
    answers2: [{
		1: "Computer Style Sheet",
		2: "Colorful Style Sheets",
		3: "Cascading Style Sheets"
    }],
    answers3: [{
		1: "<script>",
		2: "<javascript>",
		3: "<js>"
    }]

};
// Global vars
var time;
var correctAnswers;
var wrongAnswers;
var interval;
var qCounter = 0;
// Functions
function startGame() {

}

function gamePlay() {
	$(".startBtn").on("click", function() {
        $(".startBtn").hide();
        timeCount();
        quest1();
        chooseCheckAnswer();
		
	});
}


function timeCount(){
    time = 10;
    interval = setInterval(timeRemaining,1000);
    $(".btnContainer").append('<div class="timeRem">' + 'Time Remaining: ' + '<div class="timerCountDown"></div>' + '</div>');
    
}
function timeRemaining(){
    time--;
    $(".timerCountDown").text(time + "  seconds");
    console.log(time);
    if(time === 0){
        console.log("time = " + time);
        clearInterval(interval);
        $("button").remove();
        $(".questionInput").remove();
        disCorAnsw();

    }
}
// Display correct answer counter1 q1 couter2 q2
function disCorAnsw(){
    if(qCounter === 1){
        var newDiv = $("<div class='corAnsw'>");
        correctAnswers = newDiv.text("Time is up" + 'The correct answer is   ' + answers.answers1[0][1]);
        $(".btnContainer").append(correctAnswers);
        setTimeout(function()
        {
            $("div").remove(".corAnsw");
            $("div").remove(".timeRem");
            timeCount();
            quest2();
            chooseCheckAnswer();
        }, 5000);
    }

}
function quest1() {
    qCounter ++;
    // add questions to questionInput div
    $(".btnContainer").append('<div class="questionInput">' + questions.q1 +'</div>');
    // add answers 
    $(".btnContainer").append('<button class="answerVal" value=1>' + answers.answers1[0][1] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers1[0][2] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers1[0][3] + '</button>');
}
function quest2() {
    qCounter ++;
    $(".btnContainer").append('<div class="questionInput">' + questions.q2 +'</div>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers2[0][1] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers2[0][2] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=1>' + answers.answers2[0][3] + '</button>');
}
function quest3() {
    qCounter ++;
    $(".btnContainer").append('<div class="questionInput">' + questions.q3 +'</div>');
    $(".btnContainer").append('<button class="answerVal" value=1>' + answers.answers3[0][1] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers3[0][2] + '</button>');
    $(".btnContainer").append('<button class="answerVal" value=0>' + answers.answers3[0][3] + '</button>');
}
function chooseCheckAnswer(){
    $("button").on("click",function(){
        var checkRightAnswer = $(this).attr("value");
        console.log(checkRightAnswer);
        clearInterval(interval);
        if(checkRightAnswer === 1){
            console.log("Correct");
            $("button").remove();
            $(".questionInput").remove();
        }
        else{
            $("button").remove();
            $(".questionInput").remove();
        }
    });
}
gamePlay();