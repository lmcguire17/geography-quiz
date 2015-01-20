$(document).ready(function () {

	//Define the Programs Variables.
	var pos = 0,
	    test, 
	    test_status,
	    choice,
	    choices, 
	    correctAnswers = ['A','C', 'D', 'B', 'D'],
	    correct = 0;
	    
	var question1 = new Question('What is the Highest Mountain on Earth (from Sea Level to Top)', 'Mount Everest', 'Kilimanjaro', 'Matterhorn', 'K2');
	var question2 = new Question('Which Country has the Longest Coastline in the World?', 'Russia', 'Australia', 'Canada', 'Indonesia');
	var question3 = new Question("What is the Approximate Size of the Earth's Equator?", '18,641 miles', '12,427 miles', '6214 miles', '24,855 miles');
	var question4 = new Question('What is the Longest River in South America?', 'Madeira', 'Amazon', 'Parana', 'Araguaia');
	var question5 = new Question("What is the Earth's Largest Continent by Size?", 'Africa', 'North America', 'Europe', 'Asia');

	var questions = [question1, question2, question3, question4, question5];
	
	
	questions[pos].renderQuestion();

	//Function to select HTML Elements by ID.
	function _(x) {
		return document.getElementById(x);
	}

	//Create the Question Object
	function Question(question, chA, chB, chC, chD, answer) {
		this.question = question;
		this.chA = chA;
		this.chB = chB;
		this.chC = chC;
		this.chD = chD;
		this.answer = answer;

		//Display the Question + Submit Button
		this.renderQuestion = function() {
		
			test = _('test');
			test.innerHTML = "<h1 id='title'>Geography Quiz</h1>"
			test.innerHTML += "<h2 id='quiz-status'> Question " + (pos+1) + " of 5</h2>";
			test.innerHTML += "<h3>" + this.question + "</h3>";
			test.innerHTML += "<span class='fa fa-globe'></span>";
			test.innerHTML += "<input type='radio' id='quiz-choice' name='choices' value='A'>" + "<label>" + this.chA + "</label><br>";
			test.innerHTML += "<input type='radio' id='quiz-choice' name='choices' value='B'>" + "<label>" + this.chB + "</label><br>";
			test.innerHTML += "<input type='radio' id='quiz-choice' name='choices' value='C'>" + "<label>" + this.chC + "</label><br>" 
			test.innerHTML += "<input type='radio' id='quiz-choice' name='choices' value='D'>" + "<label>" + this.chD + "</label><br>";
			test.innerHTML += "<button type='submit' id='btn-save'>" + "Submit Answer";
			test.innerHTML += "<h4 id='current-score'> Current Score: " + correct + " out of " + (pos) + "</h4>";
			
			submitButton = _('btn-save');
			submitButton.addEventListener("click", this.checkAnswer, false);
			}

		//Check the User's Answer 
		this.checkAnswer = function() {
			choices = document.getElementsByName('choices');
			for(var i=0; i<choices.length; i++) {
				if(choices[i].checked) {
					choice = choices[i].value;
				}
			}
			
			if (choice == correctAnswers[pos]) {
				correct++;
			} 
			
			pos++;
			
			if (pos >= questions.length) {
				test.innerHTML = "<h2 id='number-correct'>You got " + correct + " out of 5 Questions Correct!";
				test.innerHTML += "<h3>Do You Want to Play Again?</h3>"
				test.innerHTML += "<button type= 'submit' id='btn-again'>" + "Start Over";

				startOverButton = _('btn-again');
				startOverButton.addEventListener("click", this.startOver, false);
				
			} else {
				
				questions[pos].renderQuestion();
          	}
          	
		
		}

	}

	$('#test').on('click', '#btn-again', function() {
		pos = 0;
		correct = 0;
		questions[pos].renderQuestion();
	})
	
})