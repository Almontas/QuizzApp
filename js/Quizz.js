$(document).ready(function () {  

var questions = [
{question: "Who is Zack Morris?",
 choices: ['images/ACslater.jpg','images/CarltonBanks.jpeg','images/ZachMorris.jpg'],
 quesNum: 1,
 correctAns: 2},

 {question: "Who is Corey Matthews?",
 choices: ['images/CoryMatthews.jpeg','images/EdAlonzo.jpg','images/Shawnhunter.jpg'],
 quesNum: 2,
 correctAns: 1},

 ];

 var userAnswer  //THis needs to be looked into
 var counter = 0;
 var score = 0;
 var html_string = '';
 var string4end = ''

//function to loop choices in HTML, updates counter, checks answer

var update_html = function(currentQuestion) {
    // put current question into a variable for convenience.
   
   // put the question string between paragraph tags
   html_string = '<p>' + currentQuestion.question + '</p>';  
   // create an unordered list for the choices
   html_string += '<ul>';
   // loop through the choices array
   for (var j = 0; j < currentQuestion.choices.length; j++) {
      // put the image as a list item
      html_string += '<li><img src="' + currentQuestion.choices[j] + '"></li>';
   }
   html_string += '</ul>';
   $('.setImg').html(html_string);
}

update_html(questions[0]);


$('.setImg li').on('click', function (e) {
   userAnswer = $(this).index();
   checkAnswer();
   counter++;
   update_html(questions[counter]);
   $('#score').html(score);
   //showFinalFeedback(questions[counter);
});

//function to identify right question

function checkAnswer () 
{
   (userAnswer === questions[counter].correctAns)
   {
      score=+100;  
   }
}

function showFinalFeedback ()
{
   if (counter === (questions.length+1))
   {
      string4end = '<p>' + 'You made it here!!!!' + '</p>';  

   }
$('.setImg').html(string4end);
}
//showFinalFeedback(questions[0]);



});