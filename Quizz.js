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

 var userAnswer  //THis needs to be looked into
 var counter = 0;
 var score = 0;


//function to loop choices in HTML, updates counter, checks answer

for (var i = 0; i < questions.length; i++)
{
	//INSERT HTML
	function update_question(question) {
  	// build out new html string dynamically in JS
  	var html_string = '<p>' question.text + '<li>' + questions.choices[0] + '</li>' //etc
  	// insert the html inside of a div with class name 'question'
  	$('.setImg ul').html(html_string);
  	counter++;
  	checkAnswer();
	}

}

//function to set visibility on and off

$('.setImage li').on('click', function () {
	$(howdoItargetobject?).hide()
}



//function to setOnclic value.

$('.setImage li').on('click', function (e) {
	userAnswer = $(this).index();
}

//function to identify right question

function checkAnswer () 
{
	if (userAnswer === questions[counter].correctAns)///double check this approach 
	{
		score+100;	
	}
}




});