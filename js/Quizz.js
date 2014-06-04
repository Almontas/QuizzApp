$(document).ready(function () {  

var questions = [
{text: "Who is Zach Morris?",
 choices: ['images/ACslater.jpg','images/CarltonBanks.jpeg','images/ZachMorris.jpg'],
 quesNum: 1,
 correctAns: 2},

 {text: "Who is Corey Matthews?",
 choices: ['images/CoryMatthews.jpeg','images/EdAlonzo.jpg','images/Shawnhunter.jpg'],
 quesNum: 2,
 correctAns: 1},

 ];

 //var userAnswer  //THis needs to be looked into
 //var counter = 0;
 //var score = 0;
 var html_string = '';


//function to loop choices in HTML, updates counter, checks answer

for (var i = 0; i < questions.length; i++)
{
	 // put current question into a variable for convenience.
   var currentQuestion = questions[i];
   // put the question string between paragraph tags
   html_string += '<p>' + currentQuestion.question + '</p>';
   // create an unordered list for the choices
   html_string += '<ul>';
   // loop through the choices array
   for (var j = 0; j < currentQuestion.choices.length; j++) {
      // put the image as a list item
      html_string += '<li><img src="' + currentQuestion.choices[j] + '"></li>';
   }
   html_string += '</ul>';
}

$('.setImg').html(html_string);

//function to set visibility on and off

//$('.setImage li').on('click', function () {
	//$(howdoItargetobject?).hide()
//}



//function to setOnclic value.

//$('.setImage li').on('click', function (e) {
	//userAnswer = $(this).index();
//}

//function to identify right question

//function checkAnswer () 
//{
	//if (userAnswer === questions[counter].correctAns)///double check this approach 
	//{
		//score+100;	
	//}
//}




});