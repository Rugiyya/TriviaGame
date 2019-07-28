var questions = {
  q1: "What does HTML stand for?",

  q2: "What does CSS stand for?",

  q3: "Inside which HTML element do we put the JavaScript code?"
};
var answers = {
  answers1: {
    1: "Hypertext Markup Lauguage",
    2: "HyperLink and Text Markup Languges",
    3: "Home Tool markup Launguage"
  },
  answers2: {
    1: "Computer Style Sheet",
    2: "Colorful Style Sheets",
    3: "Cascading Style Sheets"
  },
  answers3: {
    1: "<script>",
    2: "<javascript>",
    3: "<js>"
  }
};
var current_question = 0;
// When the user clicks the button, increase the current question.

var justinss_queue = [
  {
    question: "Whats my name",
    answers: ["One", "two", "three"],
    correctAnswer: "two"
  }
];
console.log(justinss_queue[current_question].question);
// Global vars
var time;
var correctAnswers = 0;
var wrongAnswers = 0;
var qCounter = 0;
var interval;
var isCorrect = false;
// Functions
function startGame() {}

function gamePlay() {
  $(".startBtn").on("click", function() {
    $(".startBtn").hide();
    timeCount();
    quest1();
    chooseCheckAnswer();
  });
}

function timeCount() {
  time = 10;
  interval = setInterval(timeRemaining, 1000);
  //add a new div to btn container
  $(".btnContainer").append(
    '<div class="timeRem">' +
      "Time Remaining: " +
      '<div class="timerCountDown"></div>' +
      "</div>"
  );
}
// Prints time rem to the DOM and once it 0 timer stops
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
}
// Display correct answer counter1 q1

function disCorAnsw() {
  // 1st ques
  if (qCounter === 1 && isCorrect === false) {
    wrongAnswers++;
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text(
      "Wrong!" + "The correct answer is   " + answers.answers1[1]
    );
    $(".btnContainer").append(correctAnswers);
    setTimeout(function() {
      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      quest2();
      chooseCheckAnswer();
    }, 5000);
  } else if (qCounter === 1 && isCorrect === true) {
    correctAnswers++;
    // display correct
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text("Correct!");
    $(".btnContainer").append(correctAnswers);

    setTimeout(function() {
      isCorrect = false;
      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      quest2();
      chooseCheckAnswer();
    }, 5000);
  }
  //2nd quest
  else if (qCounter === 2 && isCorrect === false) {
    wrongAnswers++;
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text(
      "Wrong!" + "The correct answer is   " + answers.answers1[1]
    );
    $(".btnContainer").append(correctAnswers);
    setTimeout(function() {
      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      quest3();
      chooseCheckAnswer();
    }, 5000);
  } else if (qCounter === 2 && isCorrect === true) {
    correctAnswers++;
    // display correct
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text("Correct!");
    $(".btnContainer").append(correctAnswers);

    setTimeout(function() {
      isCorrect = false;

      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      quest3();
      chooseCheckAnswer();
    }, 5000);
  }
  // 3rd quest
  else if (qCounter === 3 && isCorrect === false) {
    wrongAnswers++;
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text(
      "Wrong!" + "The correct answer is   " + answers.answers1[1]
    );
    $(".btnContainer").append(correctAnswers);
    setTimeout(function() {
      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      chooseCheckAnswer();
    }, 5000);
  } else if (qCounter === 3 && isCorrect === true) {
    correctAnswers++;
    // display correct
    var newDiv = $("<div class='corAnsw'>");
    correctAnswers = newDiv.text("Correct!");
    $(".btnContainer").append(correctAnswers);

    setTimeout(function() {
      isCorrect = false;

      $("div").remove(".corAnsw");
      $("div").remove(".timeRem");
      $("div").remove(".timeIsUp");

      timeCount();
      chooseCheckAnswer();
    }, 5000);
  }
}
function show_question(question) {
  console.log(question);
}
function quest1(question) {
  qCounter++;
  // add questions to questionInput div
  $(".btnContainer").append(
    '<div class="questionInput">' + questions.q1 + "</div>"
  );
  // add answers
  $(".btnContainer").append(
    '<button class="answerVal" value=1>' + answers.answers1[1] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers1[2] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers1[3] + "</button>"
  );
}
function quest2() {
  qCounter++;
  $(".btnContainer").append(
    '<div class="questionInput">' + questions.q2 + "</div>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers2[1] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers2[2] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=1>' + answers.answers2[3] + "</button>"
  );
}
function quest3() {
  qCounter++;
  $(".btnContainer").append(
    '<div class="questionInput">' + questions.q3 + "</div>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=1>' + answers.answers3[1] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers3[2] + "</button>"
  );
  $(".btnContainer").append(
    '<button class="answerVal" value=0>' + answers.answers3[3] + "</button>"



    );
}
function chooseCheckAnswer() {
  $("button").on("click", function() {
    //gets the value attr of which ever button is clicked
    var checkRightAnswer = $(this).attr("value");
    console.log(checkRightAnswer);
    // stops the time when a anw is selected
    clearInterval(interval);
    // if the attr value of check ans is = value one
    if (checkRightAnswer === 1) {
      console.log("Correct");
      //remove button answers
      // $("button").remove();
      // //removes ques
      // $(".questionInput").remove();
      $(".btnContainer").empty();
      $(".questionInput").empty();
    } else {
      $(".btnContainer").empty();
      $(".questionInput").empty();
    }
    disCorAnsw();
  });
}
gamePlay();
show_question(justinss_queue[current_question]);
