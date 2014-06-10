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

 var userAnswer;
 var counter = 0;
 var score = 0;
 var html_string = '';
 var string4end = '';
  var currentQuestion = questions[counter];

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


$('.setImg li').on('click', function () {
   console.log('button click');
   userAnswer = $(this).index();
   checkAnswer();
   counter++;
   update_html(questions[counter]);
   $('#score').html(score);
   showFinalFeedback();
});

//function to identify right question

function checkAnswer () 
{
   if (userAnswer === questions[counter].correctAns)
   {
      score=+100;  
   }
}

function showFinalFeedback ()
{
   if (counter === (questions.length))

   { 	   	
      string4end = '<p>' + 'You made it here!!!!' + '</p>'; 
      string4end += '<p>' + 'Your score is Score' + '</p>'; 
      if (score===100){string4end += '<p>' + 'You know some tv' + '</p>'}
      if (score===200){string4end += '<p>' + 'Well, awesome work, you answered everything right!' + '</p>'}
      if (score===0){string4end += '<p>' + 'Really? Go watch more TV' + '</p>'}
       $('.setImg').html(string4end);		   	
      }
   

}
//showFinalFeedback();



});