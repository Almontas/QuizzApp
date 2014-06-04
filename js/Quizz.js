$(document).ready(function () {  

var questions = [
{question: "Who is Zach Morris?",
 choices: ['images/ACslater.jpg','images/CarltonBanks.jpeg','images/ZachMorris.jpg'],
 quesNum: 1,
 correctAns: 2},

 {question: "Who is Corey Matthews?",
 choices: ['images/CoryMatthews.jpeg','images/EdAlonzo.jpg','images/Shawnhunter.jpg'],
 quesNum: 2,
 correctAns: 1},

 ];

 var userAnswer = $('quiz-container').onclick().val()  //THis needs to be looked into
 var counter = 0;
 var score = 0;

//function to identify right question

function checkAnswer () 
{
	if (userAnswer === questions[counter].correctAns) 
	{
		score+100;	
	}
}

//function to loop choices put in HTML set up Counter

for (var i = 0; i < questions.length; i++)
{
	//INSERT HTML
	function update_question(question) {
  	// build out new html string dynamically in JS
  	var html_string = '<p>' question.text + '</p><li>' + question[0] + '</li>' //etc
  	// insert the html inside of a div with class name 'question'
  	$('.setImg').html( html_string );
  	counter++;
}

}

});