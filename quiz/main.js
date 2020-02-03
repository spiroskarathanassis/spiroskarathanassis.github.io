const questions = questionQuiz.questions; 	// data of JSON file 
const message = document.getElementById('statusMessage');

playerPoints = 0, totalPoints = 0;
currentQuestion = 0, selectedAnswers = 0; 
var type, possibleAnswers,timeStop;
saveAnswers = [];
setNextQuestion();
	
function setNextQuestion() {		
	correctAnswers = questions[currentQuestion].correct_answer;
	corrects = questions[currentQuestion].correct_answer.length;
	questionPoints = questions[currentQuestion].points;
	
	$('#answers').find('button').removeAttr('disabled');
	$('#nextButton').prop('disabled', true);
	message.style.display = "none";
	
	display();
	
	for (let i=0; i<answersLength; i++) {
		document.getElementById('answer' + (i+1)).addEventListener("click", compareAnswers);			
	}
	
	$('#nextButton').unbind('click').bind('click', function () {
		setQuestionFinished();
	});
}	
	
/* ------------- Appear Question, Image and Answers to Player ------------- */
function display() {
	document.getElementById('questionNumber').innerHTML = "Question " + questions[currentQuestion].q_id;
	document.getElementById('title').innerHTML = questions[currentQuestion].title;
	document.getElementById('image').src = questions[currentQuestion].img;

	possibleAnswers = [];
	caption = [];
	type = questions[currentQuestion].question_type;
	if(type == "truefalse") {
		answersLength = 2;
		caption[0] = "True";
		caption[1] = "False";
		possibleAnswers[0] = true;
		possibleAnswers[1] = false;
	} else {
		answersLength = questions[currentQuestion].possible_answers.length;
	}
	
	for (let i=0; i<answersLength; i++) {
		if(type != "truefalse") {
			caption[i] = questions[currentQuestion].possible_answers[i].caption;
			possibleAnswers[i] = questions[currentQuestion].possible_answers[i].a_id;
		}
		let answer = '<button class="answer-btn btn" id="answer' + (i+1) + '">' + caption[i] +'</button>';
		$('#answers').append(answer);
	}
	
	if(type == "mutiplechoice-multiple") {
		$('#title').append(" <b>*</b>");
		$('#title').prop("title", "multiple choice");
	}
}
	
function compareAnswers() {
	var thisElement = document.getElementById(this.id);
	$('#nextButton').removeAttr('disabled');
	
	/* ------------- Set answers ------------- */
	let answer;
	switch(this.id) {
		case "answer1":
			answer = 1;
			break;
		case "answer2":
			answer = 2;
			break;
		case "answer3": 
			answer = 3; 
			break;
		case "answer4": 
			answer = 4; 
			break;	
	}
		
	if(type == "mutiplechoice-multiple") {
		/* ------------- Check if exists ------------- */
		let index = saveAnswers.indexOf(possibleAnswers[answer-1]);
		if(index > -1) {
			saveAnswers.splice(index, 1);
			thisElement.style["background-color"] = "#4c8acf";	
			selectedAnswers--;
		} else {
			saveAnswers[selectedAnswers] = possibleAnswers[answer-1];
			thisElement.style["background-color"] = "#b9bdff";	
			selectedAnswers++;
		}
		var array = saveAnswers.filter(function(element) {
			return element != null;
		});
		saveAnswers = array;
		
		if(selectedAnswers === 0) {
			$('#nextButton').prop('disabled', true);
		}
	} else {
		if(selectedAnswers != 0) {
			var previous = document.getElementsByClassName("active");
			previous[0].className = previous[0].className.replace(" active", "");
		}
		
		thisElement.style["background-color"] = "";	
		this.className += " active";
		saveAnswers[0] = possibleAnswers[answer-1];
		selectedAnswers++;
	}
}
	
function setQuestionFinished() {
	/* ------- Check if Answers match the corrects ------- */
	questionMessage = "Wrong Answer!";

	if(type == "mutiplechoice-multiple") {
		correctAll = 0;
		if(selectedAnswers == corrects) {
			for (let i=0; i<corrects; i++) {
				for (let j=0; j<saveAnswers.length; j++) {
					if(saveAnswers[j] == correctAnswers[i]) {
						correctAll++;
						console.log(correctAll);
					}
				}
			}
		}
		
		if(correctAll == corrects) {
			questionMessage = "Correct Answer.";
			playerPoints += questionPoints;
			console.log("+" + playerPoints + ' of this multiple question');	// testing
		}
	} else {
		if(saveAnswers[0] == correctAnswers) {
			playerPoints += questionPoints; 
			console.log(playerPoints);	// testing 
			questionMessage = "Correct Answer.";
		}
	}
	
	selectedAnswers = 0;
	saveAnswers = [];
	totalPoints += questionPoints;
	displayCorrects();
	stopTime();
}
	
function displayCorrects() {
	message.style.display = "block";
	message.innerHTML = questionMessage;
	
	/* ------------- Coloring Correct Answers ------------- */
	if(questionMessage == "Wrong Answer!") {
		for (let i=0; i<possibleAnswers.length; i++) {
			if(type == "mutiplechoice-multiple") {
				for (let j=0; j<corrects; j++) {
					if(correctAnswers[j] == possibleAnswers[i]) {
						document.getElementById('answer' + (i+1)).style["background-color"] = "green";
					}
				}
			} else {
				if(correctAnswers == possibleAnswers[i]) {
					document.getElementById('answer' + (i+1)).style["background-color"] = "green";
				}
			}
		}
	}
}
	
function stopTime() {
	timeStop = setTimeout(function() {
		/* ----- Check if Questions finished ----- */
		if(currentQuestion == (questions.length - 1)) {
			let results = Math.floor( (playerPoints / totalPoints) * 100 );
			displayResults(results);
		} else {		
			$('#answers').find('button').remove();
			currentQuestion++;
			setNextQuestion();
		}
	}, 3000);
}
	
function displayResults(playerResults) {
	const dataResults = resultsQuiz.results;
	
	$('#questionNumber').remove();
	$('button').remove();
	const title = document.getElementById('title');
	const image = document.getElementById('image');
	const message = document.getElementById('statusMessage');
	const results = document.getElementById('answers');
	
	for (let i=0; i<3; i++) {
		if((playerResults >= dataResults[i].minpoints) && (playerResults <= dataResults[i].maxpoints)) {
			title.innerHTML = dataResults[i].title;
			title.style.cssText = "text-align: center; font-family: fantasy";
			image.src = dataResults[i].img;
			message.style.display = "block";
			message.innerHTML = dataResults[i].message;
			results.innerHTML = "Your score is " + playerResults + "%";
			results.style.cssText = "display: block; color: chocolate; font-size: 0.8em; text-align: center";
		}
	}
}
			
